
// Tab Section Function
$(document).ready(function(){

  $('.tab-one').addClass('hover-tab');
  
  $('.content-one').show();
  $('.content-two').hide();
  $('.content-three').hide();

  $('.tab-one').click(function(){
      $('.content-one').show();
      $('.content-two').hide();
      $('.content-three').hide();

      $('.tab-one').addClass('hover-tab');
      $('.tab-two').removeClass('hover-tab');
      $('.tab-three').removeClass('hover-tab');
  });

  $('.tab-two').click(function(){
      $('.content-one').hide();
      $('.content-two').show();
      $('.content-three').hide();

      $('.tab-one').removeClass('hover-tab');
      $('.tab-two').addClass('hover-tab');
      $('.tab-three').removeClass('hover-tab');
  });

  $('.tab-three').click(function(){
      $('.content-one').hide();
      $('.content-two').hide();
      $('.content-three').show();

      $('.tab-one').removeClass('hover-tab');
      $('.tab-two').removeClass('hover-tab');
      $('.tab-three').addClass('hover-tab');
  });

  
});


$(document).ready(function () {
      $.fakeLoader({
          timeToHide:1500,
          bgColor:"#fff",
          spinner:"spinner3"
      });
  });


// Side ber when page scrol
$("body").niceScroll({
  cursorcolor: "#ff8b38",
  cursorborder: "0px solid #fff0",
  zindex: "auto" | [2000],
});


/* Stacky Nav */
$(function(){
    $(window).on("scroll", function(){
      if($(window).scrollTop() > 200){
        $(".navbar").addClass("scroll-nav");
      } else {
        $(".navbar").removeClass("scroll-nav");
      }
  });
});


/* Back to top */
$(document).ready(function() {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});


// Testimonial owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed:750,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

// Wow animation
new WOW().init();


var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });




 



 


 