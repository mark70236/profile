$(function () {
    AOS.init();
    // setTimeout(function(){
    //     $(".kv-box").addClass('active')
    //     const swiper1 = new Swiper('.swiper-container1', {
    //         spaceBetween: 30,
    //         effect: 'fade',
    //         loop: true,
    //         speed: 1000,
    //         autoplay: {
    //             delay: 7000,
    //             disableOnInteraction: false,
    //         },
    //     });
    // },1000)
    var tooltipDelay = 0

    //判斷header切換樣式
    $(window).scroll(function () {
        //console.log($(window).scrollTop())
        if ($(window).scrollTop() > 300) {
            if (!$("header").hasClass('active')) {
                $("header").addClass('active')
            }
        } else {
            $("header").removeClass('active')
        }
    });

    //手機版header menu展開收合
    $(document).on('click','.menu-btn-mobile', function () {
        $(".header-menu-for-mobile").addClass('active')
        $(".header-menu-mask").fadeIn(300)
    })
    $(document).on('click','.header-menu-for-mobile .close-btn', function () {
        $(".header-menu-for-mobile").removeClass('active')
        $(".header-menu-mask").fadeOut(300)
    })

    //手機版header menu 子選單收合
    $(document).on('click','.header-menu-for-mobile .header-menu >li', function () {
        var targetElement = $(this).find('>ul')
        var targetIcon = $(this).find('i')
        if (targetElement.hasClass('active')) {
            targetElement.removeClass('active')
            targetIcon.removeClass('fa-angle-down fa-angle-up').addClass('fa-angle-down')
        } else {
            targetElement.addClass('active');
            targetIcon.removeClass('fa-angle-down fa-angle-up').addClass('fa-angle-up')
        }
    })
    $(document).on('click','.header-menu-for-mobile .header-menu >li a', function (e) {
        e.stopPropagation()
    })
    $(document).on('click','.header-menu-for-mobile .header-menu >li >ul', function (e) {
        e.stopPropagation()
    })
    
    $(document).on('click','.header-menu-for-mobile .li-2st >.title-box', function () {
        var targetElement = $(this).parent().find('>ul')
        var targetIcon = $(this).find('>i')
        if (targetElement.hasClass('active')) {
            targetElement.removeClass('active')
            targetIcon.removeClass('fa-angle-down fa-angle-up').addClass('fa-angle-down')
        } else {
            targetElement.addClass('active');
            targetIcon.removeClass('fa-angle-down fa-angle-up').addClass('fa-angle-up')
        }
    })

    //header購物車收合功能
    // $(document).on('click','header .cart', function () {
    //     if($("body > .cart-box").hasClass('active')){
    //         $("body > .cart-box").removeClass('active')
    //     }else {
    //         $("body > .cart-box").addClass('active')
    //     }
    // })
    // $(document).on('click','body > .cart-box .close-btn', function () {
    //     $("body > .cart-box").removeClass('active')
    // })

    //header購物車tab切換功能
    $(document).on('click','body > .cart-box .cart-tab-box >div', function () {
        var targetTabNum = $(this).attr('data-cart-tab')
        $("body > .cart-box .cart-tab-box >div").removeClass('active')
        $(this).addClass('active')
        $(".cart-product-list ul").fadeOut(300)
        setTimeout(function(){
            $(".cart-product-list ul[data-cart-tab="+targetTabNum+"]").fadeIn(500)
        },310)
    })



    //判斷to top按鈕出現時機
    $(window).scroll(function () {
        //console.log($(window).scrollTop())
        if ($(window).scrollTop() > 300) {
            if (!$(".to-top").hasClass('active')) {
                $(".to-top").addClass('active')
            }
        } else {
            $(".to-top").removeClass('active')
        }
    });

    //to top功能
    $(".to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    })

    //icon選單顯示功能
    if($(".all-category-box").length) {
        var categoryType = 1;
        var delayControl = 0;
        $(".category-2 .category-btn").hover(function (e) {
                $(".category-2 .category-btn").removeClass('hover')
                if(!$(this).hasClass('hover')) {
                    $(this).addClass('hover')
                }
                if(delayControl==0) {
                    delayControl = 1;
                    
                    $(".category-3").fadeIn(300)
                    categoryType = $(this).attr('data-category-type')
                    e.stopPropagation()
                    $(".category-3 ul").fadeOut(10)
                    setTimeout(function(){
                        $(".category-3 ul[data-category-type="+categoryType+"]").fadeIn(100)
                    },110)
                    setTimeout(function(){
                        delayControl = 0
                    },150)
                }
            }, function (e) {
                e.stopPropagation()
                //$(".category-3").fadeOut(300)
            }
        );
        $(".all-category-box").mouseleave(function () { 
            $(".category-2 .category-btn").removeClass('hover')
            $(".category-3").fadeOut(300)
        });
    }
    //icon選單 左右箭頭功能
    $(".category-2 .btn-next").click(function(){
        $(".category-2 .inner-wrap").animate({
            scrollLeft: $(".category-2 .inner-wrap").scrollLeft()+300
        }, 1000, 'easeInOutCubic');
    })
    //控制icon選單滑動後固定在header (all-category-box)
    if($(".all-category-box").length) {
        setTimeout(function(){
            var targetY = $(".all-category-box").offset().top
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop()
                if(scrollTop+140 > targetY){
                    $(".all-category-box").addClass('fixed')
                }else if(scrollTop+140 < targetY-75) {
                    $(".all-category-box").removeClass('fixed')
                }
            })

            //偵測寬度改變時重新抓取
            var resizeTimer = false;
            $(window).on("resize", function() {
                if (resizeTimer) {
                    clearTimeout(resizeTimer);
                }
                resizeTimer = setTimeout(doResize, 300);
            });
            doResize()
            function doResize() {
                targetY = $(".all-category-box").offset().top
            }
        },1000)
    }
    $(".category-2 .btn-prev").click(function(){
        $(".category-2 .inner-wrap").animate({
            scrollLeft: $(".category-2 .inner-wrap").scrollLeft()-300
        }, 1000, 'easeInOutCubic');
    })
    $(".category-3 .category-3-list .btn-next").click(function(){
        var target = $(this).parent()
        target.animate({
            scrollLeft: target.scrollLeft()+300
        }, 1000, 'easeInOutCubic');
    })
    $(".category-3 .category-3-list .btn-prev").click(function(){
        var target = $(this).parent()
        target.animate({
            scrollLeft: target.scrollLeft()-300
        }, 1000, 'easeInOutCubic');
    })




    // 美食日誌tab固定header

    if($(".diary-tab-section").length) {
        setTimeout(function(){
            var targetY = $(".diary-tab-section").offset().top
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop()
                if(scrollTop+140 > targetY){
                    $(".diary-tab-section").addClass('fixed')
                }else if(scrollTop+140 < targetY-75) {
                    $(".diary-tab-section").removeClass('fixed')
                }
            })

            //偵測寬度改變時重新抓取
            var resizeTimer = false;
            $(window).on("resize", function() {
                if (resizeTimer) {
                    clearTimeout(resizeTimer);
                }
                resizeTimer = setTimeout(doResize, 300);
            });
            doResize()
            function doResize() {
                targetY = $(".all-category-box").offset().top
            }
        },1000)
    }

    //愛心按鈕
    if ($(".like-btn").length) {
        $(document).on('click','.like-btn', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $( "#tooltip-favorite-remove" ).fadeIn().delay(1000).fadeOut();
                } else {
                    $(this).addClass('active');
                    $( "#tooltip-favorite-add" ).fadeIn().delay(1000).fadeOut();
                }
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });
        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }
    //愛心按鈕2-最愛商品頁使用
    if ($(".like-btn2").length) {
        $(document).on('click','.like-btn2', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $( "#tooltip-favorite-remove" ).fadeIn().delay(1000).fadeOut();
                    $(this).parents('.product-card').parent().remove();
                }
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });
        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //收藏按鈕
    if ($(".diary-bookmark").length) {
        $(document).on('click','.diary-bookmark', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $( "#tooltip-bookmark-remove" ).fadeIn().delay(1000).fadeOut();
                } else {
                    $(this).addClass('active');
                    $( "#tooltip-bookmark-add" ).fadeIn().delay(1000).fadeOut();
                }
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    if ($(".collect-btn").length) {
        $(document).on('click','.collect-btn', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $( "#tooltip-bookmark-remove" ).fadeIn().delay(1000).fadeOut();
                } else {
                    $(this).addClass('active');
                    $( "#tooltip-bookmark-add" ).fadeIn().delay(1000).fadeOut();
                }
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-貨到通知
    if ($(".notification-btn").length) {
        $(document).on('click','.notification-btn', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                $( "#tooltip-notification-add" ).fadeIn().delay(1000).fadeOut();
                
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-移除貨到通知
    if ($(".remove-notification-btn").length) {
        
        $(document).on('click','.remove-notification-btn', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                $( "#tooltip-notification-remove" ).fadeIn().delay(1000).fadeOut();
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-加入購物車
    var noticeNum
    var targetElement
    var animateTimer = 0
    if ($(".add-cart-btn").length) {
        $(document).on('click','.product-item-col .add-cart-btn', function () {
            if(!$(this).parents('.product-item-col').hasClass('multiple-choice')){
                if(!$(this).hasClass('mobile-add-cart')){
                    if(tooltipDelay==0 && animateTimer ==0) {
                        tooltipDelay = 1
                        animateTimer = 1
                        
                        //假資料
                        // var productImgSrc = 'images/_page/product-image.jpg'
                        // var productHref = './product-item.html'
                        // var productName = '義式調味烤半雞'
                        // var tagType = '1'
                        // var tagText = '常溫'
                        // var productPrice = '1,386'
                        // var productNum = '1'

                        // $(".cart-box .cart-product-list .list-normal").append('\
                        //     <li>\
                        //         <div class="img-box"><a href="'+productHref+'"><img src="'+productImgSrc+'"></a></div>\
                        //         <div class="right-box">\
                        //             <div class="tag type'+tagType+'">'+tagText+'</div>\
                        //             <div class="product-name"><a href="'+productHref+'">'+productName+'</a></div>\
                        //             <div class="price-box">\
                        //                 <div class="price">NT$'+productPrice+'</div>\
                        //                 <div class="product-num">x'+productNum+'</div>\
                        //             </div>\
                        //         </div>\
                        //         <div class="remove-btn remove-cart-item-btn"><i class="fa fa-times-circle" aria-hidden="true"></i></div>\
                        //     </li>\
                        // ')
                        
                        var iconBtn = $(this).parent()
                        iconBtn.addClass('animating1')
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act1')
                        },700)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act2')
                            noticeNum = Number($("header .notice-num").text())+1
                            $("header .notice-num").text(noticeNum)
                        },1400)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act3')
                        },1900)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act4')
                        },2300)
                        setTimeout(function(){
                            $("header .btn-box .cart").removeClass('act1 act2 act3 act4')
                            animateTimer = 0
                        },3300)
                        // $(".cart-box .cart-title").text('我的購物車（'+$(".list-normal li").length+'）')

                        // if(!$("body > .cart-box").hasClass('active')){
                        //     $("body > .cart-box").addClass('active')
                        // }

                        $( "#tooltip-cart-add" ).fadeIn().delay(1000).fadeOut();
                        setTimeout(function(){
                            iconBtn.removeClass('animating1')
                        },910)
                        setTimeout(function(){
                            tooltipDelay = 0
                        },1100)
                        // setTimeout(function(){
                        //     $("body > .cart-box").removeClass('active')
                        // },3000)
                    }
                }else {
                    if(tooltipDelay==0 && animateTimer ==0) {
                        tooltipDelay = 1
                        animateTimer = 1
                        
                        var iconBtn = $(this)
                        iconBtn.addClass('animating1')
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act1')
                        },700)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act2')
                            noticeNum = Number($("header .notice-num").text())+1
                            $("header .notice-num").text(noticeNum)
                        },1400)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act3')
                        },1900)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act4')
                        },2300)
                        setTimeout(function(){
                            $("header .btn-box .cart").removeClass('act1 act2 act3 act4')
                            animateTimer = 0
                        },3300)

                        $( "#tooltip-cart-add" ).fadeIn().delay(1000).fadeOut();
                        setTimeout(function(){
                            iconBtn.removeClass('animating1')
                        },910)
                        setTimeout(function(){
                            tooltipDelay = 0
                        },1100)
                    }
                }
            }else {
                targetElement = $(this)
            }
            
        });
        
        $(document).on('click','.suggest-card .add-cart-btn', function () {
            if(!$(this).parents('.suggest-card').hasClass('multiple-choice')){
                if(!$(this).hasClass('mobile-add-cart')){
                    if(tooltipDelay==0) {
                        tooltipDelay = 1
                        animateTimer = 1
                        //假資料
                        // var productImgSrc = 'images/_page/product-image.jpg'
                        // var productHref = './product-item.html'
                        // var productName = '義式調味烤半雞'
                        // var tagType = '1'
                        // var tagText = '常溫'
                        // var productPrice = '1,386'
                        // var productNum = '1'

                        // $(".cart-box .cart-product-list .list-normal").append('\
                        //     <li>\
                        //         <div class="img-box"><a href="'+productHref+'"><img src="'+productImgSrc+'"></a></div>\
                        //         <div class="right-box">\
                        //             <div class="tag type'+tagType+'">'+tagText+'</div>\
                        //             <div class="product-name"><a href="'+productHref+'">'+productName+'</a></div>\
                        //             <div class="price-box">\
                        //                 <div class="price">NT$'+productPrice+'</div>\
                        //                 <div class="product-num">x'+productNum+'</div>\
                        //             </div>\
                        //         </div>\
                        //         <div class="remove-btn remove-cart-item-btn"><i class="fa fa-times-circle" aria-hidden="true"></i></div>\
                        //     </li>\
                        // ')
                        // $("header .notice-num").text($(".list-normal li").length)
                        // $(".cart-box .cart-title").text('我的購物車（'+$(".list-normal li").length+'）')

                        // if(!$("body > .cart-box").hasClass('active')){
                        //     $("body > .cart-box").addClass('active')
                        // }

                        var iconBtn = $(this).parent()
                        iconBtn.addClass('animating1')
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act1')
                        },700)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act2')
                            noticeNum = Number($("header .notice-num").text())+1
                            $("header .notice-num").text(noticeNum)
                        },1400)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act3')
                        },1900)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act4')
                        },2300)
                        setTimeout(function(){
                            $("header .btn-box .cart").removeClass('act1 act2 act3 act4')
                            animateTimer = 0
                        },3300)

                        $( "#tooltip-cart-add" ).fadeIn().delay(1000).fadeOut();

                        setTimeout(function(){
                            iconBtn.removeClass('animating1')
                        },910)
                        setTimeout(function(){
                            tooltipDelay = 0
                        },1100)
                        // setTimeout(function(){
                        //     $("body > .cart-box").removeClass('active')
                        // },3000)
                    }
                }else {
                    if(tooltipDelay==0 && animateTimer ==0) {
                        tooltipDelay = 1
                        animateTimer = 1
                        
                        var iconBtn = $(this)
                        iconBtn.addClass('animating1')
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act1')
                        },700)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act2')
                            noticeNum = Number($("header .notice-num").text())+1
                            $("header .notice-num").text(noticeNum)
                        },1400)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act3')
                        },1900)
                        setTimeout(function(){
                            $("header .btn-box .cart").addClass('act4')
                        },2300)
                        setTimeout(function(){
                            $("header .btn-box .cart").removeClass('act1 act2 act3 act4')
                            animateTimer = 0
                        },3300)

                        $( "#tooltip-cart-add" ).fadeIn().delay(1000).fadeOut();
                        setTimeout(function(){
                            iconBtn.removeClass('animating1')
                        },910)
                        setTimeout(function(){
                            tooltipDelay = 0
                        },1100)
                    }
                }
            }else {
                if(!$(this).hasClass('mobile-add-cart')){
                    targetElement = $(this)
                }else {
                    targetElement = $(this)
                }
            }
            
        });
        $(document).on('click','.popup-add-cart-btn', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                animateTimer = 1
                //假資料
                // var productImgSrc = 'images/_page/product-image.jpg'
                // var productHref = './product-item.html'
                // var productName = '義式調味烤半雞'
                // var tagType = '1'
                // var tagText = '常溫'
                // var productPrice = '1,386'
                // var productNum = '1'

                // $(".cart-box .cart-product-list .list-normal").append('\
                //     <li>\
                //         <div class="img-box"><a href="'+productHref+'"><img src="'+productImgSrc+'"></a></div>\
                //         <div class="right-box">\
                //             <div class="tag type'+tagType+'">'+tagText+'</div>\
                //             <div class="product-name"><a href="'+productHref+'">'+productName+'</a></div>\
                //             <div class="price-box">\
                //                 <div class="price">NT$'+productPrice+'</div>\
                //                 <div class="product-num">x'+productNum+'</div>\
                //             </div>\
                //         </div>\
                //         <div class="remove-btn remove-cart-item-btn"><i class="fa fa-times-circle" aria-hidden="true"></i></div>\
                //     </li>\
                // ')
                // $("header .notice-num").text($(".list-normal li").length)
                // $(".cart-box .cart-title").text('我的購物車（'+$(".list-normal li").length+'）')

                // if(!$("body > .cart-box").hasClass('active')){
                //     $("body > .cart-box").addClass('active')
                // }
                var iconBtn = targetElement.parent()
                if($(window).width()<991){
                    iconBtn = targetElement
                }
                iconBtn.addClass('animating1')
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act1')
                },700)
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act2')
                    noticeNum = Number($("header .notice-num").text())+1
                    $("header .notice-num").text(noticeNum)
                },1400)
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act3')
                },1900)
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act4')
                },2300)
                setTimeout(function(){
                    $("header .btn-box .cart").removeClass('act1 act2 act3 act4')
                    animateTimer = 0
                },3300)

                $( "#tooltip-cart-add" ).fadeIn().delay(1000).fadeOut();

                setTimeout(function(){
                    iconBtn.removeClass('animating1')
                },1000)
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
                // setTimeout(function(){
                //     $("body > .cart-box").removeClass('active')
                // },3000)
            }

            $('#modal-product-option').modal('hide')
        });
        
        $(document).on('click','.add-cart-btn .btn-red,.btn-add-to-cart,.buy-product-btn .add-cart-btn', function (e) {
            if(tooltipDelay==0 && animateTimer ==0) {
                e.preventDefault()
                tooltipDelay = 1
                animateTimer = 1
                
                var iconBtn = $(this)
                iconBtn.addClass('animating1')
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act1')
                },700)
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act2')
                    noticeNum = Number($("header .notice-num").text())+1
                    $("header .notice-num").text(noticeNum)
                },1400)
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act3')
                },1900)
                setTimeout(function(){
                    $("header .btn-box .cart").addClass('act4')
                },2300)
                setTimeout(function(){
                    $("header .btn-box .cart").removeClass('act1 act2 act3 act4')
                    animateTimer = 0
                },3300)

                $( "#tooltip-cart-add" ).fadeIn().delay(1000).fadeOut();
                setTimeout(function(){
                    iconBtn.removeClass('animating1')
                },910)
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        })


        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-移除購物車商品
    if ($(".remove-cart-item-btn").length) {
        $(document).on('click','.remove-cart-item-btn', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                $(this).parent().remove()

                $("header .notice-num").text($(".list-normal li").length)
                $(".cart-box .cart-title").text('我的購物車（'+$(".list-normal li").length+'）')

                $( "#tooltip-item-remove" ).fadeIn().delay(1000).fadeOut();
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-訂閱電子報
    if ($(".btn-subscribe-edm").length) {
        $(document).on('click','.btn-subscribe-edm', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $( "#tooltip-subscribe-edm" ).fadeIn().delay(1000).fadeOut();
                } else {
                    $(this).addClass('active');
                    $( "#tooltip-subscribe-edm" ).fadeIn().delay(1000).fadeOut();
                }
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }
    //提示-取消訂閱電子報
    if ($(".btn-cancel-subscribe-edm").length) {
        $(document).on('click','.btn-cancel-subscribe-edm', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $( "#tooltip-cancel-subscribe-edm" ).fadeIn().delay(1000).fadeOut();
                } else {
                    $(this).addClass('active');
                    $( "#tooltip-cancel-subscribe-edm" ).fadeIn().delay(1000).fadeOut();
                }
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-修改成功
    if ($(".btn-modify").length) {
        $(document).on('click','.btn-modify', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                $( "#tooltip-modify-seccess" ).fadeIn().delay(1000).fadeOut();
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }
    //提示-已移除
    if ($(".btn-common-remove").length) {
        $(document).on('click','.btn-common-remove', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                $( "#tooltip-common-remove" ).fadeIn().delay(1000).fadeOut();
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-複製成功
    if ($(".btn-copy").length) {
        $(document).on('click','.btn-copy', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                $( "#tooltip-copy" ).fadeIn().delay(1000).fadeOut();
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });
        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }

    //提示-新增成功
    if ($(".btn-common-add").length) {
        $(document).on('click','.btn-common-add', function () {
            if(tooltipDelay==0) {
                tooltipDelay = 1
                $( "#tooltip-common-add" ).fadeIn().delay(1000).fadeOut();
                setTimeout(function(){
                    tooltipDelay = 0
                },1100)
            }
        });

        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    }


    //分享按鈕
    if ($(".share-btn").length) {
        $('.share-btn').click(function () {
            if ($('.share-btn,.share-container').hasClass('active')) {
                $('.share-btn,.share-container').removeClass('active');
            } else {
                $('.share-btn,.share-container').addClass('active')
            }
        });
    }


    // 猜你喜歡Slider
    // 電腦版會有12則推薦商品手機剩4則 （待確認）
    if ($(".suggest-slider").length) {
        var suggestProduct = new Swiper(".suggest-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }

    //產品內容頁輪播
    if ($(".gallery-thumbs").length) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

        // $(window).resize(function () {
        //     var width = $(window).width();
        //     if (width < 767) {
        //         var cw = $('.gallery-top .swiper-slide').width();
        //         var cw2 = $('.gallery-thumbs .swiper-slide').width();
        //         $('.gallery-top .swiper-slide').css({
        //             'height': cw + 'px'
        //         });
        //         $('.gallery-thumbs .swiper-slide').css({
        //             'height': cw2 + 'px'
        //         });
        //     }
        // });
    }

    // Select樣式
    // if ($("select.wk-select").length) {
    //     $('select.wk-select').each(function () {
    //         var $this = $(this),
    //             numberOfOptions = $(this).children('option').length;
    //         $this.addClass('select-hidden');
    //         $this.wrap('<div class="select"></div>');
    //         $this.after('<div class="select-styled"></div>');

    //         var $styledSelect = $this.next('div.select-styled');
    //         $styledSelect.text($this.children('option').eq(0).text());

    //         var $list = $('<ul />', {
    //             'class': 'select-options'
    //         }).insertAfter($styledSelect);

    //         for (var i = 0; i < numberOfOptions; i++) {
    //             $('<li />', {
    //                 text: $this.children('option').eq(i).text(),
    //                 class: $this.children('option').eq(i).attr('class'),
    //                 rel: $this.children('option').eq(i).val()
    //             }).appendTo($list);
    //         }

    //         var $listItems = $list.children('li');

    //         $styledSelect.click(function (e) {
    //             e.stopPropagation();
    //             $('div.select-styled.active').not(this).each(function () {
    //                 $(this).removeClass('active').next('ul.select-options').hide();
    //             });
    //             $(this).toggleClass('active').next('ul.select-options').toggle();
    //         });

    //         $listItems.click(function (e) {
    //             e.stopPropagation();
    //             $styledSelect.text($(this).text()).removeClass('active');
    //             $this.val($(this).attr('rel'));
    //             $list.hide();
    //             // $this.parent().parent().find('.select-styled').append('<span class="arrow"></span>');
    //         });

    //         $(document).click(function () {
    //             $styledSelect.removeClass('active');
    //             $list.hide();
    //         });
    //     });
    // }

    //產品系列第三層 | 順序方式點選後變色
    if ($(".dropdown-option").length) {
        $('.dropdown-option').click(function () {
            var $this = jQuery(this)
            $this.addClass('active')
            $this.siblings().removeClass('active')
        });
    }

    // 商品數量
    if ($(".quantity-plus").length) {
        $(document).ready(function () {

            var quantitiy = 0;
            $(document).on('click', '.quantity-plus', function (e) {
                e.preventDefault();
                var targetInput = $(this).parents('.input-group').find('.input-number')
                var quantity = parseInt(targetInput.val());
                var limitQuantity = $(this).parents('.limited-dom').attr('data-limited-quantity')
                if(quantity>=limitQuantity) {
                    //return false
                    if(tooltipDelay==0) {
                        tooltipDelay = 1
                        $( "#tooltip-limited-quantity" ).fadeIn().delay(1000).fadeOut();
                        setTimeout(function(){
                            tooltipDelay = 0
                        },1100)
                    }
                }else {
                    targetInput.val(quantity + 1);
                }
                
                //console.log(limitQuantity)
            });

            $(document).on('click', '.quantity-minus', function (e) {
                e.preventDefault();
                var targetInput = $(this).parents('.input-group').find('.input-number')
                var quantity = parseInt(targetInput.val());
                if (quantity > 1) {
                    targetInput.val(quantity - 1);
                }
            });

        });
    }

    


    $(document).ready(function(){       
        var x =  $('.hide-height');
        var y = x.outerHeight()

        $(window).scroll(function(){                          
            if ($(this).scrollTop() > y) {
                $('.product-scroll-fixed').fadeIn(500);
            } else {
                $('.product-scroll-fixed').fadeOut(500);
            }
        });
    });


    // 倒數

    var timerOn = false;

    function timer(remaining) {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        document.getElementById('timer').innerHTML = m + ':' + s;
        remaining -= 1;

        if (remaining >= 0 && timerOn) {
            setTimeout(function () {
                timer(remaining);
            }, 1000);
            return;
        }
        if (!timerOn) {
            // Do validate stuff here
            // return;
        }
        $(".verify-btn button").attr("disabled", true);
    }

    $('#phone-verification').on('hidden.bs.modal', function () {
        timerOn = false;
        clearTimeout(timer);
    });

    $(".phone-verify").click(function () {
        $(".verify-btn button").attr("disabled", false);
        timerOn = true;
        timer(180);
    })


    //密碼顯示

    $(".password-show, .password-hide").on('click', function() {
        var passwordId = $(this).parents('.form-password').find('input').attr('id');
        if ($(this).hasClass('password-show')) {
          $("#" + passwordId).attr("type", "text");
          $(this).parent().find(".password-show").hide();
          $(this).parent().find(".password-hide").show();
        } else {
          $("#" + passwordId).attr("type", "password");
          $(this).parent().find(".password-hide").hide();
          $(this).parent().find(".password-show").show();
        }
      });
    

    //商品集合頁-單一類別超過8項商品時要顯示「更多商品」按鈕
    if($(".product-type-container").length){
        $(".product-type-container .product-type-sec").each(function(){
            if($(this).find('.product-type-item .row >div').length>7) {
                $(this).find('.product-type-item .btn-more-product').fadeIn(500)
            }
        })
    }
})

//複製功能1
window.Clipboard = (function(window, document, navigator) {
    var textArea,
    copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
        selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {
        document.execCommand("Copy");
        document.body.removeChild(textArea);
    }

    copy = function(text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };

    return {
        copy: copy
    };
})(window, document, navigator);

//複製功能2
function copyText(target) {
    // 建立 Range 物件
    const range = document.createRange();
    // 將指定元素內容加到 Range 中
    const texts = target[0];
    range.selectNode(texts);
    // 取得 Selection 物件
    const selection = window.getSelection();
    // 先清空當前選取範圍
    selection.removeAllRanges();
    // 加入 Range 
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();
}

// cookies

$(document).ready(function () {
    $(".cookies-sec").addClass('active');
    $(".cookies-confirm").click(function(){
        $(".cookies-sec").removeClass("active");
      });
});