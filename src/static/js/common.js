$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdownmenu').toggleClass('is-active');
    });

    $('.custom-select select').selectric();

    var contSlider = new Swiper('.reserv-gallery', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 1.2,
                spaceBetween: 19,
            }
        }
    });
});
