$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdownmenu').toggleClass('is-active');
    });

    $('.custom-select select').selectric();

    var contSlider = new Swiper('.reserv-gallery, .page-gallery', {
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

    var contSlider = new Swiper('.photogallery', {
        slidesPerView: 3,
        spaceBetween: 35,
        loop: true,
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
            },
            991: {
                slidesPerView: 1.4,
                spaceBetween: 30,
            }
        }
    });

    var contSlider2 = new Swiper('.inner-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination_inner',
            clickable: true,
        },
    });

    var myAdvSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 767 && myAdvSlider == undefined) {
            var advSlider = new Swiper('.apartment-slider', {
                slidesPerView: 3,
                spaceBetween: 80,
                loop: false,
                simulateTouch: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination_outer',
                    clickable: true,
                },

                breakpoints: {

                    1279: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    }
                }
            });
        } else if (screenWidth < 768 && myAdvSlider != undefined) {
            myAdvSlider.destroy();
            myAdvSlider = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiper();














});
