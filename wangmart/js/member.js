$(function() {
    var tooltipDelay = 0
    //$("#twzipcode").twzipcode();
 
    
    //日期input
    $('.input-group.date-normal').datepicker({
        language: "zh-TW",
        autoclose: true,//自动关闭
        orientation: "bottom auto",
        autoclose: true,
        format: "yyyy/mm/dd",
        immediateUpdates: true,
        todayBtn: true,
        todayHighlight: true,
    }).datepicker("setDate", "0");

    $('.input-group.date-from').datepicker({
        language: "zh-TW",
        autoclose: true,//自动关闭
        orientation: "bottom auto",
        autoclose: true,
        format: "yyyy/mm/dd",
        immediateUpdates: true,
        todayBtn: true,
        todayHighlight: true,
    }).datepicker("setDate", "0");
    
    $('.input-group.date-to').datepicker({
        language: "zh-TW",
        autoclose: true,//自动关闭
        orientation: "bottom auto",
        autoclose: true,
        format: "yyyy/mm/dd",
        immediateUpdates: true,
        todayBtn: true,
        todayHighlight: true,
    }).datepicker("setDate", "0");

    $( ".input-group.date-from").click(function(){
        $( ".input-group.date-from").datepicker('show');
    });
    $( ".input-group.date-to").click(function(){
        $( ".input-group.date-to").datepicker('show');
    });
    $( ".input-group.date-normal").click(function(){
        $( ".input-group").datepicker('show');
    });



    //會員註冊 防呆判斷
    $(".wp-tnc-check .btn").click(function(e){
        //e.stopProgration();
        setTimeout(function(){
            $("#agreeCheck").prop('checked',false)
        },1)
        
    })
    var errorCheck = 0
    var checkControl = 0
    
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

    $("body.member-register .member-register-sec .form-btn").click(function(){
        registerFormCheck()
        checkControl = 1
        if(errorCheck == 0) {
            $("#phone-verification").modal('show')
            $(".verify-btn button").attr("disabled", false);
            timerOn = true;
            timer(180);
        }
    })
    $("body.member-register .member-register-sec .wp-form input").blur(function(){
        if(checkControl == 1) { registerFormReCheck() }
    })
    function registerFormCheck() {
        errorCheck = 0
        $("body.member-register .member-register-sec .wp-form input").removeClass('error')
        $("body.member-register .member-register-sec .wp-form .error-text").remove();
        var re = {
            'email':/^\w+(\.)?(\w+)?@[0-9a-z]+(\.[a-z]+){1,3}$/,
            'phone':/^09[0-9]{8}$/,
            'punctuation':/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/,
            'emoji':/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/,
        };
        //判斷是否留空
        $("body.member-register .member-register-sec .wp-form input").each(function(){
            if($(this).val()=='') {
                errorCheck = 1
                $(this).addClass('error')
                $(this).after('<div class="error-text">請填寫正確的內容</div>')
            }
        })
        if(errorCheck == 0) {
            //安全性問題是否有選
            var securityQuestionVal = $("#securityQuestion").val()
            if(securityQuestionVal=="0"){
                errorCheck = 1
                $("#securityQuestion").addClass('error')
                $("#securityQuestion").parent().after('<div class="error-text">請填寫正確的內容</div>')
            }       

            //驗證email格式
            var emailVal = $("#email").val()
            if(!re.email.test(emailVal)){
                errorCheck = 1
                $("#email").addClass('error')
                $("#email").after('<div class="error-text">請填寫正確的內容</div>')
            }

            //驗證手機號碼格式
            var phoneVal = $("#phone").val()
            if(!re.phone.test(phoneVal)){
                errorCheck = 1
                $("#phone").addClass('error')
                $("#phone").after('<div class="error-text">請填寫正確的內容</div>')
            }
            //確認密碼是否一致
            if($("#password-check").val()!==$("#password").val()) {
                errorCheck = 1
                $("#password-check").addClass('error')
                $("#password-check").after('<div class="error-text">密碼不一致</div>')
            }
            //驗證安全性答案是否含非法字元
            var securityAnswerVal = $("#securityAnswer").val()
            if(re.punctuation.test(securityAnswerVal)){
                errorCheck = 1
                $("#securityAnswer").addClass('error')
                $("#securityAnswer").after('<div class="error-text">請勿填寫包含標點符號、emoji等形意符號</div>')
            }
            if(re.emoji.test(securityAnswerVal)){
                errorCheck = 1
                $("#securityAnswer").addClass('error')
                $("#securityAnswer").after('<div class="error-text">請勿填寫包含標點符號、emoji等形意符號</div>')
            }
        }
        if(errorCheck == 0) {
            //判斷是否勾選同意條款、隱私權政策
            if($("#agreeCheck").prop('checked')==false) {
                errorCheck = 1
                alert('請同意王品嚴選客戶隱私權政策與客戶服務條款')
            }
        }
    }
    function registerFormReCheck() {
        errorCheck = 0
        $("body.member-register .member-register-sec .wp-form input").removeClass('error')
        $("body.member-register .member-register-sec .wp-form .error-text").remove();
        var re = {
            'email':/^\w+(\.)?(\w+)?@[0-9a-z]+(\.[a-z]+){1,3}$/,
            'phone':/^09[0-9]{8}$/,
        };
        
        
        //判斷是否留空
        $("body.member-register .member-register-sec .wp-form input").each(function(){
            if($(this).val()=='') {
                errorCheck = 1
                $(this).addClass('error')
                $(this).after('<div class="error-text">請填寫正確的內容</div>')
            }
        })
        //驗證email格式
        var emailVal = $("#email").val()
        if(!re.email.test(emailVal)){
            errorCheck = 1
            if(!$("#email").hasClass('error')) {
                $("#email").addClass('error')
                $("#email").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }

        //驗證手機號碼格式
        var phoneVal = $("#phone").val()
        if(!re.phone.test(phoneVal)){
            errorCheck = 1
            if(!$("#phone").hasClass('error')) {
                $("#phone").addClass('error')
                $("#phone").after('<div class="error-text">請填寫正確的內容</div>')
            }
        }
        
        //確認密碼是否一致
        if($("#password-check").val()!==$("#password").val()) {
            errorCheck = 1
            if(!$("#password-check").next().hasClass('error-text')) {
                $("#password-check").addClass('error')
                $("#password-check").after('<div class="error-text">密碼不一致</div>')
            }
        }
        
    }

    //各頁面收合功能
    $(document).on('click','body.member-address-list i.edit', function () {
        $(this).parent().parent().parent().find('.bottom-box').slideToggle()
        $(this).parent().parent().parent().toggleClass('active')
        $(this).parent().parent().parent().find('.tri-box').slideToggle()
    })
    $(document).on('click','body.member-order-list i.detail', function () {
        $(this).parent().parent().parent().find('.bottom-box').slideToggle()
        $(this).parent().parent().parent().toggleClass('active')
        $(this).parent().parent().parent().find('.tri-box').slideToggle()
    })
    $(document).on('click','body.member-coupon i.detail', function () {
        $(this).parent().parent().parent().find('.bottom-box').slideToggle()
        $(this).parent().parent().parent().toggleClass('active')
        $(this).parent().parent().parent().find('.tri-box').slideToggle()
    })

    //各頁面收合功能-合上按鈕
    $(".tri-box").click(function(){
        $(this).parent().find('.bottom-box').slideToggle()
        $(this).parent().toggleClass('active')
        $(this).fadeOut(300)
    })
    
    //優惠券夾 tab切換
    $("body.member-coupon .coupon-box li[data-tab-type=1]").not('.table-head').fadeIn(300);
    $("body.member-coupon .tab-box li").click(function(){
        $("body.member-coupon .tab-box li").removeClass('active')
        $(this).addClass('active')
        $(".coupon-box li").not('.table-head').fadeOut(300);
        var targetNum = $(this).attr('data-tab-type')
        setTimeout(function(){
            if(targetNum==0){
                $(".coupon-box li").not('.table-head').fadeIn(300);
            }else {
                $(".coupon-box li").not('.table-head').each(function(){
                    if(targetNum == $(this).attr('data-tab-type')){
                        $(this).fadeIn(300);
                    }
                })
            }
        },350)
    })

    //我的最愛 tab切換
    $("body.member-favourite .tab-box li").click(function(){
        $("body.member-favourite .tab-box li").removeClass('active')
        $(this).addClass('active')
        var targetNum = $(this).attr('data-tab-type')
        $(".favourite-box >ul,.favourite-box >div").fadeOut(300)
        setTimeout(function(){
            $(".favourite-box [data-tab-type="+targetNum+"]").fadeIn(300)
        },350)
    })

    //地址清單 移除按鈕
    $(document).on('click','.btn-common-remove', function () {
        if(tooltipDelay==0) {
            tooltipDelay = 1
            $(this).parents('li').remove();
            setTimeout(function(){
                tooltipDelay = 0
            },1100)
        }   
    });
    //地址清單 修改資料按鈕
    $(document).on('click','.btn-modify', function () {
        if(tooltipDelay==0) {
            tooltipDelay = 1
            $(this).parent().parent().parent().find('.tri-box').click()
            setTimeout(function(){
                tooltipDelay = 0
            },1100)
        }
    });
    //地址清單 新增地址儲存按鈕
    $(document).on('click','#modal-add-new-address .btn-common-add', function () {
        if(tooltipDelay==0) {
            tooltipDelay = 1
            $("#modal-add-new-address").modal('hide')

            $(".address-box ul").append('\
                <li>\
                    <div class="top-box">\
                        <span class="type2">會員預設</span>\
                        <span>王小姐</span>\
                        <span class="address">台中市西屯區台灣大道四段771號2樓</span>\
                        <span class="type2"><label><input type="checkbox"><span>收件地址</span></label></span>\
                        <span class="type2"><label><input type="checkbox"><span>發票地址</span></label></span>\
                        <span><i class="edit"></i></span>\
                        <span class="btn-common-remove"><i class="delete"></i></span>\
                    </div>\
                    <div class="bottom-box">\
                        <form action="">\
                            <div class="form-col">\
                                <span>姓名</span>\
                                <input type="text" value="" placeholder="">\
                            </div>\
                            <div class="form-col">\
                                <span>名稱</span>\
                                <input type="text" value="" placeholder="">\
                            </div>\
                            <div class="form-col">\
                                <span>手機</span>\
                                <input type="text" value="" placeholder="">\
                            </div>\
                            <div class="form-col">\
                                <span>性別</span>\
                                <input type="text" value="" placeholder="">\
                            </div>\
                            <div class="form-col">\
                                <span>E-mail</span>\
                                <input type="text" value="" placeholder="">\
                            </div>\
                            <div class="form-col">\
                                <span>設定</span>\
                                <div class="select-box">\
                                    <div class="select"><select class="form-control wk-select select-hidden" id="">\
                                        <option value="0">預設收件地址</option>\
                                        <option value="1">收件地址1</option>\
                                        <option value="2">分類2</option>\
                                    </select><div class="select-styled">預設收件地址</div><ul class="select-options" style="display: none;"><li rel="0">預設收件地址</li><li rel="1">收件地址1</li><li rel="2">分類2</li></ul></div>\
                                </div>\
                            </div>\
                            <div class="form-col full address-box">\
                                <span>地址</span>\
                                <div class="select-box">\
                                    <div class="select"><select class="form-control wk-select select-hidden" id="">\
                                        <option value="0">國家</option>\
                                        <option value="1">收件地址1</option>\
                                        <option value="2">分類2</option>\
                                    </select><div class="select-styled">國家</div><ul class="select-options" style="display: none;"><li rel="0">國家</li><li rel="1">收件地址1</li><li rel="2">分類2</li></ul></div>\
                                    <div class="select"><select class="form-control wk-select select-hidden" id="">\
                                        <option value="0">縣市</option>\
                                        <option value="1">收件地址1</option>\
                                        <option value="2">分類2</option>\
                                    </select><div class="select-styled">縣市</div><ul class="select-options" style="display: none;"><li rel="0">縣市</li><li rel="1">收件地址1</li><li rel="2">分類2</li></ul></div>\
                                    <div class="select"><select class="form-control wk-select select-hidden" id="">\
                                        <option value="0">鄉鎮</option>\
                                        <option value="1">收件地址1</option>\
                                        <option value="2">分類2</option>\
                                    </select><div class="select-styled">鄉鎮</div><ul class="select-options" style="display: none;"><li rel="0">鄉鎮</li><li rel="1">收件地址1</li><li rel="2">分類2</li></ul></div>\
                                    <input type="text" class="short" value="" placeholder="郵遞區號">\
                                    <input type="text" value="" placeholder="詳細地址（村/里/路/巷/弄/號/樓）">\
                                    <input type="text" value="" placeholder="地址補充說明，例：公司、部門、住家社區名稱，可留空">\
                                </div>\
                            </div>\
                            <div class="btn-submit btn-modify">確定修改</div>\
                        </form>\
                    </div>\
                    <div class="tri-box"\
                        <span class="triangle"></span>\
                    </div>\
                </li>\
            ')

            setTimeout(function(){
                tooltipDelay = 0
            },1100)
        }
    });
    
    //複製按鈕 function在global.js
    $(".btn-copy").on("click", function() {
        
        //var $this = $(this).parents('li').find('.bottom-box .coupon-code .text')
        var $this = $(this).prev()
        copyText($this)
    });

    //分享按鈕
    $(document).on('click','i.share', function () {
        $(this).toggleClass('active')
        $(this).next().toggleClass('active')
    })

    //會員中心-訂單列表頁 取消訂單
    let targetOrderNum;
    $(document).on('click','.order-box i.delete', function () {
        targetOrderNum = $(this).parents('li').attr('data-order-number')
    })
    $(".order-remove-btn").click(function () {
        //$(this).parent().parent().parent().remove()
        $(".order-box li[data-order-number="+targetOrderNum+"]").remove();
        $("#modal-cancel-order").modal('hide')
        $( "#tooltip-order-remove" ).fadeIn().delay(3000).fadeOut();
        $('.tooltip-close').click(function(){
            $('.wp-tooltip').hide();
        })
    });

    //最愛商品頁 拿掉愛心的話就刪除該商品
    // $(document).on('click','body.member-favourite .favourite-product .product-card .like-btn', function () {
    //     $(this).parents('.product-card').parent().remove();
    // })

    // 地址欄位 給預設地址觸發下拉選單用
    $(document).on('change','.default-address select', function () {
        alert()
        $(".county-select >select").val('臺北市').change()
        $(".county-district >select").val('文山區').change()
    })
    

    //地址清單頁-收件地址＆發票地址僅能各勾選一項
    $(".address-box input[type=checkbox].shipping-address").change(function(){
        if($(this).prop('checked')==true){
            $(".address-box input[type=checkbox].shipping-address").each(function(){
                $(this).prop('checked',false)
            })
            $(this).prop('checked',true)
        }
    })
    $(".address-box input[type=checkbox].invoice-address").change(function(){
        if($(this).prop('checked')==true){
            $(".address-box input[type=checkbox].invoice-address").each(function(){
                $(this).prop('checked',false)
            })
            $(this).prop('checked',true)
        }
    })
})