$(function() {
    var lightBoxNum;
    setInterval(function(){
        console.log(lightBoxNum)
    },500)
    $("a[data-lightbox]").unbind().click(function(e){
        e.preventDefault();
        lightBoxNum = $(this).attr('data-lightbox');
        console.log(lightBoxNum)
        $(".lightbox-mask").addClass('active');
        $(".lightbox-mask .lightbox").removeClass('active');
        $(".lightbox-mask [data-lightbox="+lightBoxNum+"]").addClass('active');
    })
    $(".lightbox-mask .close, .lightbox-mask .close-mask").click(function(e){
        e.stopPropagation();
        lightBoxNum = 0;
        $(".lightbox-mask").removeClass('active');
        $(".lightbox-mask .lightbox").removeClass('active');
    })

    $(".lightbox[data-lightbox=2] .tab-box li").click(function(){
        $(".lightbox[data-lightbox=2] .padding-box").addClass('hide');
        $(".lightbox .tab-box li").removeClass('active');
        $(this).addClass('active');
        var tabNum = $(this).attr('data-lightbox-tab')
        $(".lightbox .content-box").fadeOut(100);
        $(".lightbox .content-box[data-content="+tabNum+"]").fadeIn(100);
        setTimeout(function(){
            $(".lightbox[data-lightbox=2] .padding-box").removeClass('hide');
        },510)
    })
})