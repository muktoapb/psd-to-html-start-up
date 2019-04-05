(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //Menu
        $("#mobileMenu").click(function () {
            $("#menuArea").toggle(400);
        });


        jQuery(window).resize(function () {
            var screenwidth = jQuery(window).width();
            if (screenwidth > 767) {
                jQuery("#menuArea").removeAttr("style");

            }
        });
        // Service Slider
        $('.service_slider_wrapper').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            arrows: false,
            dotsClass:'slider_dot',
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

        //       scroll_top   
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $("#toTop").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });


    });


}(jQuery));
