$(document).ready(function(){
    var navY = $('.nav').offset().top;

    var stickyNav = function(){
        var scrollY = $(window).scrollTop();

        if(scrollY > navY) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    }
    stickyNav();
    $(window).scroll(function(){
        stickyNav();
    })
})