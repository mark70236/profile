$(function() {
    $('.owl-carousel').owlCarousel({
        stagePadding: 250,
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:3,
        responsive:{ 
            300:{
                items:1,
                stagePadding: 50,
            },
            500:{
                items:2,
                stagePadding: 20,
            },
            600:{
                items:1,
                stagePadding: 150,
            },
            800:{
                items:2,
                stagePadding: 50,
            },
            1000:{
                items:3,
                stagePadding: 50,
            },
            1300:{
                items:3,
                stagePadding: 150,
            },
            1600:{
                items:3,
                stagePadding: 250,
            }
        }
    })
})