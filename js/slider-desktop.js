// Carousel main

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

    }

});
