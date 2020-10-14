(function($) {
  "use strict";

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#sticky-header").removeClass("sticky-menu");
    } else {
      $("#sticky-header").addClass("sticky-menu");
    }
  });

  $('.main-menu ul li:first-child > a').addClass('active')
  $('.main-menu ul li > a').on('click', function() {
    $('.basic-menu li a').removeClass('active');
    $(this).addClass("active");
  });

  function smoothSctollTop() {
    $('.main-menu ul li > a').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 20
        }, 800);
      }
    });
  }
  smoothSctollTop();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
    }
  });

  $(".goTop").on('click', function() {
    $("body, html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu',
  });
  //mobile menu

  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      responsive: [{
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          fade: false
        }
      }]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();
  new WOW().init();


  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })

  // filter items on button click
  $('.protfolio-part').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  //for menu active class
  $('.protfolio-part button').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
  // init Isotope
  var $grid = $('.grid').isotope({
    // options
  });

  $('.client-active').owlCarousel({
    loop: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })
  $('.blog-active').owlCarousel({
    loop: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })
  $('.brand-active').owlCarousel({
    loop: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      300: {
        items: 2
      },
      400: {
        items: 2
      },
      450: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  var feed = new Instafeed({
    get: 'user',
    userId: 2212477307,
    accessToken: '2212477307.1677ed0.05b727c9a3d5415fbefe1f5d44a07c87',
    target: 'Instafeed',
    resolution: 'thumbnail',
    limit: 6,
    template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
  });
  feed.run();



})(jQuery);
