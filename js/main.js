$(document).ready(function () {

    //Navbar animation
    var options = {
        offset: 200
    };

    new Headhesive('.nav-cybernetics', options);

    // Search button
    $('#search').on('click', function () {
        var btn_search = $('.btn-search');
        var input_search = $('.input-search');

        if (btn_search.hasClass('active-btn') && input_search.hasClass('active-input')) {

            btn_search.removeClass('active-btn');
            input_search.removeClass('active-input');

            return true;
        }

        btn_search.addClass('active-btn');
        input_search.addClass('active-input');
    });

    //Search mobile btn

    var search_mobile = $('#search-mobile');

    search_mobile.on('click', function () {

        var btn_search = $('.btn-search');
        var input_search = $('.input-search');

        if (btn_search.hasClass('active-btn') && input_search.hasClass('active-input')) {

            btn_search.removeClass('active-btn');
            input_search.removeClass('active-input');
            $('#search-mobile').css('left', '-3px');

            return true;
        }

        btn_search.addClass('active-btn');
        input_search.addClass('active-input');
        search_mobile.css('left', '-225px');
    });

    //Slider-mini
    $('.slider-mini').slick({
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow: "<img class='a-left control-c prev slick-prev shape-left' src='img/Shape-left.png'>",
        nextArrow: "<img class='a-right control-c next slick-next shape-right' src='img/Shape-right.png'>",
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

    //Accordion
    var accordionsMenu = $('.cd-accordion-menu');

    if (accordionsMenu.length > 0) {

        accordionsMenu.each(function () {
            var accordion = $(this);
            //detect change in the input[type="checkbox"] value
            accordion.on('change', 'input[type="checkbox"]', function () {
                var checkbox = $(this);
                ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
            });
        });
    }

    //table

    $('.selectpicker').on('click', function () {
        $('.schedule-table').removeClass('hidden');




            //Width content block
            var height = $('.main-content-block').height();
        console.log(height);
            $('#menu').css('min-height', height);

    })


        $("#lightgallery").lightGallery();



});


