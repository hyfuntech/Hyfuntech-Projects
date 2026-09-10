document.addEventListener('DOMContentLoaded', function () {
        const spinSwiper = new Swiper('.spin-swiper', {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.spin-button-next',
                prevEl: '.spin-button-prev',
            },
            pagination: {
                el: '.spin-pagination',
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 20 }
            }
        });
});