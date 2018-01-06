 $(document).ready(function () {

     $(".mobile_btn").click(function () {
         $("#main_menu").toggle(300);
     });


     // slide
     $(".testimonial_slider").owlCarousel({

         nav: true,
         navText: ["&#10092;", "&#10093;"],
         dots: false,
         autoplay: true,
         loop: true,
         mouseDrag: true,
         touchDrag: true,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1,
             },
             
             // breakpoint from 991 up
             767: {
                 items: 2,
             },
             // breakpoint from 991 up
             991: {
                 items: 3,
             }
             
         }
     });
     //  mobile menu


     // Add smooth scrolling to all links
     $("a").on('click', function (event) {

         // Make sure this.hash has a value before overriding default behavior
         if (this.hash !== "") {
             // Prevent default anchor click behavior
             event.preventDefault();

             // Store hash
             var hash = this.hash;

             // Using jQuery's animate() method to add smooth page scroll
             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 800, function () {

                 // Add hash (#) to URL when done scrolling (default click behavior)
                 window.location.hash = hash;
             });
         } // End if
     });

 });
