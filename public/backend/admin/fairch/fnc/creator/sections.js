web.SectionsGroup["STANDARD SECTIONS"] = ["Slider/Slider-3","hero/centered-section","hero/center-aligned-with-image","hero/left-aligned-with-image", 
"hero/right-aligned-with-image","hero/border-with-cropped-image","bootstrap4/photo-gallery","bootstrap4/one-column", "bootstrap4/two-column-section", 
"bootstrap4/three-column-section", "Ads/slideAds", "demo/text-img","demo/img-text","demo/abt", "demo/im2col","demo/Quote","demo/2ct","demo/3card","demo/faq", 
"demo/creative","demo/digital","demo/team","demo/3colcard","demo/abtco","demo/ln", "demo/services","demo/abtgood", "demo/webban","demo/serlist", 
"demo/perfect", "demo/gold"];








web.Sections.add("Slider/Slider-3", {
  name: "Hero Slider",
  image: window.mediaPath + "/sys/slider/slider-3.jpg",
  html: `<section class="slider3" data-name="slider3"><div id="carouselExampleCaptions" class="carousel sslide" data-bs-ride="false">
  <style>
  .slider3 .carousel-item{
		position:relative;
   }
  .slider3 .carousel-item .carousel-caption {
		position: absolute;
		right: 15%;
		bottom: 1.25rem;
		left: 15%;
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
		color: #fff;
		text-align: center;
	}

.carousel-control-next, .carousel-control-prev {
    top: 50% !important;
    width: 80px !important;;
    height: 80px!important;;
 
}
  </style>
  <div class="carousel-inner slider-3">
    <div class="carousel-item active" data-id="1">
      <img src="../../../sliders/slide1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-md-block">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
        <a class="btn" href="#">Explore</a>  
      </div>
    </div>
    <div class="carousel-item" data-id="2">
      <img src="../../../sliders/slide2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-md-block">
        <h1>Second slide label</h1>
        <p>Some representative placeholder content for the second slide.</p>
        <a class="btn" href="#">Explore</a>  
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></section>
`,  properties: [{
	id: "slider3-"+ Math.floor((Math.random() * 100) + 1),
  name: "slides",
  key: "class",
  inline:false,
  htmlAttr: "header",
  inputtype: TextareaInput,
  data:{
    rows:20,
  }
}]
});



web.Sections.add("Ads/slideAds", {
  name: "Ads Section",
  image: window.mediaPath + "/sys/slider/ads.png",
  html: `<section class="Ads" data-name="slider3a"><div id="carouselExampleCaptions" class="carousel sslide carousel-fade" data-bs-ride="carousel">
  <style>
  .slider3 .carousel-item{
		position:relative;
   }
  .slider3 .carousel-item .carousel-caption {
		position: absolute;
		right: 15%;
		bottom: 1.25rem;
		left: 15%;
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
		color: #fff;
		text-align: center;
	}

.carousel-control-next, .carousel-control-prev {
    top: 50% !important;
    width: 80px !important;;
    height: 80px!important;;
 
}
  </style>
  <div class="carousel-inner slider-3">
    <div class="carousel-item active" data-id="1">
      <img src="../../../ads/ad1.webp" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-id="2">
      <img src="../../../ads/ad2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
</div></section>
`,  properties: [{
	id: "Ads-"+ Math.floor((Math.random() * 100) + 1),
  name: "slides",
  key: "class",
  inline:false,
  htmlAttr: "header",
  inputtype: TextareaInput,
  data:{
    rows:20,
  }
}]
});




web.Sections.add("hero/centered-section", {
  name: "Centered Section",
  image: "../../../backend/admin/media/sys/centered-section.png",
  html: `<section>
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="../../../backend/admin/media/logo.png" alt="Logo" width="160" height="57">
    <h1 class="display-5 fw-bold">Centered Section</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="#" class="btn btn-primary btn-lg px-4 gap-3">About Us</a>
        <a href="#" class="btn btn-outline-secondary btn-lg px-4">Contact Us</a>
      </div>
    </div>
  </div></section>
`
});

web.Sections.add("hero/center-aligned-with-image", {
  name: "Centered aligned with image",
  image: "../../../backend/admin/media/sys/center-aligned-with-image.png",
  html: `<section><div style="magin-bottom:20%;" class="px-4 pt-5 my-5 text-center border-bottom __web-inspector-hide-shortcut__">
  <h1 class="display-4 fw-bold">Centered aligned with image</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    <a href="#" class="btn btn-primary btn-lg px-4 me-sm-3">About Us</a>
    <a href="#" class="btn btn-outline-secondary btn-lg px-4">Contact Us</a>
    </div>
  </div>
  <div class="overflow-hidden" style="max-height: 30vh;">
    <div class="container px-5">
      <img src="../../../backend/admin/media/sys/snippets-sample-1.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
    </div>
  </div>
</div></section>`
});

web.Sections.add("hero/left-aligned-with-image", {
  name: "Left aligned with image",
  image: "../../../backend/admin/media/sys/left-aligned-with-image.png",
  html: `<section><div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img src="../../../backend/admin/media/sys/snippets-sample.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold  lh-1 mb-3">Left aligned with image</h1>
      <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      <a href="#" class="btn btn-primary btn-lg px-4 me-md-2">About Us</a>
      <a href="#" class="btn btn-outline-secondary btn-lg px-4">Contact Us</a>
      </div>
    </div>
  </div>
</div></section>`
});

web.Sections.add("hero/right-aligned-with-image", {
  name: "Right aligned with image",
  image: "../../../backend/admin/media/sys/right-aligned-with-image.png",
  html: `<section><div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold  lh-1 mb-3">Right aligned with image</h1>
      <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      <a href="#" class="btn btn-primary btn-lg px-4 me-md-2">About Us</a>
      <a href="#" class="btn btn-outline-secondary btn-lg px-4">Contact Us</a>
      </div>
    </div>
    <div class="col-10 col-sm-8 col-lg-6">
      <img src="../../../backend/admin/media/sys/snippets-sample-2.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
    </div>
  </div>
</div></section>`
});


web.Sections.add("hero/border-with-cropped-image", {
  name: "Border With Cropped Image",
  image: "../../../backend/admin/media/sys/border-with-cropped-image.png",
  html: `<section><div style="position:relative;bottom:50px;"><div class="container my-5 __web-inspector-hide-shortcut__">
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="display-4 fw-bold lh-1">Border With Cropped Image</h1>
      <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <a href="#" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">About Us</a>
      <a href="#" class="btn btn-outline-secondary btn-lg px-4">Contact Us</a>
      </div>
    </div>
    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img class="rounded-lg-3" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample" width="800">
    </div>
  </div>
</div>
</div>
</section>`
});





web.Sections.add("bootstrap4/photo-gallery", {
    name: "Photo Gallery",
    image: window.mediaPath + "/sys/photo-gallery.png",  
	dragHtml: '<img src="' + web.baseUrl + 'icons/product.png">',    
    html: `
<section data-name="photo-gallery">    
<div class="container">

  <h1 class="font-weight-light text-center text-lg-left mb-4">Photo Gallery</h1>

  <div class="row text-center text-lg-left">

    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample" />
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample" />
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample" />
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample" />
          </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample" />
          </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample" />
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample" />
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample" />
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample" />
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample" />
          </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample" />
          </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample" />
      </a>
    </div>
  </div>

</div>
</section>
`,
});   





web.Sections.add("bootstrap4/one-column", {
  name: "One Column Layout",
  dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">',  
  image: window.mediaPath + "/sys/one-column-section.png",      
  html:`
<section data-name="one-column">    
  <div class="container">

    <!-- Page Heading -->
    <h1 class="my-4">One Column Layout</h1>

    <!-- /.row start -->
    <div class="row">
      <div class="col-md-7">
        <a href="#"><img class="img-fluid rounded mb-3 mb-md-0" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample"></a>
      </div>
      <div class="col-md-5">
        <h3>Why do we use it</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a class="btn btn-primary" href="#">Read More</a>
      </div>
    </div>
    <!-- /.row end -->

    <hr>

    <!-- /.row start -->
    <div class="row">
      <div class="col-md-7">
        <a href="#"><img class="img-fluid rounded mb-3 mb-md-0" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      </div>
      <div class="col-md-5">
        <h3>Why do we use it</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a class="btn btn-primary" href="#">Read More</a>
      </div>
    </div>
    <!-- /.row end -->

    <hr>

    <!-- /.row start -->
    <div class="row">
      <div class="col-md-7">
        <a href="#"><img class="img-fluid rounded mb-3 mb-md-0" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      </div>
      <div class="col-md-5">
        <h3>Why do we use it</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a class="btn btn-primary" href="#">Read More</a>
      </div>
    </div>
    <!-- /.row end -->

  </div>
</section>    
`,
});



web.Sections.add("bootstrap4/two-column-section", {
  name: "Two Column Layout",
  dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">', 
  image: window.mediaPath + "/sys/two-column-section.png",       
  html:`
<section data-name="two-column-section">    
<div class="container">

<!-- Page Heading -->
<h1 class="my-4">Two Column Layout</h1>

<div class="row">
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</div>
<!-- /.row -->

</div>
</section>
`,
});

web.Sections.add("bootstrap4/three-column-section", {
  name: "Three Column Layout",
dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">',  
image: window.mediaPath + "/sys/three-column-section.png",      
  html:`
<section data-name="three-column-section">    
<div class="container">
<!-- Page Heading -->
<h1 class="my-4">Three Column Layout</h1>
<div class="row">
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys//snippets-sample.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" class="text-decoration-none">Why do we use it</a>
        </h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</div>
<!-- /.row -->
</div>
</section>`,
});




web.Sections.add("demo/text-img", {
  name: "RI section",
  image: "../../../backend/admin/media/sys/d1.jpg",
  html: `<section>
  <div class="container g-pt-100 g-pb-70">
      
            <div class="row justify-content-between">
              <div class="col-lg-6 g-mb-30">
                <em class="g-color-gray-light-v5 g-font-size-120 g-pos-abs g-top-minus-40 g-left-minus-15 g-z-index-minus-1">
                    “
                  </em>
                <blockquote class="lead g-font-style-italic g-line-height-2 g-pl-30 g-mb-30">I am an ambitious workaholic, but apart from that, pretty simple person. Understanding who you are and what you want is my strategy for your brand. I am always figuring out ways to capture your vision, so people can get on board.</blockquote>
                <h4 class="h5 g-mb-0">— Daniel Ramirez</h4>
                <span class="d-block g-color-gray-dark-v4">Designer</span>
              </div>
              <div class="col-lg-5">
                <img class="img-fluid w-100" src="../../../backend/admin/media/img-temp/img1.jpg" alt="Image Description">
                
              </div>
            </div>
            </div>
            </section>
`
});

web.Sections.add("demo/img-text", {
  name: "IR Section",
  image: "../../../backend/admin/media/sys/d2.jpg",
  html: `<section>
  <div class="container g-pt-100 g-pb-70">
      
             
  <hr class="g-brd-gray-light-v4 g-my-80">

  <div class="row justify-content-between">
    <div class="col-lg-5 g-mb-30">
      <img class="img-fluid w-100" src="../../../backend/admin/media/img-temp/img1.jpg" alt="Image Description">
    </div>
    <div class="col-lg-6">
      <em class="g-color-gray-light-v5 g-font-size-120 g-pos-abs g-top-minus-40 g-left-minus-15 g-z-index-minus-1">
          “
        </em>
      <blockquote class="lead g-font-style-italic g-line-height-2 g-pl-30 g-mb-30">I am an ambitious workaholic, but apart from that, pretty simple person. Understanding who you are and what you want is my strategy for your brand. I am always figuring out ways to capture your vision, so people can get on board.</blockquote>
      <h4 class="h5 g-mb-0">— Sara Anderson</h4>
      <span class="d-block g-color-gray-dark-v4">Developer</span>
    </div>
  </div>
</div>
</section>
`
});


web.Sections.add("demo/abt", {
  name: "About Section",
  image: "../../../backend/admin/media/sys/d3.jpg",
  html: `
  <section class="g-bg-gray-light-v5 g-py-100">
      <div class="container">
        <div class="row justify-content-center g-mb-60">
          <div class="col-lg-7">
            <!-- Heading -->
            <div class="text-center">
              <h2 class="h3 g-color-black text-uppercase mb-2">What people say About Us?</h2>
              <div class="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
              <p class="lead mb-0">We are a creative studio focusing on culture, luxury, editorial &amp; art. Somewhere between sophistication and simplicity.</p>
            </div>
            <!-- End Heading -->
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 g-mb-30">
            <!-- Testimonials -->
            <div class="media g-brd-bottom g-brd-3 g-brd-gray-light-v4 g-brd-primary--hover g-bg-white g-rounded-4 g-transition-0_3 g-pa-20">
              <div class="d-flex mr-4">
                <img class="g-width-70 g-height-70 rounded-circle" src="../../../backend/admin/media/img-temp/img15.jpg" alt="Image description">
              </div>
              <div class="media-body">
                <blockquote class="lead g-mb-15">Hi there purchased a couple of days ago and the site looks great, big thanks to the htmlstream guys, they gave me some great.</blockquote>
                <h4 class="h6 g-font-weight-700 g-mb-0">Emma Smith</h4>
                <em class="g-color-gray-dark-v4 g-font-style-normal g-font-size-13">Customer</em>
              </div>
            </div>
            <!-- End Testimonials -->
          </div>

          <div class="col-lg-6 g-mb-30">
            <!-- Testimonials -->
            <div class="media g-brd-bottom g-brd-3 g-brd-gray-light-v4 g-brd-primary--hover g-bg-white g-rounded-4 g-transition-0_3 g-pa-20">
              <div class="d-flex mr-4">
                <img class="g-width-70 g-height-70 rounded-circle" src="../../../backend/admin/media/img-temp/img15.jpg" alt="Image description">
              </div>
              <div class="media-body">
                <blockquote class="lead g-mb-15">Dear Htmlstream team, I just bought the template some weeks ago. The template is really nice and offers quite a large set of options.</blockquote>
                <h4 class="h6 g-font-weight-700 g-mb-0">Anna Pretty</h4>
                <em class="g-color-gray-dark-v4 g-font-style-normal g-font-size-13">Customer</em>
              </div>
            </div>
            <!-- End Testimonials -->
          </div>

          <div class="col-lg-6 g-mb-30">
            <!-- Testimonials -->
            <div class="media g-brd-bottom g-brd-3 g-brd-gray-light-v4 g-brd-primary--hover g-bg-white g-rounded-4 g-transition-0_3 g-pa-20">
              <div class="d-flex mr-4">
                <img class="g-width-70 g-height-70 rounded-circle" src="../../../backend/admin/media/img-temp/img15.jpg" alt="Image description">
              </div>
              <div class="media-body">
                <blockquote class="lead g-mb-15">Hi there purchased a couple of days ago and the site looks great, big thanks to the htmlstream guys, they gave me some great.</blockquote>
                <h4 class="h6 g-font-weight-700 g-mb-0">Danilla Ut.</h4>
                <em class="g-color-gray-dark-v4 g-font-style-normal g-font-size-13">Customer</em>
              </div>
            </div>
            <!-- End Testimonials -->
          </div>

          <div class="col-lg-6 g-mb-30">
            <!-- Testimonials -->
            <div class="media g-brd-bottom g-brd-3 g-brd-gray-light-v4 g-brd-primary--hover g-bg-white g-rounded-4 g-transition-0_3 g-pa-20">
              <div class="d-flex mr-4">
                <img class="g-width-70 g-height-70 rounded-circle" src="../../../backend/admin/media/img-temp/img15.jpg" alt="Image description">
              </div>
              <div class="media-body">
                <blockquote class="lead g-mb-15">Dear Htmlstream team, I just bought the template some weeks ago. The template is really nice and offers quite a large set of options.</blockquote>
                <h4 class="h6 g-font-weight-700 g-mb-0">Alex Pottorf</h4>
                <em class="g-color-gray-dark-v4 g-font-style-normal g-font-size-13">Customer</em>
              </div>
            </div>
            <!-- End Testimonials -->
          </div>
        </div>
      </div>
    </section>
`
});


web.Sections.add("demo/im2col", {
  name: "Img 2 Col",
  image: "../../../backend/admin/media/sys/d4.jpg",
  html: `

  <section class="container g-pt-100 g-pb-50">
  

    <div class="row">
      <div class="col-lg-6 g-mb-50">
        <img class="img-fluid" src="../../../backend/admin/media/img-temp/img1.png" alt="Image Description">
      </div>
      <div class="col-lg-6">
        <div class="mb-5">
          <p class="g-mb-30">As creatives, it's important that we strive to do work outside of obligation. This lets us stay ahead of the curve for our clients and internal projects.</p>
          <div class="row">
            <div class="col-sm-6">
              <ul class="list-unstyled g-font-size-13 mb-0">
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  Jacks of all. Experts in all.
                </li>
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  It's good to virtually meet you.
                </li>
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  A crew of creative doers.
                </li>
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  Let's create something great.
                </li>
              </ul>
            </div>

            <div class="col-sm-6">
              <ul class="list-unstyled g-font-size-13 mb-0">
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  We're accepting projects today.
                </li>
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  Finding your perfect plan.
                </li>
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  Examples of branding projects.
                </li>
                <li class="d-flex mb-3">
                  <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                  Your brand has a story to tell.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`
});


web.Sections.add("demo/Quote", {
  name: "Quote",
  image: "../../../backend/admin/media/sys/d5.jpg",
  html: `
  <section class="container g-py-100">
        <div class="row justify-content-center">
          <div class="col-lg-9 text-center">
            <blockquote class="u-blockquote-v4 g-color-black g-color-primary--before g-color-primary--after g-font-weight-600 g-font-size-35 g-line-height-1_8 g-mb-50">If you can design one thing
              <span class="g-brd-bottom--dotted g-brd-2 g-brd-primary g-color-primary g-pb-5">you can</span> design everything. Just
              <span class="g-brd-bottom--dotted g-brd-2 g-brd-primary g-color-primary g-pb-5">believe</span> it.
            </blockquote>
            <h4 class="h6 g-font-weight-700 text-uppercase g-mb-0">
                <span class="d-inline-block g-width-40 g-height-2 g-bg-primary g-pos-rel g-top-minus-3 mr-2"></span>
                Kathy Reyes
              </h4>
          </div>
        </div>
      </section>
`
});


web.Sections.add("demo/2ct", {
  name: "2 Col Text",
  image: "../../../backend/admin/media/sys/d6.jpg",
  html: `
  <section>
    <div class="g-bg-secondary">
      <div class="container g-pt-100 g-pb-70">
        <div class="row">
          <div class="col-md-6 g-mb-30">
            <p class="lead">The time has come to bring those ideas and plans to life. This is where we really begin to visualize your napkin sketches and make them into beautiful pixels. We get it, you're busy and it's important that someone keeps up with marketing and
              driving people to your brand. We've got you covered. Whether through commerce or just an experience to tell your brand's story, the time has come to start using development languages that fit your projects needs. Now that your brand is all
              dressed up and ready to party.</p>
          </div>

          <div class="col-md-6 g-mb-30">
            <p class="lead">Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial in keeping the project in line to completion. We get it, you're busy and it's important that someone keeps up with marketing
              and driving people to your brand. We've got you covered. This is where we sit down, grab a cup of coffee and dial in the details.</p>
          </div>
        </div>
      </div>
    </div>

</section>
`
});


web.Sections.add("demo/3card", {
  name: "3 Col Card",
  image: "../../../backend/admin/media/sys/d7.jpg",
  html: `
  
  <section class="g-bg-gray-light-v5">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 g-py-100 g-px-40--sm">
        <!-- Icon Blocks -->
        <div class="text-center">
          <span class="u-icon-v2 g-color-white g-bg-primary rounded-circle mb-4">
            <i class="icon-education-087 u-line-icon-pro"></i>
          </span>
          <h3 class="h5 g-color-black text-uppercase mb-3">Creative ideas</h3>
          <p class="g-color-gray-dark-v4">We strive to embrace and drive change in our industry which allows us to keep our clients relevant and ready to adapt.</p>
        </div>
        <!-- End Icon Blocks -->
      </div>

      <div class="col-lg-4 g-brd-left--lg g-brd-gray-light-v4 g-py-100 g-px-40--sm">
        <!-- Icon Blocks -->
        <div class="text-center">
          <span class="u-icon-v2 g-color-white g-bg-primary rounded-circle mb-4">
            <i class="icon-education-035 u-line-icon-pro"></i>
          </span>
          <h3 class="h5 g-color-black text-uppercase mb-3">Excellent features</h3>
          <p class="g-color-gray-dark-v4">We strive to embrace and drive change in our industry which allows us to keep our clients relevant and ready to adapt.</p>
        </div>
        <!-- End Icon Blocks -->
      </div>

      <div class="col-lg-4 g-brd-left--lg g-brd-gray-light-v4 g-py-100 g-px-40--sm">
        <!-- Icon Blocks -->
        <div class="text-center">
          <span class="u-icon-v2 g-color-white g-bg-primary rounded-circle mb-4">
            <i class="icon-education-141 u-line-icon-pro"></i>
          </span>
          <h3 class="h5 g-color-black text-uppercase mb-3">Fully responsive</h3>
          <p class="g-color-gray-dark-v4">We strive to embrace and drive change in our industry which allows us to keep our clients relevant and ready to adapt.</p>
        </div>
        <!-- End Icon Blocks -->
      </div>
    </div>
  </div>
</section>

`
});


web.Sections.add("demo/faq", {
  name: "FAQ",
  image: "../../../backend/admin/media/sys/d8.jpg",
  html: `
  

  <section class="g-bg-gray-gradient-opacity-v1">
  <div class="container g-py-100">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <!-- Heading -->
        <div class="text-center g-mb-60">
          <h2 class="mb-2">Frequently Asked Questions</h2>
          <div class="d-inline-block g-width-35 g-height-1 g-bg-gray-dark-v5 mb-2"></div>
          <p>We aim high at being focused on building relationships with our clients and community.</p>
        </div>
        <!-- End Heading -->

        <div id="accordion" class="u-accordion u-accordion-color-primary" role="tablist" aria-multiselectable="true">
          <!-- Card -->
          <div class="card g-brd-none rounded g-mb-20">
            <div id="accordion-heading-01" class="u-accordion__header g-pa-0" role="tab">
              <h5 class="mb-0">
                  <a class="collapsed d-flex justify-content-between u-shadow-v19 g-color-main g-text-underline--none--hover rounded g-px-30 g-py-20" href="#accordion-body-01" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-01">
                    Guarantee?
                    <span class="u-accordion__control-icon g-color-primary">
                      <i class="fa fa-angle-down"></i>
                      <i class="fa fa-angle-up"></i>
                    </span>
                  </a>
                </h5>
            </div>
            <div id="accordion-body-01" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-01" data-parent="#accordion">
              <div class="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card g-brd-none rounded g-mb-20">
            <div id="accordion-heading-02" class="u-accordion__header g-pa-0" role="tab">
              <h5 class="mb-0">
                  <a class="collapsed d-flex justify-content-between u-shadow-v19 g-color-main g-text-underline--none--hover rounded g-px-30 g-py-20" href="#accordion-body-02" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-02">
                    Do you have any built-in caching?
                    <span class="u-accordion__control-icon g-color-primary">
                      <i class="fa fa-angle-down"></i>
                      <i class="fa fa-angle-up"></i>
                    </span>
                  </a>
                </h5>
            </div>
            <div id="accordion-body-02" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-02" data-parent="#accordion">
              <div class="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card g-brd-none rounded g-mb-20">
            <div id="accordion-heading-03" class="u-accordion__header g-pa-0" role="tab">
              <h5 class="mb-0">
                  <a class="collapsed d-flex justify-content-between u-shadow-v19 g-color-main g-text-underline--none--hover rounded g-px-30 g-py-20" href="#accordion-body-03" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-03">
                    Can I add/upgrade my plan at any time?
                    <span class="u-accordion__control-icon g-color-primary">
                      <i class="fa fa-angle-down"></i>
                      <i class="fa fa-angle-up"></i>
                    </span>
                  </a>
                </h5>
            </div>
            <div id="accordion-body-03" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-03" data-parent="#accordion">
              <div class="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card g-brd-none rounded g-mb-20">
            <div id="accordion-heading-04" class="u-accordion__header g-pa-0" role="tab">
              <h5 class="mb-0">
                  <a class="collapsed d-flex justify-content-between u-shadow-v19 g-color-main g-text-underline--none--hover rounded g-px-30 g-py-20" href="#accordion-body-04" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-04">
                    What access comes with my hosting plan?
                    <span class="u-accordion__control-icon g-color-primary">
                      <i class="fa fa-angle-down"></i>
                      <i class="fa fa-angle-up"></i>
                    </span>
                  </a>
                </h5>
            </div>
            <div id="accordion-body-04" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-04" data-parent="#accordion">
              <div class="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
      </div>
    </div>
  </div>
</section>


`
});


web.Sections.add("demo/creative", {
  name: "Creative",
  image: "../../../backend/admin/media/sys/d9.jpg",
  html: `

  <section class="g-py-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center g-mb-50--md g-mb-0--md">
          <div class="u-heading-v2-3--bottom g-brd-primary g-mb-30">
            <h2 class="h1 u-heading-v2__title g-color-gray-dark-v2 text-uppercase g-font-weight-700">We Are Creative Agency</h2>
          </div>

          <div class="g-font-size-18 g-line-height-2 g-mb-30">
            <p>Web
              <strong>creative</strong> technology company providing key digital services. Focused on helping our clients to build a
              <strong>successful</strong> business on web and mobile.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>

          <a href="#" class="btn u-btn-primary u-shadow-v21 g-font-size-12 text-uppercase g-font-weight-600 g-rounded-50 g-py-15 g-px-25 g-mr-15 g-mb-10 g-mb-0--sm">
            <i class="icon-layers g-pos-rel g-top-1 g-mr-5"></i> Buy Full Version
          </a>
          <small class="d-block d-sm-inline-block g-color-gray-dark-v5 g-font-size-12">*Exclusive item on Wrapboostrap Marketpalce</small>
        </div>

        <div class="col-md-6 align-self-center text-center g-overflow-hidden">
          <img class="img-fluid w-75 fadeInUp u-in-viewport" src="../../../backend/admin/media/img-temp/100.png" alt="Image Description" data-animation="fadeInUp" data-animation-delay="0" data-animation-duration="1000" style="animation-duration: 1000ms;">
        </div>
      </div>
    </div>
  </section>

`
});



web.Sections.add("demo/digital", {
  name: "Digital Service",
  image: "../../../backend/admin/media/sys/d10.jpg",
  html: `

  <section class="g-py-100">
  <div class="container">
   

    <div class="row">
      <div class="col-md-6 align-self-center text-center g-overflow-hidden g-mb-50--md g-mb-0--md">
        <img class="img-fluid w-75 fadeInUp u-in-viewport" src="../../../backend/admin/media/img-temp/100.png" alt="Image Description" data-animation="fadeInUp" data-animation-delay="0" data-animation-duration="1000" style="animation-duration: 1000ms;">
      </div>

      <div class="col-md-6 align-self-center">
        <div class="u-heading-v2-3--bottom g-brd-primary g-mb-30">
          <h2 class="h1 u-heading-v2__title g-color-gray-dark-v2 text-uppercase g-font-weight-700">Key Digital Services</h2>
        </div>

        <div class="g-font-size-18 g-line-height-2 g-mb-30">
          <p>Web
            <strong>creative</strong> technology company providing key digital services. Focused on helping our clients to build a
            <strong>successful</strong> business on web and mobile.</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>

        <a href="#" class="btn u-btn-primary u-shadow-v21 g-font-size-12 text-uppercase g-font-weight-600 g-rounded-50 g-py-15 g-px-25 g-mr-15 g-mb-10 g-mb-0--sm">
          <i class="icon-pie-chart g-pos-rel g-top-1 g-mr-5"></i> Buy Full Version
        </a>
        <small class="d-block d-sm-inline-block g-color-gray-dark-v5 g-font-size-12">*Exclusive item on Wrapboostrap Marketpalce</small>
      </div>
    </div>
  </div>
</section>


`
});




web.Sections.add("demo/team", {
  name: "Team",
  image: "../../../backend/admin/media/sys/d11.jpg",
  html: `
  <section class="container g-pt-100 g-pb-70">
  <div class="row justify-content-center g-mb-60">
    <div class="col-lg-7">
      <!-- Heading -->
      <div class="text-center">
        <h2 class="h3 g-color-black text-uppercase mb-2">Meet your creative team</h2>
        <div class="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
        <p class="lead mb-0">We are a creative studio focusing on culture, luxury, editorial &amp; art. Somewhere between sophistication and simplicity.</p>
      </div>
      <!-- End Heading -->
    </div>
  </div>

  <div class="row">
    <div class="col-lg-3 col-sm-6 g-mb-30">
      <!-- Team Block -->
      <figure class="u-block-hover">
        <!-- Figure Image -->
        <img class="w-100" src="../../../backend/admin/media/img-temp/img4.jpg" alt="Image description">
        <!-- End Figure Image-->

        <!-- Figure Info -->
        <figcaption class="u-block-hover__additional--partially-slide-up g-mx-15">
          <div class="text-center g-bg-white g-pb-20">
            <!-- Figure Info -->
            <div class="u-block-hover__visible g-pt-20 g-pb-15 g-y-20">
              <h4 class="h5 g-color-black g-mb-5">Katalina Watson</h4>
              <em class="d-block g-font-style-normal g-font-size-11 text-uppercase g-color-primary">Technical Director</em>
            </div>
            <!-- End Info -->

            <!-- Figure Social Icons -->
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-twitter--hover g-bg-transparent">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-dribbble--hover g-bg-transparent">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-facebook--hover g-bg-transparent">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
            <!-- Figure Social Icons -->
          </div>
        </figcaption>
        <!-- End Figure Info-->
      </figure>
      <!-- End Team Block -->
    </div>

    <div class="col-lg-3 col-sm-6 g-mb-30">
      <!-- Team Block -->
      <figure class="u-block-hover">
        <!-- Figure Image -->
        <img class="w-100" src="../../../backend/admin/media/img-temp/img4.jpg" alt="Image description">
        <!-- End Figure Image-->

        <!-- Figure Info -->
        <figcaption class="u-block-hover__additional--partially-slide-up g-mx-15">
          <div class="text-center g-bg-white g-pb-20">
            <!-- Figure Info -->
            <div class="u-block-hover__visible g-pt-20 g-pb-15 g-y-20">
              <h4 class="h5 g-color-black g-mb-5">Tina Krueger</h4>
              <em class="d-block g-font-style-normal g-font-size-11 text-uppercase g-color-primary">Lead Designer</em>
            </div>
            <!-- End Info -->

            <!-- Figure Social Icons -->
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-twitter--hover g-bg-transparent">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-dribbble--hover g-bg-transparent">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-facebook--hover g-bg-transparent">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
            <!-- Figure Social Icons -->
          </div>
        </figcaption>
        <!-- End Figure Info-->
      </figure>
      <!-- End Team Block -->
    </div>

    <div class="col-lg-3 col-sm-6 g-mb-30">
      <!-- Team Block -->
      <figure class="u-block-hover">
        <!-- Figure Image -->
        <img class="w-100" src="../../../backend/admin/media/img-temp/img4.jpg" alt="Image description">
        <!-- End Figure Image-->

        <!-- Figure Info -->
        <figcaption class="u-block-hover__additional--partially-slide-up g-mx-15">
          <div class="text-center g-bg-white g-pb-20">
            <!-- Figure Info -->
            <div class="u-block-hover__visible g-pt-20 g-pb-15 g-y-20">
              <h4 class="h5 g-color-black g-mb-5">Sara Lisbon</h4>
              <em class="d-block g-font-style-normal g-font-size-11 text-uppercase g-color-primary">Web Developer</em>
            </div>
            <!-- End Info -->

            <!-- Figure Social Icons -->
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-twitter--hover g-bg-transparent">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-dribbble--hover g-bg-transparent">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-facebook--hover g-bg-transparent">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
            <!-- Figure Social Icons -->
          </div>
        </figcaption>
        <!-- End Figure Info-->
      </figure>
      <!-- End Team Block -->
    </div>

    <div class="col-lg-3 col-sm-6 g-mb-30">
      <!-- Team Block -->
      <figure class="u-block-hover">
        <!-- Figure Image -->
        <img class="w-100" src="../../../backend/admin/media/img-temp/img4.jpg" alt="Image description">
        <!-- End Figure Image-->

        <!-- Figure Info -->
        <figcaption class="u-block-hover__additional--partially-slide-up g-mx-15">
          <div class="text-center g-bg-white g-pb-20">
            <!-- Figure Info -->
            <div class="u-block-hover__visible g-pt-20 g-pb-15 g-y-20">
              <h4 class="h5 g-color-black g-mb-5">David Olsson</h4>
              <em class="d-block g-font-style-normal g-font-size-11 text-uppercase g-color-primary">Support Manager</em>
            </div>
            <!-- End Info -->

            <!-- Figure Social Icons -->
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-twitter--hover g-bg-transparent">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-dribbble--hover g-bg-transparent">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-facebook--hover g-bg-transparent">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
            <!-- Figure Social Icons -->
          </div>
        </figcaption>
        <!-- End Figure Info-->
      </figure>
      <!-- End Team Block -->
    </div>
  </div>
  
</section>

`
});




web.Sections.add("demo/3colcard", {
  name: "3 Col Card",
  image: "../../../backend/admin/media/sys/d12.jpg",
  html: `

  <section class="g-py-100">
  <div class="container">
    <div class="row no-gutters">
      <div class="col-lg-4 g-px-40 g-mb-50 g-mb-0--lg">
        <!-- Icon Blocks -->
        <div class="text-center">
          <span class="d-inline-block u-icon-v3 u-icon-size--xl g-bg-primary g-color-white rounded-circle g-mb-30">
              <i class="icon-finance-086 u-line-icon-pro"></i>
            </span>
          <h3 class="h5 g-color-gray-dark-v2 g-font-weight-600 text-uppercase mb-3">Invest To Us</h3>
          <p class="mb-0">We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
        </div>
        <!-- End Icon Blocks -->
      </div>

      <div class="col-lg-4 g-brd-left--lg g-brd-gray-light-v4 g-px-40 g-mb-50 g-mb-0--lg">
        <!-- Icon Blocks -->
        <div class="text-center">
          <span class="d-inline-block u-icon-v3 u-icon-size--xl g-bg-primary g-color-white rounded-circle g-mb-30">
              <i class="icon-finance-196 u-line-icon-pro"></i>
            </span>
          <h3 class="h5 g-color-gray-dark-v2 g-font-weight-600 text-uppercase mb-3">Increase Income</h3>
          <p class="mb-0">We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
        </div>
        <!-- End Icon Blocks -->
      </div>

      <div class="col-lg-4 g-brd-left--lg g-brd-gray-light-v4 g-px-40">
        <!-- Icon Blocks -->
        <div class="text-center">
          <span class="d-inline-block u-icon-v3 u-icon-size--xl g-bg-primary g-color-white rounded-circle g-mb-30">
              <i class="icon-finance-147 u-line-icon-pro"></i>
            </span>
          <h3 class="h5 g-color-gray-dark-v2 g-font-weight-600 text-uppercase mb-3">Collect Cash</h3>
          <p class="mb-0">We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
        </div>
        <!-- End Icon Blocks -->
      </div>
    </div>
  </div>
</section>


`
});



web.Sections.add("demo/abtco", {
  name: "About Company",
  image: "../../../backend/admin/media/sys/d13.jpg",
  html: `

  <section class="1g-bg-secondary g-py-100">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 align-self-center g-mb-100 g-mb-0--lg">
        <header class="u-heading-v2-3--bottom g-brd-primary g-mb-20">
          <h2 class="h4 u-heading-v2__title g-color-gray-dark-v2 g-font-weight-600 text-uppercase">About Our Company</h2>
        </header>

        <p class="g-font-size-16 g-mb-30">Build best responsive template  dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas moles.</p>

        <ul class="list-unstyled g-color-gray-dark-v4 mb-0">
          <li class="d-flex g-mb-10">
            <i class="icon-check g-color-primary g-mt-5 g-mr-10"></i> Included Over 2000+ UI Components
          </li>
          <li class="d-flex g-mb-10">
            <i class="icon-check g-color-primary g-mt-5 g-mr-10"></i> Beautiful Eye Catching Demos
          </li>
          <li class="d-flex g-mb-10">
            <i class="icon-check g-color-primary g-mt-5 g-mr-10"></i> Over 30+ Beautiful Thematic Examples
          </li>
          <li class="d-flex g-mb-10">
            <i class="icon-check g-color-primary g-mt-5 g-mr-10"></i> Semantic HTML5/CSS3 Codes
          </li>
        </ul>
      </div>

      <div class="col-lg-6 g-bg-img-hero g-pos-rel" style="background-image: url(../../assets/img/maps/map3.png);">
        <div class="g-absolute-centered text-center w-100 g-px-40">
          <h2 class="h1 g-color-gray-light-v2 g-font-weight-600 g-letter-spacing-0_5">Development is
              <span class="u-text-animation u-text-animation--typing">an </span><span class="typed-cursor">|</span></h2>
        </div>
      </div>
    </div>
  </div>
</section>

`
});




web.Sections.add("demo/ln", {
  name: "Latest News",
  image: "../../../backend/admin/media/sys/d14.jpg",
  html: `

  <section class="container g-pt-100 g-pb-60">
  <!-- Heading -->
  <div class="row justify-content-center text-center g-mb-50">
    <div class="col-lg-9">
      <h2 class="h2 g-color-black g-font-weight-600 mb-2">Follow the Latest News</h2>
      <div class="d-inline-block g-width-30 g-height-2 g-bg-primary mb-2"></div>
      <p class="lead mb-0">We are a creative studio focusing on culture, luxury, editorial &amp; art. Somewhere between sophistication and simplicity.</p>
    </div>
  </div>
  <!-- End Heading -->

  <div class="row">
    <div class="col-sm-6 col-lg-4 g-mb-30">
      <!-- Blog Grid Overlap Blocks -->
      <article>
        <img class="img-fluid w-100" src="../../../backend/admin/media/img-temp/img2.jpg" alt="Image Description">
        <div class="g-width-80x g-bg-white g-pos-rel g-z-index-1 g-pa-30 g-mt-minus-50 mx-auto">
          <span class="d-block g-color-gray-dark-v4 g-font-weight-600 g-font-size-12 text-uppercase mb-2">31 May 2017</span>
          <h2 class="h5 g-color-black g-font-weight-600 mb-3">
              <a class="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer" href="#">Announcing a free plan for small teams</a>
            </h2>
          <p class="g-color-gray-dark-v4 g-line-height-1_8">At Wake, our mission has always been focused on bringing openness and transparency.</p>
          <a class="g-font-size-13" href="#">Read more...</a>
        </div>
      </article>
      <!-- End Blog Grid Overlap Blocks -->
    </div>

    <div class="col-sm-6 col-lg-4 g-mb-30">
      <!-- Blog Grid Overlap Blocks -->
      <article>
        <img class="img-fluid w-100" src="../../../backend/admin/media/img-temp/img2.jpg" alt="Image Description">
        <div class="g-width-80x g-bg-white g-pos-rel g-z-index-1 g-pa-30 g-mt-minus-50 mx-auto">
          <span class="d-block g-color-gray-dark-v4 g-font-weight-600 g-font-size-12 text-uppercase mb-2">1 June 2017</span>
          <h2 class="h5 g-color-black g-font-weight-600 mb-3">
              <a class="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer" href="#">Exclusive interview with InVision's CEO</a>
            </h2>
          <p class="g-color-gray-dark-v4 g-line-height-1_8">Clark Valberg is the founder and CEO of InVision. If you are a designer...</p>
          <a class="g-font-size-13" href="#">Read more...</a>
        </div>
      </article>
      <!-- End Blog Grid Overlap Blocks -->
    </div>

    <div class="col-sm-6 col-lg-4 g-mb-30">
      <!-- Blog Grid Overlap Blocks -->
      <article>
        <img class="img-fluid w-100" src="../../../backend/admin/media/img-temp/img2.jpg" alt="Image Description">
        <div class="g-width-80x g-bg-white g-pos-rel g-z-index-1 g-pa-30 g-mt-minus-50 mx-auto">
          <span class="d-block g-color-gray-dark-v4 g-font-weight-600 g-font-size-12 text-uppercase mb-2">31 May 2017</span>
          <h2 class="h5 g-color-black g-font-weight-600 mb-3">
              <a class="u-link-v5 g-color-black g-color-primary--hover g-cursor-pointer" href="#">A UX strategy for the Ultimate Product Launch</a>
            </h2>
          <p class="g-color-gray-dark-v4 g-line-height-1_8">In an attempt to answer those questions, I poured over the biggest collections of design.</p>
          <a class="g-font-size-13" href="#">Read more...</a>
        </div>
      </article>
      <!-- End Blog Grid Overlap Blocks -->
    </div>
  </div>
</section>
`
});


web.Sections.add("demo/abtgood", {
  name: "We are good",
  image: "../../../backend/admin/media/sys/d15.jpg",
  html: `

  <section class="g-bg-secondary">
  <div class="container g-pt-100 g-pb-70">
    <div class="row">
      <div class="col-lg-5 g-mb-30">
        <div class="mb-2">
          <div class="d-inline-block g-width-30 g-height-2 g-pos-rel g-top-minus-4 g-bg-primary mr-2"></div>
          <span class="g-color-gray-dark-v3 g-font-weight-600 g-font-size-12 text-uppercase">About</span>
        </div>

        <div class="mb-5">
          <h2 class="h1 g-color-black g-font-weight-600 g-mb-35"><span class="g-color-primary">What</span> We<br>are
              <span class="g-color-primary">Good</span> at</h2>
          <p>We are a creative studio focusing on culture, luxury, editorial &amp; art. Somewhere between sophistication and simplicity.</p>
          <p>As creatives, it's important that we strive to do work outside of obligation. This lets us stay ahead of the curve for our clients and internal projects.</p>
        </div>
        <a class="btn u-btn-primary g-font-size-default text-uppercase g-rounded-50 g-py-12 g-px-30" href="#">Purchase Now</a>
      </div>

      <div class="col-lg-7 g-mb-30">
        <img class="img-fluid w-100 mb-4" src="../../../backend/admin/media/img-temp/img1600.png" alt="Image Description">
      </div>
    </div>
  </div>
</section>

`
});


web.Sections.add("demo/services", {
  name: "Services",
  image: "../../../backend/admin/media/sys/d16.jpg",
  html: `


  <section class="g-py-100">
  <div class="container">
    <header class="text-center g-width-60x--md mx-auto g-mb-80">
      <div class="u-heading-v2-3--bottom g-brd-primary g-mb-20">
        <h2 class="h3 u-heading-v2__title g-color-gray-dark-v2 text-uppercase g-font-weight-600">Our Services</h2>
      </div>
      <p class="lead">Web <strong>creative</strong> technology company providing key digital services. Focused on helping our clients to build a <strong>successful</strong> business on web and mobile.</p>
    </header>

    <div class="row">
      <div class="col-lg-4 g-mb-60 g-mb-0--lg">
        <!-- Icon Blocks -->
        <div class="g-brd-around g-brd-gray-light-v4 text-center rounded g-px-30 g-pb-30">
          <span class="u-icon-v3 u-icon-size--lg g-color-white g-bg-primary g-pull-50x-up rounded-circle">
              <i class="icon-finance-167 u-line-icon-pro"></i>
            </span>
          <h3 class="h4 g-color-gray-dark-v2 g-mb-10">More Income</h3>
          <p class="g-mb-15">Curabitur ut augue at mi eleifend lobortis. Ut tincidunt lacinia nisi pharetra.</p>
          <a class="g-font-size-12 text-uppercase g-font-weight-600" href="#">Read More</a>
        </div>
        <!-- End Icon Blocks -->
      </div>

      <div class="col-lg-4 g-mb-60 g-mb-0--lg">
        <!-- Icon Blocks -->
        <div class="g-brd-around g-brd-gray-light-v4 text-center rounded g-px-30 g-pb-30">
          <span class="u-icon-v3 u-icon-size--lg g-color-white g-bg-primary g-pull-50x-up rounded-circle">
              <i class="icon-finance-128 u-line-icon-pro"></i>
            </span>
          <h3 class="h4 g-color-gray-dark-v2 g-mb-10">Instant Cash</h3>
          <p class="g-mb-15">Curabitur ut augue at mi eleifend lobortis. Ut tincidunt lacinia nisi pharetra.</p>
          <a class="g-font-size-12 text-uppercase g-font-weight-600" href="#">Read More</a>
        </div>
        <!-- End Icon Blocks -->
      </div>

      <div class="col-lg-4">
        <!-- Icon Blocks -->
        <div class="g-brd-around g-brd-gray-light-v4 text-center rounded g-px-30 g-pb-30">
          <span class="u-icon-v3 u-icon-size--lg g-color-white g-bg-primary g-pull-50x-up rounded-circle">
              <i class="icon-finance-218 u-line-icon-pro"></i>
            </span>
          <h3 class="h4 g-color-gray-dark-v2 g-mb-10">Friendly Support</h3>
          <p class="g-mb-15">Curabitur ut augue at mi eleifend lobortis. Ut tincidunt lacinia nisi pharetra.</p>
          <a class="g-font-size-12 text-uppercase g-font-weight-600" href="#">Read More</a>
        </div>
        <!-- End Icon Blocks -->
      </div>
    </div>
  </div>
</section>
`
});



web.Sections.add("demo/webban", {
  name: "Web Banner",
  image: "../../../backend/admin/media/sys/d17.jpg",
  html: `
  <section class="container g-pt-100 g-pb-70">
  <div class="row align-items-center">
    <div class="col-md-7 g-mb-30">
      <div class="g-mb-20">
        <span class="d-block g-color-gray-dark-v3 g-font-weight-700 g-font-size-13 text-uppercase">Welcome to</span>
        <h2 class="h1 g-color-black g-font-weight-700 text-uppercase">Web Template</h2>
      </div>

      <p class="lead">As creatives, it's important that we strive to do work outside of obligation. This lets us stay ahead of the curve for our clients and internal projects. We strive to embrace and drive change in our industry which allows us to keep our clients
        relevant and ready to adapt.</p>
      <p class="lead">Working together on the daily requires each individual to let the greater good of the team's work surface above their own ego.</p>
    </div>

    <div class="col-md-5 g-mb-30">
      <img class="img-fluid mb-4" src="../../../backend/admin/media/img-temp/homeban.png" alt="Image description">
      <div class="text-center">
        <span class="g-color-gray-dark-v4">Also available for <a class="u-link-v5 g-color-primary g-color-black--hover g-font-weight-600" href="#">Android <i class="g-font-size-20 ml-2 fa fa-android"></i></a></span>
      </div>
    </div>
  </div>
</section>
`
});

web.Sections.add("demo/serlist", {
  name: "Service List",
  image: "../../../backend/admin/media/sys/d18.jpg",
  html: `
  
  <section class="container g-pt-100 g-pb-70">
  <!-- Heading -->
  <div class="row justify-content-center text-center g-mb-50">
    <div class="col-lg-9">
      <h2 class="h3 g-color-black g-font-weight-600 text-uppercase mb-2">Our Services</h2>
      <div class="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
      <p class="lead mb-0">We are a creative studio focusing on culture, luxury, editorial &amp; art. Somewhere between sophistication and simplicity.</p>
    </div>
  </div>
  <!-- End Heading -->

  <div class="row">
    <div class="col-md-4 g-mb-30">
      <!-- Icon Blocks -->
      <div class="g-brd-around--md g-brd-gray-light-v4 text-center g-pa-10 g-px-30--lg g-py-40--lg">
        <span class="d-block g-color-gray-dark-v4 g-font-size-40 g-mb-15">
          <i class="icon-education-087 u-line-icon-pro"></i>
        </span>
        <h3 class="h5 g-color-black g-mb-10">Web Design &amp; Development</h3>
        <p class="g-color-gray-dark-v4">We strive to embrace and drive change in our industry which allows us to keep our clients relevant and ready to adapt.</p>
        <div class="d-inline-block g-width-40 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
        <ul class="list-unstyled g-px-30 g-mb-0">
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Responsive Web Desgin</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">E-commerce</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">App &amp; Icon Design</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Logo &amp; Brand Design</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Mobile Development</li>
          <li class="g-py-8">UI/UX Design</li>
        </ul>
      </div>
      <!-- End Icon Blocks -->
    </div>
    <div class="col-md-4 g-mb-30">
      <!-- Icon Blocks -->
      <div class="g-brd-around--md g-brd-gray-light-v4 text-center g-pa-10 g-px-30--lg g-py-40--lg">
        <span class="d-block g-color-gray-dark-v4 g-font-size-40 g-mb-15">
          <i class="icon-finance-009 u-line-icon-pro"></i>
        </span>
        <h3 class="h5 g-color-black g-mb-10">Marketing &amp; Cunsulting</h3>
        <p class="g-color-gray-dark-v4">We strive to embrace and drive change in our industry which allows us to keep our clients relevant and ready to adapt.</p>
        <div class="d-inline-block g-width-40 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
        <ul class="list-unstyled g-px-30 g-mb-0">
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Analysis &amp; Consulting</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Email Marketing</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">App &amp; Icon Design</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Responsive Web Desgin</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Social Networking</li>
          <li class="g-py-8">Documentation</li>
        </ul>
      </div>
      <!-- End Icon Blocks -->
    </div>
    <div class="col-md-4 g-mb-30">
      <!-- Icon Blocks -->
      <div class="g-brd-around--md g-brd-gray-light-v4 text-center g-pa-10 g-px-30--lg g-py-40--lg">
        <span class="d-block g-color-gray-dark-v4 g-font-size-40 g-mb-15">
          <i class="icon-finance-256 u-line-icon-pro"></i>
        </span>
        <h3 class="h5 g-color-black g-mb-10">SEO &amp; Advertising</h3>
        <p class="g-color-gray-dark-v4">We strive to embrace and drive change in our industry which allows us to keep our clients relevant and ready to adapt.</p>
        <div class="d-inline-block g-width-40 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
        <ul class="list-unstyled g-px-30 g-mb-0">
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Display Advertising</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">App &amp; Icon Design</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Analysis &amp; Consulting</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Google AdSense</li>
          <li class="g-brd-bottom g-brd-gray-light-v3 g-py-10">Social Media</li>
          <li class="g-py-8">Google/Bing Analysis</li>
        </ul>
      </div>
      <!-- End Icon Blocks -->
    </div>
  </div>
</section>

`
});


web.Sections.add("demo/perfect", {
  name: "Perfect Idea",
  image: "../../../backend/admin/media/sys/d19.jpg",
  html: `
 

  <section class="container-fluid g-px-0">
  <div class="row align-items-center no-gutters">
    <div class="col-md-6">
      <div class="text-center g-pa-15x">
        <div class="mb-5">
          <h3 class="h1 g-color-black mb-4">The Perfect Idea</h3>
          <p class="g-color-gray-dark-v4 g-font-size-16">Understanding who you are and what you want is our strategy for your brand. We are always figuring out ways to capture your vision, so people can get on board.</p>
        </div>
        <a class="btn u-btn-outline-primary g-font-weight-600 g-rounded-50 g-px-30 g-py-13" href="#">See more
            <i class="ml-2 fa fa-long-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-md-6">
      <div class="g-flex-centered g-min-height-600 g-bg-secondary text-center">
        <div class="u-shadow-v19 g-bg-white g-pa-25">
          <img class="img-fluid u-shadow-v21" src="../../../backend/admin/media/img-temp/img16.jpg" alt="Image Description">
        </div>
      </div>
    </div>
  </div>
</section>


`
});






web.Sections.add("demo/gold", {
  name: "Gold Rush",
  image: "../../../backend/admin/media/sys/d20.jpg",
  html: `

  <section class="container-fluid g-px-0">
    <div class="row align-items-center no-gutters">
      <div class="col-md-6 order-md-2">
        <div class="text-center g-pa-15x">
          <div class="mb-5">
            <h3 class="h1 g-color-black mb-4">Goldrush</h3>
            <p class="g-color-gray-dark-v4 g-font-size-16">Understanding who you are and what you want is our strategy for your brand. We are always figuring out ways to capture your vision, so people can get on board.</p>
          </div>
          <a class="btn u-btn-outline-primary g-font-weight-600 g-rounded-50 g-px-30 g-py-13" href="#">See more
              <i class="fa-long-arrow-right"></i></a>
        </div>
      </div>

      <div class="col-md-6 order-md-1">
        <div class="g-flex-centered g-min-height-600 g-bg-secondary text-center">
          <div class="u-shadow-v19 g-bg-white g-pa-25">
            <img class="img-fluid u-shadow-v21" src="../../../backend/admin/media/img-temp/img16.jpg" alt="Image Description">
          </div>
        </div>
      </div>
    </div>
  </section>
`
});




























web.SectionsGroup['CUSTOM SECTIONS'] =[ "bootstrap4/embed-events", "bootstrap4/afb-heading", "bootstrap4/3col-card","fitness/sovid-section", "bootstrap4/gocontact"];


//Events Code start - 28-08-2023
async function getCategory() {
  const customPath = window.location.origin;
  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  const category = await fetch(customPath+"/api/get-event-by-category/test", requestOptions);
  console.clear();
  return await category.json();
}

async function getEvents(slug,filter,limit) {
  const customPath = window.location.origin;
  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  const events = await fetch(customPath+"/api/get-event-by-category/"+slug+"?filter="+filter+"&limit="+limit, requestOptions);
  return await events.json();
}

/*function convertDateFormat(date){
  var today = new Date(date);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}*/
function convertDateFormat(dateObj, timeObj) {
	//let mDate = dateObj.toLocaleString('en-US', { timeZone: 'America/New_York' })
	//alert(dateObj);
	//let date = new Date('2023/10/18');
	//date.toLocaleString('en-US', { timeZone: 'America/New_York' })
	//alert(date);
	//let year = new Intl.DateTimeFormat('en-us', { year: 'numeric' }).format(date);
	//let month = new Intl.DateTimeFormat('en-us', { month: 'short' }).format(date);
	//let day = new Intl.DateTimeFormat('en-us', { day: '2-digit' }).format(date);
	let year = dateObj.substring(0,4);
	let month = dateObj.substring(5,7);
	let day = dateObj.substring(8,10);
	//alert(day)
	let dayName = new Date(year+"/"+month+"/"+day).toLocaleString('en-us', {weekday:'short'})
	if(timeObj == null){
		return `${dayName}, ${month}, ${day}`;
	}else{
		let time12hr = new Date('1970-01-01T' + timeObj + 'Z').toLocaleTimeString('en-US',{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
		return `${dayName}, ${month}, ${day}, ${time12hr}`;
	}
}

async function renderEventsHtml(resutData) {
  const customPath = window.location.origin;
  const event_id = Math.floor(Math.random() * 900000) + 1 +""+Math.floor(Date.now() / 1000);
  const {element, events, category_slug, filter, limit} = resutData;

  console.log('events.event')
  console.log(events)

  if(events.event){
      element.attr('data-id', event_id);
      let events_html = ``;
      
      events.event.map((ls,i)=>{
          events_html += `
          <div class="pb-event" data-id="${ls.id}">
              <div class="pb-event-img-container">
			  		<span class="pb-event-badge">aa${ls.single_day == 0 ? convertDateFormat(ls.start_date, ls.start_time) : convertDateFormat(ls.date, ls.start_time)}</span>
				  <a href="/event/${ls.slug}"><img class="card-img-top" src="${ls.image.length > 0 ? ls.image[0]:"https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg" }" alt="Sample"></a>
              </div>
              <div class="pb-event-body">
                  <h4><a href="/event/${ls.slug}">${ls.title}</a></h4>
                  <div class="pb-event-icon-content">
                      <span class="pb-event-icon">
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 2C12.2586 2.00145 10.8287 2.59454 9.77408 3.64912C8.7195 4.7037 8.12641 6.1336 8.12496 7.625C8.12553 7.87111 8.14197 8.11694 8.17418 8.36094L2.74371 15.7672C2.56596 16.0076 2.4807 16.3039 2.50351 16.602C2.52632 16.9001 2.65568 17.1801 2.86793 17.3906L3.98433 18.507C4.19489 18.7193 4.47482 18.8486 4.77292 18.8715C5.07102 18.8943 5.36737 18.809 5.60777 18.6312L13.0148 13.1992C13.2585 13.2319 13.5041 13.2489 13.75 13.25C15.2418 13.25 16.6725 12.6574 17.7274 11.6025C18.7823 10.5476 19.375 9.11684 19.375 7.625C19.375 6.13316 18.7823 4.70242 17.7274 3.64752C16.6725 2.59263 15.2418 2 13.75 2ZM18.125 7.625C18.1261 8.56938 17.8201 9.48852 17.2531 10.2437L11.132 4.12187C11.7822 3.63624 12.5547 3.34104 13.3631 3.26928C14.1715 3.19751 14.9839 3.35201 15.7095 3.71551C16.4351 4.079 17.0453 4.63715 17.4719 5.32757C17.8984 6.01798 18.1246 6.81344 18.125 7.625ZM4.86871 17.625L3.74996 16.5062L8.60465 9.89062C9.17351 11.1749 10.2001 12.2014 11.4843 12.7703L4.86871 17.625ZM9.37496 7.625C9.37372 6.68084 9.67975 5.76192 10.2468 5.00703L16.3671 11.1273C15.717 11.6127 14.9446 11.9077 14.1364 11.9794C13.3282 12.0511 12.516 11.8966 11.7906 11.5332C11.0652 11.1698 10.455 10.6119 10.0285 9.92173C9.60187 9.23156 9.37561 8.43636 9.37496 7.625ZM9.19137 12.1828C9.30849 12.3 9.37428 12.4589 9.37428 12.6246C9.37428 12.7903 9.30849 12.9492 9.19137 13.0664L8.56637 13.6914C8.50891 13.7519 8.43992 13.8003 8.36347 13.8336C8.28703 13.867 8.20467 13.8848 8.12126 13.8859C8.03784 13.8869 7.95505 13.8713 7.87778 13.8399C7.8005 13.8084 7.7303 13.7619 7.67131 13.7029C7.61232 13.6439 7.56574 13.5737 7.53431 13.4964C7.50288 13.4191 7.48724 13.3363 7.48831 13.2529C7.48937 13.1695 7.50713 13.0871 7.54053 13.0107C7.57393 12.9343 7.62229 12.8653 7.68277 12.8078L8.30777 12.1828C8.36578 12.1245 8.43472 12.0783 8.51064 12.0467C8.58655 12.0151 8.66796 11.9988 8.75019 11.9987C8.83242 11.9987 8.91385 12.0148 8.98982 12.0463C9.0658 12.0777 9.13482 12.1239 9.19293 12.182L9.19137 12.1828Z" fill="#3595F6"/></svg>
                      </span>
                      <span class="pb-event-info">${events.category.name}</span>
                  </div>
                  <div class="pb-event-icon-content">
                      <span class="pb-event-icon">
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                              <path d="M10.5 5C9.88193 5 9.27775 5.18328 8.76384 5.52666C8.24994 5.87004 7.8494 6.3581 7.61288 6.92911C7.37635 7.50013 7.31447 8.12847 7.43505 8.73466C7.55562 9.34085 7.85325 9.89767 8.29029 10.3347C8.72733 10.7717 9.28415 11.0694 9.89034 11.19C10.4965 11.3105 11.1249 11.2486 11.6959 11.0121C12.2669 10.7756 12.755 10.3751 13.0983 9.86116C13.4417 9.34725 13.625 8.74307 13.625 8.125C13.625 7.2962 13.2958 6.50134 12.7097 5.91529C12.1237 5.32924 11.3288 5 10.5 5ZM10.5 10C10.1292 10 9.76665 9.89003 9.45831 9.68401C9.14996 9.47798 8.90964 9.18514 8.76773 8.84253C8.62581 8.49992 8.58868 8.12292 8.66103 7.75921C8.73337 7.39549 8.91195 7.0614 9.17417 6.79917C9.4364 6.53695 9.77049 6.35837 10.1342 6.28603C10.4979 6.21368 10.8749 6.25081 11.2175 6.39273C11.5601 6.53464 11.853 6.77496 12.059 7.08331C12.265 7.39165 12.375 7.75416 12.375 8.125C12.375 8.62228 12.1775 9.09919 11.8258 9.45083C11.4742 9.80246 10.9973 10 10.5 10ZM10.5 1.25C8.67727 1.25207 6.92979 1.97706 5.64092 3.26592C4.35206 4.55479 3.62707 6.30227 3.625 8.125C3.625 10.5781 4.75859 13.1781 6.90625 15.6445C7.87127 16.759 8.95739 17.7626 10.1445 18.6367C10.2496 18.7103 10.3748 18.7498 10.5031 18.7498C10.6314 18.7498 10.7566 18.7103 10.8617 18.6367C12.0467 17.7623 13.1307 16.7587 14.0938 15.6445C16.2383 13.1781 17.375 10.5781 17.375 8.125C17.3729 6.30227 16.6479 4.55479 15.3591 3.26592C14.0702 1.97706 12.3227 1.25207 10.5 1.25ZM10.5 17.3438C9.20859 16.3281 4.875 12.5977 4.875 8.125C4.875 6.63316 5.46763 5.20242 6.52252 4.14752C7.57742 3.09263 9.00816 2.5 10.5 2.5C11.9918 2.5 13.4226 3.09263 14.4775 4.14752C15.5324 5.20242 16.125 6.63316 16.125 8.125C16.125 12.5961 11.7914 16.3281 10.5 17.3438Z" fill="#3595F6"/>
                          </svg>                        
                      </span>
                      <span class="pb-event-info">${ls.location}</span>
                  </div>

                  <p class="pb-event-desc">${ls.short_description}</p>
              </div>
              <div class="pb-event-action">
                  <a href="/event/${ls.slug}">
                      View Details <svg width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M16.51 11H4.5V13H16.51V16L20.5 12L16.51 8V11Z" fill="#3595F6"/></svg>
                  </a>
              </div>
          </div>`;
      });

      let web_html_event = `<script>
	  if($("#main_body").length > 0){ $('.render-event-list').removeClass('active-cursor'); }
          $('document').ready(function(){
			  function convertDateFormat(dateObj, timeObj) {
					let date = new Date(dateObj);
					let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
					let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
					let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
					let dayName = new Date(dateObj).toLocaleString('en-us', {weekday:'short'})
					if(timeObj == null){
						return  dayName +', '+ month + ', '+ day;
					}else{
						let time12hr = new Date('1970-01-01T' + timeObj + 'Z').toLocaleTimeString('en-US',{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
						return  dayName +', '+ month + ', '+ day + ', '+ time12hr;
					}
				}
              fetch("${customPath}/api/get-event-by-category/${category_slug}?filter=${filter}&limit=${limit}", { method: 'GET', redirect: 'follow'}).then(response => response.text()).then( (resultEvent) => {
                  if(resultEvent){
                      let obj = JSON.parse(resultEvent);
                      let web_event_html = '';
                      obj.event.forEach(ls => {
					  
					  var finalDate = convertDateFormat(ls.date, ls.start_time);
					  if(ls.single_day == 0){
					  	finalDate = convertDateFormat(ls.start_date, ls.start_time);
					  }
					  
                          web_event_html += '<div class="pb-event" data-id="'+ls.id+'"><div class="pb-event-img-container"><span class="pb-event-badge">'+finalDate+'</span><a href="/event/'+ls.slug+'"><img class="card-img-top" src="'+ls.image[0]+'" alt="'+ls.title+'"></a></div><div class="pb-event-body"><h4><a href="/event/'+ls.slug+'">'+ls.title+'</a></h4><div class="pb-event-icon-content"><span class="pb-event-icon"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M13.75 2C12.2586 2.00145 10.8287 2.59454 9.77408 3.64912C8.7195 4.7037 8.12641 6.1336 8.12496 7.625C8.12553 7.87111 8.14197 8.11694 8.17418 8.36094L2.74371 15.7672C2.56596 16.0076 2.4807 16.3039 2.50351 16.602C2.52632 16.9001 2.65568 17.1801 2.86793 17.3906L3.98433 18.507C4.19489 18.7193 4.47482 18.8486 4.77292 18.8715C5.07102 18.8943 5.36737 18.809 5.60777 18.6312L13.0148 13.1992C13.2585 13.2319 13.5041 13.2489 13.75 13.25C15.2418 13.25 16.6725 12.6574 17.7274 11.6025C18.7823 10.5476 19.375 9.11684 19.375 7.625C19.375 6.13316 18.7823 4.70242 17.7274 3.64752C16.6725 2.59263 15.2418 2 13.75 2ZM18.125 7.625C18.1261 8.56938 17.8201 9.48852 17.2531 10.2437L11.132 4.12187C11.7822 3.63624 12.5547 3.34104 13.3631 3.26928C14.1715 3.19751 14.9839 3.35201 15.7095 3.71551C16.4351 4.079 17.0453 4.63715 17.4719 5.32757C17.8984 6.01798 18.1246 6.81344 18.125 7.625ZM4.86871 17.625L3.74996 16.5062L8.60465 9.89062C9.17351 11.1749 10.2001 12.2014 11.4843 12.7703L4.86871 17.625ZM9.37496 7.625C9.37372 6.68084 9.67975 5.76192 10.2468 5.00703L16.3671 11.1273C15.717 11.6127 14.9446 11.9077 14.1364 11.9794C13.3282 12.0511 12.516 11.8966 11.7906 11.5332C11.0652 11.1698 10.455 10.6119 10.0285 9.92173C9.60187 9.23156 9.37561 8.43636 9.37496 7.625ZM9.19137 12.1828C9.30849 12.3 9.37428 12.4589 9.37428 12.6246C9.37428 12.7903 9.30849 12.9492 9.19137 13.0664L8.56637 13.6914C8.50891 13.7519 8.43992 13.8003 8.36347 13.8336C8.28703 13.867 8.20467 13.8848 8.12126 13.8859C8.03784 13.8869 7.95505 13.8713 7.87778 13.8399C7.8005 13.8084 7.7303 13.7619 7.67131 13.7029C7.61232 13.6439 7.56574 13.5737 7.53431 13.4964C7.50288 13.4191 7.48724 13.3363 7.48831 13.2529C7.48937 13.1695 7.50713 13.0871 7.54053 13.0107C7.57393 12.9343 7.62229 12.8653 7.68277 12.8078L8.30777 12.1828C8.36578 12.1245 8.43472 12.0783 8.51064 12.0467C8.58655 12.0151 8.66796 11.9988 8.75019 11.9987C8.83242 11.9987 8.91385 12.0148 8.98982 12.0463C9.0658 12.0777 9.13482 12.1239 9.19293 12.182L9.19137 12.1828Z" fill="#3595F6"/></svg></span><span class="pb-event-info">'+obj.category.name+'</span></div><div class="pb-event-icon-content"><span class="pb-event-icon"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M10.5 5C9.88193 5 9.27775 5.18328 8.76384 5.52666C8.24994 5.87004 7.8494 6.3581 7.61288 6.92911C7.37635 7.50013 7.31447 8.12847 7.43505 8.73466C7.55562 9.34085 7.85325 9.89767 8.29029 10.3347C8.72733 10.7717 9.28415 11.0694 9.89034 11.19C10.4965 11.3105 11.1249 11.2486 11.6959 11.0121C12.2669 10.7756 12.755 10.3751 13.0983 9.86116C13.4417 9.34725 13.625 8.74307 13.625 8.125C13.625 7.2962 13.2958 6.50134 12.7097 5.91529C12.1237 5.32924 11.3288 5 10.5 5ZM10.5 10C10.1292 10 9.76665 9.89003 9.45831 9.68401C9.14996 9.47798 8.90964 9.18514 8.76773 8.84253C8.62581 8.49992 8.58868 8.12292 8.66103 7.75921C8.73337 7.39549 8.91195 7.0614 9.17417 6.79917C9.4364 6.53695 9.77049 6.35837 10.1342 6.28603C10.4979 6.21368 10.8749 6.25081 11.2175 6.39273C11.5601 6.53464 11.853 6.77496 12.059 7.08331C12.265 7.39165 12.375 7.75416 12.375 8.125C12.375 8.62228 12.1775 9.09919 11.8258 9.45083C11.4742 9.80246 10.9973 10 10.5 10ZM10.5 1.25C8.67727 1.25207 6.92979 1.97706 5.64092 3.26592C4.35206 4.55479 3.62707 6.30227 3.625 8.125C3.625 10.5781 4.75859 13.1781 6.90625 15.6445C7.87127 16.759 8.95739 17.7626 10.1445 18.6367C10.2496 18.7103 10.3748 18.7498 10.5031 18.7498C10.6314 18.7498 10.7566 18.7103 10.8617 18.6367C12.0467 17.7623 13.1307 16.7587 14.0938 15.6445C16.2383 13.1781 17.375 10.5781 17.375 8.125C17.3729 6.30227 16.6479 4.55479 15.3591 3.26592C14.0702 1.97706 12.3227 1.25207 10.5 1.25ZM10.5 17.3438C9.20859 16.3281 4.875 12.5977 4.875 8.125C4.875 6.63316 5.46763 5.20242 6.52252 4.14752C7.57742 3.09263 9.00816 2.5 10.5 2.5C11.9918 2.5 13.4226 3.09263 14.4775 4.14752C15.5324 5.20242 16.125 6.63316 16.125 8.125C16.125 12.5961 11.7914 16.3281 10.5 17.3438Z" fill="#3595F6"/></svg></span><span class="pb-event-info">'+ls.location+'</span></div><p class="pb-event-desc">'+ls.short_description+'</p></div><div class="pb-event-action"><a href="/event/'+ls.slug+'">View Details <svg width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M16.51 11H4.5V13H16.51V16L20.5 12L16.51 8V11Z" fill="#3595F6"/></svg></a></div></div>';
                      });
					  
					  if(obj.event.length > 0){
					  	$('.render_events[data-id="${event_id}"] .render-event-list').html(web_event_html)
					  }else{
					  	$('.render_events[data-id="${event_id}"] .render-event-list').html('<h5 class="text-center py-5">There are no events in category.</h5>')
					  }
					  
                  }
              }).catch(error => console.log('error', error));
			  if($("#main_body").length > 0){ $('.render-event-list').removeClass('active-cursor'); }
          });
		  if($("#main_body").length > 0){ $('.render-event-list').removeClass('active-cursor'); }
      </script>`;

      if(events.event.length > 0){
          element.find(".render-event-list").html(events_html);
          element.find(".event-scripts").html(web_html_event);
          element.attr('data-category-slug', category_slug);
          element.attr('data-filter', filter);
          element.attr('data-limit', limit);
      }else{
          element.find(".render-event-list").html(`<h5 class="text-center py-5">There are no events in category.</h5>`);
          element.find(".event-scripts").html(web_html_event);
          element.attr('data-category-slug', null);
          element.attr('data-filter', null);
          element.attr('data-limit', null);
      }

  }
}
//Events Code End - 28-08-2023


web.Sections.add("bootstrap4/embed-events", {
    name: "Events",
    attributes: ["data-component-events"],
	dragHtml: '<img src="../backend/admin/media/snippets-events.png">',
  	image: "../backend/admin/media/snippets-events.png",
    html: `<section data-component-events>
    <div class="container">
    <div class="render_events" data-category-slug="null" data-filter="null" data-limit="null">
    <div class="render-event-list active-cursor---">
    <div class="spinner-border spinner-border-sm" style="color: #3595f6;height: 100px;margin: 50px auto;position: relative;width: 100px;">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    <div class="event-scripts"></div></div></div>
    <style>.pb-event-action a,.render-event-list 
    .pb-event-desc,.render-event-list 
    .pb-event-info{font-size:16px;font-style:normal;font-weight:400;line-height:normal}
    .render-event-list.active-cursor *{pointer-events:none!important}
    .render-event-list{width:100%;display:flex;flex-wrap:wrap;gap:20px;padding:20px 0;justify-content:flex-start}
    .render-event-list .pb-event{width:calc(33.33% - 14px);border-radius:12px;overflow:hidden;border:1px solid #eff8ff;background-color:#fff}
    .render-event-list .pb-event:hover{box-shadow:0 0 15px #d3d3d3;transition:.4s;border-color:#3595f6}
    .render-event-list .pb-event-img-container{width:100%;position:relative}
    .render-event-list .pb-event .pb-event-badge{position:absolute;top:20px;left:20px;padding:8px 20px;border-radius:4px;background:#3595f6;color:#fff;font-size:15px;font-style:normal;font-weight:500;line-height:normal}
    .render-event-list .pb-event-img-container a{display:block;height:277px}.render-event-list 
    .pb-event-img-container img{width:100%;height:100%;object-fit:cover}.render-event-list 
    .pb-event-body{padding:20px;display:flex;flex-direction:column;gap:15px}.render-event-list 
    .pb-event-body h4{color:#231f20;font-size:24px;font-style:normal;font-weight:600;line-height:normal;text-transform:uppercase;margin:0;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
    .render-event-list .pb-event-body h4 a{color:#231f20;text-decoration:none}
    .render-event-list .pb-event-icon-content{width:100%;display:flex;gap:10px;align-items:center}
    .render-event-list .pb-event-icon{display:inline-flex;width:32px;height:32px;padding:6px;justify-content:center;align-items:center;border-radius:4px;background:#eff8ff}
    .render-event-list .pb-event-info{color:#231f20}.render-event-list 
    .pb-event-desc{overflow: hidden;color:#231f20;margin:0;height:73px;word-break: break-word;}
    .pb-event-action{display:flex;padding:0;justify-content:center;align-items:flex-start;gap:10px;background:#eff8ff}
    .pb-event-action a{color:#3595f6;text-decoration:none;display:block;padding:20px;width:100%;text-align:center}
    .pb-event-action a:hover{color:#fff;background:#333}.pb-event-action a:hover svg path{fill:#fff}
    @media only screen and (max-width:991px){.render-event-list .pb-event{width:calc(50% - 10px)}
    .render-event-list .pb-event-body h4{font-size:18px}.render-event-list 
    .pb-event-img-container a{height:200px}}
    @media only screen and (max-width:479px){.render-event-list 
      .pb-event{width:100%}.render-event-list 
      .pb-event-desc{height:auto}.pb-event-action a{padding:15px}}
    </style></section>`,
    init: async function (node) {
        const event_lists = jQuery(".render_events", node);
      const init_status = event_lists.attr('init-data')
      let default_category = event_lists.attr('data-category-slug');
      let default_filter = event_lists.attr('data-filter');
      let default_limit = event_lists.attr('data-limit');

      //catgeory dropdown
      const category_reuslt = await getCategory();
      if(category_reuslt.category_all.length > 0){
          let category_option = ``;
          category_reuslt.category_all.map((ls,i)=>{
              let selected = "";
              if(default_category == 0){ default_category = ls.slug; selected = "selected"};
              category_option += `<option value="${ls.slug}" ${selected}>${ls.name}</option>`;
              selected = "";
          });
          $('[name="drp_category_lists"]').html(category_option)
      }

      let category_slug = $(".component-properties select[name=drp_category_lists]");
      let event_filter = $(".component-properties select[name=drp_event_filter]");
      let event_limit = $(".component-properties select[name=drp_event_limit]");

      if(typeof init_status != "undefined"){
          //catgeory dropdown
          const initCall = async () => {
              const event_reuslt = await getEvents(default_category, default_filter, default_limit);
              const params_node = {
                  element : event_lists,
                  events: event_reuslt,
                  category_slug :default_category,
                  filter : default_filter,
                  limit: default_limit
              };
              renderEventsHtml(params_node);
              category_slug.val(default_category)
              event_filter.val(default_filter)
              event_limit.val(default_limit)
          }
          initCall();
          event_lists.attr('init-data',true)
      }else{

          //default
          if(category_slug.val() != null){
              default_category = category_slug.val();
          }
          if(event_filter.val() == null){
              default_filter = "desc";
              event_filter.val(default_filter)
          }
          if(event_limit.val() == null){
              default_limit = "6";
              event_limit.val(default_limit);
          }

          //catgeory dropdown
          const initCall = async () => {
              const event_reuslt = await getEvents(default_category, default_filter, default_limit);
              const params_node = {
                  element : event_lists,
                  events: event_reuslt,
                  category_slug :default_category,
                  filter : default_filter,
                  limit: default_limit
              };
              renderEventsHtml(params_node);
              category_slug.val(default_category)
              event_filter.val(default_filter)
              event_limit.val(default_limit)
          }
          initCall();
          event_lists.attr('init-data',true)
      }
    },
    onChange:  function (node, property, value) {},
    properties: [
      {
          name: "Filter Events",
          key: "drp_event_filter",
          inputtype: SelectInput,
          data: {
              options: [
                  {
                      text: "Newest",
                      value: "desc",
                  },
                  {
                      text: "Oldest",
                      value: "asc",
                  }
              ],
          },
          onChange: function (node, value, input, component) {
              const category_slug = $(".component-properties select[name=drp_category_lists]").val();
              const event_limit = $(".component-properties select[name=drp_event_limit]").val();
              const event_lists = jQuery(".render_events", node);
              const initCall = async () => {
                  const event_reuslt = await getEvents(category_slug, value, event_limit);
                  const params_node = {
                      element : event_lists,
                      events: event_reuslt,
                      category_slug :category_slug,
                      filter : value,
                      limit: event_limit
                  };
                  renderEventsHtml(params_node);
              }
              initCall();
              return node; 
          },
      },
      {
          name: "Category",
          key: "drp_category_lists",
          inputtype: SelectInput,
          data: { options: [] },
          onChange: async function (node, value, input, component) {
              const event_filter = $(".component-properties select[name=drp_event_filter]").val();
              const event_limit = $(".component-properties select[name=drp_event_limit]").val();
              const event_lists = jQuery(".render_events", node);
              const initCall = async () => {
                  const event_reuslt = await getEvents(value, event_filter, event_limit);
                  const params_node = {
                      element : event_lists,
                      events: event_reuslt,
                      category_slug :value,
                      filter : event_filter,
                      limit: event_limit
                  };
                  renderEventsHtml(params_node);
              }
              initCall();
              return node;   
          },
      },
      {
          name: "Show events",
          key: "drp_event_limit",
          inputtype: SelectInput,
          data: {
              options: [
                  {
                      text: "6",
                      value: "6",
                  },
                  {
                      text: "12",
                      value: "12",
                  },
                  {
                      text: "18",
                      value: "18",
                  },
                  {
                      text: "24",
                      value: "24",
                  }
              ],
          },
          onChange: function (node, value, input, component) {
              const category_slug = $(".component-properties select[name=drp_category_lists]").val();
              const event_filter = $(".component-properties select[name=drp_event_filter]").val();
              const event_lists = jQuery(".render_events", node);
              const initCall = async () => {
                  const event_reuslt = await getEvents(category_slug, event_filter, value);
                  const params_node = {
                      element : event_lists,
                      events: event_reuslt,
                      category_slug :category_slug,
                      filter : event_filter,
                      limit: value
                  };
                  renderEventsHtml(params_node);
              }
              initCall();
              return node;
          },
      },
  ]
});




web.Sections.add("bootstrap4/afb-heading", {
  name: "AFB Heading",
  image: window.mediaPath + "/sys/afb/afbhead.jpg",
  html: `
  <section title="AFB-HEAD" class="afbhome"><div class="afbhead"> <h2 style="text-align:center;">POPULAR BASE ACTIVITIES</h2>
<p style="text-align:center;">With Much More for You to Explore on Base</p></div></section>

`});


web.Sections.add("bootstrap4/3col-card", {
  name: "Three Column Card",
  image: window.mediaPath + "/sys/afb/3colcard.jpg",
  html: `
 
   <section title="3Card" class="afbhome">  
   <div class="afbhead">
   <div class="container text-center">
<div class="row">
  
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="vcard h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="vcard-body">
      <p>Join the Adventure</p>
        
        <h2>Outdoor Rec</h2>
        <a class="btn btnafb" href="#">Find Fun</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="vcard h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="vcard-body">
      <p>Join the Adventure</p>
        
        <h2>Outdoor Rec</h2>
        <a class="btn btnafb" href="#">Find Fun</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="vcard h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="vcard-body">
      <p>Join the Adventure</p>
        
        <h2>Outdoor Rec</h2>
        <a class="btn btnafb" href="#">Find Fun</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="vcard h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="vcard-body">
      <p>Join the Adventure</p>
        
        <h2>Outdoor Rec</h2>
        <a class="btn btnafb" href="#">Find Fun</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="vcard h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="vcard-body">
      <p>Join the Adventure</p>
        
        <h2>Outdoor Rec</h2>
        <a class="btn btnafb" href="#">Find Fun</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="vcard h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="vcard-body">
      <p>Join the Adventure</p>
        
        <h2>Outdoor Rec</h2>
        <a class="btn btnafb" href="#">Find Fun</a>
      </div>
    </div>
  </div>

</div>
<!-- /.row -->
</div>
</div>
</section>
`});



web.Sections.add("fitness/sovid-section", {
  name: "Youtube-video",
  image: window.mediaPath + "/sys/afb/vid-section.jpg",
  html: ` 
  <section class="pbc-fitness-sport-7863">
        <div class="container">

            <div class="head">
                <h2>Group Fitness Classes</h2>
                <p>Check out these great video workouts recorded by instructors on base! These courses are also available in person at the fitness center.</p>
            </div>

            <div class="parent">

            
                <div class="boxs">
                <iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" src="https://www.youtube.com/embed/CLk7A7HXhYQ?autoplay=false&amp;controls=false&amp;loop=false&amp;playsinline=true&amp;muted=true">
								</iframe>
                </div>
                <div class="boxs">
                <iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" src="https://www.youtube.com/embed/URSMpk_R6b4?autoplay=false&amp;controls=false&amp;loop=false&amp;playsinline=true&amp;muted=true">
								</iframe>
                </div>
                <div class="boxs">
                <iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" src="https://www.youtube.com/embed/19dYuM2vVYY?autoplay=false&amp;controls=false&amp;loop=false&amp;playsinline=true&amp;muted=true">
								</iframe>
                </div>

               
            
            

               
            </div>


        </div>
    </section>


`});








web.Sections.add("bootstrap4/gocontact", {
  name: "Contact Us",
  image: window.mediaPath + "/sys/afb/gocon.jpg",
  html: ` 
  <section class="pbc-family-7866">

  <div class="container">

      <div class="parent">
      <div class="left" data-component-maps><iframe frameborder="0" src="https://maps.google.com/maps?q=Bucharest&z=15&t=q&key=&output=embed" width="875" height="440" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        
          <div class="right">
              <div class="content">
                  <h2>Fairchild Community</h2>
                  <p>5 W Bong St, Fairchild AFB, <br /> WA 99011</p>
                  <h6>Opening Hours</h6>
                  <div class="hours">
                      <div class="day-time">
                          <span>Mon - Fri</span>
                          <span>..........................</span>
                          <span>2:30 p.m. - 6 p.m.</span>
                      </div>
                      <span>School Year</span>
                  </div>
                  <div class="hours">
                      <div class="day-time">
                          <span>Mon - Fri</span>
                          <span>..........................</span>
                          <span>1 p.m. - 6 p.m.</span>
                      </div>
                      <span>Summer Time</span>
                  </div>
                  <div class="hours">
                      <div class="day-time">
                          <span>Sat - Sun</span>
                          <span>..........................</span>
                          <span>Closed</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
</section>
`});

