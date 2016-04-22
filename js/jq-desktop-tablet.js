$(document).ready(function() {

    var md = new MobileDetect(window.navigator.userAgent);

    if ( ! md.mobile() ) {

        $('#carousel').carousel({
            interval: 3000,
            pause: "false"
        });

        $('.stop-carousel').on('click', function() {
            $('#carousel').carousel('pause');
        });

        //News card height change
        $(window).load(function() {
            var news_text_max_height = Math.max.apply(null, $("div.news-block h3").map(function () {
                return $(this).height();
            }).get());

            $('.news-block h3').css('height', news_text_max_height);
        });

        // Fade animation
        $('.fade-bottom').fadeThis({
            speed: 1000
        });

    }

    if ( md.tablet() ) {

        $('#carousel').carousel({
            interval: 3000,
            pause: "false"
        });

        $('.stop-carousel').on('click', function() {
            $('#carousel').carousel('pause');
        });

        //News card height change
        $(window).load(function() {
            var news_text_max_height = Math.max.apply(null, $("div.news-block h3").map(function () {
                return $(this).height();
            }).get());

            $('.news-block h3').css('height', news_text_max_height);
        });

        // Fade animation
        $('.fade-bottom').fadeThis({
            speed: 1000
        });
    }

});
