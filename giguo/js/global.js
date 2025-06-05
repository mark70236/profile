$(function() {
    AOS.init();
    
    if($(window).width()>768){
        luxy.init();
    }


    //判斷header切換樣式
    $(window).scroll(function () {
        //console.log($(window).scrollTop())
        if($(window).scrollTop()>300){
            if(!$("header").hasClass('active')){
                $("header").addClass('active')
            }
        }else {
            $("header").removeClass('active')
        }
    });

    //判斷to top按鈕出現時機
    $(window).scroll(function () {
        //console.log($(window).scrollTop())
        if($(window).scrollTop()>300){
            if(!$(".to-top").hasClass('active')){
                $(".to-top").addClass('active')
            }
        }else {
            $(".to-top").removeClass('active')
        }
    });

    //to top功能
    $(".to-top").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
    })


    $(document).on('click','.menu-btn-mobile', function () {
        $(".header-menu-for-mobile").addClass('active')
    })
    $(document).on('click','.header-menu-for-mobile .close-btn', function () {
        $(".header-menu-for-mobile").removeClass('active')
    })
})