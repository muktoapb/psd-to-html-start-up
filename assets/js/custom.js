
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //Menu
        $(".mobile_menu").click(function () {
            $("#menu").slideToggle(400);

        });
       

        // $('.insta_header').prependTo('.sbi_item.sbi_type_image:first-child');
        jQuery(window).resize(function () {
            var screenwidth = jQuery(window).width();
            if (screenwidth > 991) {
                jQuery("#menuArea").removeAttr("style");
            }
        });


        //       scroll_top   
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
                $('.header_area').addClass('stiky');
            } else {
                $('#toTop').fadeOut();
                $('.header_area').removeClass('stiky');
            }
        });

        $("#toTop").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });

     
        // AOS scroll animation
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 50,
            delay: 100,
            duration: 400,
            easing: 'ease',
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });













        // map

        var center = [map_data.gm_lat, map_data.gm_lan];
        var muktozoolevel = Number(map_data.gm_zoom);

        $('.map')
            .gmap3({
                center: center,
                zoom: muktozoolevel,
                streetViewControl: false,
                mapTypeControl: false,
                mapTypeId: "muktoMap", // to select it directly
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "muktoMap"]
                }
            })
            .marker({
                position: center,
            })
            .overlay({
                position: center,
                content: `<p style="color:red;font-size:14px;" class="map_text">${map_data.gm_address}</p>`,
                x: 20,
                y: -32
            })
            .styledmaptype(
                "muktoMap",
                [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#8A8A8A"
                        }]
                    },
                    // {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
                    // {
                    //     "featureType": "all",
                    //     "elementType": "labels.icon",
                    //     "stylers": [{
                    //         "color": "#AFAFAF"
                    //     }]
                    // },
                    // {
                    //     "featureType": "administrative",
                    //     "elementType": "geometry.fill",
                    //     "stylers": [{
                    //         "color": "#000000"
                    //     }]
                    // },
                    // {
                    //     "featureType": "administrative",
                    //     "elementType": "geometry.stroke",
                    //     "stylers": [{
                    //         "color": "#000000"
                    //     }, {
                    //         "weight": 1.2
                    //     }]
                    // },
                    // {
                    //     "featureType": "landscape",
                    //     "elementType": "geometry",
                    //     "stylers": [{
                    //         "color": "#E9E9E9"
                    //     }]
                    // },
                    // {
                    //     "featureType": "poi",
                    //     "elementType": "geometry",
                    //     "stylers": [{
                    //         "color": "#F2F2F2"
                    //     }]
                    // },
                    // {
                    //     "featureType": "road.highway",
                    //     "elementType": "geometry.fill",
                    //     "stylers": [{
                    //         "color": "#D9D9D9"
                    //     }, {
                    //         "weight": 0.2
                    //     }]
                    // },
                    // {
                    //     "featureType": "road.highway",
                    //     "elementType": "geometry.stroke",
                    //     "stylers": [{
                    //         "color": "#D9D9D9"
                    //     }]
                    // },
                    // {
                    //     "featureType": "road.arterial",
                    //     "elementType": "geometry",
                    //     "stylers": [{
                    //         "color": "#ffffff"
                    //     }]
                    // },
                    // {
                    //     "featureType": "road.local",
                    //     "elementType": "geometry",
                    //     "stylers": [{
                    //         "color": "#ffffff"
                    //     }]
                    // },
                    // // {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"}]},
                    // {
                    //     "featureType": "water",
                    //     "elementType": "geometry",
                    //     "stylers": [{
                    //         "color": "#C0C0C0"
                    //     }]
                    // }
                ], {
                    name: "Mukto Custom map"
                }
            );


















    });


}(jQuery));