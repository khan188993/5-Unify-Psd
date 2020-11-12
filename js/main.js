$(document).ready(function () {

    // Responsive Menu click Button 

    $('.menu-btn').click(function () {
        $('.basic-menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //sticky header,scroll btn active code 

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 100) {
            $('.header-area').addClass("sticky");
        } else {
            $('.header-area').removeClass("sticky");
        }


        if (window.innerWidth > 720) {
            // scroll-up button show/hide script
            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
        } else {
            // do something else or do nothing
        }



    });

    // Scroll Up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });



    // owl carousel slider active code 

    $('.slider-active.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        navText: ['<i class="fas fa-arrow-circle-left"></i>', '<i class="fas fa-arrow-circle-right"></i>'],
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })


    // Blog Owl carousel active code 

    $('.blog-active.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        navText: ['<i class="fas fa-arrow-circle-left"></i>', '<i class="fas fa-arrow-circle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1150: {
                items: 1,
            },
            1200: {
                items: 2,
            }
        }
    })


    // Partner Owl carousel active code 

    $('.partner-active.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        navText: ['<i class="fas fa-arrow-circle-left"></i>', '<i class="fas fa-arrow-circle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    })
    // Client Owl carousel active code 

    $('.client-active.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        navText: ['<i class="fas fa-arrow-circle-left"></i>', '<i class="fas fa-arrow-circle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            900: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    })


    // isotop plugin code 

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })

    // filter items on button click
    $('.work-btn').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.work-btn button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });



    //   wow js code 

    new WOW().init();




})
