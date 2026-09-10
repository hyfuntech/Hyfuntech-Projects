document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.hero-swiper', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade', 
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">0' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});

document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper !== 'undefined' && document.querySelector('.ride-gallery-swiper')) {
        new Swiper('.ride-gallery-swiper', {
            slidesPerView: 1.2,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.gallery-nav-next',
                prevEl: '.gallery-nav-prev',
            },
            pagination: {
                el: '.gallery-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.8,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 24,
                }
            }
        });
    }
});
