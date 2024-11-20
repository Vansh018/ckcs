(function ($) {
    "use strict";
    new WOW().init();
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

const thoughts = [
    "'The only way to do great work is to love what you do.'",
    "'In the end, we only regret the chances we didn't take.'",
    "'It always seems impossible until it's done.'",
    "'Success is not final, failure is not fatal: It is the courage to continue that counts.'",
    "'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.'",
    "'The future belongs to those who believe in the beauty of their dreams.'",
    "'You are never too old to set another goal or to dream a new dream.'",
    "'The best way to predict the future is to create it.'"
];


const today = new Date();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

const thoughtIndex = dayOfYear % thoughts.length;


document.getElementById("thoughte").textContent = thoughts[thoughtIndex];