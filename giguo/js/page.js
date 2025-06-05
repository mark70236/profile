$(function() {
    // activity-list頁 tab切換功能
    $("body.activity-list .tab-box li").click(function(){
        $("body.activity-list .tab-box li").removeClass('active')
        $(this).addClass('active')
        var targetNum = $(this).attr('data-tab-num')
        $(".activity-list-box ul li").fadeOut(500)
        setTimeout(function(){
            $(".activity-list-box >ul li[data-tab-num="+targetNum+"]").fadeIn(300)
            AOS.init();
        },500)
    })

    // store-list頁 tab錨點功能
    $("body.store-list .tab-box li").click(function(){
        var targetNum = $(this).attr('data-tab-num')
        $("html, body").animate({ scrollTop: $(".store-list-box .area-title[data-tab-num="+targetNum+"]").offset().top-250 }, 500);
    })

    // menu頁輪播
    let swiperMenuSlideDesktop
    let swiperMenuSlideMobile
    swiperMenuSlideDesktop = new Swiper('.swiper-container-menu-slide', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        centeredSlides: true,
        autoHeight: true,
        speed: 1500,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 30,
                slidesPerView: 1,
                centeredSlides: false,
            },
            // when window width is >= 640px
            768: {
                spaceBetween: 100,
            },
            // when window width is >= 640px
            1400: {
                spaceBetween: 150,
            }
        }
    });
    // swiperMenuSlideMobile = new Swiper('.swiper-container-menu-slide.for-mobile', {
    //     slidesPerView: 1,
    //     spaceBetween: 50,
    //     loop: true,
    //     centeredSlides: true,
    //     autoHeight: true,
    //     speed: 1500,
    //     autoplay: {
    //         delay: 10000,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="' + className + '"></span>';
    //         },
    //     },
    //     navigation: {
    //         nextEl: '.next',
    //         prevEl: '.prev',
    //     },
    //     breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //             spaceBetween: 30,
    //             slidesPerView: 1,
    //             centeredSlides: false,
    //         },
    //         // when window width is >= 640px
    //         768: {
    //             spaceBetween: 100,
    //         },
    //         // when window width is >= 640px
    //         1400: {
    //             spaceBetween: 150,
    //         }
    //     }
    // });

})