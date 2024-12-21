jQuery(document).ready(function ($) {


    jQuery('.HeadingCarousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true
            }
        }
    });
});