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

    //Slider-mini
    $('.slider-mini').slick({
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow:"<img class='a-left control-c prev slick-prev shape-left' src='img/Shape-left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next shape-right' src='img/Shape-right.png'>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

});