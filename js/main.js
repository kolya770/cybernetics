$(document).ready(function() {

    // Search button
    $('#search').on('click', function() {

        var btn_search = $('.btn-search');
        var input_search = $('.input-search');

        if ( btn_search.hasClass('active-btn') &&  input_search.hasClass('active-input') ) {

            btn_search.removeClass('active-btn');
            input_search.removeClass('active-input');

            return true;
        }

        btn_search.addClass('active-btn');
        input_search.addClass('active-input');
    });

    // Carousel main

    $('#carousel').carousel({
        interval: 3000,
        pause: "false"
    });

    $('.stop-carousel').on('click', function() {
        $('#carousel').carousel('pause');
    });

    // Carousel mini

    $('.slider4').bxSlider({
        slideWidth: 350,
        minSlides: 2,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10
    });

});