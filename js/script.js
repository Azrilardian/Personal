$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('main-navbar-shadow');
    } else {
        $('.navbar').removeClass('main-navbar-shadow');
    }

    if (wScroll > $('.qualifications').offset().top - 200) {
        $('.qualifications .right').addClass('muncul');
    }
});