$(function() {
    $(".upload-box").click(function(){
        $(".upload-btn").click()
    })
    var options = {  
        useEasing: false,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    var counts1 = new CountUp('countupEle1', 0, 871, 0, 1, options);
    var counts2 = new CountUp('countupEle2', 0, 361, 0, 1.5, options);
    var target1 = $("#countupEle1")
    var wkTarget1Offset = target1.offset().top+100;
    if (wkTarget1Offset >= $(window).scrollTop() && wkTarget1Offset < ($(window).scrollTop() + $(window).height())) {
        counts1.start();
        counts2.start();
    }
    $(window).scroll(function(event) {
        if (wkTarget1Offset >= $(window).scrollTop() && wkTarget1Offset < ($(window).scrollTop() + $(window).height())) {
            counts1.start();
            counts2.start();
        }
    });
    
})