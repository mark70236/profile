$(function() {
	// header區塊 line分享按鈕
	title = document.title,
	url = location.href;
	// 行動裝置語法
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		href = "http://line.naver.jp/R/msg/text/?" + title + "%0D%0A" + url;
		document.querySelector("header .menu.for-desktop .wk-line-share a").setAttribute("href",href)
		document.querySelector(".mobile-menu-out-box .wk-line-share a").setAttribute("href",href)
	} else {
		// 網頁版語法
		href = "https://lineit.line.me/share/ui?url=" + encodeURIComponent(url);
		document.querySelector("header .menu.for-desktop .wk-line-share a").setAttribute("href",href)
		document.querySelector(".mobile-menu-out-box .wk-line-share a").setAttribute("href",href)
	}

	// header區塊 fb分享按鈕
	window.fbAsyncInit = function() {
		FB.init({
			//appId      : '1207697892719715',
			appId      : '486016388638443',
			xfbml      : true,
			version    : 'v3.2'
		});
		FB.AppEvents.logPageView();
	};
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	//替換FB粉分享按鈕連結為當前頁面
	//document.querySelector(".wk-fb-share").onclick=function(){
	$(".wk-fb-share a").click(function(event) {
		cancelHandler(event)
		//alert('Facebook分享按鈕')
		var src = location.href
		FB.ui({
			method: 'share',
			display: 'popup',
			href: src
		}, function(response){});
	});


	//header選單錨點功能
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$(".header-tab-1").click(function(event) {
		$body.animate({
			scrollTop: 0
		}, 1000, 'easeInOutCubic');
	});
	$(".header-tab-2").click(function(event) {
		if($(window).width()<800){
			setTimeout(function() {
				$body.animate({
					scrollTop: $(".retired-life.for-mobile").offset().top-70
				}, 1000, 'easeInOutCubic');
			},500)
		}else {
			$body.animate({
				scrollTop: $(".retired-life.for-desktop").offset().top-90
			}, 1000, 'easeInOutCubic');
		}
	});
	$(".header-tab-3").click(function(event) {
		if($(window).width()<800){
			setTimeout(function() {
				$body.animate({
					scrollTop: $(".section3").offset().top-50
				}, 1000, 'easeInOutCubic');
			},500)
		}else {
			$body.animate({
				scrollTop: $(".section3").offset().top-50
			}, 1000, 'easeInOutCubic');
		}
	});
	$(".header-tab-4").click(function(event) {
		if($(window).width()<800){
			setTimeout(function() {
				$body.animate({
					scrollTop: $(".section4").offset().top-50
				}, 1000, 'easeInOutCubic');
			},500)
		}else {
			$body.animate({
				scrollTop: $(".section4").offset().top-50
			}, 1000, 'easeInOutCubic');
		}
	});
	$(".header-tab-5").click(function(event) {
		if($(window).width()<800){
			setTimeout(function() {
				$body.animate({
					scrollTop: $(".section4 .qa-box.for-mobile").offset().top-120
				}, 1000, 'easeInOutCubic');
			},500)
		}else {
			$body.animate({
				scrollTop: $(".section4 .qa-box").offset().top-140
			}, 1000, 'easeInOutCubic');
		}
	});

	//控制開啟手機版header選單
	$("header .btn-mobile-menu").click(function(event) {
		if($(".mobile-menu-out-box").hasClass('hide')) {
			$(".mobile-menu-out-box").removeClass('hide')
			setTimeout(function() {
				$(".link-menu .li1").removeClass('hide')
				$("html").css('position','fixed')
			},700)
			setTimeout(function() {
				$(".link-menu .li2").removeClass('hide')
			},1000)
			setTimeout(function() {
				$(".link-menu .li3").removeClass('hide')
			},1300)
			setTimeout(function() {
				$(".link-menu .li4").removeClass('hide')
			},1600)
			setTimeout(function() {
				$(".link-menu .li5").removeClass('hide')
			},1900)
			setTimeout(function() {
				$(".link-menu .li6").removeClass('hide')
			},2200)
		}
	});
	//控制關閉手機版header選單
	$(".mobile-menu-out-box .close").click(function(event) {
		if(!$(".mobile-menu-out-box").hasClass('hide')) {
			$(".mobile-menu-out-box").addClass('hide')
			$("html").css('position','static')
			setTimeout(function() {
				$(".link-menu li").addClass('hide')
			},700)
		}
	});
	$(".mobile-menu-out-box .link-menu li").click(function(event) {
		if(!$(".mobile-menu-out-box").hasClass('hide')) {
			$(".mobile-menu-out-box").addClass('hide')
			$("html").css('position','static')
			setTimeout(function() {
				$(".link-menu li").addClass('hide')
			},700)
		}

	});

})
//阻止預設事件
function cancelHandler(event){
	var event = event || window.event;  //用于IE
	if(event.preventDefault) event.preventDefault();  //标准技术
	if(event.returnValue) event.returnValue = false;  //IE
	return false;   //用于处理使用对象属性注册的处理程序
}
//阻止冒泡
function stopPropagation(event){
	window.event? window.event.cancelBubble = true : e.stopPropagation();
}