

$(function() {
    new WOW().init();


    
})

$(window).on('load', function() {
    // 确保所有图片都已经加载完毕
    $('img').each(function() {
        if (!this.complete) {
            console.log('有圖片尚未載入完成');
            return;
        }
    });

    //kv進場
    setTimeout(() => { $(".cool").addClass('active') }, 500);
    setTimeout(() => { $(".sun").addClass('active') }, 700);
    setTimeout(() => { $(".title").addClass('active') }, 900);
    setTimeout(() => { $(".dino").addClass('active') }, 1300);
    setTimeout(() => { $(".heysong-sarsaparilla").addClass('active') }, 1500);
    
    setTimeout(() => { $(".section1 .btn1").addClass('active') }, 1700);
    setTimeout(() => { $(".section1 .btn2").addClass('active') }, 1800);

    setTimeout(() => { $(".dec-left").addClass('active') }, 2200);
    setTimeout(() => { $(".dec-right").addClass('active') }, 2300);

    //固定按鈕出現時機
    $(window).scroll(function(){
        if($(window).scrollTop()>$(window).height()){
            $(".fix-btn").fadeIn(300)
        }else {
            $(".fix-btn").fadeOut(100)
        }
    })
    
    //錨點功能
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $(".link.anchor").click(function(){
        var anchorNum = $(this).attr('data-anchor-num')
        if(anchorNum=="1"){
            $body.animate({
                scrollTop: $(".section3 .dino").offset().top
            }, 1000, 'swing');
        }else if(anchorNum=="2"){
            $body.animate({
                scrollTop: $(".section2 >.content").offset().top-300
            }, 1000, 'swing');
        }else if(anchorNum=="3"){
            $body.animate({
                scrollTop: $(".section4 .collapse-box").offset().top-100
            }, 1000, 'swing');
        }else {
            $body.animate({
                scrollTop: $(".section5 >.title").offset().top-100
            }, 1000, 'swing');
        }
    })
    //手機版選單開關
    $(".btn-menu.for-mobile").click(function(){
        $(this).toggleClass('active')
        $(".menu-box.for-mobile").toggleClass('active')
    })
    //點擊手機版選單內的錨點，順便關閉選單
    $(".menu-box.for-mobile .link.anchor").click(function(){
        $(".btn-menu.for-mobile").removeClass('active')
        $(".menu-box.for-mobile").removeClass('active')
    })
    
    

    //collapse 摺疊收合區塊
    $(".collapse").removeClass('active')
    $(".collapse .collapse-content").removeClass('active').slideToggle();
    $(".collapse:first-child").addClass('active')
    $(".collapse:first-child .collapse-content").slideToggle();
    $(".collapse .collapse-title").click(function(){
        var $this = $(this).parent()
        if($this.hasClass('active')){
            $this.removeClass('active')
        }else {
            $this.addClass('active')
        }
        $this.find('.collapse-content').slideToggle();
    })


    //tab切換
    $(".section5 .tab-box .tab").click(function(){
        let targetNum = $(this).attr('data-tab')
        $(".section5 .tab-box .tab").removeClass('active')
        $(this).addClass('active')
        $(".section5 >.collapse-box").fadeOut(300)
        setTimeout(() => {
            $(".section5 >.collapse-box[data-list="+targetNum+"]").fadeIn(500)
        }, 300);
    })

    //
    var target2 = $(".section3 >.content >.btn")
    var wkTarge21Offset = target2.offset().top;
    $(window).scroll(function(event) {
        if (wkTarge21Offset >= $(window).scrollTop() && wkTarge21Offset < ($(window).scrollTop() + $(window).height())) {
            $(".section3").addClass('point-event-auto')
        }else {
            $(".section3").removeClass('point-event-auto')
        }
    });

    //rocket
    var target1 = $(".section2 >.content")
    var wkTarget1Offset = target1.offset().top;
    $(window).scroll(function(event) {
        if (wkTarget1Offset >= $(window).scrollTop() && wkTarget1Offset < ($(window).scrollTop() + $(window).height())) {
            $(".rocket-box").addClass('active')
            setTimeout(() => {
                $(".rocket-box").addClass('active2')
            }, 500);
        }
    });
});