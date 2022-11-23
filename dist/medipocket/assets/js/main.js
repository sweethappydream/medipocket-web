$(function ($) {
  "use strict";

  //veno-box js
  $('.venobox').venobox();

  var $window = $(window);
  var html_body = $('html, body')


  //for scroll bottom to top js here
  if ($('.totop').length) {
    var scrollTrigger = 150, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('.totop').addClass('show');
        } else {
          $('.totop').removeClass('show');
        }
      };

    backToTop();
    $window.on('scroll', function () {
      backToTop();
      if ($window.scrollTop()) {
        $("#mainHeader").addClass('stiky');
      } else {
        $("#mainHeader").removeClass('stiky');
      }
    });

    $('.totop').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }


  //Site Preloader
  jQuery(window).on('load', function () {
    var $sitePreloaderSelector = $('.site-preloader');
    $sitePreloaderSelector.fadeOut(500);


  });



  /*---------------------------------------------------
  Service Slider
  ----------------------------------------------------*/
  var $homeTestimonial = $('.serviceSlider');

  $homeTestimonial.owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2
      },
      768: {
        items: 2
      },
      991: {
        items: 2
      },
      1200: {
        items: 3
      },
      1920: {
        items: 3
      }
    }
  });

  // testimonial slider
  var $testimonailcarousel = $('.testiminal-carousel');

  $testimonailcarousel.owlCarousel({
    loop: true,
    margin: 30,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 1
      },
      768: {
        items: 1
      },
      991: {
        items: 1
      },
      1200: {
        items: 1
      },
      1920: {
        items: 1
      }
    }
  })


  var $featureLinks = $('#tesitmonial_right_item li')
  $testimonailcarousel.on("changed.owl.carousel", function (e) {
      var o = e.item.index + 0 - e.relatedTarget._clones.length / 2,
        n = e.item.count;
      (o > n || 0 == o) && (o = n - o % n), o--;
      var t = $("#tesitmonial_right_item li:nth(" + o + ")");
      t.addClass("active").siblings().removeClass('active')
    }),
    $featureLinks.on("click", function () {
      $testimonailcarousel.trigger("to.owl.carousel", $(this).data("owl-item"));
    });


}(jQuery));
