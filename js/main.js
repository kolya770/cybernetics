$(document).ready(function() {

    //Navbar animation
    var options = {
        offset: 200
    };

    new Headhesive('.nav-cybernetics', options);

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

    //Search mobile btn

    $('#search-mobile').on('click', function() {

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

    //Fix popup
    var modal = $('.modal');

    modal.on('show.bs.modal', function () {
        if ($(document).height() > $(window).height()) {
            // no-scroll
            $('body').addClass("modal-open-noscroll");
        }
        else {
            $('body').removeClass("modal-open-noscroll");
        }
    });

    modal.on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    });

    //Error modal authorize
    $('#login').on('click', function(){
        $('.error-message').fadeIn('slow');
    });

    //Accordion
    var accordionsMenu = $('.cd-accordion-menu');

    if( accordionsMenu.length > 0 ) {

        accordionsMenu.each(function(){
            var accordion = $(this);
            //detect change in the input[type="checkbox"] value
            accordion.on('change', 'input[type="checkbox"]', function(){
                var checkbox = $(this);
                console.log(checkbox.prop('checked'));
                ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
            });
        });
    }

    //Animated slide bar left

    var take_width = $('.main-content-block').width();
    var left_block = $('.dop-block');

    $('#close-left-navbar').on('click', function() {

        $('.open-btn-block').fadeIn(2000);
        
        left_block.animate({
            left: "-=+285px"
        }, 1200);

        $('.main-content-block').animate({
            "margin-left": "-=+285px",
            width: take_width + 285
        }, 3000);

    });

    $('#open-left-navbar').on('click', function() {

        left_block.animate({
            left: "-=-285px"
        }, 1200);

        $('.main-content-block').animate({
            "margin-left": "-=-285px",
            width: take_width
        }, 3000);

        $('.open-btn-block').fadeOut(2000);
    })
});

$(window).load(function() {
    //Width content block
    var height = $('.information').height();
    $('.dop-menu-block').css('min-height', height);
});