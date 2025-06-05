$(function() {
    $(".section2 .tab-box li").click(function(){
        var tabNum = $(this).attr('data-tab');
        $(".section2 .tab-box li").removeClass('active');
        $(this).addClass('active');

        $(".data-table").removeClass('active');
        setTimeout(function(){
            $(".data-table").css('display','none');
            $(".data-table-"+tabNum).css('display','block');
        },500)
        setTimeout(function(){
            $(".data-table-"+tabNum).addClass('active');
        },600)


        
    })
})