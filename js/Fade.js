$(document).ready(function() {

    var md = new MobileDetect(window.navigator.userAgent);

    if ( ! md.mobile() ) {

        $('.fade-bottom').fadeThis({
            speed: 1000
        });

    }

    if ( md.tablet() ) {

        $('.fade-bottom').fadeThis({
            speed: 1000
        });
    }

});