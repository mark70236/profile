$(function () {
    //shopping-checkout頁，勾選同意後才能進行下一步結帳
    $("#agreement").change(function(){
        if($(this).prop("checked")==true){
            $(".checkout-btn-sec .btn-next").attr('disabled',false)
        }else {
            $(".checkout-btn-sec .btn-next").attr('disabled',true)
        }
    })

    // shopping-detail 購物車金額計算
    if($("body").hasClass('shopping-detail')){
        calPrice()
        setTimeout(function(){
            $(".product-list li").each(function(){
                var thisInput = $(this).find('.product-num-box input.input-number')
                giveAwayCal(thisInput)
            })
        },1000)
    }
    $(document).on('click', 'body.shopping-detail .quantity-plus', function () {
        var thisInput = $(this).parent().prev()
        giveAwayCal(thisInput)
        calPrice()
    })
    $(document).on('click', 'body.shopping-detail .quantity-minus', function () {
        var thisInput = $(this).parent().next()
        giveAwayCal(thisInput)
        calPrice()
    })
    $(document).on('click','.btn-common-remove', function () {
        calPrice()
    });
    function calPrice() {
        setTimeout(function(){
            $(".product-list").each(function(){
                var total = 0
                $(this).find('>li').each(function(){
                    var quantity = $(this).find('input[name="quantity"]').val()
                    if(quantity==undefined){ quantity = 0 }
                    var price = Number($(this).attr('data-price').replace(/[,]+/g, ""))
                    total = total + (price*quantity)
                    $(this).find('.price').text(price*quantity)
                })
                var totalNum = total
                //console.log("totalNum="+totalNum)
                total = String(total).replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){ return s+',' }) 
                $(this).next().find('.subtotal .price>span:last-child').text(total)
                
                var targetPlusBox = $(this).parent().parent().find('.plus-purchase-box')
                targetPlusBox.find('.price1').text(total)
                var differenceNum = Number(targetPlusBox.find('.title .red').text().replace(/[,]+/g, ""))-totalNum
                console.log("differenceNum="+differenceNum)
                if(differenceNum<0) {differenceNum = 0}
                targetPlusBox.find('.price2').text(differenceNum)
            })
        },100)
    }
    function giveAwayCal(thisInput) {
        setTimeout(function(){
            var targetProductBox = thisInput.parents('li.limited-dom')
            if(targetProductBox.find('>.col-box').length>1){
                console.log('step1')
                console.log('type='+targetProductBox.find('>.col-box:nth-child(2)').attr('data-giveaway-type'))
                if(targetProductBox.find('>.col-box:nth-child(2)').attr('data-giveaway-type')==1){
                    console.log('step2')
                    var targetNum = Math.floor(Number(thisInput.val()))
                    var giveawayRuleNum1 = Math.floor(Number(targetProductBox.find('>.col-box:nth-child(2)').attr('data-giveaway-num1')))
                    var giveawayRuleNum2 = Math.floor(Number(targetProductBox.find('>.col-box:nth-child(2)').attr('data-giveaway-num2')))
                    var giveawayResult = giveawayRuleNum2*Math.floor((targetNum/giveawayRuleNum1))
                    console.log(targetNum)
                    console.log(giveawayRuleNum1)
                    console.log(giveawayRuleNum2)
                    console.log(giveawayResult)
                    if(giveawayResult<1){
                        targetProductBox.find('>.col-box:nth-child(2)').fadeOut(300)
                    }else {
                        targetProductBox.find('>.col-box:nth-child(2)').fadeIn(300)
                    }
                    console.log(targetNum)
                    console.log(giveawayResult)
                    targetProductBox.find('>.col-box:nth-child(2) .right-box .quantity').text('x'+giveawayResult)
                }
            }
        },100)
    }

    //加購商品 點擊加入購物車及時添加商品功能
    $(document).on('click', 'body.shopping-detail .plus-purchase-swiper .plus-purchase .add-cart-btn', function () {
        var targetSlide = $(this).parents('.swiper-slide.plus-purchase')
        var limiteNum = targetSlide.attr('data-limited-quantity')
        var targetName = targetSlide.find('.right-box .name').text()
        var targetNum = Number(targetSlide.find('.right-box .product-num-box input.input-number').val())
        var targetPrice = Number(targetSlide.find('.right-box .price >span').text().replace(/[,]+/g, ""))

        $(this).parents('.cart-table-body').find('.product-list').append('\
            <li class="limited-dom purchase" data-limited-quantity="'+limiteNum+'" data-price="'+targetPrice+'">\
                <div class="col-box">\
                    <div class="left-box">\
                        <div class="img-box"><img src="images/page/product-image.jpg"></div>\
                    </div>\
                    <div class="right-box">\
                        <div class="details">\
                            <div class="top-tag-box">\
                                <div class="tag"><img src="images/page/tag-icon-addcart.png">加購</div>\
                            </div>\
                            <div class="product-name">'+targetName+'</div>\
                        </div>\
                        <div class="num-price-for-mobile">\
                            <div class="product-num-box">\
                                <div class="input-group">\
                                    <span class="input-group-btn">\
                                        <button type="button" class="quantity-minus btn" data-type="minus" data-field="">\
                                            <span class="">-</span>\
                                        </button>\
                                    </span>\
                                    <input type="text" name="quantity" class="form-control input-number" value="'+targetNum+'" min="1" max="100">\
                                    <span class="input-group-btn">\
                                        <button type="button" class="quantity-plus btn" data-type="plus" data-field="">\
                                            <span class="">+</span>\
                                        </button>\
                                    </span>\
                                </div>\
                            </div>\
                            <div class="price-box">\
                                <span>$</span>\
                                <span class="price">'+targetPrice+'</span>\
                            </div>\
                        </div>\
                        <div class="function-box">\
                            <i class="favorite like-btn"></i>\
                            <i class="delete btn-common-remove"></i>\
                        </div>\
                    </div>\
                </div>\
            </li>\
        ')
        calPrice()
    })

    //猜您喜歡區塊商品在shopping-detail頁被點擊時需要即時加入畫面內的對應購物車
    let productType
    let productShipment
    $(document).on('click', 'body.shopping-detail .you-like-sec .suggest-slider-sec .add-cart-btn', function () {
        //辨認商品屬於常溫/冷藏/冷凍、即時出貨/預購專區
        productType = $(this).parents('.swiper-slide').attr('data-productType')
        productShipment = $(this).parents('.swiper-slide').attr('data-productShipment')
        
        //先判斷該商品是否“可選擇方案”，因為會多一步彈窗步驟，這裡只處理”無可選方案“情況
        if($(this).attr('data-target')==undefined){
            targetCart = $(".shopping-cart-type-box[data-tab-type="+productType+"] > .shopping-cart-box:nth-child("+productShipment+") .product-list")
            targetCart.append('\
                <li class="limited-dom" data-limited-quantity="5" data-price="320">\
                    <div class="left-box">\
                        <div class="img-box"><img src="images/page/product-image.jpg"></div>\
                    </div>\
                    <div class="right-box">\
                        <div class="details">\
                            <div class="tag-increase-purchase"><span>加價購</span></div>\
                            <div class="product-name">即期良品｜義式調味烤半雞</div>\
                        </div>\
                        <div class="num-price-for-mobile">\
                            <div class="product-num-box">\
                                <div class="input-group">\
                                    <span class="input-group-btn">\
                                        <button type="button" class="quantity-minus btn " data-type="minus" data-field="">\
                                            <span class="">-</span>\
                                        </button>\
                                    </span>\
                                    <input type="text" name="quantity" class="form-control input-number" value="1" min="1" max="100">\
                                    <span class="input-group-btn">\
                                        <button type="button" class="quantity-plus btn" data-type="plus" data-field="">\
                                            <span class="">+</span>\
                                        </button>\
                                    </span>\
                                </div>\
                            </div>\
                            <div class="price-box">\
                                <span>$</span>\
                                <span class="price">320</span>\
                            </div>\
                        </div>\
                        <div class="function-box">\
                            <i class="favorite like-btn"></i>\
                            <i class="delete btn-common-remove"></i>\
                        </div>\
                    </div>\
                </li>\
            ')
            calPrice()
        }
    })
    //這裡處理”有可選方案“情況
    $(document).on('click', 'body.shopping-detail #modal-product-option .popup-add-cart-btn', function () {
        targetCart = $(".shopping-cart-type-box[data-tab-type="+productType+"] > .shopping-cart-box:nth-child("+productShipment+") .product-list")
        targetCart.append('\
            <li class="limited-dom" data-limited-quantity="5" data-price="320">\
                <div class="left-box">\
                    <div class="img-box"><img src="images/page/product-image.jpg"></div>\
                </div>\
                <div class="right-box">\
                    <div class="details">\
                        <div class="tag-increase-purchase"><span>加價購</span></div>\
                        <div class="product-name">即期良品｜義式調味烤半雞</div>\
                    </div>\
                    <div class="num-price-for-mobile">\
                        <div class="product-num-box">\
                            <div class="input-group">\
                                <span class="input-group-btn">\
                                    <button type="button" class="quantity-minus btn " data-type="minus" data-field="">\
                                        <span class="">-</span>\
                                    </button>\
                                </span>\
                                <input type="text" name="quantity" class="form-control input-number" value="1" min="1" max="100">\
                                <span class="input-group-btn">\
                                    <button type="button" class="quantity-plus btn" data-type="plus" data-field="">\
                                        <span class="">+</span>\
                                    </button>\
                                </span>\
                            </div>\
                        </div>\
                        <div class="price-box">\
                            <span>$</span>\
                            <span class="price">320</span>\
                        </div>\
                    </div>\
                    <div class="function-box">\
                        <i class="favorite like-btn"></i>\
                        <i class="delete btn-common-remove"></i>\
                    </div>\
                </div>\
            </li>\
        ')
        calPrice()
    })

    //購物車內容收合功能
    $(document).on('click', 'body.shopping-detail .btn-fold i', function () {
        $(this).parents('.shopping-cart-box').find('.cart-table-body').slideToggle()
        $(this).parents('.shopping-cart-box').toggleClass('active')
        if ($(this).hasClass('fa-angle-down')) {
            $(this).removeClass('fa-angle-down').addClass('fa-angle-up')
        } else {
            $(this).removeClass('fa-angle-up').addClass('fa-angle-down')
        }
    })

    //填寫資料收合功能
    $(document).on('click', '.collapse-btn i', function () {
        $(this).parents('.checkout-details-box').find('.collapse-content-box').slideToggle()
        $(this).parents('.checkout-details-box').toggleClass('active')
        if ($(this).hasClass('fa-angle-down')) {
            $(this).removeClass('fa-angle-down').addClass('fa-angle-up')
        } else {
            $(this).removeClass('fa-angle-up').addClass('fa-angle-down')
        }
    })

    //購物車tab切換
    var tabControl = 1
    $(document).on('click', 'body.shopping-detail .tab-box .tab', function () {
        if (tabControl == 1) {
            tabControl = 0;
            var tabNum = $(this).attr('data-tab-type')
            $("body.shopping-detail .tab-box .tab").removeClass('active')
            $(this).addClass('active')
            $(".shopping-cart-type-box").fadeOut(500)
            setTimeout(function () {
                $(".shopping-cart-type-box[data-tab-type=" + tabNum + "]").fadeIn(500)
            }, 510)
            setTimeout(function () {
                tabControl = 1;
            }, 1010)
        }
    })

    //加購商品slider
    // if ($(".plus-purchase-swiper").length) {
    //     var swiper1 = new Swiper(".plus-purchase-swiper", {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2,
    //         spaceBetween: 30,
    //         //loop: true,
    //         allowTouchMove: false,
    //         //centeredSlides: true,
    //         navigation: {
    //             nextEl: ".btn-next",
    //             prevEl: ".btn-prev",
    //         },
    //         breakpoints: {
    //             300: {
    //                 slidesPerView: 1,
    //                 slidesPerGroup: 1,
    //                 centeredSlides: true,
    //             },
    //             450: {
    //                 slidesPerView: 2,
    //                 slidesPerGroup: 2,
    //                 centeredSlides: false,
    //             },
    //         },
    //     });
    // }
    $("body.shopping-detail .shopping-cart-type-box").each(function () {
        $(this).fadeOut(100)
        setTimeout(function () {
            $(".shopping-cart-type-box[data-tab-type=1]").fadeIn(500)
        }, 1000)
    })

    //全選功能
    $(document).on('click', '.shopping-cart-box .cart-head .left-box >input[type=checkbox]', function () {
        if ($(this).prop('checked') == false) {
            $(this).parents('.shopping-cart-box').find('.cart-table-body .product-list li').each(function () {
                $(this).find('.left-box >input').prop('checked', false)
            })
        } else {
            $(this).parents('.shopping-cart-box').find('.cart-table-body .product-list li').each(function () {
                $(this).find('.left-box >input').prop('checked', true)
            })
        }
    })

    //移除商品
    $(document).on('click', '.btn-common-remove', function () {
        $(this).parents('li').remove()
    })

    //發票類型內容顯示
    $(document).ready(function () {
        $('.receipt-type-row input[type="radio"]').click(function () {
            var inputValue = $(this).attr("value");
            var targetBox = $("." + inputValue);
            $(".receipt-container").not(targetBox).hide();
            $(targetBox).show();
        });
    });

    //載具發票-當使用者如果在欄位匡有輸入文字時，以最後輸入的欄位進行自動勾選。
    $('.receipt-type1 input').change(function(){
        if($(this).val()!==''){
            $(this).parents('.form-check').find('.form-check-input').prop('checked',true)
        }
    })
    
    // 物流方式內容顯示
    $(document).ready(function () {
        $('.delivery-option-row input[type="radio"]').click(function () {
            var inputValue = $(this).attr("value");
            var targetBox = $("." + inputValue);
            $(".delivery-option-container").not(targetBox).hide();
            $(targetBox).show();
        });
    });

    // 付款方式內容顯示
    $(document).ready(function () {
        $('.payment-option-row input[type="radio"]').click(function () {
            $('.pay-verify').hide();
            $('.wow-pay-container').hide();
        });
        $('.payment-option-row input[type="radio"]#wow-pay').click(function () {
            $('.pay-verify').show();
            $('.wow-pay-container').show();
        });
    });


    //複製按鈕 function在global.js
    $(document).on('click', '.btn-copy', function () {
        var $this = $(this).prev()
        copyText($this)
    });

    //coupon收合功能
    $(document).on('click', 'body.shopping-discount i.detail', function () {
        $(this).parent().parent().parent().find('.bottom-box').slideToggle()
        $(this).parent().parent().parent().toggleClass('active')
        $(this).parent().parent().parent().find('.tri-box').slideToggle()
    })
    $(".tri-box").click(function () {
        $(this).parent().find('.bottom-box').slideToggle()
        $(this).parent().toggleClass('active')
        $(this).fadeOut(300)
    })

    //瘋點數折抵按鈕
    $(document).on('click', '.btn-use-point', function () {
        var point = Number($("#point").text())
        var discountPoint = $(this).prev().val()
        if (discountPoint == '' || discountPoint < 0) {
            $("#tooltip-dicount-error").fadeIn().delay(1000).fadeOut();
            setTimeout(function () {
                tooltipDelay = 0
            }, 1100)
            $('.tooltip-close').click(function () {
                $('.wp-tooltip').hide();
            })
        } else if (discountPoint > point) {
            //console.log('超過擁有點數')
            $("#tooltip-dicount-error").fadeIn().delay(1000).fadeOut();
            setTimeout(function () {
                tooltipDelay = 0
            }, 1100)
            $('.tooltip-close').click(function () {
                $('.wp-tooltip').hide();
            })
        } else {
            var usedPoint = discountPoint
            $('#usedPoint').text(usedPoint)
        }
    })
    $(document).on('click', '.btn-use-coupon', function () {
        $(".coupon-tags >ul").append('<li class="tag">#9417 優惠券折抵150元<i class="fa fa-times-circle" aria-hidden="true"></i></li>')
    })

    //刪除已使用折價券
    $(document).on('click', '.coupon-tags li.tag i', function () {
        $(this).parent().remove()
    })

    //填寫資料 防呆判斷

    var errorCheck = 0
    var checkControl = 0
    $("body.shopping-checkout .checkout-form-section .btn-next").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        checkoutFormCheck()
        checkControl = 1
        console.log(checkControl)
        if (errorCheck == 0) {
            location.href = "./checkout-success.html"
        }

    })
    $("body.shopping-checkout .checkout-form-section input").blur(function () {
        if (checkControl == 1) {
            checkoutFormReCheck()
        }
    })

    function checkoutFormCheck() {
        errorCheck = 0
        $("body.shopping-checkout .wp-form input").removeClass('error')
        $("body.shopping-checkout .wp-form .select .select-styled").removeClass('error')
        $("body.shopping-checkout .wp-form .error-text").remove();
        var re = {
            'email': /^\w+(\.)?(\w+)?@[0-9a-z]+(\.[a-z]+){1,3}$/,
            'phone': /^09[0-9]{8}$/,
        };
        //判斷是否留空

        $("body.shopping-checkout .wp-form input[type=text]").not('.not-required').each(function () {
            if ($(this).val() == '') {
                errorCheck = 1
                $(this).addClass('error')
                $(this).after('<div class="error-text">請填寫正確的內容</div>')
            }
        })
        $("body.shopping-checkout .wp-form select").not('.not-required').each(function () {
            //付款方式為瘋PAY時才判斷是否有選擇錢包
            if($(this).hasClass('wow-pay-select')){
                if($("#wow-pay").prop('checked')==true){
                    if ($(this).val() == '0') {
                        errorCheck = 1
                        $(this).next().addClass('error')
                        $(this).parent().after('<div class="error-text">請填寫正確的內容</div>')
                    }
                }
            }else {
                if ($(this).val() == '0') {
                    errorCheck = 1
                    $(this).next().addClass('error')
                    $(this).parent().after('<div class="error-text">請填寫正確的內容</div>')
                }
            }
            
        })
        if (errorCheck == 0) {
            //驗證email格式
            var emailVal1 = $("#order-email").val()
            if (!re.email.test(emailVal1)) {
                errorCheck = 1
                $("#order-email").addClass('error')
                $("#order-email").after('<div class="error-text">請填寫正確的內容</div>')
            }
            var emailVal2 = $("#receiver-email").val()
            if (!re.email.test(emailVal2)) {
                errorCheck = 1
                $("#receiver-email").addClass('error')
                $("#receiver-email").after('<div class="error-text">請填寫正確的內容</div>')
            }

            //驗證手機號碼格式
            var phoneVal1 = $("#order-phone").val()
            if (!re.phone.test(phoneVal1)) {
                errorCheck = 1
                $("#order-phone").addClass('error')
                $("#order-phone").after('<div class="error-text">請填寫正確的內容</div>')
            }

            var phoneVal2 = $("#order-mobile").val()
            if (!re.phone.test(phoneVal2)) {
                errorCheck = 1
                $("#order-mobile").addClass('error')
                $("#order-mobile").after('<div class="error-text">請填寫正確的內容</div>')
            }

            var phoneVal3 = $("#receiver-phone").val()
            if (!re.phone.test(phoneVal3)) {
                errorCheck = 1
                $("#receiver-phone").addClass('error')
                $("#receiver-phone").after('<div class="error-text">請填寫正確的內容</div>')
            }

            var phoneVal4 = $("#receiver-mobile").val()
            if (!re.phone.test(phoneVal4)) {
                errorCheck = 1
                $("#receiver-mobile").addClass('error')
                $("#receiver-mobile").after('<div class="error-text">請填寫正確的內容</div>')
            }

            // 驗證備註文字限制20字
            var remarkTextLength = $("#remark").val().length
            if(remarkTextLength>20){
                errorCheck = 1
                $("#remark").addClass('error')
                $("#remark").after('<div class="error-text">備註限20字元</div>')
            }
        }
    }

    function checkoutFormReCheck(e) {
        // e.stopPropagation();
        // e.preventDefault();
        //checkoutFormCheck()

        errorCheck = 0

        $("body.shopping-checkout .wp-form input").removeClass('error')
        $("body.shopping-checkout .wp-form .select .select-styled").removeClass('error')
        $("body.shopping-checkout .wp-form .error-text").remove();

        var re = {
            'email': /^\w+(\.)?(\w+)?@[0-9a-z]+(\.[a-z]+){1,3}$/,
            'phone': /^09[0-9]{8}$/,
        };

        //判斷是否留空
        $("body.shopping-checkout .wp-form input[type=text]").not('.not-required').each(function () {
            if ($(this).val() == '') {
                errorCheck = 1
                $(this).addClass('error')
                $(this).after('<div class="error-text">請填寫正確的內容</div>')
            }
        })
        //驗證email格式
        var emailVal1 = $("#order-email").val()
        if (!re.email.test(emailVal1)) {
            errorCheck = 1
            if (!$("#order-email").hasClass('error')) {
                $("#order-email").addClass('error')
                $("#order-email").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }

        var emailVal2 = $("#receiver-email").val()
        if (!re.email.test(emailVal2)) {
            errorCheck = 1
            if (!$("#receiver-email").hasClass('error')) {
                $("#receiver-email").addClass('error')
                $("#receiver-email").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }

        //驗證手機號碼格式
        var phoneVal1 = $("#order-phone").val()
        if (!re.phone.test(phoneVal1)) {
            errorCheck = 1
            if (!$("#order-phone").hasClass('error')) {
                $("#order-phone").addClass('error')
                $("#order-phone").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }

        var phoneVal2 = $("#order-mobile").val()
        if (!re.phone.test(phoneVal2)) {
            errorCheck = 1
            if (!$("#order-mobile").hasClass('error')) {
                $("#order-mobile").addClass('error')
                $("#order-mobile").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }

        var phoneVal3 = $("#receiver-phone").val()
        if (!re.phone.test(phoneVal3)) {
            errorCheck = 1
            if (!$("#receiver-phone").hasClass('error')) {
                $("#receiver-phone").addClass('error')
                $("#receiver-phone").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }

        var phoneVal4 = $("#receiver-mobile").val()
        if (!re.phone.test(phoneVal4)) {
            errorCheck = 1
            if (!$("#receiver-mobile").hasClass('error')) {
                $("#receiver-mobile").addClass('error')
                $("#receiver-mobile").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }

        // 驗證備註文字限制20字
        var remarkTextLength = $("#remark").val().length
        if(remarkTextLength>20){
            errorCheck = 1
            $("#remark").addClass('error')
            $("#remark").after('<div class="error-text">備註限20字元</div>')
        }
    }

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

    $(".pay-verify").click(function () {
        $(".verify-btn button").attr("disabled", false);
        timerOn = true;
        timer(180);
    })

    //日期input
    $('.input-group.delivery-date-datepicker1').datepicker({
        language: "zh-TW",
        autoclose: true,//自动关闭
        orientation: "bottom auto",
        autoclose: true,
        format: "yyyy/mm/dd",
        immediateUpdates: true,
        todayBtn: true,
        todayHighlight: true,
    }).datepicker("setDate", "0");
    $('.input-group.delivery-date-datepicker2').datepicker({
        language: "zh-TW",
        autoclose: true,//自动关闭
        orientation: "bottom auto",
        autoclose: true,
        format: "yyyy/mm/dd",
        immediateUpdates: true,
        todayBtn: true,
        todayHighlight: true,
    }).datepicker("setDate", "0");
    $('.input-group.delivery-date-datepicker3').datepicker({
        language: "zh-TW",
        autoclose: true,//自动关闭
        orientation: "bottom auto",
        autoclose: true,
        format: "yyyy/mm/dd",
        immediateUpdates: true,
        todayBtn: true,
        todayHighlight: true,
    }).datepicker("setDate", "0");
})