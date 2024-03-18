web.SectionsGroup["WEB SECTIONS"] = ["bootstrap4/video-header","Slider/Slider-1","Slider/Slider-3","hero/centered-section","hero/center-aligned-with-image","hero/left-aligned-with-image","hero/right-aligned-with-image","hero/sign-up-form","hero/border-with-cropped-image","hero/dark-hero","bootstrap4/photo-gallery","bootstrap4/one-column", "bootstrap4/two-column-section", "bootstrap4/three-column-section", "bootstrap4/four-column-section","Ads/slideAds"];



web.Sections.add("bootstrap4/video-header", {
  name: "Video Header",
dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">',        
  image: "../../../backend/admin/media/sys/slider/video.jpg",
  html:`
<section class="video" data-name="header-video">
<div class="overlay">

<div class="container h-100">
  <div class="d-flex h-100 text-center align-items-center">
    <div class="w-100 text-white">
      <h1 class="display-3">Video Header</h1>
      <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p>
    </div>
  </div>
</div>
</div>
<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
  <source src="../../../backend/admin/media/sys/slider/sample.mp4" type="video/mp4">
</video>




<style>
header.video {
position: relative;
background-color: black;
height: 75vh;
min-height: 25rem;
width: 100%;
overflow: hidden;
}

header.video video {
position: absolute;
top: 50%;
left: 50%;
min-width: 100%;
min-height: 100%;
width: auto;
height: auto;
z-index: 0;
-ms-transform: translateX(-50%) translateY(-50%);
-moz-transform: translateX(-50%) translateY(-50%);
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);
}

header.video .container {
position: relative;
z-index: 2;
}

header.video .overlay {
/*position: absolute;*/
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: black;
opacity: 0.5;
z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
header {
  background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
}
header video {
  display: none;
}
}
</style>
</section>
`,
});



web.Sections.add("Slider/Slider-1", {
  name: "Slider 1",
  image: window.mediaPath + "/sys/slider/slider-1.jpg",
  html: `
  <section class="slider1" data-name="slider1"><div class="main">
  <div class="slider-one">
  <div class="slider-one-image type">
    <div class="slider-text">
      <h1>Ride Fast or Stay Home</h1>
      <p>I try to get away and take my motorcycle on a ride whenever I can. I'll take my bike out before the
        show and just cruise.
      </p>
    </div>
  </div>
</div>
<div class="slider-two">
  <div class="slider-two-image type">
    <div class="slider-text">
      <h1>Shine Like a diamond in the Dark</h1>
      <p>People are like stained glass windows, they sparkle and shine when the sun is out, but when darkness sets in their true beauty is revealed only if there is a light from within.
      </p>
    </div>
  </div>
</div>
<div class="slider-three">
  <div class="slider-three-image type">
    <div class="slider-text">
      <h1>leave sooner, drive slower, live longer</h1>
      <p>driving is not my hobby it's my feeling. I only love FAST CARS because I don't believe slow and
        steady wins the race.</p>
    </div>
  </div>
</div>
<div class="slider-four">
  <div class="slider-four-image type">
    <div class="slider-text">
      <h1>Girl in Dark</h1>
      <p>If you can make a woman laugh, you can make her do anything.” “All little girls should be told they
        are pretty, even if they aren't.” “A girl should be two things: classy and fabulous</p>
    </div>
  </div>
</div>
</div>


  <style>
  .main{
    position:relative;
    height:70vh;
    width:100%;
    color:#fff;
    }
  .slider-one,
  .slider-two,
  .slider-three,
  .slider-four {
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 0;
    left: 0;
    animation: slider-one 12s linear infinite;
  }
  .slider-one .slider-one-image,
  .slider-one .slider-two-image,
  .slider-one .slider-three-image,
  .slider-one .slider-four-image,
  .slider-two .slider-one-image,
  .slider-two .slider-two-image,
  .slider-two .slider-three-image,
  .slider-two .slider-four-image,
  .slider-three .slider-one-image,
  .slider-three .slider-two-image,
  .slider-three .slider-three-image,
  .slider-three .slider-four-image,
  .slider-four .slider-one-image,
  .slider-four .slider-two-image,
  .slider-four .slider-three-image,
  .slider-four .slider-four-image {
    width: 110%;
    height: 100%;
    background-image: url("../../../backend/admin/media/sys/slider/1s.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    animation: zoom-out 3s linear infinite;
  }
  .slider-one .slider-one-image .slider-text,
  .slider-one .slider-two-image .slider-text,
  .slider-one .slider-three-image .slider-text,
  .slider-one .slider-four-image .slider-text,
  .slider-two .slider-one-image .slider-text,
  .slider-two .slider-two-image .slider-text,
  .slider-two .slider-three-image .slider-text,
  .slider-two .slider-four-image .slider-text,
  .slider-three .slider-one-image .slider-text,
  .slider-three .slider-two-image .slider-text,
  .slider-three .slider-three-image .slider-text,
  .slider-three .slider-four-image .slider-text,
  .slider-four .slider-one-image .slider-text,
  .slider-four .slider-two-image .slider-text,
  .slider-four .slider-three-image .slider-text,
  .slider-four .slider-four-image .slider-text {
    position: absolute;
    top: 40%;
    left: 5%;
    color: #ffffff;
    width: 600px;
    text-transform: capitalize;
    animation: text-up 12s linear infinite;
    transform: translateY(100px);
    animation-delay: 0s;
  }
  .slider-one .slider-one-image .slider-text h1,
  .slider-one .slider-two-image .slider-text h1,
  .slider-one .slider-three-image .slider-text h1,
  .slider-one .slider-four-image .slider-text h1,
  .slider-two .slider-one-image .slider-text h1,
  .slider-two .slider-two-image .slider-text h1,
  .slider-two .slider-three-image .slider-text h1,
  .slider-two .slider-four-image .slider-text h1,
  .slider-three .slider-one-image .slider-text h1,
  .slider-three .slider-two-image .slider-text h1,
  .slider-three .slider-three-image .slider-text h1,
  .slider-three .slider-four-image .slider-text h1,
  .slider-four .slider-one-image .slider-text h1,
  .slider-four .slider-two-image .slider-text h1,
  .slider-four .slider-three-image .slider-text h1,
  .slider-four .slider-four-image .slider-text h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  .slider-one .slider-one-image .slider-text p,
  .slider-one .slider-two-image .slider-text p,
  .slider-one .slider-three-image .slider-text p,
  .slider-one .slider-four-image .slider-text p,
  .slider-two .slider-one-image .slider-text p,
  .slider-two .slider-two-image .slider-text p,
  .slider-two .slider-three-image .slider-text p,
  .slider-two .slider-four-image .slider-text p,
  .slider-three .slider-one-image .slider-text p,
  .slider-three .slider-two-image .slider-text p,
  .slider-three .slider-three-image .slider-text p,
  .slider-three .slider-four-image .slider-text p,
  .slider-four .slider-one-image .slider-text p,
  .slider-four .slider-two-image .slider-text p,
  .slider-four .slider-three-image .slider-text p,
  .slider-four .slider-four-image .slider-text p {
    font-size: 18px;
    line-height: 28px;
  }
  
  .slider-two {
    animation: slider-two 12s linear infinite;
  }
  .slider-two .slider-two-image {
    background-image: url("../../../backend/admin/media/sys/slider/2s.jpg");
  }
  .slider-two .slider-two-image .slider-text {
    animation-delay: 3s;
  }
  
  .slider-three {
    animation: slider-three 12s linear infinite;
  }
  .slider-three .slider-three-image {
    background-image: url("../../../backend/admin/media/sys/slider/3s.jpg");
  }
  .slider-three .slider-three-image .slider-text {
    animation-delay: 6s;
  }
  
  .slider-four {
    animation: slider-four 12s linear infinite;
  }
  .slider-four .slider-four-image {
    background-image: url("../../../backend/admin/media/sys/slider/4s.jpg");
  }
  .slider-four .slider-four-image .slider-text {
    animation-delay: 9s;
  }
  
  @keyframes text-up {
    10% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes zoom-out {
    100% {
      width: 100%;
    }
  }
  @keyframes slider-one {
    0% {
      visibility: visible;
    }
    25% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    75% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
  @keyframes slider-two {
    0% {
      visibility: hidden;
    }
    25% {
      visibility: hidden;
    }
    50% {
      visibility: visible;
    }
    75% {
      visibility: hidden;
    }
    100% {
      visibility: hidden;
    }
  }
  @keyframes slider-three {
    0% {
      visibility: hidden;
    }
    25% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    75% {
      visibility: visible;
    }
    100% {
      visibility: hidden;
    }
  }
  @keyframes slider-four {
    0% {
      visibility: hidden;
    }
    25% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    75% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
  </style>
  
  
  
</section>
`
});




web.Sections.add("Slider/Slider-3", {
  name: "Slider 3",
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

web.Sections.add("hero/sign-up-form", {
  name: "Sign Up Form",
  image: "../../../backend/admin/media/sys/sign-up-form.png",
  html: `<section><div class="container col-xl-10 col-xxl-8 px-4 py-5">
  <div class="row align-items-center g-lg-5 py-5">
    <div class="col-lg-7 text-center text-lg-start">
      <h1 class="display-4 fw-bold lh-1  mb-3">Sign Up Form</h1>
      <p class="col-lg-10 fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="col-md-10 mx-auto col-lg-5">
      <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
      </form>
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


web.Sections.add("hero/dark-hero", {
  name: "Dark Hero",
  image: "../../../backend/admin/media/sys/hero6.jpg",
  html: `<header><div class="container my-5 __web-inspector-hide-shortcut__">
  <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Dark Hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="#" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">About Us</a>
        <a href="#" class="btn btn-outline-light btn-lg px-4">Contact Us</a>
        </div>
      </div>
    </div>
  </div></header>`
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




web.Sections.add("bootstrap4/about-team", {
  name: "About and Team Section",
dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">',        
  image: "https://assets.startbootstrap.com/img/screenshots/snippets/about-team.jpg",
  html:`
<section data-name="about-team">    
<header class="bg-primary text-center py-5 mb-4">
<div class="container">
  <h1 class="font-weight-light text-white">Meet the Team</h1>
</div>
</header>

<div class="container">
<div class="row">
  <!-- Team Member 1 -->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-0 shadow">
      <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title mb-0">Team Member</h5>
        <div class="card-text text-black-50">Web Developer</div>
      </div>
    </div>
  </div>
  <!-- Team Member 2 -->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-0 shadow">
      <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title mb-0">Team Member</h5>
        <div class="card-text text-black-50">Web Developer</div>
      </div>
    </div>
  </div>
  <!-- Team Member 3 -->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-0 shadow">
      <img src="https://source.unsplash.com/sNut2MqSmds/500x350" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title mb-0">Team Member</h5>
        <div class="card-text text-black-50">Web Developer</div>
      </div>
    </div>
  </div>
  <!-- Team Member 4 -->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-0 shadow">
      <img src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title mb-0">Team Member</h5>
        <div class="card-text text-black-50">Web Developer</div>
      </div>
    </div>
  </div>
</div>
<!-- /.row -->

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


web.Sections.add("bootstrap4/four-column-section", {
  name: "Four Column Layout",
dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">',
image: window.mediaPath + "/sys/four-column-section.png",        
  html:`
<section data-name="four-column-section">
<div class="container">

<!-- Page Heading -->
<h1 class="my-4">Four Column Layout</h1>
<div class="row">
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-2.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../../../backend/admin/media/sys/snippets-sample-1.jpg" alt="Sample"></a>
      <div class="card-body">
        <h4 class="card-title"><a href="#" class="text-decoration-none">Why do we use it</a></h4>
        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</div>
<!-- /.row -->

</div>
<section>
`,
});

web.SectionsGroup['AFB HOME SECTIONS'] =[ "bootstrap4/embed-events","bootstrap4/header-banner", "bootstrap4/2col-banner", "bootstrap4/afb-slider", "bootstrap4/afb-heading", "bootstrap4/3col-card", "bootstrap4/passport-ban","bootstrap4/ice-ban", "bootstrap4/gocontact"];


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





web.Sections.add("bootstrap4/header-banner", {
  name: "Home Banner",
dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">',
image: window.mediaPath + "/sys/afb/plane.jpg",      
  html:`
  <section title="HOME BAN"><div class="header-banner">
  <div class="carousel-inner slider-3 home-banner">
    <div class="slider-item active" data-id="1">     
      <div class="carousel-caption d-md-block">
      <p>WELCOME TO THE 92 FSS</p>
        <h1>REFUELING THE</br> FAIRCHILD COMMUNITY</br> WITH FUN, FAMILY & </br> FRIENDS</h1> 
        <a class="btn" href="#">Explore</a>       
      </div>
    </div>
</div></section>
`});




web.Sections.add("bootstrap4/2col-banner", {
  name: "Two Column Banner",
  dragHtml: '<img src="' + web.baseUrl + 'icons/image.svg">',
  image: window.mediaPath + "/sys/afb/2colban.jpg",
  html: `
  
  <section title="2-COL-BAN" class="afbhome">
<div class="slide">
<div class="slidebg">
<div class="caption-box">
    <div class="row">
      <div class="caption col-sm-9"><h2>FIND CIVILIAN JOBS ON BASE</h2> 
    <p>Working at Fairchild has lots of advantages you wont find anywhere else.</br>
    It's like a small city on Base with Civilian access to all kinds of perks:</p></div>
      <div class="caption col-sm-3"><a class="btn btnpass" href="#">Explore</a></div>
    </div>
  </div>

<div class="2col-textbox">
<div class="row parallels">
      <div class="col-sm-6"><div class="card"><div class="card-body"><ul class="list-group">
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Excellent pay scales
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Paid federal holidays annual & sick leave
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Job Flexibilitys
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Unmatched benefits & retirement packages
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Training & education assistance
  </li>
</ul><ul>
                
                
                
            </ul>											  </div>		</div></div>
      <div class="col-sm-6"><div class="card">		  		  <div class="card-body"><ul class="list-group">
    <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Excellent pay scales
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Paid federal holidays annual & sick leave
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Job Flexibilitys
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Unmatched benefits & retirement packages
  </li>
  <li class="list-group-ban"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="Layer_2" data-name="Layer 2"><g id="done-all"><g id="done-all-2" data-name="done-all"><rect class="cls-1"></rect><path class="cls-2" d="M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z"></path><path class="cls-2" d="M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z"></path><path class="cls-2" d="M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z"></path></g></g></g></svg>
  Training & education assistance
  </li>  
</ul><ul>	
                
                
            </ul></div></div></div>
      <div class="container text-center" >
      <div class="caption" style="margin-top:10%;"><h2 style="text-align:center;">WE LOVE OUR ADVERTISERS</h2> 
    <p style="text-align:center;">They help us fund the FUN at Fairchild.</p></div>
          </div>
    </div>
 </div>
<</div>
 </div> 
</section>

`});




web.Sections.add("bootstrap4/afb-slider", {
  name: "AFB Slider",
  image: window.mediaPath + "/sys/afb/afbslider.jpg",
  html: `
  
  <section class="afbhome" title="ad slider">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'>


<!-- partial:index.partial.html -->
<div id="slider">
  <header>
    <div>
      <img src="https://images.unsplash.com/photo-1598538085731-05ab942009af?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
    </div>
  
  </header>
  <header>
    <div>
      <img src="https://images.unsplash.com/photo-1598534453620-3bd81406f672?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
    </div>

  </header>
  <header>
    <div>
      <img src="https://images.unsplash.com/photo-1599423423924-1e1e4103a585?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
    </div>    
  </header>
  <header>
  <div>
    <img src="https://images.unsplash.com/photo-1598538085731-05ab942009af?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
  </div>

</header>
<header>
  <div>
    <img src="https://images.unsplash.com/photo-1598534453620-3bd81406f672?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
  </div>

</header>
<header>
  <div>
    <img src="https://images.unsplash.com/photo-1599423423924-1e1e4103a585?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
  </div>    
</header>
  <div class="frame"><p>Paid Advertisement, No Fedral Endorsement Intended.</p></div>
  <div width="100" title="arrow-circle-right" class="next"></div>
  <div width="100" title="arrow-circle-left" class="prev"></div>

</div>
<!-- partial -->

  <script  src="../../../backend/admin/js/ss-script.js"></script>
</section>

`});



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


web.Sections.add("bootstrap4/passport-ban", {
  name: "Passport Banner",
  image: window.mediaPath + "/sys/afb/passban.jpg",
  html: `
  
  <section  title="PASSPORT-BAN" class="afbhome">
  <div class="pass container-fluid" style="background-image: url(&quot;../../../backend/admin/media/needle.jpeg&quot;);">
  <a class="btn btnpass" href="#">Find Fun</a>
  </div>
  </section>

`});

web.Sections.add("bootstrap4/ice-ban", {
  name: "Ice Banner",
  image: window.mediaPath + "/sys/afb/iceban.jpg",
  html: `
 
  <section title="ICE-BAN" class="afbhome"><div class="ice container-fluid" style="background-image: url(&quot;../../../backend/admin/media/need.png&quot;);">
                  
  <div class="container text-center">
  <div class="row">
  <div class="col-sm-3"><img class="iceimg" src="../../../backend/admin/media/ice.png" class="mw-00 align-center"></div>
  <div class="col-sm-6"><h2>SEE SOMETHING YOU LOVE<br>OR KNOW WAY TO IMPROVE?</h2>
  <p>We'd love to hear your feedback! <br> You do not need to fill out personal information to submit.</p>
</div>
  <div class="col-sm-3"><a class="btn btnice" href="#">Start Here</a></div>
</div>
  </div>     
  </div></section>

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





web.SectionsGroup["FAMILY SECTIONS"] = ["family/fam-ban","family/3colban","family/colbanner", "family/3colsec", "family/contact", ];

web.Sections.add("family/contact", {
  name: "Contact Us",
  image: window.mediaPath + "/sys/afb/gocon.jpg",
  html: ` 
  <section class="pbc-family-7866">

  <div class="container">

      <div class="parent">
      <div class="left" data-component-maps><iframe frameborder="0" src="https://maps.google.com/maps?q=Bucharest&z=15&t=q&key=&output=embed" width="875" height="440" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
         
          <div class="right">
              <div class="content">
                  <h2>Preteen & Teen Center</h2>
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


web.Sections.add("family/3colban", {
  name: "3 Column Banner",
  image: window.mediaPath + "/sys/afb/3colban.jpg",
  html: ` 
  <section>
  <div class="pbc-family-7862">

  <span class="cercle-blend"></span>
      
  <div class="container">

      <div class="row">
          <div class="col-lg-8 col-md-12">
              <div class="content">
                  <h2>Meet Your Preteen & Teen Program</h2>
                  <p>The Preteen and Teen programs are co-located in one building. Membership is required for participation in the program and a minimal membership fee applies. Annual and summer memberships are available with daily drop-in fees for non members only $5. There are extended hours during the summer, winter, and at spring break.</p>
                  <p class="text-info">The YP Team looks forward to meeting you and your preteen or teen, call for a tour, or more information, (509) 247-8043.</p>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-lg-4 col-md-5 col-sm-12">
              <ul class="content-list">
                  <li>Torch Club</li>
                  <li>Keystone Club</li>
                  <li>Air Force Teen Council</li>
                  <li>4H</li>
              </ul>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-12">
              <ul class="content-list">
                  <li>Torch Club</li>
                  <li>Keystone Club</li>
                  <li>Air Force Teen Council</li>
                  <li>4H</li>
              </ul>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-12">
              <ul class="content-list">
                  <li>Torch Club</li>
                  <li>Keystone Club</li>
                  <li>Air Force Teen Council</li>
                  <li>4H</li>
              </ul>
          </div>
      </div>

  </div></div>
</section>
`});



web.Sections.add("family/fam-ban", {
  name: "Family Banner",
  image: window.mediaPath + "/sys/afb/famban.jpg",
  html: ` 
  <section>
  <div class="pbc-family-7861">
        <div class="container">
            <div class="parent">
                <div class="left">
                    <div class="content">
                        <img src="../../../backend/admin/media/family-7861-logo.png" alt="" width="120" height="120" loading="lazy" />
                        <h2>Preteen and Teen <br /> Center</h2>
                        <p>he 92 FSS at Fairchild AFB, offers a wide range of educationally enhanced programs, classes, and events, that provide a safe and FUN-filled environment supervised by a caring and well-trained staff. By engaging your young person, seen children improve everything from their confidence to social skills, and even their grades. also help your teen look forward by exploring career and college options too!</p>
                    </div>
                </div>
                <div class="right">
                    <img src="../../../backend/admin/media/family-7861-back.png" alt="" width="438" height="500" loading="lazy" />
                    <span class="box"></span>
                    <span class="cercle"></span>
                </div>
            </div>
        </div></div>
    </section>

`});


web.Sections.add("family/3colsec", {
  name: "Family Banner",
  image: window.mediaPath + "/sys/afb/3colsec.jpg",
  html: ` 
  
  <section class="pbc-family-7863">

  <div class="container">


      <div class="row">

          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="parent">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-family-7863-1.png" alt="Image" loading="lazy" width="415" height="596" />
                      <div class="content">
                          <h4>Torch Club</h4>
                          <h5>Pre-Teen Programs</h5>
                          <p>Torch Club gives youth, ages 9-13, the opportunity to develop their leadership skills through service to their Youth Center and community. Torch Club members learn to work together to plan and implement activities in four areas: education, health and fitness, service to club and community, and social recreation.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="parent">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-family-7863-2.png" alt="Image" loading="lazy" width="415" height="596" />
                      <div class="content">
                          <h4>Torch Club</h4>
                          <h5>Pre-Teen Programs</h5>
                          <p>Torch Club gives youth, ages 9-13, the opportunity to develop their leadership skills through service to their Youth Center and community. Torch Club members learn to work together to plan and implement activities in four areas: education, health and fitness, service to club and community, and social recreation.</p>
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="parent">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-family-7863-3.png" alt="Image" loading="lazy" width="415" height="596" />
                      <div class="content">
                          <h4>Torch Club</h4>
                          <h5>Pre-Teen Programs</h5>
                          <p>Torch Club gives youth, ages 9-13, the opportunity to develop their leadership skills through service to their Youth Center and community. Torch Club members learn to work together to plan and implement activities in four areas: education, health and fitness, service to club and community, and social recreation.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="parent">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-family-7863-4.png" alt="Image" loading="lazy" width="415" height="596" />
                      <div class="content">
                          <h4>Torch Club</h4>
                          <h5>Pre-Teen Programs</h5>
                          <p>Torch Club gives youth, ages 9-13, the opportunity to develop their leadership skills through service to their Youth Center and community. Torch Club members learn to work together to plan and implement activities in four areas: education, health and fitness, service to club and community, and social recreation.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="parent">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-family-7863-5.png" alt="Image" loading="lazy" width="415" height="596" />
                      <div class="content">
                          <h4>Torch Club</h4>
                          <h5>Pre-Teen Programs</h5>
                          <p>Torch Club gives youth, ages 9-13, the opportunity to develop their leadership skills through service to their Youth Center and community. Torch Club members learn to work together to plan and implement activities in four areas: education, health and fitness, service to club and community, and social recreation.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="parent">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-family-7863-6.png" alt="Image" loading="lazy" width="415" height="596" />
                      <div class="content">
                          <h4>Torch Club</h4>
                          <h5>Pre-Teen Programs</h5>
                          <p>Torch Club gives youth, ages 9-13, the opportunity to develop their leadership skills through service to their Youth Center and community. Torch Club members learn to work together to plan and implement activities in four areas: education, health and fitness, service to club and community, and social recreation.</p>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>

  </div>
</section>



`});





web.Sections.add("family/colbanner", {
  name: "Banner Column",
  image: window.mediaPath + "/sys/afb/colbanner.jpg",
  html: ` 
  <section>
  <div class="pbc-family-7864">

  <div class="container">

      <div class="parent">
          <div class="left">
              <div class="content">
                  <h2>Start a Career in <br /> Child Care</h2>
                  <h5>Come Grow With.Us!</h5>
                  <p>Fairchild AFB Child & Youth Program actively hiring full-time and part-time positions within our Child Development Center, School Age Care , and Teen Center.</p>
              </div>
          </div>
          <div class="right">
              <div class="right-inner">
                  <div class="boxs">
                      <h4>Benefits:</h4>
                      <ul>
                          <li>100% Free child for your 1st child</li>
                          <li>25% reduction on child care fees for 2nd child</li>
                          <li>Training, Coaching & Professional Development</li>
                          <li>Health & Life Insurance for Regular Employees</li>
                          <li>Retirement & 401K for Regular Employees</li>
                          <li>Career Advancement Opportunities</li>
                          <li>Subsidized Assistance</li>
                          <li>Hiring Bonuses</li>
                      </ul>
                  </div>
              </div>
              <div class="right-inner">
                  <div class="boxs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                          <path d="M27.9998 5.16663C15.1198 5.16663 4.6665 15.62 4.6665 28.5C4.6665 41.38 15.1198 51.8333 27.9998 51.8333C40.8798 51.8333 51.3332 41.38 51.3332 28.5C51.3332 15.62 40.8798 5.16663 27.9998 5.16663ZM45.4065 21.78L38.9198 24.4633C37.7298 21.29 35.2332 18.77 32.0365 17.6033L34.7198 11.1166C39.6198 12.9833 43.5165 16.88 45.4065 21.78ZM27.9998 35.5C24.1265 35.5 20.9998 32.3733 20.9998 28.5C20.9998 24.6266 24.1265 21.5 27.9998 21.5C31.8732 21.5 34.9998 24.6266 34.9998 28.5C34.9998 32.3733 31.8732 35.5 27.9998 35.5ZM21.3032 11.0933L24.0332 17.58C20.8132 18.7466 18.2698 21.29 17.0798 24.51L10.5932 21.8033C12.4832 16.88 16.3798 12.9833 21.3032 11.0933ZM10.5932 35.1966L17.0798 32.5133C18.2698 35.7333 20.7898 38.2533 24.0098 39.42L21.2798 45.9066C16.3798 44.0166 12.4832 40.12 10.5932 35.1966ZM34.7198 45.9066L32.0365 39.42C35.2332 38.23 37.7532 35.71 38.9198 32.49L45.4065 35.22C43.5165 40.12 39.6198 44.0166 34.7198 45.9066Z" fill="#F8FAFC"/>
                      </svg>
                      <h4>Help Getting Started</h4>
                      <p>Click here for help to start your civilian career!</p>
                      <a href="#">Tell Me More!</a>
                  </div>
                  <div class="boxs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                          <path d="M8.16667 43.6667V18H45.5V25.6767C47.18 26.19 48.7667 26.9367 50.1667 27.94V18C50.1667 15.41 48.09 13.3333 45.5 13.3333H36.1667V8.66667C36.1667 6.07667 34.09 4 31.5 4H22.1667C19.5767 4 17.5 6.07667 17.5 8.66667V13.3333H8.16667C5.57667 13.3333 3.52333 15.41 3.52333 18L3.5 43.6667C3.5 46.2567 5.57667 48.3333 8.16667 48.3333H26.0867C25.3867 46.8867 24.92 45.3233 24.6867 43.6667H8.16667ZM22.1667 8.66667H31.5V13.3333H22.1667V8.66667Z" fill="#F8FAFC"/>
                          <path d="M40.8333 29.6667C34.3933 29.6667 29.1667 34.8933 29.1667 41.3333C29.1667 47.7733 34.3933 53 40.8333 53C47.2733 53 52.5 47.7733 52.5 41.3333C52.5 34.8933 47.2733 29.6667 40.8333 29.6667ZM44.6833 46.8167L39.6667 41.8V34.3333H42V40.8433L46.3167 45.16L44.6833 46.8167Z" fill="#F8FAFC"/>
                      </svg>
                      <h4>USAjobs.gov</h4>
                      <p>Click here for available jobs!</p>
                      <a href="#">Apply Now</a>
                  </div>
              </div>
          </div>
      </div>

  </div></div>
</section>


`});




web.SectionsGroup["FITNESS SECTIONS"] = ["fitness/smallicons", "fitness/2colsec-fit", "fitness/2colsec-fit-row1","fitness/2colsec-fit-row2",  "fitness/fittables", "fitness/fit3col","fitness/fitchall", "fitness/fitgall" ];


web.Sections.add("fitness/smallicons", {
  name: "Small Icons",
  image: window.mediaPath + "/sys/afb/smallicons.jpg",
  html: ` 
  <section class="pbc-fitness-7861">
        <div class="container">
            <h2>Living Healthier</h2>
            <ul>
                <li>
                    <img src="../../../backend/admin/media/pbc-fitness-7861-1.png" alt="Image" width="60" height="60" loading="lazy" />
                    <h4>How It Works</h4>
                </li> 
                <li>
                    <img src="../../../backend/admin/media/pbc-fitness-7861-2.png" alt="Image" width="60" height="60" loading="lazy" />
                    <h4>Build a Workout</h4>
                </li> 
                <li>
                    <img src="../../../backend/admin/media/pbc-fitness-7861-3.png" alt="Image" width="60" height="60" loading="lazy" />
                    <h4>Mission Fit</h4>
                </li> 
                <li>
                    <img src="../../../backend/admin/media/pbc-fitness-7861-4.png" alt="Image" width="60" height="60" loading="lazy" />
                    <h4>Fitness Challenges</h4>
                </li> 
                <li>
                    <img src="../../../backend/admin/media/pbc-fitness-7861-5.png" alt="Image" width="60" height="60" loading="lazy" />
                    <h4>Calendar</h4>
                </li> 
            </ul>
        </div>
    </section>



`});




web.Sections.add("fitness/2colsec-fit", {
  name: "Fitness 2 Col",
  image: window.mediaPath + "/sys/afb/2colsec-fit.jpg",
  html: ` 

  <section class="pbc-fitness-7862">
  <div class="container">
      <h2>How It Works</h2>

      <div class="pbc-modern-block-7862">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-1.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>The solution for STAYING fit</h4>
              <p>Welcome to Commit to be Fit 2.0. What began as a fully online diet and fitness program during COVID-19 has evolved along with the latest advances in exercise science, human performance, sport psychology and wellness. Our goal then and now is to help you improve your health and fitness so that you can live your best life.</p>
              <p>Before beginning this, or any workout, you should consult with your physician.</p>
          </div>
      </div>


      <div class="pbc-modern-block-7862 reverse">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-2.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>TRACK Your Progress</h4>
              <p>Accountability helps you stay focused. There are two ways to track your progress.</p>
              <ul>
                  <li>At the Fitness Center front desk, get a Commit to Be Fit 2.0 Punch card. Have it punched for every workout you complete. Turn your card in and pick up a new one each month.</li>
                  <li>Use your favorite apps to track your progress and then report it here on the Fitness Log (below).</li>
              </ul>
              <a href="#" class="btn-primary">Your Fitness Log</a>
          </div>
      </div>

      
      <div class="pbc-modern-block-7862">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-3.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>Your WORKOUTS</h4>
              <p>This is a self-directed process. We do not care how you exercise. You can choose from the workouts you find on this page or create your own. It's your choice!</p>
              <ul>
                  <li class="text-primary">We have ideas on this page to help you create your own workout!</li>
              </ul>
              <a href="#" class="btn-primary">Download Aerobic Schedule</a>
          </div>
      </div>

      <div class="pbc-modern-block-7862 reverse">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-4.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>Get RESULTS</h4>
              <p>John Gahagan, and the Fitness Team, have helped thousands of people reach their fitness goals. This program is the product of years of boots-on-the-ground experience with one goal: to help you commit to be fit!</p>
              <p>Here is a booklet for those of you who like to hold things in your hand. It's 17 pages of great material to keep you focused to achieve SUCCESS!</p>
              <ul>
                  <li class="text-primary">Commit to Be Fit Guide</li>
              </ul>
          </div>
      </div>


      <div class="pbc-modern-block-7862">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-5.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>Download 'Mission Fit'</h4>
              <p>We suggest that you download 'Mission Fit' an Air Force exercise app that provides a 12-week program of exercise routines, along with a library of 90+ exercises with detailed instructions including video, images, and textual description. The app guides users through workout routines by navigating workout weeks, days, and exercise routine instructions. It's terrific; give it a try.</p>
              <a href="#" class="btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
                      <g clip-path="url(#clip0_4653_9032)">
                        <path d="M5.73606 24.8624C3.85229 24.4852 2.69591 23.2107 1.7965 21.6357C0.963416 20.1726 0.507497 18.5811 0.244307 16.9273C0.0702286 15.8393 -0.0499682 14.741 0.020492 13.6426C0.186281 10.9755 1.35924 8.90728 3.79633 7.68459C5.17445 6.99242 6.62718 6.92611 8.09648 7.40068C8.72648 7.60377 9.3544 7.82344 9.97611 8.0514C10.2994 8.16952 10.6082 8.1716 10.9335 8.06176C11.7749 7.77785 12.5914 7.40897 13.468 7.23489C15.3891 6.85357 17.0781 7.3613 18.564 8.61301C19.0572 9.02955 19.4427 9.53935 19.8302 10.0512C19.94 10.1942 19.9172 10.2626 19.7473 10.3082C19.3349 10.4222 18.9142 10.5175 18.5308 10.7206C17.0636 11.5019 16.2574 12.7121 16.2305 14.3866C16.1932 16.4859 17.6729 18.208 19.7494 18.5293C20.3213 18.6184 20.3151 18.6163 20.1431 19.1717C19.7203 20.5312 19.138 21.8119 18.2282 22.9206C17.4843 23.8262 16.5952 24.5287 15.4223 24.8002C15.3311 24.8209 15.2399 24.8417 15.1508 24.8645C14.7612 24.8645 14.3695 24.8645 13.9799 24.8645C13.2587 24.7484 12.5914 24.4769 11.9283 24.1723C10.9729 23.735 9.98233 23.7309 9.0249 24.1578C8.35345 24.4583 7.68201 24.7401 6.95461 24.8645C6.54635 24.8624 6.14017 24.8624 5.73606 24.8624ZM1.10434 14.1151C1.10848 14.4674 1.12506 14.8177 1.14786 15.1679C1.25147 16.718 1.54782 18.2288 2.10736 19.6794C2.584 20.9145 3.20985 22.0606 4.22738 22.9455C4.87396 23.5071 5.61172 23.8283 6.49247 23.7827C7.13076 23.7495 7.71309 23.563 8.27885 23.2832C9.11401 22.8708 9.99062 22.674 10.9294 22.7797C11.5739 22.8522 12.1749 23.0491 12.751 23.3413C13.524 23.7309 14.3446 23.8925 15.2026 23.7205C15.9404 23.5734 16.5268 23.1485 17.0408 22.618C17.8552 21.7787 18.3857 20.7695 18.8127 19.696C18.8873 19.5095 18.85 19.4452 18.6634 19.3831C16.4895 18.6619 15.0513 16.5667 15.1321 14.3617C15.2067 12.3287 16.1517 10.818 17.9153 9.82119C18.0873 9.72379 18.1143 9.67406 17.9588 9.53728C16.6947 8.4265 15.2482 7.96436 13.582 8.33117C12.7655 8.51146 11.9987 8.85547 11.205 9.11452C10.7056 9.27824 10.2124 9.2886 9.71499 9.11452C9.08085 8.89278 8.45085 8.66482 7.81049 8.46173C6.00132 7.88975 4.37867 8.26071 2.98604 9.52277C1.64108 10.7434 1.08154 12.3163 1.10434 14.1151Z" fill="#3595F6"/>
                        <path d="M10.5539 6.65053C9.83275 6.64638 9.89285 6.72513 9.90114 6.09514C9.91564 5.14599 10.0296 4.21343 10.4462 3.34097C11.1197 1.92762 12.3051 1.23131 13.793 0.963973C14.3567 0.862427 14.9245 0.862427 15.4944 0.864499C15.6271 0.864499 15.7037 0.905947 15.7037 1.04687C15.6996 2.31308 15.5918 3.55649 14.8748 4.66106C14.1785 5.73247 13.1465 6.26921 11.93 6.50961C11.4471 6.60701 10.958 6.63809 10.5539 6.65053ZM11.2316 5.50866C12.0668 5.42784 13.0159 5.16672 13.6728 4.44761C14.2738 3.79067 14.4707 2.98245 14.5681 2.13278C14.5826 2.00222 14.5184 1.96907 14.3982 1.98979C14.2054 2.02295 14.0106 2.03745 13.82 2.0789C12.0502 2.44364 11.2523 3.57929 11.0451 5.25583C11.0244 5.42162 11.0534 5.54389 11.2316 5.50866Z" fill="#3595F6"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_4653_9032">
                          <rect width="20.2449" height="24" fill="white" transform="translate(0 0.862549)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  Get the App
              </a>
              <a href="#" class="btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
                      <g clip-path="url(#clip0_4653_9038)">
                        <path d="M7.11549 24.8625C6.58279 24.7077 6.1275 24.4406 5.80424 23.9731C5.53562 23.5861 5.42635 23.1521 5.42331 22.6892C5.41876 21.9698 5.41421 21.2505 5.42635 20.5311C5.42938 20.3035 5.37323 20.2154 5.12737 20.2154C3.98004 20.2154 3.35173 19.5704 3.35021 18.4185C3.35021 18.2637 3.39878 18.0498 3.31834 17.9663C3.21363 17.8601 3.04213 18.0224 2.89644 18.0604C1.55788 18.4155 0.254223 17.4321 0.24967 16.045C0.2436 14.1297 0.2436 12.2129 0.24967 10.2976C0.254223 8.83615 1.70509 7.83754 3.07552 8.34444C3.35932 8.44915 3.36084 8.44915 3.38815 8.135C3.50805 6.76153 4.01494 5.54742 4.88 4.479C5.26093 4.00853 5.69194 3.58663 6.19428 3.24971C6.36273 3.1374 6.35818 3.05393 6.25043 2.90217C5.95297 2.48178 5.67676 2.04622 5.38234 1.62128C5.28673 1.48317 5.27914 1.39515 5.43697 1.30257C5.62516 1.19179 5.80728 1.06734 5.98332 0.93834C6.11688 0.839693 6.19428 0.865493 6.28382 1.00056C6.58735 1.46496 6.90757 1.91874 7.20806 2.38617C7.30974 2.54401 7.39928 2.5607 7.56926 2.49241C9.28116 1.80795 10.9961 1.81402 12.708 2.49241C12.8628 2.55311 12.9402 2.53794 13.0313 2.39679C13.3363 1.92329 13.6596 1.46193 13.9661 0.98994C14.0617 0.842728 14.1467 0.824517 14.2848 0.929234C14.4472 1.05216 14.6157 1.16599 14.7917 1.26919C14.9571 1.36631 14.9799 1.46041 14.8661 1.6228C14.5701 2.0447 14.2939 2.48178 13.998 2.9052C13.8933 3.05393 13.9069 3.13133 14.0572 3.23909C15.5657 4.33027 16.4869 5.79631 16.8163 7.62963C16.8542 7.83603 16.8815 8.04698 16.8861 8.25793C16.8906 8.44764 16.9422 8.45826 17.1061 8.39148C18.258 7.92101 19.4994 8.47495 19.9122 9.63291C19.9881 9.84842 20.0321 10.07 20.0321 10.2992C20.0321 12.2144 20.0412 14.1312 20.0291 16.0465C20.02 17.5231 18.5646 18.5096 17.1775 17.9936C16.927 17.8995 16.9286 17.8995 16.924 18.1712C16.921 18.3745 16.9301 18.5764 16.9028 18.7797C16.7829 19.6463 16.1546 20.2094 15.2743 20.2245C14.775 20.2336 14.8297 20.1729 14.8281 20.6829C14.8266 21.3628 14.8281 22.0427 14.8266 22.7241C14.8251 23.7485 14.2879 24.483 13.2999 24.8169C13.2559 24.8321 13.2119 24.8503 13.1694 24.8655C12.8886 24.8655 12.6063 24.8655 12.3256 24.8655C12.2967 24.8534 12.2679 24.8412 12.239 24.8321C11.1706 24.4997 10.6273 23.7606 10.6258 22.6376C10.6258 22.0594 10.6258 21.4811 10.6258 20.9029C10.6258 20.22 10.6258 20.2306 9.95044 20.2215C9.70458 20.2185 9.6454 20.3065 9.64995 20.5357C9.66209 21.2307 9.6545 21.9273 9.6545 22.6224C9.6545 22.841 9.63781 23.061 9.58317 23.2735C9.3616 24.1264 8.79248 24.6287 7.96385 24.867C7.67853 24.8625 7.39625 24.8625 7.11549 24.8625ZM10.1493 9.30055C8.35843 9.30055 6.56913 9.30055 4.77832 9.30055C4.45202 9.30055 4.4505 9.30055 4.4505 9.61774C4.4505 9.97742 4.45354 10.3371 4.45354 10.6968C4.45202 13.292 4.4505 15.8886 4.4505 18.4838C4.4505 18.9543 4.61896 19.1227 5.08184 19.1243C5.44911 19.1258 5.81638 19.1243 6.18365 19.1243C6.51753 19.1243 6.51753 19.1258 6.51753 19.4627C6.51753 20.5569 6.5145 21.6511 6.51905 22.7469C6.52209 23.36 6.95917 23.7895 7.55257 23.7819C8.13079 23.7743 8.54662 23.3433 8.54966 22.7332C8.55421 21.6223 8.55573 20.5129 8.54814 19.402C8.54662 19.188 8.6134 19.1167 8.8289 19.1197C9.68941 19.1288 10.5484 19.1227 11.4089 19.1243C11.7155 19.1243 11.72 19.1288 11.72 19.443C11.7215 20.569 11.717 21.6951 11.723 22.8212C11.7246 23.2431 12.0038 23.6058 12.4014 23.7409C12.8066 23.879 13.2543 23.7424 13.5215 23.4101C13.6884 23.2022 13.7294 22.9639 13.7294 22.7074C13.7263 21.636 13.7279 20.5645 13.7294 19.4946C13.7294 19.1273 13.7309 19.1273 14.086 19.1258C14.4381 19.1258 14.7902 19.1258 15.1408 19.1258C15.6598 19.1258 15.8237 18.9603 15.8237 18.4352C15.8237 15.4956 15.8237 12.5559 15.8237 9.61622C15.8237 9.30359 15.8237 9.30359 15.5187 9.30207C13.7309 9.30055 11.9401 9.30055 10.1493 9.30055ZM10.1219 8.20329C11.9188 8.20329 13.7172 8.20329 15.5141 8.20329C15.7843 8.20329 15.7994 8.18205 15.7554 7.92101C15.7478 7.87548 15.7418 7.82844 15.7342 7.78139C15.2151 4.80378 12.4576 2.70943 9.39347 3.12678C6.83776 3.47432 4.97864 5.31067 4.5188 7.83754C4.45809 8.16839 4.48693 8.20329 4.82384 8.20329C6.59038 8.20329 8.3554 8.20329 10.1219 8.20329ZM16.9286 13.1554C16.9286 14.116 16.9301 15.0782 16.927 16.0389C16.927 16.2316 16.962 16.4092 17.0697 16.5731C17.3231 16.9571 17.7709 17.124 18.2186 16.998C18.6298 16.8827 18.9258 16.4881 18.9273 16.0283C18.9303 14.1449 18.9303 12.2615 18.9288 10.3781C18.9273 9.7437 18.4978 9.29296 17.9074 9.30359C17.4658 9.31117 16.8997 9.66934 16.921 10.3887C16.9498 11.3114 16.9286 12.2342 16.9286 13.1554ZM3.34718 13.1857C3.34718 12.2402 3.3487 11.2947 3.34718 10.3492C3.34566 9.76343 2.90554 9.30662 2.34098 9.30359C1.78552 9.30055 1.34693 9.73763 1.34541 10.328C1.33782 12.2266 1.34237 14.1251 1.34237 16.0237C1.34237 16.1982 1.36969 16.3652 1.4562 16.52C1.68081 16.9222 2.13306 17.1164 2.59898 17.0071C3.02544 16.907 3.34414 16.5048 3.34566 16.0434C3.3487 15.0919 3.34566 14.1388 3.34718 13.1857Z" fill="#3595F6"/>
                        <path d="M12.7429 5.61413C13.3515 5.6202 13.2741 5.54736 13.2741 6.15593C13.2741 6.78575 13.3606 6.71139 12.7126 6.71291C12.1177 6.71291 12.1784 6.78272 12.1784 6.17111C12.1768 5.52763 12.1116 5.62324 12.7429 5.61413Z" fill="#3595F6"/>
                        <path d="M8.0716 6.17722C8.0625 6.77365 8.15811 6.71598 7.54043 6.71446C6.94248 6.71294 6.98042 6.81007 6.9789 6.15293C6.97738 5.51552 6.95917 5.61872 7.51918 5.61872C8.16266 5.61569 8.06098 5.53829 8.0716 6.17722Z" fill="#3595F6"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_4653_9038">
                          <rect width="19.787" height="24" fill="white" transform="translate(0.245117 0.862549)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  Get the App
              </a>
          </div>
      </div>


      <div class="pbc-modern-block-7862 reverse">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-6.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>Earn 3 kinds of AWARDS</h4>
              <p>Each Punch card and Fitness Log you submit is tracked by Fitness Center Staff.</p>
              <p>Challenge Coin for all the Challenges (below) you complete.</p>
              <p><b>5K Pins for every Fitness 5K you complete.</b></p>
              <p>5K Pins for every Fitness 5K you complete.</p>
              <p>Check the Leader Board at the Fitness Center and see everyone's progress!</p>
          </div>
      </div>

  </div>
</section>



`});


web.Sections.add("fitness/2colsec-fit-row1", {
  name: "Fitness Row 1",
  image: window.mediaPath + "/sys/afb/fitnessrow1.jpg",
  html: ` 

  <section class="pbc-fitness-7862">
  <div class="container">
            <div class="pbc-modern-block-7862">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-1.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>The solution for STAYING fit</h4>
              <p>Welcome to Commit to be Fit 2.0. What began as a fully online diet and fitness program during COVID-19 has evolved along with the latest advances in exercise science, human performance, sport psychology and wellness. Our goal then and now is to help you improve your health and fitness so that you can live your best life.</p>
              <p>Before beginning this, or any workout, you should consult with your physician.</p>
          </div>
      </div>


      

  </div>
</section>



`});

web.Sections.add("fitness/2colsec-fit-row2", {
  name: "Fitness Row 2",
  image: window.mediaPath + "/sys/afb/fitnessrow2.jpg",
  html: ` 

  <section class="pbc-fitness-7862">
  <div class="container">     
      <div class="pbc-modern-block-7862 reverse">
          <div class="left">
              <img src="../../../backend/admin/media/pbc-fitness-7862-2.png" alt="Image" loading="lazy" width="552" height="532" />
          </div>
          <div class="right">
              <h4>The solution for STAYING fit</h4>
              <p>Welcome to Commit to be Fit 2.0. What began as a fully online diet and fitness program during COVID-19 has evolved along with the latest advances in exercise science, human performance, sport psychology and wellness. Our goal then and now is to help you improve your health and fitness so that you can live your best life.</p>
              <p>Before beginning this, or any workout, you should consult with your physician.</p>
          </div>
      </div>    

  </div>
</section>



`});



web.Sections.add("fitness/fittables", {
  name: "Fitness Tables",
  image: window.mediaPath + "/sys/afb/fittables.jpg",
  html: ` 


  <section class="pbc-fitness-7863">
  <div class="container">

      <div class="head">
          <h2>Workout to WIN Monthly Prizes</h2>
          <p>Each month your name is entered for a chance to win the following:</p>
      </div>

      <div class="parent">

          <div class="left">

              <div class="prizes-list-7863">
                  <h4>MAY</h4>
                  <div class="content">
                      <ul>
                          <li>Slick Rock Tanning: Free Float Pass</li>
                          <li>$10 Dutch Bros Gift Card</li>
                          <li>$25 Born Primitive Apparel Gift Card</li>
                          <li>2 Tickets to Village Center Cinemas in Mead</li>
                      </ul>
                  </div>
              </div>

              <div class="prizes-list-7863">
                  <h4>JUNE</h4>
                  <div class="content">
                      <ul>
                          <li>Free Single Class: BeYoutiful Hot Yoga Gift Card</li>
                          <li>$25 Born Primitive Apparel Gift Card</li>
                      </ul>
                  </div>
              </div>

              <div class="prizes-list-7863">
                  <h4>JULY</h4>
                  <div class="content">
                      <ul>
                          <li>Slick Rock Tanning: 7-Day Trial Pass</li>
                          <li>$15 Roam Roasters Gift Card</li>
                          <li>$25 Born Primitive Apparel Gift Card</li>
                          <li>2 Tickets to Village Center Cinemas in Mead</li>
                      </ul>
                  </div>
              </div>

          </div>

          <div class="center">

              
              <div class="prizes-list-7863">
                  <h4>AUGUST</h4>
                  <div class="content">
                      <ul>
                          <li>$10 Dutch Bros Gift Card</li>
                          <li>$25 Born Primitive Apparel Gift Card</li>
                      </ul>
                  </div>
              </div>
              
              <div class="prizes-list-7863">
                  <h4>SEPTEMBER</h4>
                  <div class="content">
                      <ul>
                          <li>$25 Commissary Gift Card</li>
                          <li>Free Single Class: BeYoutiful Hot Yoga</li>
                      </ul>
                  </div>
              </div>

              <div class="prizes-list-7863">
                  <h4>OCTOBER</h4>
                  <div class="content">
                      <ul>
                          <li>$50 Billie's Diner Gift Card</li>
                          <li>Free Single Class: BeYoutiful Hot Yoga Gift Card</li>
                      </ul>
                  </div>
              </div>
              

          </div>

          <div class="right">

              <div class="prizes-list-7863">
                  <h4>NOVEMBER</h4>
                  <div class="content">
                      <ul>
                          <li>Slick Rock Tanning: Free Float Pass</li>
                          <li>$10 Dutch Bros Gift Card</li>
                      </ul>
                  </div>
              </div>
              
              <div class="prizes-list-7863">
                  <h4>DECEMBER</h4>
                  <div class="content">
                      <ul>
                          <li>$10 Dutch Bros Gift Card</li>
                          <li>$25 Born Primitive Apparel Gift Card</li>
                          <li>Free Single Class BeYoutiful Hot Yoga</li>
                          <li>Slick Rock Tanning: 7-Day Trial Pass</li>
                          <li>La Rive Spa at Northern Quest Signature Massage Gift Card</li>
                      </ul>
                  </div>
              </div>
              
          </div>


      </div>

  </div>
</section>


`});


web.Sections.add("fitness/fit3col", {
  name: "Fitness 3 Col",
  image: window.mediaPath + "/sys/afb/fit3col.jpg",
  html: ` 
  

  <section class="pbc-fitness-7864">
  <div class="container">

      <div class="head">
          <h2>Building your own workout!</h2>
          <p>Read the US Government suggested guidelines (Click to Expand)</p>
          <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492L16.59 8.29492Z" fill="#1F1F1F"/>
              </svg>
          </span>
      </div>

     
      <div class="parent">

          <div class="box">
              <h4>Good Technique</h4>    
              <div class="content">
                  <ul>
                      <li>Stand tall</li>
                      <li>Chin level</li>
                      <li>Look ahead of you (not down at your feet)</li>
                      <li>Chest-up</li>
                      <li>Shoulders back and down  (not hunched under your ears)</li>
                      <li>Toes straight ahead</li>
                  </ul>
              </div>
          </div>
          <div class="box">
              <h4>Good Technique</h4>    
              <div class="content">
                  <ul>
                      <li>Stand tall</li>
                      <li>Chin level</li>
                      <li>Look ahead of you (not down at your feet)</li>
                      <li>Chest-up</li>
                      <li>Shoulders back and down  (not hunched under your ears)</li>
                      <li>Toes straight ahead</li>
                  </ul>
              </div>
          </div>
          <div class="box">
              <h4>Good Technique</h4>    
              <div class="content">
                  <ul>
                      <li>Stand tall</li>
                      <li>Chin level</li>
                      <li>Look ahead of you (not down at your feet)</li>
                      <li>Chest-up</li>
                      <li>Shoulders back and down  (not hunched under your ears)</li>
                      <li>Toes straight ahead</li>
                  </ul>
              </div>
          </div>

      </div>

  </div>
</section>

`});


web.Sections.add("fitness/fitchall", {
  name: "Fitness Challenges",
  image: window.mediaPath + "/sys/afb/fitchall.jpg",
  html: ` 
  


  <section class="pbc-fitness-7865">
  <div class="container">

      <div class="head">
          <h2>Fitness Challenges</h2>
          <p>These coins are designed to award you for workouts you are already doing. Use the Fitness Log above to report your workouts and the Fitness Staff will keep track and reward you! It's that easy!</p>
      </div>
     
      <ul class="parent">
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7865-1.jpg" alt="Image" width="200" height="200" loading="lazy" />
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7865-2.jpg" alt="Image" width="200" height="200" loading="lazy" />
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7865-3.jpg" alt="Image" width="200" height="200" loading="lazy" />
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7865-4.jpg" alt="Image" width="200" height="200" loading="lazy" />
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7865-5.jpg" alt="Image" width="200" height="200" loading="lazy" />
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7865-6.jpg" alt="Image" width="200" height="200" loading="lazy" />
          </li>
      </ul>

  </div>
</section>


`});



web.Sections.add("fitness/fitgall", {
  name: "Fitness Gallery",
  image: window.mediaPath + "/sys/afb/fitgall.jpg",
  html: ` 
  

  <section class="pbc-fitness-7866">
  <div class="container">
     
      <ul class="parent">
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7866-1.png" alt="Image" width="632" height="483" loading="lazy" />
              <div class="content">
                  <h4>Climb-On Challenge</h4>
                  <p>Elevation gain of 5,886 feet.</p>
                  <a href="#">Challenge Info</a>
              </div>
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7866-2.png" alt="Image" width="632" height="483" loading="lazy" />
              <div class="content">
                  <h4>True Pioneer Challenge</h4>
                  <p>Complete 300 Miles.</p>
                  <a href="#">Challenge Info</a>
              </div>
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7866-3.png" alt="Image" width="632" height="483" loading="lazy" />
              <div class="content">
                  <h4>Trail Buster Challenge</h4>
                  <p>Complete 1200 miles.</p>
                  <a href="#">Challenge Info</a>
              </div>
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7866-4.png" alt="Image" width="632" height="483" loading="lazy" />
              <div class="content">
                  <h4>Settlers Challenge</h4>
                  <p>Complete 60 miles.</p>
                  <a href="#">Challenge Info</a>
              </div>
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7866-5.png" alt="Image" width="632" height="483" loading="lazy" />
              <div class="content">
                  <h4>5K Endurance Challenge</h4>
                  <p>Complete 6 Fitness Center5k Runs</p>
                  <a href="#">Challenge Info</a>
              </div>
          </li>
          <li>
              <img src="../../../backend/admin/media/pbc-fitness-7866-6.png" alt="Image" width="632" height="483" loading="lazy" />
              <div class="content">
                  <h4>On Demand Workout Challenge</h4>
                  <p>Complete 12 workouts!</p>
                  <a href="#">Challenge Info</a>
              </div>
          </li>
      </ul>

  </div>
</section>
`});



/* REstaurant Page    */




web.SectionsGroup["RESTAURANT SECTIONS"] = ["restaurant/greeniconban", "restaurant/pubmenu", "restaurant/foodnfun", "restaurant/clubbne","restaurant/iceban2",  ];


web.Sections.add("restaurant/greeniconban", {
  name: "Green Banner",
  image: window.mediaPath + "/sys/afb/greeniconban.jpg",
  html: ` 
  <section class="pbc-restaurant-7861">
        <div class="container">
           
            <div class="parent">
                <div class="left">
                    <div class="content">
                        <h2>Alder House Café & Pub</h2>
                        <p>Alder House is Fairchild's gathering place for family, friends, food, and FUN. Our menu offers a wide variety of tasty delights at prices that won't break the pocketbook! Reward yourself and take pleasure in a side dish of FUN!</p>
                    </div>
                </div>
                <div class="right">
                    <img src="../../../backend/admin/media/pbc-restaurant-7861-1.png" alt="Image" width="320" height="200" loading="lazy" />
                </div>
            </div>

        </div>
    </section>


`});


web.Sections.add("restaurant/pubmenu", {
  name: "Pub Menu Banner",
  image: window.mediaPath + "/sys/afb/pubmenu.jpg",
  html: ` 
  <section class="pbc-restaurant-7862">
        <div class="container-back">
            <div class="container">
            
                <div class="parent">

                    <div class="left">
                        <img src="../../../backend/admin/media/pbc-restaurant-7862-1.png" alt="Image" width="320" height="200" loading="lazy" />
                    </div>

                    <div class="right">
                        <div class="content">
                            <h2>Cafe & <br> Pub Menu</h2>
                            <a href="#">
                                Delicious Food Here
                            </a>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>



`});


web.Sections.add("restaurant/foodnfun", {
  name: "Food & Fun",
  image: window.mediaPath + "/sys/afb/foodnfun.jpg",
  html: ` 
  <section class="pbc-restaurant-7863">
        <div class="container-back">
            <div class="container">

                <h2>Food & Fun</h2>
            
                <div class="parent">
                    <div class="boxs">
                        <img src="../../../backend/admin/media/pbc-restaurant-7863-1.png" alt="Image" width="305" height="483" loading="lazy" />
                        <h4>Sports</h4>
                        <div class="content">
                            <p>The indoor sports court is a great place to let loose and play. We've got all kinds of equipment. Come have fun!</p>
                            <a href="#" class="btn-primary">Download Menu</a>
                        </div>
                    </div>
                    <div class="boxs">
                        <img src="../../../backend/admin/media/pbc-restaurant-7863-2.png" alt="Image" width="305" height="483" loading="lazy" />
                        <h4>Food</h4>
                        <div class="content">
                            <p>The Cafe & Pub now features a hot menu with beer & wine, light snacks. Check the new hours below. Stay tuned as we introduce the full bar and menu!</p>
                            <a href="#" class="btn-primary">Download Menu</a>
                        </div>
                    </div>
                    <div class="boxs">
                        <img src="../../../backend/admin/media/pbc-restaurant-7863-3.png" alt="Image" width="305" height="483" loading="lazy" />
                        <h4>Fun</h4>
                        <div class="content">
                            <p>Let us help you host your next birthday party, baby shower, retirement luncheon or any other private event.</p>
                            <a href="#" class="btn-primary">Download Menu</a>
                        </div>
                    </div>
                    <div class="boxs">
                        <img src="../../../backend/admin/media/pbc-restaurant-7863-4.png" alt="Image" width="305" height="483" loading="lazy" />
                        <h4>Catering</h4>
                        <div class="content">
                            <p>Our catering staff is happy to help with your event. You can choose items from our menu, or request special items. Food can be delivered on base or picked up.</p>
                            <a href="#" class="btn-primary">Download Menu</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


`});


web.Sections.add("restaurant/clubbne", {
  name: "Ckub Bnefits",
  image: window.mediaPath + "/sys/afb/clubbne.jpg",
  html: ` 
  <section class="pbc-restaurant-7864">
        <div class="container-back">
            <div class="container">
            
                <div class="parent">
                    <div class="content">
                        <h2>Club Benefits</h2>
                        <p><b>10% Off purchases at select locations with discounts at Club events!</b></p>
                        <p>Register for a Club Account & Connect with your Smartphone</p>
                        <a href="#">
                            Get Started
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>



`});


web.Sections.add("restaurant/iceban2", {
  name: "ICE Banner 2",
  image: window.mediaPath + "/sys/afb/iceban2.jpg",
  html: ` 
  
  <section class="pbc-restaurant-7865">
  <div class="container">
  
      <div class="parent">

          <div class="left">
              <img src="../../../backend/admin/media/pbc-restaurant-7865-2.png" alt="Logo" width="256" height="141" loading="lazy" />
          </div>

          <div class="center">
              <div class="content">
                  <h2>How are we doing?</h2>
                  <p>Share your feedback about this facility through the Interactive Customer Evaluation (ICE) Website.</p>
              </div>
          </div>

          <div class="right">
              <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M22 8.48V17.5C22 18.6 21.1 19.5 20 19.5H6L2 23.5V5.5C2 4.4 2.9 3.5 4 3.5H14.1C14.04 3.82 14 4.16 14 4.5C14 4.84 14.04 5.18 14.1 5.5H4V17.5H20V9.4C20.74 9.25 21.42 8.92 22 8.48ZM16 4.5C16 6.16 17.34 7.5 19 7.5C20.66 7.5 22 6.16 22 4.5C22 2.84 20.66 1.5 19 1.5C17.34 1.5 16 2.84 16 4.5Z" fill="#3595F6"/>
                  </svg>
                  Give Feedback
              </a>
          </div>

        
      </div>

  </div>
</section>



`});


web.SectionsGroup["FITNESS SPORTS SECTIONS"] = ["fitness/blue-stip", "fitness/ptrainer","fitness/vid-section","fitness/sovid-section","fitness/Vsovid-section",  "fitness/vid-slider", "fitness/classes"  ];


web.Sections.add("fitness/ptrainer", {
  name: "Personal Trainer",
  image: window.mediaPath + "/sys/afb/ptrainer.jpg",
  html: ` 

  <section class="pbc-fitness-sport-7861">
  <div class="container">

      <div class="head">
          <h4>PERSONAL TRAINER</h4>
          <h2>Accomplish your fitness goals with a personal trainer.</h2>
          <p>Download the profile of our personal trainers then call fitness to schedule a consultation.</p>
      </div>

      <div class="parent">
          <div class="lists">
              <div class="inner">
                  <h4>Cherese McCoy</h4>
                  <p>I am a certified personal trainer for the National Strength and Conditioning Association.</p>
                  <p>$40/Session</p>
              </div>
          </div>
          <div class="lists">
              <div class="inner">
                  <h4>Cherese McCoy</h4>
                  <p>Returning in October 2023.</p>
              </div>
          </div>
          <div class="lists">
              <div class="inner">
                  <h4>Cherese McCoy</h4>
                  <p>Bio Coming Soon</p>
                  <p>$55/Session</p>
              </div>
          </div>
      </div>

      <div class="pb-action">
          <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9.5H15V3.5H9V9.5H5L12 16.5L19 9.5ZM11 11.5V5.5H13V11.5H14.17L12 13.67L9.83 11.5H11ZM5 18.5H19V20.5H5V18.5Z" fill="white"/>
              </svg>
              Download Full Profile PDF
          </a>
      </div>

  </div>
</section>



`});

web.Sections.add("fitness/classes", {
  name: "Clases",
  image: window.mediaPath + "/sys/afb/classes.jpg",
  html: ` 
  <section class="pbc-fitness-sport-7862" title="classes">
  <div class="container">

      <div class="parent">

          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Cherese McCoy</h4>
                  <p class="text-primary">Commit to be Fit Challenge</p>
                  <p>Commit to be Fit Challenge</p>
                  <p>Collect Commander's Trophy Points for your Squadron just by going out on your own or in a group of your making and playing the sports/games of your choice <p>(everyone gets credit for playing and the winner receives extra points)</p>
                  <p>Send your name, squadron, details about your activity, and the final score to the Fitness Center email at <a href="mailto:C2bFairchild@gmail.com">C2bFairchild@gmail.com</a></p>
                  <p>Feel free to stop by or contact the Fitness Center at 247-2792 to schedule your FREE activity and FREE equipment checkouts, Such as Disc Golf at Miller Park, Kickball, Ultimate Frisbee, or Pickleball. If you can't think of an activity we are here to help. Make sure to track what you do and apply it to the Commit to Be Fit Program to earn rewards for yourself at Commit To Be Fit Challenge</p>
                  <a href="#" class="btn-primary">Sign up now</a>
              </div>
          </div>

          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Indoor Facilities</h4>
                  <p class="text-primary">Fitness & Sports Complex</p>
                  <ul>
                      <li>Basketball/Volleyball Courts</li>
                      <li>2 Racquetball Courts</li>
                      <li>2 Group Exercise Rooms</li>
                      <li>Functional Fitness Area</li>
                      <li>Cardio and Free Weight Training</li>
                      <li>Selectorized Circuit Weight Training</li>
                      <li>Fitness Assessment Cell</li>
                      <li>Functional Fit Training Room</li>
                      <li>Parent Child Area (PCA)</li>
                      <li>Aquatics Center</li>
                      <li>Health Promotion Office</li>
                      <li>Aquatics Center</li>
                  </ul>
              </div>
          </div>

          <div class="boxs clear">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Calendar</h4>
                  <p class="text-primary">Group Fitness Classes</p>
                  <p>Download this month's Fitness Calendar now.</p>
                  <a href="#" class="btn-primary">Download Now</a>
                  <br />
                  <br />
                  <br />
              </div>
          </div>

          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Outside Facilities</h4>
                  <p class="text-primary">Fitness & Sports Complex</p>
                  <ul>
                      <li>2 Disc Golf Courses</li>
                      <li>Football Field / Track Complex</li>
                      <li>Tennis Courts</li>
                      <li>2 Running Track</li>
                  </ul>
              </div>
          </div>

          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Intramural eSports</h4>
                  <p class="text-primary">Fitness & Sports Center</p>
                  <p>Intramural ESPORT participation through a "free-for-all" format: Earn Commander Trophy points for your squadron by creating your own mixed teams with friends, families, and co-workers.</p>
                  <p>Join up by squadron or create your own mixed teams with your friends and workmates.</p>
                  <p>Intramural ESPORT participation through a "free-for-all" format: Earn Commander Trophy points for your squadron by creating your own mixed teams with friends, families, and co-workers.</p>
                  <p>Intramural ESPORT participation through a "free-for-all" format: Earn Commander Trophy points for your squadron by creating your own mixed teams with friends, families, and co-workers.</p>
                  <p>Intramural ESPORT participation through a "free-for-all" format: Earn Commander Trophy points for your squadron by creating your own mixed teams with friends, families, and co-workers.</p>
                  <p>Intramural ESPORT participation through a "free-for-all" format: Earn Commander Trophy points for your squadron by creating your own mixed teams with friends, families, and co-workers.</p>
                  <p><a href="#">Sign Up</a> Here on Fairchild ESPORTS Discord or See Available Events - Go to the Calendar Below:</p>
                  <a href="#" class="btn-primary">Calendar</a>
              </div>
          </div>

          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Intramural Sports Program</h4>
                  <p class="text-primary">Fitness & Sports Center</p>
                  <p>The Intramural Sports program is Category A and promotes organized sports and esprit de corps. The intramural program is recreational in nature. The installation commander determines participation which may include Regular Air Force and Air Reserve Components assigned to installation units. Active duty military personnel always have first priority in intramural sports participation. Other categories of customers may participate in the intramural program if their participation is needed to offer a particular program.</p>
                  <h4>Sports Time Frame</h4>

                  <ul>
                      <li>Basketball November - February</li>
                      <li>Volleyball March-May</li>
                      <li>Softball May/June - August </li>
                  </ul>
                  <a href="#" class="btn-primary">Download PDF</a>

                  <ul>
                      <li>Flag Football August - September</li>
                      <li>eSports Year-round</li>
                      <li>eSports Year-round</li>
                  </ul>

              </div>
          </div>


          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Price List</h4>
                  
                  <table>
                      <thead>
                          <th>PERSONAL TRAINING</th>
                          <th>PRICE</th>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                          <tr>
                              <td>1 Person Drop-In</td>
                              <td>$30</td>
                          </tr>
                      </tbody>
                  </table>

              </div>
          </div>


          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Inside Fitness Track</h4>
                  
                  <table>
                      <thead>
                          <th>Track</th>
                          <th>1 LPA</th>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1 Lap</td>
                              <td>1 Lap</td>
                          </tr>
                          <tr>
                              <td>1 Lap</td>
                              <td>1 Lap</td>
                          </tr>
                          <tr>
                              <td>1 Lap</td>
                              <td>1 Lap</td>
                          </tr>
                      </tbody>
                  </table>

                  <a href="#" class="btn-primary">
                      Download Jogging Maps
                  </a>

              </div>
          </div>


          <div class="boxs">
              <div class="inner">
                  <img src="../../../backend/admin/media/pbc-fitness-sport-7862-1.png" alt="Image" loading="lazy" width="64" height="64" />
                  <h4>Inside Fitness Track</h4>
                  
                  <table>
                      <thead>
                          <th>Track</th>
                          <th>1 LPA</th>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1 Lap</td>
                              <td>1 Lap</td>
                          </tr>
                          <tr>
                              <td>1 Lap</td>
                              <td>1 Lap</td>
                          </tr>
                          <tr>
                              <td>1 Lap</td>
                              <td>1 Lap</td>
                          </tr>
                      </tbody>
                  </table>

              </div>
          </div>

         
      </div>


  </div>
</section>


`});
web.Sections.add("fitness/blue-stip", {
  name: "Blue Strip",
  image: window.mediaPath + "/sys/afb/blue-strip.jpg",
  html: ` 
  <section title="bluestrip" class="blue-strip"><div class="row">
<h2>Attention</br>
Customers:</h2>
<p>The Fitness and Aquatics Centers will be fully closed, to include 24/7 access, 
Friday 15 Sep from 8:00 p.m. to 5:00 a.m. Monday, 18 Sep for their annual High 
Dusting maintenance</p></div>
     </section>


`});

web.Sections.add("fitness/vid-slider", {
  name: "Image slider",
  image: window.mediaPath + "/sys/afb/vid-slider.jpg",
  html: `
  <section class="pbc-fitness-sport-7864">
  <div class="container">

      <div class="main-slider">
          <div class="parent-slider">
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-1.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-2.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-3.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-4.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-3.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-1.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-2.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
              <div class="slider-box">
                  <div class="inner">
                      <img src="../../../backend/admin/media/pbc-fitness-sport-7864-3.png" alt="Image" width="306" height="284" />
                  </div>
              </div>
          </div>
          <div class="slick-arrow-custom">
              <button class="main-banner-arrow-prev slick-arrow slick-arrow-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7.99 11H20V13H7.99V16L4 12L7.99 8V11Z" fill="#F8FAFC"/>
                  </svg>
              </button>
              <button class="main-banner-arrow-next slick-arrow slick-arrow-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#F8FAFC"/>
                    </svg>
              </button>
          </div>
      </div>

  </div>
  
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />

<script>

function fitnessSportSlider(){
		$(".pbc-fitness-sport-7864 .parent-slider").not(".slick-initialized")
          .slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: ".pbc-fitness-sport-7864 .main-banner-arrow-prev",
            nextArrow: ".pbc-fitness-sport-7864 .main-banner-arrow-next",
            responsive: [
              {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
}

$(function () {
    setTimeout(() => {
      	if($("#main_body #__next").length > 0) {
	  		if($(".pbc-fitness-sport-7864 .parent-slider").hasClass(".slick-initialized")){
				$(".pbc-fitness-sport-7864 .parent-slider").slick('unslick');
			}
			fitnessSportSlider();
		}
    }, 2500);
  });
  $(window).scroll(function () {
		if($("#main_body #__next").length > 0) {
			fitnessSportSlider();
		}
	});
</script>
</section>
  
`});


web.Sections.add("fitness/Vsovid-section", {
  name: "Vimeo-video",
  image: window.mediaPath + "/sys/afb/vid-section.jpg",
  html: ` 
  <section class="pbc-fitness-sport-7863">
        <div class="container">

            <div class="head">
                <h2>Group Fitness Classes</h2>
                <p>Check out these great video workouts recorded by instructors on base! These courses are also available in person at the fitness center.</p>
            </div>

            <div class="parent">

            
                <div class="boxy"><iframe frameborder="0" src="https://player.vimeo.com/video/24253126?autoplay=false&amp;controls=true&amp;loop=false&amp;playsinline=true&amp;muted=true" width="100%" height="100%"></iframe> </div>
                <div class="boxy">
                <iframe frameborder="0" src="https://player.vimeo.com/video/24253126?autoplay=false&amp;controls=true&amp;loop=false&amp;playsinline=true&amp;muted=true" width="100%" height="100%"></iframe></div>
                <div class="boxy">
                <iframe frameborder="0" src="https://player.vimeo.com/video/24253126?autoplay=false&amp;controls=true&amp;loop=false&amp;playsinline=true&amp;muted=true" width="100%" height="100%"></iframe>
                </div>

               
            
            

               
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

            
                <div class="boxy">
                <iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" src="https://www.youtube.com/embed/CLk7A7HXhYQ?autoplay=false&amp;controls=false&amp;loop=false&amp;playsinline=true&amp;muted=true">
								</iframe>
                </div>
                <div class="boxy">
                <iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" src="https://www.youtube.com/embed/URSMpk_R6b4?autoplay=false&amp;controls=false&amp;loop=false&amp;playsinline=true&amp;muted=true">
								</iframe>
                </div>
                <div class="boxy">
                <iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" src="https://www.youtube.com/embed/19dYuM2vVYY?autoplay=false&amp;controls=false&amp;loop=false&amp;playsinline=true&amp;muted=true">
								</iframe>
                </div>

               
            
            

               
            </div>


        </div>
    </section>


`});



web.Sections.add("fitness/vid-section", {
  name: "Video section",
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
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="../../../backend/admin/media/sys/slider/sample.mp4" type="video/mp4">
              </video>
                              </div>
                <div class="boxs">
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="../../../backend/admin/media/sys/slider/sample.mp4" type="video/mp4">
              </video>
              
                </div>
                <div class="boxs">
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="../../../backend/admin/media/sys/slider/sample.mp4" type="video/mp4">
              </video>
              
                </div>

               
            </div>


        </div>
    </section>


`});




web.SectionsGroup["INNER PAGE DUMP"] = ["dump/subs", "dump/mktreq","dump/submkt",  "dump/2-colban", "dump/careers" , "dump/partners" , "dump/dumpcon" ,
 "dump/id" , "dump/bene" , "dump/casuality" , "dump/morethanjob" , "dump/awards" , "dump/awards2" , "dump/contact3" , "dump/conacc" , "dump/force"];


web.Sections.add("dump/subs", {
  name: "Subscribe Banner",
  image: window.mediaPath + "/sys/afb/subscribe.jpg",
  html: ` 
  <section id="Subscribe_section">
        <div  class="Subscribe_subsection" >
            <div class="row Subscribe_section_row ">
                <div class="col-lg-6 col-md-6  text-start Subscribe_section_subcontainer">
                    <h2  >Subscribe to Our</h2>
                    <h2 > Newsletter to Get</h2>
                   <h2 > Our Monthly Updates</h2>
                   <div class="row d-flex  Subscribe_section_row2">
                        <div class="col-lg-8 col-md-8 ">
                       <input type="email" class="form-control  rounded-pill Subscribe_section_input" id="exampleFormControlInput1" placeholder="EMAIL ADDRESS">
                    </div>
                       <div class="col-lg-4  col-md-4 ">
                       <buttovscode-file://vscode-app/c:/Users/surbh/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmln type="button" class="btn btn-primary  rounded-pill Subscribe_section_btn"><span>SUBSCRIBE</span></buttovscode-file:>                   
                    </div>
                 
                    </div>
                </div>
            </div>
        </div>
    </section>

`});


web.Sections.add("dump/mktreq", {
  name: "Marketing Banner",
  image: window.mediaPath + "/sys/afb/mktreq.jpg",
  html: ` 
  <section id="Marketing_request">
        <div class="container Marketing_request_container">
            <div class="row Marketing_request_row">
                <div class="col-lg-12  text-center Marketing_request_content">
                    <h2>Submit a Marketing Request</h2> 
                    <div class="row Marketing_request_row2">
                       <div class="col-lg-12  text-center ">
                        <buttovscode-file://vscode-app/c:/Users/surbh/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmln type="button" class="btn btn-primary  rounded-pill Marketing_request_btn">       
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg> &nbsp; <span>]GET STARTED </span></buttovscode-file:>                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 

`});



web.Sections.add("dump/submkt", {
  name: "Sub Mkt Ban",
  image: window.mediaPath + "/sys/afb/submkt.jpg",
  html: ` 
 
  <section id="request">
  <div class="container request_container">
      <div class="row request_row">
          <div class="col-lg-12  text-center request_content">
              <h2>Submit a Marketing Request</h2> 
              <div class="row request_row2">
                 <div class="col-lg-12  text-center ">
                  <buttovscode-file://vscode-app/c:/Users/surbh/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmln type="button" class="btn btn-primary  rounded-pill request_btn">       
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg> &nbsp; <span>GET STARTED </span></buttovscode-file:>                   
                  </div>
              </div>
          </div>
      </div>
  </div>
</section> 

`});


web.Sections.add("dump/2-colban", {
  name: "2 Col Banner",
  image: window.mediaPath + "/sys/afb/2-colban.jpg",
  html: ` 
  <section id="CREDIT_UNION">
       <div class="container">
        <div class="row d-flex CREDIT_UNION-row">
            <div class="col-lg-6 col-md-12 CREDIT_UNION_content1">
              <img src="../../../backend/admin/media/img122222.png" alt="" class="img1">
            </div>
            <div class="col-lg-5 col-md-12 CREDIT_UNION_colcontent2">
               <h2>GLOBAL CREDIT UNION</h2>
               <p>Global Credit Union is an active supporter of all things Fairchild AFB! With a branch located conveniently by the BX and Commissary, we offer financial support helping our members grow their financial dreams. We volunteer at FSS events throughout the year and are also proud supporters of the #fairchildFUNaddicts, advertising digitally as well as physically on the base.</p>
               <p>Before beginning this, or any workout, you should consult with your physician.</p>
            </div>
        </div>
       </div>
    </section>
    <section id="CREDIT_UNION_2">
        <div class="container">
         <div class="row d-flex CREDIT_UNION-row2">
             <div class="col-lg-5 col-md-12 CREDIT_UNION_colcontent22">
                <h2>DIAMOND SELF STORAGE</h2>
                <p>Global Credit Union is an active supporter of all things Fairchild AFB! With a branch located conveniently by the BX and Commissary, we offer financial support helping our members grow their financial dreams. We volunteer at FSS events throughout the year and are also proud supporters of the #fairchildFUNaddicts, advertising digitally as well as physically on the base.</p>
                <p>Before beginning this, or any workout, you should consult with your physician.</p>
            </div>
             <div class="col-lg-6 col-md-12 CREDIT_UNION_content12">
               <img src="../../../backend/admin/media/img122223.png" alt="" class="img1">
             </div>
         </div>
        </div>
     </section>

`});


web.Sections.add("dump/careers", {
  name: "Careers",
  image: window.mediaPath + "/sys/afb/careers.jpg",
  html: ` 
  
  <section id="Careers">
  <div class="container Careers_container" >
      <div class="row">
          <div class="Careers_contnat">
              <h2>Careers</h2>
              <p>Have a zeal to contribute to the real world and create a visible impact in
                  businesses and lives of consumers? We are transforming businesses and
                  consumer experience everyday using technology.</p>
                  <a href="#" class="btn btn-outline-primary   rounded-pill Careers_contnat_btn">
                      <span>
                             JOIN US                   
                      </span>
                  </a> 
          </div>
      </div>
  </div>

  <div  id="Careers_imge_GROUP" class="container" >
     <div class="row d-flex  Careers_imge_GROUP_row">
           <!-- <div class="col-lg-12 d-flex"> -->
          <div class="col-lg-5 col-md-12 col-sm-12 d-flex Careers_imge_GROUP_content1 ">
              <div class="col-lg-6 col-md-6 col-sm-6">
                 <img src="../../../backend/admin/media/img0002.png" alt="" class="img0002">
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                   <div>
                      <img src="../../../backend/admin/media/img0003.png" alt="" class="img0007">
                   </div>
                   <div >
                       <img src="../../../backend/admin/media/img0004.png" alt="" class="img0003">
                   </div>
              </div>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12 d-flex Careers_imge_GROUP_content2">
              <div class="col-lg-7  col-md-6 col-sm-6" >
                 <img src="../../../backend/admin/media/img0005.png" alt="" class="img0005">
              </div>
              <div class="col-lg-5 col-md-6 col-sm-6">
                  <div >
                      <img src="../../../backend/admin/media/img0006.png" alt="" class="img0004">
                  </div>
                  <div >
                      <img src="../../../backend/admin/media/img0007.png" alt="" class="img0006">

                  </div>
              </div>  
          </div>    
      <!-- </div> -->
     </div>
  </div>
</section>

`});




web.Sections.add("dump/partners", {
  name: "Partners",
  image: window.mediaPath + "/sys/afb/partners.jpg",
  html: ` 

  <section id="Partners_section">
  <div class="container Partners_container" >
      <div class="row">
          <div class="Partners_contnat">
              <h2>Partners</h2>
              <p>Have a zeal to contribute to the real world and create a visible impact in
                  businesses and lives of consumers? We are transforming businesses and
                  consumer experience everyday using technology.
              </p> 
          </div>
      </div>
  </div>
   
  <div class="container Partners_container2">
  <div class="row Partners_row2" >
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="card Partners_card2">
          <div class="card-body Partners_cntentsection2">
            <h3 class="card-title">Northern Quest</h3>
            <img src="../../../backend/admin/media/physical-activity1.png" alt="">
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="card Partners_card2">
          <div class="card-body Partners_cntentsection2">
            <h3 class="card-title">Northern Quest</h3>
            <img src="../../../backend/admin/media/physical-activity2.png" alt="">

          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="card Partners_card2">
          <div class="card-body Partners_cntentsection2">
            <h3 class="card-title">Northern Quest</h3>
            <img src="../../../backend/admin/media/physical-activity3.png" alt="">

          </div>
        </div>
      </div>
      <!-- ........................... -->
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div class="card Partners_card2">
            <div class="card-body Partners_cntentsection2">
              <h3 class="card-title">Northern Quest</h3>
              <img src="../../../backend/admin/media/physical-activity4.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div class="card Partners_card2">
            <div class="card-body Partners_cntentsection2">
              <h3 class="card-title">Northern Quest</h3>
              <img src="../../../backend/admin/media/physical-activity5.png" alt="">

            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div class="card Partners_card2">
            <div class="card-body Partners_cntentsection2">
              <h3 class="card-title">Northern Quest</h3>
              <img src="../../../backend/admin/media/physical-activity4.png" alt="">

            </div>
          </div>
        </div>
        <!-- ................ --> 
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div class="card Partners_card2">
            <div class="card-body Partners_cntentsection2">
              <h3 class="card-title">Northern Quest</h3>
              <img src="../../../backend/admin/media/physical-activity6.png" alt="">
            </div>
          </div>
        </div> 
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div class="card Partners_card2">
            <div class="card-body Partners_cntentsection2">
              <h3 class="card-title">Northern Quest</h3>
              <img src="../../../backend/admin/media/physical-activity7.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div class="card Partners_card2">
            <div class="card-body Partners_cntentsection2">
              <h3 class="card-title">Northern Quest</h3>
              <img src="../../../backend/admin/media/physical-activity7.png" alt="">
            </div>
          </div>
        </div>   
    </div>    
  </div>





</section>

`});


web.Sections.add("dump/dumpcon", {
  name: "Dump Contact",
  image: window.mediaPath + "/sys/afb/dumpcontact.jpg",
  html: ` 
  <section id="contact_map">
        <div class="container contact_map_container">
            <div class="row contact_map_row">
                <h2>contact</h2>
                <div class="col-lg-7" data-component-maps>

                <iframe frameborder="0" src="https://maps.google.com/maps?q=Bucharest&z=15&t=q&key=&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

                       </div>
                <div class="col-lg-5">
                    <div class="card text-white bg-dark mb-3 contact_map_maincontent" >
                        <div class="card-header contact_map_content">
                        <h3>Manpower & Organization</h3>
                        <span>610 N Depot Rd, Fairchild AFB, WA 99011</span>
                        <br>
                        <span>(509) 247-3948</span>
                        <p>Hours of Operation</p>
                        <p>Mon - Fri   .................................................  2:30 p.m. - 6 p.m.</p>
                        <span>School Year</span>
                        <p>Mon - Fri  ...................................................  1 p.m. - 6 p.m. </p>
                        <span>Summer Time</span>
                        <p>Sat - Sun  ...................................................  Closed </p>
                    </div>
                      </div>
                </div>
            </div>
        </div>

    </section>

`});



web.Sections.add("sump/id", {
  name: "ID Banner",
  image: window.mediaPath + "/sys/afb/id.jpg",
  html: `     <section id="id_card_section"> 
  <div class="container id_card_section_container">
      <div class="row id_card_section_row text-center"> 
              <div class="col-lg-6 id_card_section_content">
                     <span>Identification & Common Access Cards</span>
                     <h1>New or changes to your ID Cards?</h1>
                     <p>Use the RAPIDS Appointment Scheduler
                      to book your appointment online now!</p>
              </div>
              <div class="col-lg-6 id_card_section_content_img text-center">
                  <img src="../../../backend/admin/media/id-card.png" alt="">
                    
              </div>         
      </div>
  </div>
</section>

`});


web.Sections.add("dump/bene", {
  name: "Benefit Program",
  image: window.mediaPath + "/sys/afb/benefit.jpg",
  html: `     
  <section id="Mortuary_Affairs_section">
    <div class="container Mortuary_Affairs_section_container">
      <div class="row Mortuary_Affairs_section_row justify-content-md-center">
        <div class="col Mortuary_Affairs_section_content text-center">
          <h1>Casualty / Survivor Benefit Program</h1>
          <h1>& Mortuary Affairs</h1>
        </div>
      </div>
    </div>
    <div class="container Mortuary_Affairs_section_container2">
      <div class="row Mortuary_Affairs_section_row2 text-center">
        <div class="col-lg-4 col-md-6 Mortuary_Affairs_section_content2">
          <svg
            class="ounded mx-auto d-block"
            width="35"
            height="42"
            viewBox="0 0 35 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 0H26.25C28.5698 0.00277875 30.7938 0.925543 32.4341 2.56588C34.0745 4.20623 34.9972 6.43021 35 8.75V33.25C34.9972 35.5698 34.0745 37.7938 32.4341 39.4341C30.7938 41.0745 28.5698 41.9972 26.25 42H8.75C6.43021 41.9972 4.20622 41.0745 2.56588 39.4341C0.925541 37.7938 0.0027771 35.5698 0 33.25V8.75C0.0027771 6.43021 0.925541 4.20623 2.56588 2.56588C4.20622 0.925543 6.43021 0.00277875 8.75 0ZM26.25 3.5H8.75C7.35761 3.5 6.02225 4.05312 5.03769 5.03769C4.05312 6.02226 3.5 7.35761 3.5 8.75V29.75H31.5V8.75C31.5 7.35761 30.9469 6.02226 29.9623 5.03769C28.9777 4.05312 27.6424 3.5 26.25 3.5ZM8.75 38.5H26.25C27.6424 38.5 28.9777 37.9469 29.9623 36.9623C30.9469 35.9777 31.5 34.6424 31.5 33.25H19.25V35C19.25 35.4641 19.0656 35.9092 18.7374 36.2374C18.4092 36.5656 17.9641 36.75 17.5 36.75C17.0359 36.75 16.5908 36.5656 16.2626 36.2374C15.9344 35.9092 15.75 35.4641 15.75 35V33.25H3.5C3.5 34.6424 4.05312 35.9777 5.03769 36.9623C6.02225 37.9469 7.35761 38.5 8.75 38.5Z"
              fill="black"
            />
          </svg>
          <h1>Casualty/Survivor</h1>
          <p>(509) 247 - 4488</p>
          <a href="#" class="btn btn-primary rounded-pill">
            <span> Click to call </span>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 Mortuary_Affairs_section_content2">
          <svg
            class="ounded mx-auto d-block"
            width="35"
            height="42"
            viewBox="0 0 35 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 0H26.25C28.5698 0.00277875 30.7938 0.925543 32.4341 2.56588C34.0745 4.20623 34.9972 6.43021 35 8.75V33.25C34.9972 35.5698 34.0745 37.7938 32.4341 39.4341C30.7938 41.0745 28.5698 41.9972 26.25 42H8.75C6.43021 41.9972 4.20622 41.0745 2.56588 39.4341C0.925541 37.7938 0.0027771 35.5698 0 33.25V8.75C0.0027771 6.43021 0.925541 4.20623 2.56588 2.56588C4.20622 0.925543 6.43021 0.00277875 8.75 0ZM26.25 3.5H8.75C7.35761 3.5 6.02225 4.05312 5.03769 5.03769C4.05312 6.02226 3.5 7.35761 3.5 8.75V29.75H31.5V8.75C31.5 7.35761 30.9469 6.02226 29.9623 5.03769C28.9777 4.05312 27.6424 3.5 26.25 3.5ZM8.75 38.5H26.25C27.6424 38.5 28.9777 37.9469 29.9623 36.9623C30.9469 35.9777 31.5 34.6424 31.5 33.25H19.25V35C19.25 35.4641 19.0656 35.9092 18.7374 36.2374C18.4092 36.5656 17.9641 36.75 17.5 36.75C17.0359 36.75 16.5908 36.5656 16.2626 36.2374C15.9344 35.9092 15.75 35.4641 15.75 35V33.25H3.5C3.5 34.6424 4.05312 35.9777 5.03769 36.9623C6.02225 37.9469 7.35761 38.5 8.75 38.5Z"
              fill="black"
            />
          </svg>
          <h1>Mortuary Affairs</h1>
          <p>(509) 247 - 4488</p>
          <a href="#" class="btn btn-primary rounded-pill">
            <span> Click to call </span>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 Mortuary_Affairs_section_content2">
          <svg
            class="ounded mx-auto d-block"
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 42C9.92025 42 0.5 32.5798 0.5 21C0.5 9.42025 9.92025 0 21.5 0C33.0798 0 42.5 9.42025 42.5 21C42.5 32.5798 33.0798 42 21.5 42ZM21.5 3.5C11.8505 3.5 4 11.3505 4 21C4 30.6495 11.8505 38.5 21.5 38.5C31.1495 38.5 39 30.6495 39 21C39 11.3505 31.1495 3.5 21.5 3.5ZM30.25 21C30.25 20.0322 29.4678 19.25 28.5 19.25H23.25V10.5C23.25 9.53225 22.466 8.75 21.5 8.75C20.534 8.75 19.75 9.53225 19.75 10.5V21C19.75 21.9678 20.534 22.75 21.5 22.75H28.5C29.4678 22.75 30.25 21.9678 30.25 21Z"
              fill="black"
            />
          </svg>
          <h1>Mortuary After Hours</h1>
          <p>(509) 247 - 4488</p>
          <a href="#" class="btn btn-primary rounded-pill">
            <span> Click to call </span>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 Mortuary_Affairs_section_content2">
          <svg
            class="ounded mx-auto d-block"
            width="35"
            height="42"
            viewBox="0 0 35 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 0H26.25C28.5698 0.00277875 30.7938 0.925543 32.4341 2.56588C34.0745 4.20623 34.9972 6.43021 35 8.75V33.25C34.9972 35.5698 34.0745 37.7938 32.4341 39.4341C30.7938 41.0745 28.5698 41.9972 26.25 42H8.75C6.43021 41.9972 4.20622 41.0745 2.56588 39.4341C0.925541 37.7938 0.0027771 35.5698 0 33.25V8.75C0.0027771 6.43021 0.925541 4.20623 2.56588 2.56588C4.20622 0.925543 6.43021 0.00277875 8.75 0ZM26.25 3.5H8.75C7.35761 3.5 6.02225 4.05312 5.03769 5.03769C4.05312 6.02226 3.5 7.35761 3.5 8.75V29.75H31.5V8.75C31.5 7.35761 30.9469 6.02226 29.9623 5.03769C28.9777 4.05312 27.6424 3.5 26.25 3.5ZM8.75 38.5H26.25C27.6424 38.5 28.9777 37.9469 29.9623 36.9623C30.9469 35.9777 31.5 34.6424 31.5 33.25H19.25V35C19.25 35.4641 19.0656 35.9092 18.7374 36.2374C18.4092 36.5656 17.9641 36.75 17.5 36.75C17.0359 36.75 16.5908 36.5656 16.2626 36.2374C15.9344 35.9092 15.75 35.4641 15.75 35V33.25H3.5C3.5 34.6424 4.05312 35.9777 5.03769 36.9623C6.02225 37.9469 7.35761 38.5 8.75 38.5Z"
              fill="black"
            />
          </svg>
          <h1>Hours</h1>
          <span>Casualty / Survivor Benefits</span>
          <p><span>Mon-Fri:</span> 7 a.m. - 4:30 p.m.</p>
          <span>Mortuary Affairs</span>
          <p><span>Mon-Fri:</span> 7:30 a.m. - 4:30 p.m.</p>
        </div>
        <div class="col-lg-4 col-md-6 Mortuary_Affairs_section_content2">
          <svg
            class="ounded mx-auto d-block"
            width="35"
            height="42"
            viewBox="0 0 35 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 0H26.25C28.5698 0.00277875 30.7938 0.925543 32.4341 2.56588C34.0745 4.20623 34.9972 6.43021 35 8.75V33.25C34.9972 35.5698 34.0745 37.7938 32.4341 39.4341C30.7938 41.0745 28.5698 41.9972 26.25 42H8.75C6.43021 41.9972 4.20622 41.0745 2.56588 39.4341C0.925541 37.7938 0.0027771 35.5698 0 33.25V8.75C0.0027771 6.43021 0.925541 4.20623 2.56588 2.56588C4.20622 0.925543 6.43021 0.00277875 8.75 0ZM26.25 3.5H8.75C7.35761 3.5 6.02225 4.05312 5.03769 5.03769C4.05312 6.02226 3.5 7.35761 3.5 8.75V29.75H31.5V8.75C31.5 7.35761 30.9469 6.02226 29.9623 5.03769C28.9777 4.05312 27.6424 3.5 26.25 3.5ZM8.75 38.5H26.25C27.6424 38.5 28.9777 37.9469 29.9623 36.9623C30.9469 35.9777 31.5 34.6424 31.5 33.25H19.25V35C19.25 35.4641 19.0656 35.9092 18.7374 36.2374C18.4092 36.5656 17.9641 36.75 17.5 36.75C17.0359 36.75 16.5908 36.5656 16.2626 36.2374C15.9344 35.9092 15.75 35.4641 15.75 35V33.25H3.5C3.5 34.6424 4.05312 35.9777 5.03769 36.9623C6.02225 37.9469 7.35761 38.5 8.75 38.5Z"
              fill="black"
            />
          </svg>
          <h1>Casualty/Survivor</h1>
          <p>
            Room 35 <br />
            7 W. Arnold <br />
            Fairchild AFB. <br />
            WA 99011
          </p>
        </div>
        <div class="col-lg-4 col-md-6 Mortuary_Affairs_section_content2">
          <svg
            class="ounded mx-auto d-block"
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 42C9.92025 42 0.5 32.5798 0.5 21C0.5 9.42025 9.92025 0 21.5 0C33.0798 0 42.5 9.42025 42.5 21C42.5 32.5798 33.0798 42 21.5 42ZM21.5 3.5C11.8505 3.5 4 11.3505 4 21C4 30.6495 11.8505 38.5 21.5 38.5C31.1495 38.5 39 30.6495 39 21C39 11.3505 31.1495 3.5 21.5 3.5ZM30.25 21C30.25 20.0322 29.4678 19.25 28.5 19.25H23.25V10.5C23.25 9.53225 22.466 8.75 21.5 8.75C20.534 8.75 19.75 9.53225 19.75 10.5V21C19.75 21.9678 20.534 22.75 21.5 22.75H28.5C29.4678 22.75 30.25 21.9678 30.25 21Z"
              fill="black"
            />
          </svg>
          <h1>Mortuary Affairs</h1>
          <p>
            Room 35 <br />
            7 W. Arnold <br />
            Fairchild AFB. <br />
            WA 99011
          </p>
        </div>
      </div>
    </div>
  </section>

`});


web.Sections.add("dump/casuality", {
  name: "Casuality Benefit",
  image: window.mediaPath + "/sys/afb/casuality.jpg",
  html: `     
  <section id="Survivor_Benefit_Program">
      <div class="container Survivor_Benefit_Program_container">
          <div class="row Survivor_Benefit_Program_row">
              <div class="col-lg-3 col-md-4  Survivor_Benefit_Program_content1">
                  <img src="../../../backend/admin/media/program.png" alt="">
                  <a href="#" class="btn btn-primary rounded-pill">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="white"/>
                          </svg>      
                      <span>Contact Info </span>
                    </a>
              </div>
              <div class="col-lg-9 col-md-8 Survivor_Benefit_Program_content2">
                  <h1>Casualty / Survivor Benefit Program (SBP)</h1>
                  <p>Casualty mission is to provide prompt, accurate reporting, dignified and humane notification, and efficient, thorough and compassionate assistance to the next of kin and or those designated to receive benefits and entitlements.</p>
                  <p class="another_p">Before beginning this, or any workout, you should consult with your physician.</p>
                   <ul>
                      <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                          </svg> <span>FREE indoor and outdoor pools</span>
                      </li>
                      <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                          </svg> <span>FREE 58,000 sq ft Fitness Center</span>
                      </li>
                      <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                          </svg> <span>Base Exchange Mercantile with 3 restaurants</span>
                      </li>
                      <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                          </svg> <span>Recreation Center with event rooms</span>
                      </li>
                      <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                          </svg> <span>Over 50+ FREE events and movies annually</span>
                      </li>
                   </ul>
              </div>
          </div>
      </div>
  </section>
 

`});




web.Sections.add("dump/morethanjob", {
  name: "More Than Job",
  image: window.mediaPath + "/sys/afb/morethanjob.jpg",
  html: `     
  <section id="more_job_section">
  <div class="container more_job_section_container">
      <div class="row more_job_section_row">
          <div class="col-lg-12 more_job_section_content1">
              <h1>More Than a Job...</h1>
              <span>Civilians at Fairchild work together with men and women in uniform.</span>
              <p>Working at Fairchild has lots of advantages you won't find anywhere else. It's like a small city on Base with Civilian access to all kinds of perks:</p>
          </div>
      </div>
      <div class="row more_job_section_row2">
          <div class="col-lg-6 col-md-6 more_job_section_content2">
              <ul>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Excellent pay scales</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Paid federal holidays annual & sick leave</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Job Flexibility</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Unmatched benefits & retirement packages</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Training & education assistance</span>
                  </li>
               </ul>
          </div>
          <div class="col-lg-6 col-md-6 more_job_section_content2">
              <ul>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>FREE indoor and outdoor pools</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>FREE 58,000 sq ft Fitness Center</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Base Exchange Mercantile with 3 restaurants</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Recreation Center with event rooms</span>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="#3DC7BE"/>
                      </svg> <span>Over 50+ FREE events and movies annually</span>
                  </li>
               </ul>
          </div>
      </div>
  </div>
</section>
 

`});


web.Sections.add("dump/awards", {
  name: "Awards",
  image: window.mediaPath + "/sys/afb/awards.jpg",
  html: `     


  <section id="accordion_big">
  <div class="container accordion_big_container">
      <div class="row accordion_big_row">
          <div class="col-lg-12 accordion_big_content">
              <h1>Awards</h1>
              <p>AIRMAN LEADERSHIP SCHOOL</p>

          </div>
          <div class="accordion accordion-flush accordion_big_content2" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed accordion_big_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     <span> John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed accordion_big_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <span>   John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed accordion_big_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span>  John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed accordion_big_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span>  John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed accordion_big_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span>  John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
      </div>
  </div>
</section>
`});

web.Sections.add("dump/awards2", {
  name: "Awards Small",
  image: window.mediaPath + "/sys/afb/awards2.jpg",
  html: `     

  <section id="accordion_small">
  <div class="container accordion_small_container">
      <div class="row accordion_small_row">
          <div class="col-lg-6 accordion_small_content">
              <h1>Awards</h1>
              <p class="para">AIRMAN LEADERSHIP SCHOOL</p>

          </div>
       </div>   
          <div class="row accordion_small_row2.1">
              <div class="col-lg-6 accordion_small_content2.1">
          <div class="accordion accordion-flush accordion_small_content2" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed accordion_small_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     <span> John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed accordion_small_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <span>   John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed accordion_small_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span>  John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed accordion_small_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span>  John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed accordion_small_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span>  John L. Levitow Award </span>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</section>

`});



web.Sections.add("dump/contact3", {
  name: "Contact 3 Col",
  image: window.mediaPath + "/sys/afb/contact3.jpg",
  html: `     
     
    <section id="highlights">
    <div class="container highlights_container">
        <div class="row highlights_row">
            <div class="col-lg-4 col-md-4 highlights_content1">
                <h2>Access to fairchild</h2>
                <span>For Veterans</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad vero iure beatae, tempora atque possimus?</p>
            </div>
  
            <div class="col-lg-4  col-md-4 highlights_content2" data-component-maps>
            <iframe frameborder="0" src="https://maps.google.com/maps?q=Bucharest&z=15&t=q&key=&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
            </div>
            <div class="col-lg-4 col-md-4 highlights_content3">
                 <h2>Agenda highlights</h2>
                 <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>         
                 </ul>
            </div>
        </div>
    </div>
</section>

`});


web.Sections.add("dump/conacc", {
  name: "Contact Accordion",
  image: window.mediaPath + "/sys/afb/conacc.jpg",
  html: `     
  <section id="dining_section">
  <div class="container  dining_section_container">
      <div class="row dining_section_row">
          <h2 class="dining_section_mainheading">Contact</h2>
          <div class="col-lg-6 col-md-6 dining_section_content1" data-component-maps>
          <iframe frameborder="0" src="https://maps.google.com/maps?q=Bucharest&z=15&t=q&key=&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-lg-6 col-md-6 dining_section_content2">
             <h3>Warrior Dining Facility </h3>
             <div class="btn-group dining_section_buttongroup" role="group" aria-label="Basic example">
              <button type="button text-white" id="Breakfast" class="btn " onclick="Breakfast_show()">Breakfast
              </button>
              <button type="button  text-white" id="Brunch" class="btn " onclick="Brunch_show()" >Brunch
              </button>
              <button type="button  text-white" id="Lunch" class="btn " onclick="lunch_show()">Lunch
              </button>
              <button type="button  text-light" id="Dinner" class="btn " onclick="Dinner_show()">Dinner
              </button>
              <button type="button  text-white" id="Midnight" class="btn " onclick="Midnight_show()">Midnight</button>
            </div>
            
            <div id="change_content">
             <span>100W Bong St, Fairchild AFB, WA 99011</span>
             <p>Opening Hours </p>
             <span>Mon - Fri   ...................................................................  2300 - 0100</span>
               <br>
             <span>Sat - Sun  .....................................................................  2300 - 0100 </span>
             <p>Phone</p>
              <span>(509) 247-3948</span>
             </div>
            <div id="change_content2">
             <span>100W Bong St, Fairchild AFB, WA 99011</span>
             <p>Opening Hours </p>
             <span>Weekends ...................................................................    1100 - 1300</span>
             <p>Phone</p>
            <span>(509) 247-3948</span>
            </div>
            <div id="change_content3">
              <span>100W Bong St, Fairchild AFB, WA 99011</span>
              <p>Opening Hours </p>
              <span>Mon - Fri   ...................................................................  2300 - 0100</span>
                <br>
              <span>Sat - Sun  .....................................................................  2300 - 0100 </span>
              <p>Phone</p>
               <span>(509) 247-3948</span>
           </div> 
           <div id="change_content4">
              <span>100W Bong St, Fairchild AFB, WA 99011</span>
              <p>Opening Hours </p>
              <span>Weekends ...................................................................    1100 - 1300</span>
              <p>Phone</p>
             <span>(509) 247-3948</span>
             </div>
           <div id="change_content5">
              <span>100W Bong St, Fairchild AFB, WA 99011</span>
              <p>Opening Hours </p>
              <span>Mon - Fri   ...................................................................  2300 - 0100</span>
                <br>
              <span>Sat - Sun  .....................................................................  2300 - 0100 </span>
              <p>Phone</p>
               <span>(509) 247-3948</span>
           </div>

             
          
          </div>
      </div>
  </div>
 </section>
<script>
function Breakfast_show(){
  {
      document.getElementById("change_content").style.display="block";
      document.getElementById("change_content2").style.display="none";
      document.getElementById("change_content3").style.display="none";
      document.getElementById("change_content4").style.display="none";
      document.getElementById("change_content5").style.display="none";
  }   
}
function Brunch_show(){
  {
      document.getElementById("change_content").style.display="none";
      document.getElementById("change_content3").style.display="none";
      document.getElementById("change_content4").style.display="none";
      document.getElementById("change_content5").style.display="none";
      document.getElementById("change_content2").style.display="block";   
  }  
}
function lunch_show(){
  {
      document.getElementById("change_content").style.display="none";
      document.getElementById("change_content2").style.display="none";
      document.getElementById("change_content4").style.display="none";
      document.getElementById("change_content5").style.display="none";
      document.getElementById("change_content3").style.display="block";   
  }  
}
function Dinner_show(){
  {
      document.getElementById("change_content").style.display="none";
      document.getElementById("change_content2").style.display="none";
      document.getElementById("change_content3").style.display="none";
      document.getElementById("change_content5").style.display="none";
      document.getElementById("change_content4").style.display="block";   
  }  
}
function Midnight_show(){
  {
      document.getElementById("change_content").style.display="none";
      document.getElementById("change_content2").style.display="none";
      document.getElementById("change_content3").style.display="none";
      document.getElementById("change_content4").style.display="none";
      document.getElementById("change_content5").style.display="block";   
  }  
}

</script>
`});



web.Sections.add("dump/force", {
  name: "Force Page",
  image: window.mediaPath + "/sys/afb/force.jpg",
  html: `     
     
    <section  id="adventure_infomation">
    <div class="container"  class="adventure_infomation_container">
        <div class="row  adventure_infomation_row ">
            <div class="col-lg-9  text-start   adventure_infomation_content">
                <h2 >Choose your adventure</h2>
                <p>Please refer to the following contact information if you wish to speak with a representative from the VA or an on-base university:</p>
            </div>
        </div>
        <hr>
    </div>
    <div class="container adventure_infomation_container2">
        <div class="row adventure_infomation_row2">  
                <div class="col-lg-5 adventure_infomation_img1">
                    <img src="../../../backend/admin/media/img1.png" alt="" class="img1">
                </div>
                <div class="col-lg-6 adventure_infomation_content2">
                      <h2>VA Benefits Advisor</h2>
                      <div class="row  adventure_infomation_row3">
                        <div class="col-lg-5 ">
                         <a href="#" class="btn btn-outline-primary   rounded-pill adventure_infomation_btn">
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#3595F6"/>
                            </svg>                           
                             (509)2473760
                            </span></a>                        
                       </div>
                         <div class="col-lg-5 ">
                             <a href="#" class="btn btn-outline-primary   rounded-pill adventure_infomation_btn">
                                <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.5 23.795V20.195C6.49 19.935 2.5 15.775 2.5 10.705C2.5 5.465 6.76 1.205 12 1.205C17.24 1.205 21.5 5.465 21.5 10.705C21.5 15.655 18.06 20.635 12.93 23.105L11.5 23.795ZM12 3.205C7.86 3.205 4.5 6.565 4.5 10.705C4.5 14.845 7.86 18.205 12 18.205H13.5V20.505C17.14 18.205 19.5 14.425 19.5 10.705C19.5 6.565 16.14 3.205 12 3.205ZM11 14.705H13V16.705H11V14.705ZM13 13.205H11C11 9.955 14 10.205 14 8.205C14 7.105 13.1 6.205 12 6.205C10.9 6.205 10 7.105 10 8.205H8C8 5.995 9.79 4.205 12 4.205C14.21 4.205 16 5.995 16 8.205C16 10.705 13 10.955 13 13.205Z" fill="#3595F6"/>
                                 </svg>Contact Us
                                </span></a>
                          </div>                                 
                      </div>
                </div>       
        </div>
    
    </div>
    <div class="container adventure_infomation_container2">
        <div class="row adventure_infomation_row2 details">  
                <div class="col-lg-5 adventure_infomation_img1">
                    <img src="../../../backend/admin/media/frame2.png" alt="" class="img1">
                </div>
                <div class="col-lg-6 adventure_infomation_content2">
                      <h2>Embry-Riddle Aeronautical University</h2>
                      <div class="row  adventure_infomation_row3">
                        <div class="col-lg-5 ">
                            <a href="#" class="btn btn-outline-primary   rounded-pill adventure_infomation_btn ">
                                <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#3595F6"/>
                                </svg>                               
                                (509)2473760
                                </span></a>                       
                       </div>
                         <div class="col-lg-5 ">
                            <a href="#" class="btn btn-outline-primary   rounded-pill adventure_infomation_btn">
                                <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.5 23.795V20.195C6.49 19.935 2.5 15.775 2.5 10.705C2.5 5.465 6.76 1.205 12 1.205C17.24 1.205 21.5 5.465 21.5 10.705C21.5 15.655 18.06 20.635 12.93 23.105L11.5 23.795ZM12 3.205C7.86 3.205 4.5 6.565 4.5 10.705C4.5 14.845 7.86 18.205 12 18.205H13.5V20.505C17.14 18.205 19.5 14.425 19.5 10.705C19.5 6.565 16.14 3.205 12 3.205ZM11 14.705H13V16.705H11V14.705ZM13 13.205H11C11 9.955 14 10.205 14 8.205C14 7.105 13.1 6.205 12 6.205C10.9 6.205 10 7.105 10 8.205H8C8 5.995 9.79 4.205 12 4.205C14.21 4.205 16 5.995 16 8.205C16 10.705 13 10.955 13 13.205Z" fill="#3595F6"/>
                                 </svg>Contact Us
                                </span></a>
                          </div>                                 
                      </div>
                </div>       
        </div>
    
    </div>

</section>

`});
