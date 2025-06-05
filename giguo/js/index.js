$(function() {

    let swiper1
    setTimeout(function(){
        $(".kv-box").addClass('active')
        if($(window).width()>768){
            swiper1 = new Swiper('.swiper-container1.for-desktop', {
                spaceBetween: 30,
                effect: 'fade',
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.btn-next-kv',
                    prevEl: '.btn-prev-kv',
                },
            });
        }else {
            swiper1 = new Swiper('.swiper-container1.for-mobile', {
                spaceBetween: 30,
                effect: 'fade',
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.btn-next-kv',
                    prevEl: '.btn-prev-kv',
                },
            });
        }
    

        //跑馬燈公告輪播
        const swiperNewsMarquee = new Swiper('.swiper-container-news-marquee', {
            spaceBetween: 50,
            //effect: 'fade',
            loop: true,
            speed: 1500,
            autoHeight: true,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            },
        });
        
        //產品輪播
        const swiper2 = new Swiper('.swiper-container2', {
            slidesPerView: 3,
            // slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
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
            // breakpoints: {
            //     // when window width is >= 320px
            //     320: {
            //         spaceBetween: 30,
            //         slidesPerView: 1,
            //         centeredSlides: false,
            //     },
            //     // when window width is >= 640px
            //     768: {
            //         spaceBetween: 100,
            //     },
            //     // when window width is >= 640px
            //     1400: {
            //         spaceBetween: 150,
            //     }
            // }
        });
        


    },2000)
    
    //lightbox公告輪播
    // if ($(".swiper-container-lightbox .swiper-slide").length > 1) {
    //     const swiperContainerLightbox = new Swiper('.swiper-container-lightbox', {
    //         spaceBetween: 50,
    //         effect: 'fade',
    //         loop: true,
    //         speed: 1000,
    //         autoHeight: true,
    //         autoplay: {
    //             delay: 10000,
    //             disableOnInteraction: false,
    //         },
    //         pagination: {
    //             el: '.swiper-pagination-lightbox',
    //             clickable: true,
    //         },
    //         navigation: {
    //             nextEl: '.btn-next-lightbox',
    //             prevEl: '.btn-prev-lightbox',
    //         },
    //     });
    // }
    // else{
    //     $('.swiper-wrapper').addClass("disabled");
    //     $('.btn-prev-lightbox').addClass("disabled");
    //     $('.btn-next-lightbox').addClass("disabled");
    // }

    // lightbox顯示/隱藏
    // $(".lightbox").fadeIn(500);
    // $(".lightbox .btn-close,.lightbox .bg").click(function(){
    //     $(".lightbox").fadeOut(500);
    // })

})