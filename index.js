$(document).on('ready', function () {
    $(".regular").slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 60000 //the default
    });

    var $carousel = $('.regular');
    $(document).on('keydown', function (e) {
        if (e.keyCode == 37) {
            $carousel.slick('slickPrev');
        }
        if (e.keyCode == 39) {
            $carousel.slick('slickNext');
        }
    });
});