! function () {
    var view = document.querySelector('#mySildes')
    var controller = function (view) {
        var mySwiper = new Swiper(view.querySelector(".swiper-container"), {
            loop: true,
            pagination: {
                el: ".swiper-pagination"
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            scrollbar: {
                el: ".swiper-scrollbar"
            }
        });
    }
    controller(view)
}.call()