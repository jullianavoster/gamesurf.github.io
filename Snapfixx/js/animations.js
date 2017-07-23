$(function() {
    /* SCRIPT FOR FIXED MAIN MENU */
    $(window).scroll(function () {
        var scrollHeight=$("body").scrollTop();
        if(scrollHeight > 100) {
            $(".main-menu").addClass("main-menu-fixed");
        }
        else {
            $(".main-menu").removeClass("main-menu-fixed");
        }
    });
    /* /SCRIPT FOR FIXED MAIN MENU */

    /* SCRIPT FOR LINKS MOVEMENT */
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });
    /* /SCRIPT FOR LINKS MOVEMENT */

    /* SCRIPT FOR SLIDER */
    $('.testimonials-slider').slick({
        adaptiveHeight: true
    });
    /* /SCRIPT FOR SLIDER */

});