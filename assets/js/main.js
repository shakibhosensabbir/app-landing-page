$(document).ready(function () {


  // top menu strat


  $(window).scroll(function(){

  if($(this).scrollTop() > 50){
    $('.top__menu').addClass("sticky");
  }
  else{
    $('.top__menu').removeClass("sticky");
  }
});

  // top menu End

// backgournd image js Strat

$("[data-background]").each(function () {

  $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
});
// backgournd image js End


// Coutner JS Strat  
$('.counter').counterUp({
  delay: 10,
  time: 3000
});
// Coutner JS End

// Video POP UP Strat
// $("#video").videoPopup({
//   autoplay: 1,
//   controlsColor: 'white',
//   showVideoInformations: 0,
//   width: 1000,
//   customOptions: {
//       rel: 0,
//       end: 60
//   }
// });
// Video POP UP End

// client Slider Section Strat 

$('.testimonials.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:2000,
  dots:true,
  responsive:{
      0:{
        items:1,
        nav:true,
      },
      600:{
        items:1,
        nav:true,
      },
      1000:{
        items:1,
        nav:true,
        loop:true
      }
  }
});
// client Slider Section End

// Screenshosts slider Strat 
// $('.logo__slier.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   responsiveClass:true,
//   autoplay:true,
//   autoplayTimeout:2000,
//   dots:true,
//   responsive:{
//       0:{
//         items:6,
//         nav:true,
//       },
//       600:{
//         items:6,
//         nav:true,
//       },
//       1000:{
//         items:6,
//         nav:true,
//         loop:true
//       }
//   }
// });
$('.owl-carouselsss').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:2000,
  dots:true,
  responsive:{
      0:{
        items:5,
        nav:true,
      },
      600:{
        items:3,
        nav:true,
      },
      1000:{
        items:4,
        nav:true,
        loop:true
      }
  }
});
// Screenshots Slider End


//Client Logo slider Strat 
$('.client__logo__slider.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:2000,
  nav:true,
  responsive:{
      0:{
        items:3,
        nav:true,
      },
      600:{
        items:3,
        nav:true,
      },
      1000:{
        items:5,
        nav:true,
        loop:true
      }
  }
});
//Client Logo Slider End

// FAQ Section Strat  
$(function () {
  if ($('.accordion-list').length) {
      $('.accordion-list').on('click', '.accordion-title', function (e) {
          e.preventDefault();
          // remove siblings activities
          $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
          $(this).closest('.accordion-list-item').siblings().find('.ni').addClass('ni-plus').removeClass('ni-minus');

          // add slideToggle into this
          $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
          $(this).find('.ni').toggleClass('ni-plus ni-minus');
      });
  }
});
// FAQ Section End

});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  // Counter Section Strat 

  
    // Counter Section End