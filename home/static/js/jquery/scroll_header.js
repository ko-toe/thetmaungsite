$(window).scroll(function (event) {

    var test = $(window).scrollTop();
    if ( test > 100 ) {
        $('header').addClass('scroll');
        document.getElementById("top").style.display = "block";
    }
    else {
        $('header').removeClass('scroll');
        document.getElementById("top").style.display = "none";
    }
});

function topFunction() {
    // document.body.scrollTop = 0; // For Chrome, Safari and Opera
    // document.documentElement.scrollTop = 0; // For IE and Firefox
    $("html, body").animate({scrollTop: "0px"}, 500);
}