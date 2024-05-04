<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Admin\Event;
use App\Http\Controllers\Controller;
use \Validator;
use Carbon\Carbon;
use App\Models\Admin\Location;
use App\Models\Admin\EventType;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Models\Admin\Events;
use App\Models\Admin\EventCategory;

class EventController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:event-list', ['only' => ['index', 'show']]);
        $this->middleware('permission:event-create', ['only' => ['store']]);
        $this->middleware('permission:event-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:event-delete', ['only' => ['destroy']]);
    }

    public function index(Request $request)
    {
        $search_key = $request->search_key;
        $search_status = $request->search_status;
		
  
		$events = Event::where('is_delete', '0');
        if ($search_key) {
            $events = $events->where('title', 'like', '%' . $search_key . '%');
        } 
        if ($search_status == '1' || $search_status == '0') {
            $events = $events->where('is_active', $search_status);
        }

        $events = $events->orderBy('title', 'asc')->paginate(10);

        if ($request->ajax()) {
            return view('admin.event_management.event.table', compact('events', 'search_key', 'search_status'));
        }

		$events = Event::where('is_delete', '0')->orderBy('id', 'desc')->paginate(10);
        return view('admin.event_management.event.index', compact('events', 'search_key', 'search_status'), ['page_title' => 'Event List']);
    }

    public function create()
    {
        $event_categories = EventCategory::select('id', 'name')->where('is_delete', '0')->orderBy('name', 'asc')->get();

        return view('admin.event_management.event.create', compact('event_categories'), ['page_title' => 'Add Event']);
    }

    public function store(Request $request)
    {
        if(empty($request->tickettype)){
            return redirect()->back()->withErrors(['error' => 'ticket type require']);
        }
        
        if(empty($request->sku)){
                return redirect()->back()->withErrors(['error' => 'Sku must require']);
        }
        
        $existSku = Vclass::where('sku', $request->sku)->first('id');
        if(!empty($existSku)){
        return redirect()->back()->withErrors(['error' => 'Sku already exist']);
        }

        $event = new Event;
        $event->title = $request->title;
        $event->slug = Str::slug($request->title);
        $event->sku = $request->sku;
        $event->short_description = $request->short_description;
        $event->description = $request->description;
        $imag = null;
        $images = array();
        if(!empty($request->file('images'))){
        foreach ($request->file('images') as $image) {
            array_push($images, imageUpload($image, 'backend/admin/images/event_management/events'));
        }}
        if(!empty($images[0])){
            $imag = $images[0];
        }
        $event->images = $images;
        $event->number_of_tickets = $request->number_of_tickets;
        // $event->ticket_price = $request->ticket_price;
        $event->location_iframe = $request->location_iframe;
        $event->location = $request->location;
        if ($request->has('single_day')) {
            $event->date = $request->date;
			$event->start_date = $request->date;
            $event->single_day = '1';
        } else {
			$event->date = $request->start_date;
            $event->start_date = $request->start_date;
            $event->end_date = $request->end_date;
            $event->single_day = '0';
        }
        if (!$request->has('all_day')) {
            $event->start_time = $request->start_time;
            $event->end_time = $request->end_time;
            $event->all_day = '0';
        } else {
            $event->all_day = '1';
        }
        $event->category_ids = $request->category_ids;
        $event->seo_title = $request->seo_title;
        $event->seo_description = $request->seo_description;
        if ($event->save()) {
            if(!empty($request->tickettype)){
            foreach ($request->tickettype as $i => $event_type) {

                $eventType = new EventType();
                $eventType->event_id = $event->id;
                // $eventType->bigcommerce_id = 0;
                $eventType->ticket_price = $request->ticket_price[$i];
                $eventType->title = $event_type;
                $eventType->tag = $request->ticket_tag[$i];
                $eventType->name = substr($request->title, 0, 150) . ' - ' . $event_type;


                // $eventType->bigcommerce_id =2;
                // $eventType->save();
                $field['name'] = $eventType->name;
                $field['sku'] = $request->sku;
                $field['type'] = "physical";
                $field['weight'] = 1;
                $field['price'] = (int) $request->ticket_price[$i];
                $field['custom_url']['url'] = $event->slug . '+' . strtolower($event_type);
                $field['custom_url']['is_customized'] = true;
                $dataa = json_encode($field);

                $curl = curl_init();

                curl_setopt_array($curl, [
                    CURLOPT_URL => "https://api.bigcommerce.com/stores/".env('BIG_STORE')."/v3/catalog/products",
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => "",
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 30,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => "POST",
                    CURLOPT_SSL_VERIFYPEER => false,
                    CURLOPT_POSTFIELDS => $dataa,
                    CURLOPT_HTTPHEADER => [
                        "Accept: application/json",
                        "Content-Type: application/json",
                        "X-Auth-Token: ".env('BIGCOMMERCE_TOKEN')
                    ],
                ]);

                $response = curl_exec($curl);
                $err = curl_error($curl);

                curl_close($curl);

                if ($err) {
                    dd($err);
                    echo "cURL Error #:" . $err;
                } else {
                    $result = json_decode($response, true);
                }
                $eventType->bigcommerce_id = $result['data']['id'];

                if ($result['data']['id']) {
                    if ($imag && $eventType->bigcommerce_id) {
                        $field1['is_thumbnail'] = true;
                        $field1['image_url'] =  url('backend/admin/images/event_management/events/'.$imag);
                        $dataa1 = json_encode($field1);

                        $curl = curl_init();

                        curl_setopt_array($curl, [
                            CURLOPT_URL => "https://api.bigcommerce.com/stores/".env('BIG_STORE')."/v3/catalog/products/".$result['data']['id']. "/images",
                            CURLOPT_RETURNTRANSFER => true,
                            CURLOPT_ENCODING => "",
                            CURLOPT_MAXREDIRS => 10,
                            CURLOPT_TIMEOUT => 30,
                            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                            CURLOPT_CUSTOMREQUEST => "POST",
                            CURLOPT_SSL_VERIFYPEER => false,
                            CURLOPT_POSTFIELDS => $dataa1,
                            CURLOPT_HTTPHEADER => [
                                "Accept: application/json",
                                "Content-Type: application/json",
                                "X-Auth-Token: ".env('BIGCOMMERCE_TOKEN')
                            ],
                        ]);

                        $response1 = curl_exec($curl);
                        $err = curl_error($curl);

                        curl_close($curl);

                        if ($err) {
                            return redirect()->route('admin.events.index')->with('error', $err);
                            // echo "cURL Error #:" . $err;
                        } else {
                            $result1 = json_decode($response1, true);
							if(!empty($result1['data']['id'])){
                            	$eventType->bigcommerce_image_id = $result1['data']['id'];
							}
                        }
                    }

                    $eventType->save();
                }
            }}
        }

        return redirect()->route('admin.events.index')->with('success', 'Event Added Successfully!');
    }

    public function show(Request $request, Event $event)
    {
        return view('admin.event_management.event.show', compact('event'), ['page_title' => 'Show Event']);
    }

    public function edit(Event $event)
    {
        $event_categories = EventCategory::select('id', 'name')->where('is_delete', '0')->orderBy('name', 'asc')->get();
        $eventyype = EventType::where('event_id', $event->id)->orderBy('name', 'asc')->get();

        return view('admin.event_management.event.edit', compact('event', 'event_categories', 'eventyype'), ['page_title' => 'Edit Event']);
    }

    public function update(Request $request, Event $event)
    {
        $event->title = $request->title;
        $event->slug = Str::slug($request->title);
        $event->sku = $request->sku;
        $event->short_description = $request->short_description;
        $event->description = $request->description;
        $imag = null;
        
        if ($request->has('images')) {
            $images = array();
            foreach ($request->file('images') as $image) {
                array_push($images, imageUpload($image, 'backend/admin/images/event_management/events'));
                $imag = $image;
            }
            if(!empty($request->oldImages)){
                $event->images = array_merge($request->oldImages,$images);
            }else{
                $event->images = $images;
            }
          
        }
        $event->number_of_tickets = $request->number_of_tickets;
        // $event->ticket_price = $request->ticket_price;
        $event->location_iframe = $request->location_iframe;
        $event->location = $request->location;
        if ($request->has('single_day')) {
            $event->date = $request->date;
            $event->single_day = '1';
        } else {
            $event->start_date = $request->start_date;
            $event->end_date = $request->end_date;
            $event->single_day = '0';
        }
        if (!$request->has('all_day')) {
            $event->start_time = $request->start_time;
            $event->end_time = $request->end_time;
            $event->all_day = '0';
        } else {
            $event->all_day = '1';
        }
        $event->category_ids = $request->category_ids;
        $event->seo_title = $request->seo_title;
        $event->seo_description = $request->seo_description;
        if ($event->save() && !empty($request->tickettype)) {
            foreach ($request->tickettype as $i => $event_type) {

                if (!$request->bigcomm[$i]) {

                    $eventType = new EventType();
                    $eventType->event_id = $event->id;
                    $eventType->ticket_price = $request->ticket_price[$i];
                    $eventType->title = $event_type;
                    $eventType->tag = $request->ticket_tag[$i];
                    $eventType->name = substr($event->title, 0, 150) . ' - ' . $event_type;


                    // $eventType->bigcommerce_id =2;
                    // $eventType->save();
                    $field['name'] = $eventType->name;
                    $field['type'] = "physical";
                    $field['weight'] = 1;
                    $field['price'] = (int) $request->ticket_price[$i];
                    $field['custom_url']['url'] = $event->slug . '+' . strtolower($event_type);
                    $field['custom_url']['is_customized'] = true;

                    $dataa = json_encode($field);

                    $curl = curl_init();

                    curl_setopt_array($curl, [
                        CURLOPT_URL => "https://api.bigcommerce.com/stores/".env('BIG_STORE')."/v3/catalog/products",
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_ENCODING => "",
                        CURLOPT_MAXREDIRS => 10,
                        CURLOPT_TIMEOUT => 30,
                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                        CURLOPT_CUSTOMREQUEST => "POST",
                        CURLOPT_SSL_VERIFYPEER => false,
                        CURLOPT_POSTFIELDS => $dataa,
                        CURLOPT_HTTPHEADER => [
                            "Accept: application/json",
                            "Content-Type: application/json",
                            "X-Auth-Token: ".env('BIGCOMMERCE_TOKEN')
                        ],
                    ]);

                    $response = curl_exec($curl);
                    $err = curl_error($curl);

                    curl_close($curl);

                    if ($err) {
                        // dd($err);
                        // echo "cURL Error #:" . $err;
                    } else {
                        $result = json_decode($response, true);
                    }

                    $eventType->bigcommerce_id = $result['data']['id'];
                    if ($imag && $eventType->bigcommerce_id) {
                        $field1['image_file'] = $imag;
                        $dataa1 = json_encode($field1);

                        $curl = curl_init();

                        curl_setopt_array($curl, [
                            CURLOPT_URL => " https://api.bigcommerce.com/stores/".env('BIG_STORE')."/v3/catalog/products/" . $eventType->bigcommerce_id . "/images",
                            CURLOPT_RETURNTRANSFER => true,
                            CURLOPT_ENCODING => "",
                            CURLOPT_MAXREDIRS => 10,
                            CURLOPT_TIMEOUT => 30,
                            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                            CURLOPT_CUSTOMREQUEST => "POST",
                            CURLOPT_SSL_VERIFYPEER => false,
                            CURLOPT_POSTFIELDS => $dataa1,
                            CURLOPT_HTTPHEADER => [
                                "Accept: application/json",
                                "Content-Type: application/json",
                                "X-Auth-Token: ".env('BIGCOMMERCE_TOKEN')
                            ],
                        ]);

                        $response1 = curl_exec($curl);
                        $err = curl_error($curl);

                        curl_close($curl);

                        if ($err) {
                            // dd($err);
                            // echo "cURL Error #:" . $err;
                        } else {
                            $result2 = json_decode($response1, true);
                            $eventType->bigcommerce_image_id = $result2['data']['id'];
                        }
                    }

                    $eventType->save();

                } else {
                    $eventType = EventType::where('bigcommerce_id', $request->bigcomm[$i])->first();
                    $eventType->event_id = $event->id;
                    $eventType->ticket_price = $request->ticket_price[$i];
                    $eventType->title = $event_type;
                    $eventType->tag = $request->ticket_tag[$i];
                    $eventType->name = substr($event->title, 0, 150) . ' - ' . $event_type;
                    $eventType->save();

                    // $eventType->bigcommerce_id =2;
                    // $eventType->save();
                    $field['name'] = $eventType->name;
                    $field['type'] = "physical";
                    $field['weight'] = 1;
                    $field['price'] = (int) $request->ticket_price[$i];
                    $field['custom_url']['url'] = $event->slug . '+' . strtolower($event_type);
                    $field['custom_url']['is_customized'] = true;
                    $dataa = json_encode($field);

                    $curl = curl_init();

                    curl_setopt_array($curl, [
                        CURLOPT_URL => "https://api.bigcommerce.com/stores/".env('BIG_STORE')."/v3/catalog/products/" . $request->bigcomm[$i],
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_ENCODING => "",
                        CURLOPT_MAXREDIRS => 10,
                        CURLOPT_TIMEOUT => 30,
                        CURLOPT_SSL_VERIFYPEER => false,
                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                        CURLOPT_CUSTOMREQUEST => "PUT",
                        CURLOPT_POSTFIELDS => $dataa,
                        CURLOPT_HTTPHEADER => [
                            "Accept: application/json",
                            "Content-Type: application/json",
                            "X-Auth-Token: ".env('BIGCOMMERCE_TOKEN')
                        ],
                    ]);

                    $response = curl_exec($curl);
                    $err = curl_error($curl);

                    curl_close($curl);

                    if ($err) {
                        echo "cURL Error #:" . $err;
                    } else {
                        //  $result = json_decode($response, true);
                    }

                    $field2['image_url '] = $imag;


                    $dataa2 = json_encode($field2);

                    $curl = curl_init();

                    curl_setopt_array($curl, [
                        CURLOPT_URL => "https://api.bigcommerce.com/stores/".env('BIG_STORE')."/v3/catalog/products/" . $request->bigcomm[$i] . "/images/" . $eventType->bigcommerce_image_id,
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_ENCODING => "",
                        CURLOPT_MAXREDIRS => 10,
                        CURLOPT_TIMEOUT => 30,
                        CURLOPT_SSL_VERIFYPEER => false,
                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                        CURLOPT_CUSTOMREQUEST => "PUT",
                        CURLOPT_POSTFIELDS => $dataa2,
                        CURLOPT_HTTPHEADER => [
                            "Accept: application/json",
                            "Content-Type: application/json",
                            "X-Auth-Token: ".env('BIGCOMMERCE_TOKEN')
                        ],
                    ]);

                    $response = curl_exec($curl);
                    $err = curl_error($curl);

                    curl_close($curl);
                }
            }
        }

        return redirect()->route('admin.events.index')->with('success', 'Event Updated Successfully!');
    }

    public function destroy(Event $event)
    {
        $event->is_delete = '1';

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://api.bigcommerce.com/stores/".env('BIG_STORE')."/v3/catalog/products/" . $event->bigcommerce_id,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "DELETE",
            CURLOPT_HTTPHEADER => [
                "Accept: application/json",
                "Content-Type: application/json",
                "X-Auth-Token: ".env('BIGCOMMERCE_TOKEN')
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {

        }

        $event->save();

        return back()->with('error', 'Event Deleted Successfully!');
    }

    public function toggleActive($id)
    {
        $event = Event::findOrFail($id);
        $event->update(['is_active' => !$event->is_active]);

        return response()->json(['status' => 'success', 'is_active' => $event->is_active , 'id' => $event->id]);
    }

    public function checkProductName(Request $request)
    {
        $existing = Event::where(['title' => $request->title, 'is_delete' => '0'])->first();
        if ($existing) {
            return response()->json(false);
        } else {
            return response()->json(true);
        }
    }
}
