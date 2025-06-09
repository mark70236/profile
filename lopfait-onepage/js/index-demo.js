
//如果檢測到頁面是從“往返快取”中讀取的，重新整理頁面
// window.addEventListener('pageshow', function(event) {
//     alert('pageshow')
//     if (event.persisted) {
//     	location.reload();
//     }
// })
const detectBrowser = {
    isIOs: () => /iPad|iPhone|iPod/.test(navigator.userAgent),
    isIpad: () => {
      if (/iPad/i.test(navigator.userAgent)) {
        return true;
      }
      if (/Macintosh/i.test(navigator.userAgent)) {
        try {
          document.createEvent('TouchEvent');
          return true;
        } catch (e) {}
      }
      return false;
    },
}



window.onpageshow = function(event) {
    //alert(event.persisted);
    if (event.persisted) {
        window.location.reload();
    }
    // if (detectBrowser.isIpad()){
    //     window.location.reload();
    // }
}
window.addEventListener('unload',function () { });

//   function rotate(el, degs) {
//     iedegs = degs/90;
//     if (iedegs < 0) iedegs += 4;
//     transform = 'rotate('+degs+'deg)';
//     iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+iedegs+')';
//     styles = {
//       transform: transform,
//       '-webkit-transform': transform,
//       '-moz-transform': transform,
//       '-o-transform': transform,
//       filter: iefilter,
//       '-ms-filter': iefilter
//     };
//     $(el).css(styles);
//   }
var time1 = 0
var time2 = 0
var elapsedTime = 0
var chefNum1 = 0
var chefNum2 = 1
var chefNum3 = 2
var countLi = 1
var AboutFirstEnter = 1
var MenuFirstEnter = 1
var ChefFirstEnter = 1
var NewsFirstEnter = 1
var ReservationFirstEnter = 1
var InfoFirstEnter = 1
var ContactFirstEnter = 1
var FooterFirstEnter = 1
var firstIntoSlide1 = 0
var firstIntoSlide2 = 0
var firstIntoSlide3 = 0
var skip = 0

$(function() {
    var videoMenu = document.getElementById("videoMenu");
    var videoWine = document.getElementById("videoWine");
    videoMenu.play()
    videoWine.play()
    var videoReservation = document.getElementById("videoReservation");
    //loading動畫起始時間
    time1 = new Date()
    time1 = time1.getTime()

    //fullpage初始化
    new fullpage('#fullpage', {
        //options here
        licenseKey: 'YOUR_KEY_HERE',
        autoScrolling:true,
        scrollingSpeed: 1000,
        scrollHorizontally: true,
        normalScrollElements: '.info-text-box',
        slidesNavigation: true,
	    slidesNavPosition: 'bottom',
        onLeave: function(origin, destination, direction){
            console.log(origin)
            if(origin.index == 0 && direction == 'down'){
                if(AboutFirstEnter==1){
                    AboutFirstEnter = 0
                    setTimeout(function(){
                        $(".section-about #slide1 .title-box").addClass('active')
                    },300)
                    setTimeout(function(){
                        $(".section-about #slide1 .bg-line").addClass('active')
                    },400)

                    //menu區塊 slide1圖片輪播
                    var aboutSlde1BgNum = 1
                    setTimeout(function(){
                        setInterval(() => {
                            aboutSlde1BgNum++
                            if(aboutSlde1BgNum>4) {
                                aboutSlde1BgNum=1
                                if(firstIntoSlide1==0) {
                                    firstIntoSlide1 = 1
                                    if($(".section-about").hasClass('active')){
                                        fullpage_api.moveTo(2, 1);
                                    }
                                    
                                }
                            }
                            $(".section-about #slide1 .bg-slide-box .bg-slide.active").addClass('leaving')
                            setTimeout(() => {
                                $(".section-about #slide1 .bg-slide-box .bg-slide.leaving").removeClass('leaving active')
                            }, 2500);
                            setTimeout(() => {
                                $(".section-about #slide1 .bg-slide-box .bg-slide"+aboutSlde1BgNum+"").addClass('active')
                            }, 3000);
                        }, 7000);
                    },2000)
                    //menu區塊 slide2圖片輪播
                    var aboutSlde2BgNum=1
                    
                    setInterval(() => {
                        aboutSlde2BgNum++
                        if(aboutSlde2BgNum>4) {
                            aboutSlde2BgNum=1
                            if(firstIntoSlide1 == 1 && firstIntoSlide2==0) {
                                firstIntoSlide2 = 1
                                if($(".section-about").hasClass('active')){
                                    fullpage_api.moveTo(2, 2);
                                }
                                
                            }
                            
                        }
                        $(".section-about #slide2 .bg-slide-box .bg-slide.active").addClass('leaving')
                        setTimeout(() => {
                            $(".section-about #slide2 .bg-slide-box .bg-slide"+aboutSlde2BgNum+"").addClass('active')
                        }, 2500);
                        setTimeout(() => {
                            $(".section-about #slide2 .bg-slide-box .bg-slide.leaving").removeClass('leaving active')
                        }, 3000);
                    }, 7000);
                    
                }

            }
            if(origin.index == 1 && direction == 'down'){
                console.log("從Section 2離開");
                $(".section-menu .circle1").addClass('enter')
                $(".section-menu .bg-box .bg1").fadeIn(1000)
                $(".section-menu .text-box .text1").fadeIn(500)
                if(MenuFirstEnter==1){
                    MenuFirstEnter = 0
                    $(".section-menu .left-bg").removeClass('active2')
                    setTimeout(function(){
                        $(".section-menu .dec-line").addClass('active1')
                    },300)
                    setTimeout(function(){
                        $(".section-menu .selector-menu").addClass('active1')
                    },500)
                    setTimeout(function(){
                        $(".section-menu .selector-wine").addClass('active1')
                    },600)
                    
                    setTimeout(function(){
                        $(".section-menu .selector-menu").addClass('active2')
                    },900)
                    setTimeout(function(){
                        $(".section-menu .text-box .text1").addClass('active')
                    },1200)
                }
                videoMenu.play()
                videoWine.play()
            }
            
            if(origin.index == 2 && direction == 'down'){
                if(ChefFirstEnter==1){
                    ChefFirstEnter = 0
                    setTimeout(function(){
                        $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").removeClass('prepare').addClass('enter')
                        $(".section-chef .chef-box .chef2").removeClass('prepare').addClass('active')
                        $(".section-chef .bg").addClass('active')
                       
                    },300)
                    setTimeout(function(){
                        $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").removeClass('enter')
                    },1300)
                }
            }
            if(origin.index == 3 && direction == 'up'){
                videoMenu.play()
                videoWine.play()
            }
            if(origin.index == 3 && direction == 'down'){
                if(NewsFirstEnter==1){
                    NewsFirstEnter = 0
                    setTimeout(function(){
                       $(".section-news .section-title").addClass('active')
                    },400)
                    setTimeout(function(){
                        $(".section-news .left-box .date").addClass('active')
                        $(".section-news .img-box").addClass('active')
                    },500)
                    setTimeout(function(){
                        $(".section-news .right-box .title").addClass('active')
                    },600)
                    setTimeout(function(){
                        $(".section-news .right-box .text").addClass('active')
                    },700)
                    setTimeout(function(){
                        $(".section-news .news-type-text").addClass('active')
                    },800)
                }
            }
            if(origin.index == 4 && direction == 'down'){
                if(ReservationFirstEnter==1){
                    ChefFirstEnter = 0
                    setTimeout(function(){
                        $(".section-reservation .section-title").addClass('active1')
                    },700)
                    setTimeout(function(){
                        $(".section-reservation .subtitle").addClass('active1')
                    },1000)

                    setTimeout(function(){
                        $(".section-reservation .subtitle").addClass('active2')
                        $(".section-reservation .bg-box").addClass('active2')
                        $(".section-reservation .section-title").addClass('active2')
                        $(".section-reservation .reservation-now").addClass('active2')
                        $(".section-reservation .black-mask").addClass('active1')
                        $(".section-reservation .section-title").mouseenter(function(){
                            $(".section-reservation .black-mask").removeClass('active1')
                        })
                        $(".section-reservation .section-title").mouseleave(function(){
                            $(".section-reservation .black-mask").addClass('active1')
                        })
                    },4000)
                }
                
                videoReservation.play();
                
            }
            if(origin.index == 5 && direction == 'down'){
                
                    setTimeout(function(){
                        $(".section-information .left-box").addClass('active')
                        $(".section-information .right-box").addClass('active')
                    },300)
                    
                    setTimeout(function(){
                        $(".section-information .section-title").addClass('active')
                    },400)
            }
            if(origin.index == 6){
                // setTimeout(function(){
                //     $(".section-information .left-box").removeClass('active')
                //     $(".section-information .right-box").removeClass('active')
                // },700)
            }
            if(origin.index == 6 && direction == 'up'){
                videoReservation.play();
            }
            if(origin.index == 7 && direction == 'up'){
                
                setTimeout(function(){
                    $(".section-information .left-box").addClass('active')
                    $(".section-information .right-box").addClass('active')
                },300)
                
                setTimeout(function(){
                    $(".section-information .section-title").addClass('active')
                },400)
            }
            if(origin.index == 6 && direction == 'down'){
                if(ContactFirstEnter==1){
                    ContactFirstEnter = 0
                    setTimeout(function(){
                        $(".section-contact .section-title .title").addClass('active')
                        $(".section-contact .section-title .dec-line").addClass('active')
                    },400)
                    setTimeout(function(){
                        $(".section-contact .left-box").addClass('active')
                    },500)
                    setTimeout(function(){
                        $(".section-contact .right-box").addClass('active')
                    },600)
                    setTimeout(function(){
                        $(".section-contact .mid-line").addClass('active')
                    },700)
                }
            }
            if(origin.index == 7 && direction == 'down'){
                if(FooterFirstEnter==1){
                    FooterFirstEnter = 0
                    var time1 = 1000;
                    var time2 = 1000;
                    $(".section-footer .anchor-menu li").each(function(){
                        var $this = $(this)
                        setTimeout(function(){
                            $this.addClass('active')
                        },time1)
                        time1 += 100;
                    })
                    $(".section-footer .icon-box li").each(function(){
                        var $this = $(this)
                        setTimeout(function(){
                            $this.addClass('active')
                        },time2)
                        time2 += 100;
                    })
                    setTimeout(function(){
                        $(".section-footer .dec-line").addClass('active')
                    },700)
                    setTimeout(function(){
                        $(".section-footer .copyright").addClass('active')
                    },1750)
                }
            }
        },
        onSlideLeave: function(section, origin, destination, direction) {
            console.log(section)
            console.log(origin)
            console.log(destination)
            console.log(direction)
            $("#slide1 .bg-slide-box").removeClass('leave')
            if(section.index == 1 && origin.index==0 && direction == 'right'){
                $("#slide1 .bg-slide-box").addClass('leave')
                
                setTimeout(function(){
                    $(".section-about #slide2 .title-box").addClass('active')
                },300)
                setTimeout(function(){
                    $(".section-about #slide2 .bg-line").addClass('active')
                },400)
                
            }
            if(section.index == 1 && origin.index==1 && direction == 'left'){
                $("#slide1 .bg-slide-box").removeClass('leave')
            }
            if(section.index == 1 && origin.index==1 && direction == 'right'){
                
                $("#slide2 .bg-slide").addClass('leave')
                setTimeout(function(){
                    $("#slide2 .bg-slide").removeClass('leave')
                },1000)
                setTimeout(function(){
                    $("#slide3 .bg-circle4").removeClass('leave')
                },400)
                setTimeout(function(){
                    $(".section-about #slide3 .title-box").addClass('active')
                },600)
                setTimeout(function(){
                    $(".section-about #slide3 .bg-circle2").addClass('active')
                },600)
                setTimeout(function(){
                    $(".section-about #slide3 .bg-circle1").addClass('active')
                    $(".section-about #slide3 .dec-circle2").addClass('active')
                },700)
                setTimeout(function(){
                    $(".section-about #slide3 .bg-circle3").addClass('active')
                    $(".section-about #slide3 .dec-circle3").addClass('active')
                },800)
                setTimeout(function(){
                    $(".section-about #slide3 .dec-circle6").addClass('active')
                },900)
                setTimeout(function(){
                    $(".section-about #slide3 .dec-circle7").addClass('active')
                    $("#slide1 .bg-slide-box").removeClass('leave')
                },1000)
                setTimeout(function(){
                    $(".section-about #slide3 .dec-circle4").addClass('active')
                },1100)
                setTimeout(function(){
                    $(".section-about #slide3 .dec-circle5").addClass('active')
                },1200)
                setTimeout(function(){
                    $(".section-about #slide3 .dec-circle1").addClass('active')
                },1300)

                setTimeout(function(){
                    $(".section-about #slide3 .bg-circle1").addClass('active2')
                },1700)
                setTimeout(function(){
                    $(".section-about #slide3 .bg-circle2").addClass('active2')
                },1600)
                setTimeout(function(){
                    $(".section-about #slide3 .bg-circle3").addClass('active2')
                },1800)
                console.log('slide3')
                setTimeout(function(){
                    if(firstIntoSlide1 == 1 && firstIntoSlide3==0) {
                        firstIntoSlide3 = 1
                        if($(".section-about").hasClass('active')){
                            fullpage_api.moveTo(2, 3);
                        }
                    }
                    
                },7000)
            }
            
            if(section.index == 1 && origin.index==2 && direction == 'right'){
                
                $("#slide3 .bg-circle4").addClass('leave')
                setTimeout(function(){
                    $(".section-about #slide4 .title-box").addClass('active')
                },300)
                
            }
            if(section.index == 1 && origin.index==3 && direction == 'left'){
                setTimeout(function(){
                    $("#slide3 .bg-circle4").removeClass('leave')
                },400)
            }
            
        },
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            console.log(destination.index)
            if(origin.index == 1 && direction == 'down'){
                console.log("從Section 2離開");
                //$(".section-menu .selector-box .selector-menu").click()
            }
            if(destination.index == 2){
                console.log("到達Section 3");
                //fullpage_api.moveTo(1)
                
            }
        },
        afterReBuild: function(){
            console.log("fullPage.js has manually being re-builded");
        }
    });
    //skipFirstView()
    window.addEventListener("orientationchange", function(){
        // if($(window).heigh()>1100 ){
        //     alert('>1000')
        //     //location.reload();
        // }
        if(window.orientation==0){
            location.reload();
        }
        //alert(window.orientation)
        
        // fullpage_api.reBuild();
    }, false);

    if(urlAnchorNum!==0) {
        skipFirstView()
        setTimeout(function(){
            //skipFirstView()
            fullpage_api.moveTo(urlAnchorNum);
        },5000)
    }

    function skipFirstView() {
        AboutFirstEnter = 0
        setTimeout(function(){
            $(".section-about #slide1 .title-box").addClass('active')
        },300)
        setTimeout(function(){
            $(".section-about #slide1 .bg-line").addClass('active')
        },400)

        //menu區塊 slide1圖片輪播
        var aboutSlde1BgNum = 1
        setTimeout(function(){
            setInterval(() => {
                aboutSlde1BgNum++
                if(aboutSlde1BgNum>4) {
                    aboutSlde1BgNum=1
                    if(firstIntoSlide1==0) {
                        firstIntoSlide1 = 1
                        if($(".section-about").hasClass('active')){
                            fullpage_api.moveTo(2, 1);
                        }
                    }
                }
                $(".section-about #slide1 .bg-slide-box .bg-slide.active").addClass('leaving')
                setTimeout(() => {
                    $(".section-about #slide1 .bg-slide-box .bg-slide.leaving").removeClass('leaving active')
                    $(".section-about #slide1 .bg-slide-box .bg-slide"+aboutSlde1BgNum+"").addClass('active')
                }, 2100);
            }, 7000);
        },2000)
        //menu區塊 slide2圖片輪播
        var aboutSlde2BgNum=1
        
        setInterval(() => {
            aboutSlde2BgNum++
            if(aboutSlde2BgNum>4) {
                aboutSlde2BgNum=1
                if(firstIntoSlide1 == 1 && firstIntoSlide2==0) {
                    firstIntoSlide2 = 1
                    if($(".section-about").hasClass('active')){
                        fullpage_api.moveTo(2, 2);
                    }
                    
                }
                
            }
            $(".section-about #slide2 .bg-slide-box .bg-slide.active").addClass('leaving')
            setTimeout(() => {
                $(".section-about #slide2 .bg-slide-box .bg-slide.leaving").removeClass('leaving active')
                $(".section-about #slide2 .bg-slide-box .bg-slide"+aboutSlde2BgNum+"").addClass('active')
            }, 2100);
        }, 7000);

        //2
        $(".section-menu .circle1").addClass('enter')
        $(".section-menu .bg-box .bg1").fadeIn(1000)
        $(".section-menu .text-box .text1").fadeIn(500)
        if(MenuFirstEnter==1){
            MenuFirstEnter = 0
            $(".section-menu .left-bg").removeClass('active2')
            setTimeout(function(){
                $(".section-menu .dec-line").addClass('active1')
            },300)
            setTimeout(function(){
                $(".section-menu .selector-menu").addClass('active1')
            },500)
            setTimeout(function(){
                $(".section-menu .selector-wine").addClass('active1')
            },600)
            
            setTimeout(function(){
                $(".section-menu .selector-menu").addClass('active2')
            },900)
            setTimeout(function(){
                $(".section-menu .text-box .text1").addClass('active')
            },1200)
        }
        if($(window).width()>768){
            videoMenu.play()
            videoWine.play()
        }
        //3
        ChefFirstEnter = 0
        setTimeout(function(){
            $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").removeClass('prepare').addClass('enter')
            $(".section-chef .chef-box .chef2").removeClass('prepare').addClass('active')
            $(".section-chef .bg").addClass('active')
           
        },300)
        setTimeout(function(){
            $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").removeClass('enter')
        },1300)

        //4
        NewsFirstEnter = 0
        setTimeout(function(){
           $(".section-news .section-title").addClass('active')
        },400)
        setTimeout(function(){
            $(".section-news .left-box .date").addClass('active')
            $(".section-news .img-box").addClass('active')
        },500)
        setTimeout(function(){
            $(".section-news .right-box .title").addClass('active')
        },600)
        setTimeout(function(){
            $(".section-news .right-box .text").addClass('active')
        },700)
        setTimeout(function(){
            $(".section-news .news-type-text").addClass('active')
        },800)

        //5
        ChefFirstEnter = 0
        setTimeout(function(){
            $(".section-reservation .section-title").addClass('active1')
        },700)
        setTimeout(function(){
            $(".section-reservation .subtitle").addClass('active1')
        },1000)

        setTimeout(function(){
            $(".section-reservation .subtitle").addClass('active2')
            $(".section-reservation .bg-box").addClass('active2')
            $(".section-reservation .section-title").addClass('active2')
            $(".section-reservation .reservation-now").addClass('active2')
            $(".section-reservation .black-mask").addClass('active1')
            $(".section-reservation .section-title").mouseenter(function(){
                $(".section-reservation .black-mask").removeClass('active1')
            })
            $(".section-reservation .section-title").mouseleave(function(){
                $(".section-reservation .black-mask").addClass('active1')
            })
        },4000)
        if($(window).width()>768){videoReservation.play();}

        //6
        setTimeout(function(){
            $(".section-information .left-box").addClass('active')
            $(".section-information .right-box").addClass('active')
        },300)
        
        setTimeout(function(){
            $(".section-information .section-title").addClass('active')
        },400)

        //7
        ContactFirstEnter = 0
        setTimeout(function(){
            $(".section-contact .section-title .title").addClass('active')
            $(".section-contact .section-title .dec-line").addClass('active')
        },400)
        setTimeout(function(){
            $(".section-contact .left-box").addClass('active')
        },500)
        setTimeout(function(){
            $(".section-contact .right-box").addClass('active')
        },600)
        setTimeout(function(){
            $(".section-contact .mid-line").addClass('active')
        },700)

        //8
        FooterFirstEnter = 0
        var time1 = 1000;
        var time2 = 1000;
        $(".section-footer .anchor-menu li").each(function(){
            var $this = $(this)
            setTimeout(function(){
                $this.addClass('active')
            },time1)
            time1 += 100;
        })
        $(".section-footer .icon-box li").each(function(){
            var $this = $(this)
            setTimeout(function(){
                $this.addClass('active')
            },time2)
            time2 += 100;
        })
        setTimeout(function(){
            $(".section-footer .dec-line").addClass('active')
        },700)
        setTimeout(function(){
            $(".section-footer .copyright").addClass('active')
        },1750)

        //slide2
        $("#slide1 .bg-slide-box").addClass('leave')
                
        setTimeout(function(){
            $(".section-about #slide2 .title-box").addClass('active')
        },300)
        setTimeout(function(){
            $(".section-about #slide2 .bg-line").addClass('active')
        },400)

        //slide3
        $("#slide2 .bg-slide").addClass('leave')
        setTimeout(function(){
            $("#slide2 .bg-slide").removeClass('leave')
        },1000)
        setTimeout(function(){
            $("#slide3 .bg-circle4").removeClass('leave')
        },400)
        setTimeout(function(){
            $(".section-about #slide3 .title-box").addClass('active')
        },600)
        setTimeout(function(){
            $(".section-about #slide3 .bg-circle2").addClass('active')
        },600)
        setTimeout(function(){
            $(".section-about #slide3 .bg-circle1").addClass('active')
            $(".section-about #slide3 .dec-circle2").addClass('active')
        },700)
        setTimeout(function(){
            $(".section-about #slide3 .bg-circle3").addClass('active')
            $(".section-about #slide3 .dec-circle3").addClass('active')
        },800)
        setTimeout(function(){
            $(".section-about #slide3 .dec-circle6").addClass('active')
        },900)
        setTimeout(function(){
            $(".section-about #slide3 .dec-circle7").addClass('active')
            $("#slide1 .bg-slide-box").removeClass('leave')
        },1000)
        setTimeout(function(){
            $(".section-about #slide3 .dec-circle4").addClass('active')
        },1100)
        setTimeout(function(){
            $(".section-about #slide3 .dec-circle5").addClass('active')
        },1200)
        setTimeout(function(){
            $(".section-about #slide3 .dec-circle1").addClass('active')
        },1300)

        setTimeout(function(){
            $(".section-about #slide3 .bg-circle1").addClass('active2')
        },1700)
        setTimeout(function(){
            $(".section-about #slide3 .bg-circle2").addClass('active2')
        },1600)
        setTimeout(function(){
            $(".section-about #slide3 .bg-circle3").addClass('active2')
        },1800)
        console.log('slide3')
        setTimeout(function(){
            if(firstIntoSlide1 == 1 && firstIntoSlide3==0) {
                firstIntoSlide3 = 1
                if($(".section-about").hasClass('active')){
                    fullpage_api.moveTo(2, 3);
                }
            }
            
        },7000)

        //slide3
        $("#slide3 .bg-circle4").addClass('leave')
        setTimeout(function(){
            $(".section-about #slide4 .title-box").addClass('active')
        },300)
    }

    // 漢堡選單
    $("header .menu-box .btn-menu,.side-menu-box .btn-menu").click(function(){
        $(".side-menu-box").toggleClass('active')
        $(".side-menu-box .icon-box").addClass('active')
        setTimeout(function(){
            $(".side-menu-box .icon-box").removeClass('active')
        },1500)
    })

    //漢堡選單內的選項毛錨點功能
    $(".side-menu-box .menu li a").click(function(){
        var thisHref = $(this).attr('href')
        if(thisHref=="#") {
            if(skip == 0){
                skipFirstView()
                skip = 1
            }
            var targetAnchorNum = $(this).parent().attr('data-anchor-num')
            var targetAnchorNum2 = $(this).parent().attr('data-anchor-num2')
            $(".side-menu-box .btn-menu").click()
            setTimeout(function(){
                fullpage_api.moveTo(targetAnchorNum,targetAnchorNum2);
            },700)
            
        }
    })

    //側選單文字hover樣式
    $(".side-menu-box .menu >li").mouseenter(function () { 
        $(".side-menu-box .menu >li").addClass('not-hover')
        $(this).removeClass('not-hover')
    });
    $(".side-menu-box .menu >li").mouseleave(function () { 
        $(".side-menu-box .menu >li").removeClass('not-hover')
    });
    

    //menu區塊切換
    $(".section-menu .selector").click(function(){
        var $this = $(this)
        $(".section-menu .selector-menu").removeClass('active1 active2')
        $(".section-menu .circle-border").addClass('hide')
        if($this.hasClass('selector-menu')){
            $(".section-menu .left-bg2").removeClass('active')
            $(".section-menu .left-bg1").addClass('active')
            $(".section-menu .video-box .black-mask").removeClass('select-wine')
        }else {
            $(".section-menu .left-bg1").removeClass('active')
            $(".section-menu .left-bg2").addClass('active')
            $(".section-menu .video-box .black-mask").addClass('select-wine')
        }
        setTimeout(function(){
            $(".section-menu .selector-wine").removeClass('active1 active2')
        },100)
        $(".section-menu").removeClass('select-wine select-menu')
        $(".section-menu .circle").addClass('leaving')
        $(".section-menu .bg-box #videoMenu,.section-menu .bg-box #videoWine").fadeOut(500)
        $(".section-menu .text-box .text1,.section-menu .text-box .text2").removeClass('active')
        setTimeout(function(){
            $(".section-menu .selector").addClass('active1')
            $(".section-menu .circle").removeClass('enter leaving')
        },600)
        setTimeout(function(){
            if($this.hasClass('selector-menu')){
                $(".section-menu .left-bg").removeClass('animating')
            }else {
                $(".section-menu .left-bg").addClass('animating')
            }
        },500)
        setTimeout(function(){
            $this.addClass('active2')
        },900)
        
        setTimeout(function(){
            if($this.hasClass('selector-menu')){
                $(".section-menu").addClass('select-menu')
                $(".section-menu .circle1").addClass('enter')
                $(".section-menu .bg-box #videoMenu").fadeIn(1000)
                $(".section-menu .text-box .text1").addClass('active')
            }else {
                $(".section-menu").addClass('select-wine')
                $(".section-menu .circle2").addClass('enter')
                $(".section-menu .bg-box #videoWine").fadeIn(1000)
                setTimeout(function(){$(".section-menu .text-box .text2").addClass('active')},200)
            }
            $(".section-menu .circle-border").removeClass('hide')
        },900)
        
    })

    //contact區塊 點擊立即預約要跳轉到reservation區塊
    $(".btn-reservation").click(function(){
        fullpage_api.moveTo(6)
    })
    
    

    //chef區塊切換
    var chefData = [
        {
            "imgSrc":"homepage/images/chef/chef-3-2.png",
            "chefPosition":"Pastry Chef",
            "text":"返璞歸真的美好，越簡單，越困難",
            "nameEN":"TRAIN DAI",
            "name":"戴峻弘（火車）",
            "href":"/chef-train-dai",
        },
        {
            "imgSrc":"homepage/images/chef/chef-1-2.png",
            "chefPosition":"Chef",
            "text":"直觀且講究的經典美味，是法菜根基。",
            "nameEN":"JOSH CHENG",
            "name":"鄭裕錞",
            "href":"/chef-josh-cheng",
        },
        // {
        //     "imgSrc":"homepage/images/chef/chef-2-2.png",
        //     "chefPosition":"Sous Chef",
        //     "text":"熱情不能是一種嗜好，熱情就是熱情",
        //     "nameEN":"JAMES TSENG",
        //     "name":"曾治淮",
        //     "href":"/chef-james-tseng",
        // },
    ];

    pushChefData(chefNum1,chefNum2)
    $(".section-chef .chef-box .btn-next").click(function(){
        chefNum1++
        chefNum2++
        if(chefNum1>1){chefNum1=0}
        if(chefNum2>1){chefNum2=0}
        animateChef()
    })
    $(".section-chef .chef-box .btn-prev").click(function(){
        chefNum1--
        chefNum2--
        if(chefNum1<0){chefNum1=1}
        if(chefNum2<0){chefNum2=1}
        animateChef()
    })
    $(".section-chef .chef-box .chef3").click(function(){
        $(".section-chef .chef-box .btn-next").click()
    })
    $(".section-chef .chef-box .chef1").click(function(){
        $(".section-chef .chef-box .btn-prev").click()
    })
    function animateChef(){
        $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").addClass('leaving')
        $(".section-chef .chef-box .chef2").addClass('leaving')
        $(".section-chef .bg").removeClass('active')
        setTimeout(function(){
            $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").removeClass('leaving').addClass('prepare')
            $(".section-chef .chef-box .chef2").removeClass('active leaving').addClass('prepare')
            pushChefData(chefNum1,chefNum2)
        },1000)
        setTimeout(function(){
            $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").removeClass('prepare').addClass('enter')
            $(".section-chef .chef-box .chef2").removeClass('prepare').addClass('active')
        },1001)
        setTimeout(function(){
            $(".section-chef .bg").addClass('active')
        },1500)
        setTimeout(function(){
            $(".section-chef .chef-box .chef1,.section-chef .chef-box .chef3").removeClass('enter')
            
        },2250)
    }
    function pushChefData(chefNum1,chefNum2) {
        $(".chef-box .chef1 .chef-img img").attr('src',chefData[chefNum1].imgSrc)
        $(".chef-box .chef1 .chef-position >span:first-child").text(chefData[chefNum1].chefPosition)
        $(".chef-box .chef1 .title-box .text >span >span:nth-child(2)").text(chefData[chefNum1].text)
        $(".chef-box .chef1 .title-box .name-en span").text(chefData[chefNum1].nameEN)
        $(".chef-box .chef1 .title-box .name span").text(chefData[chefNum1].name)
        $(".chef-box .chef1 .chef-img >a").attr('href',chefData[chefNum1].href)

        $(".chef-box .chef2 .chef-img >a >img").attr('src',chefData[chefNum2].imgSrc)
        $(".chef-box .chef2 .chef-position >span:first-child").text(chefData[chefNum2].chefPosition)
        $(".chef-box .chef2 .title-box .text >span >span:nth-child(2)").text(chefData[chefNum2].text)
        $(".chef-box .chef2 .title-box .name-en span").text(chefData[chefNum2].nameEN)
        $(".chef-box .chef2 .title-box .name span").text(chefData[chefNum2].name)
        $(".chef-box .chef2 .chef-img >a").attr('href',chefData[chefNum2].href)

    }

    //information區塊
    $(".section-information .left-box li").click(function(){
        var targetInfoNum = $(this).attr('data-info-num')
        var targetInfoAnchorNum = $(this).attr('data-info-anchor-num')
        $(".section-information .left-box li").removeClass('active')
        $(this).addClass('active')
        
        if($(window).width()<769 || $(window).height()>1100) {
            $(".section-information .content-box >.wrap-box").addClass('active')
            $(".section-information .btn-back-box").addClass('active')
            $(".section-information .right-box .info-text-box").fadeOut(100)
            setTimeout(function(){
                $(".section-information .right-box .info-text-box[data-info-num="+targetInfoNum+"]").fadeIn(500)
            },100)
            console.log(targetInfoAnchorNum)
            if(targetInfoAnchorNum==1 || targetInfoAnchorNum==2){
                setTimeout(function(){
                    $(".info-text-box").animate({
                        scrollTop: $("[data-info-anchor-num="+targetInfoAnchorNum+"]").offset().top
                    }, 700, 'easeInOutCubic'); 
                },200)
            }else if (targetInfoAnchorNum==0){
                setTimeout(function(){
                    $(".info-text-box").animate({
                        scrollTop: 0
                    }, 700, 'easeInOutCubic'); 
                },200)
            }
        }else {
            $(".section-information .right-box .info-text-box").fadeOut(500)
            setTimeout(function(){
                $(".section-information .right-box .info-text-box[data-info-num="+targetInfoNum+"]").fadeIn(500)
            },500)
            console.log(targetInfoAnchorNum)
            if(targetInfoAnchorNum==1 || targetInfoAnchorNum==2){
                setTimeout(function(){
                    $(".info-text-box").animate({
                        scrollTop: $("[data-info-anchor-num="+targetInfoAnchorNum+"]").offset().top
                    }, 700, 'easeInOutCubic'); 
                },1000)
            }else if (targetInfoAnchorNum==0){
                setTimeout(function(){
                    $(".info-text-box").animate({
                        scrollTop: 0
                    }, 700, 'easeInOutCubic'); 
                },1000)
            }
        }
    })
    $(".section-information .btn-back-box").click(function(){
        $(".section-information .content-box >.wrap-box").removeClass('active')
        $(".section-information .btn-back-box").removeClass('active')
    })
    $(".section-information .select-title.for-mobile").click(function(){
        $(this).parent().find('>ul').toggleClass('active')
    })
    $(".section-information .content-box .left-box >ul li").click(function(){
        $(this).parent().removeClass('active')
        var targetOptionText = $(this).find('.text').text()
        $(".section-information .select-title.for-mobile span").text(targetOptionText)
    })

    //contact區塊 填寫表單按鈕
    // $(".section-contact .btn-write").click(function(){
    //     $(".contact-mask").addClass('active')
    //     $(".contact-form-box").addClass('active')
    // })
    $(".contact-form-box .btn-close").click(function(){
        $(".contact-mask").removeClass('active')
        $(".contact-form-box").removeClass('active')
    })
    $(".business-hours").click(function(){
        fullpage_api.moveTo(7);
    })

    //footer copyright年份
    const d = new Date();
    let year = d.getFullYear();
    $(".copyright .year").text(year)

    //footer按鈕錨點功能
    $("footer .anchor-menu li").click(function(){
        var anchorNum = $(this).attr('data-anchor-num')
        fullpage_api.moveTo(anchorNum);
        if(anchorNum==6){
            videoReservation.play();
        }
    })

    

    // $(window).bind('orientationchange resize', function(event){
    //     if (event.orientation) {
    //         console.log(event.orientation)
    //         if (event.orientation == 'landscape') {
    //             console.log('111')
    //         }else {
    //             console.log('222')
    //         }
    //     }
    // });
})

//loading動畫結束
$(window).load(function(){
    time2 = new Date()
    time2 = time2.getTime()
    //console.log('time2='+time2)
    elapsedTime = time2-time1
    console.log('loading時間：'+elapsedTime+'毫秒')
    if(elapsedTime>3000) {
        $("#loading-logo").fadeOut(1000)
        setTimeout(function(){
            $(".door-left,.door-right,.bg-line").addClass('active1')
        },300)
        setTimeout(function(){
            $(".door-left,.door-right").addClass('active2')
        },900)
        setTimeout(function(){
            $(".section-kv").addClass('active2')
        },1500)
    }else {
        var restTime1 = 3000 - elapsedTime
        var restTime2 = restTime1+300
        var restTime3 = restTime1+900
        var restTime4 = restTime1+1500
        setTimeout(function(){
            $("#loading-logo").fadeOut(1000)
        },restTime1)
        setTimeout(function(){
            $(".door-left,.door-right,.bg-line").addClass('active1')
        },restTime2)
        setTimeout(function(){
            $(".door-left,.door-right").addClass('active2')
        },restTime3)
        setTimeout(function(){
            $(".section-kv").addClass('active2')
        },restTime4)
    }

    
    $.post("/homepage/api/get_news.php", function (response) {
        $(".news-box .news:first .content-box .inner-box .left-box .date span").text(response.news.date);
        $(".news-box .news:first .content-box .inner-box .right-box .title span").text(response.news.title);
        $(".news-box .news:first .content-box .inner-box .right-box .text span").text(response.news.content);
        $(".news-box .news:first .content-box .inner-box .right-box .view-more .text a").attr("href", response.news.link);
        $(".news-box .news:first .img-box img").attr("src", response.news.image);
        $(".news-box .news:first .img-box a").attr("href", response.news.link);

        $(".news-box .news:last .content-box .inner-box .left-box .date span").text(response.media.date);
        $(".news-box .news:last .content-box .inner-box .right-box .title span").text(response.media.title);
        $(".news-box .news:last .content-box .inner-box .right-box .text span").text(response.media.content);
        $(".news-box .news:last .content-box .inner-box .right-box .view-more .text a").attr("href", response.media.link);
        $(".news-box .news:last .img-box img").attr("src", response.media.image);
        $(".news-box .news:last .img-box a").attr("href", response.media.link);
    })
})