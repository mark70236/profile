//禁止ios手機縮放
(function() {
	var agent = navigator.userAgent.toLowerCase();
	if(agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0){
		document.addEventListener('touchstart',function (event) {
			if(event.touches.length>1){
				event.preventDefault();
			}
		});
		var lastTouchEnd=0;
		document.addEventListener('touchend',function (event) {
			var now=(new Date()).getTime();
			if(now-lastTouchEnd<=300){
				event.preventDefault();
			}
			lastTouchEnd=now;
		},false);
		document.addEventListener('gesturestart', function (event) {
			event.preventDefault();
		});
	}
})()
$(function() {
	// onYouTubeIframeAPIReady()
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	//kv區塊視差效果
	var scene = document.getElementById('scene');
	var parallax;
	var resizeTimer = false;
	$(window).on("resize", function() {
		if (resizeTimer) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(doResize, 300);
	});
	doResize()

	function doResize() {
		if ($(window).width()>800) {
			parallax = new Parallax(scene);
		}
	}

	// 啟動wow.js
	new WOW().init()

	//表格智能彈窗功能
	var dataHint
	$(".btn-hint").click(function(event) {

		dataHint = $(this).attr('data-hint');

		lightBoxShow($(this))
	});


	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var player;
	
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
		width: '100%',
		videoId: 'h14s_ZmwtrM',
		playerVars: { 'autoplay': 1, 'playsinline': 1, 'list': 'PLVAo27U4tkw9zDwzALE-5tH2SLWt6nuID' },
		events: {
			'onReady': onPlayerReady
		}
		});
	}
	function onPlayerReady(event) {
		event.target.mute();
		event.target.playVideo();
	}
	function lightBoxShow(thisTarget) {
		if (dataHint=="v1") {
			//$(".light-box.video iframe").attr('src','https://www.youtube.com/embed/cf7aGCY--8g?hd=1&&list=PLVAo27U4tkw9zDwzALE-5tH2SLWt6nuID&vq=hd1080&mute=1&autoplay=1&autohide=1&loop=1&wmode=opaque&playlist=PLVAo27U4tkw9roYatsRnl6WtKuX0kk-30');
			onYouTubeIframeAPIReady();
		}
		if (!dataHint==0) {
			$(".light-box[data-hint="+dataHint+"]").fadeIn(300).addClass('active');
			$("body").addClass('fixed')
		}
	}
	$(".close, .btn-close").click(function(event) {
		$("body").removeClass('fixed')
		$(".light-box[data-hint="+dataHint+"]").fadeOut(300);
		if (dataHint=="v1") {
			$(".light-box.video iframe").attr('src','');
		}
		setTimeout(function(argument) {
			$(".light-box[data-hint="+dataHint+"]").removeClass('active');
			dataHint = 0;

			$(".light-box.video iframe").remove();
			$(".light-box.video").append('<div id="player"></div>')
		},300)
	});

	//江湖悲劇列表控制
	var wkdefen1 = 0;
	var targetTragedyNum;
	$(".tragedy-menu li").click(function(event) {
		if (!$(this).hasClass('active')) {
			if (wkdefen1==0) {
				targetTragedyNum = $(this).attr('data-tragedy');
				wkdefen1 = 1;
				$(".tragedy-menu li").removeClass('active');
				$(this).addClass('active');
				$(".tragedy-box .text-box").fadeOut(300);

				setTimeout(function(){
					$(".tragedy-box .text img").attr('src','images/section2/tragedy-text'+targetTragedyNum+'.png');
					$(".tragedy-box .text-box").fadeIn(700);
				},300)
				setTimeout(function(){
					wkdefen1 = 0;
				},1100)
			}
		}
	});


	//江湖悲劇手機版slider
	$('.tragedy-box.for-mobile .text-box').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow:"<span class='slick-prev'></span>",
		nextArrow:"<span class='slick-next'></span>",
		autoplay: true,
		autoplaySpeed: 3000,
	});

	//失扶有多罩區塊slider
	$('.section3 .item-list.for-mobile').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow:"<span class='slick-prev'></span>",
		nextArrow:"<span class='slick-next'></span>",
		autoplay: true,
		autoplaySpeed: 3000,
	});

	//失扶有多罩區塊slider
	$('.section4 .qa-list-mobile').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow:"<span class='slick-prev'></span>",
		nextArrow:"<span class='slick-next'></span>",
		autoplay: true,
		autoplaySpeed: 3000,
	});


	//失扶真經-搜尋結果按鈕動作
	var gender;
	var age;
	//預設選定性別
	if ($(window).width()>800) {
		$(".data-out-box.for-desktop .gender-label-male").click();
	}else {
		$(".data-out-box.for-mobile .gender-label-male").click();
	}
	$(".search-btn").click(function(event) {
		$(this).addClass('wait');
		setTimeout(function() {
			$(".search-btn").removeClass('wait');
		},1000)
		gender = $("input[name=gender]:checked").val();
		if ($(window).width()>800) {
			age = $(".data-out-box.for-desktop .age select").val();
		}else {
			age = $(".data-out-box.for-mobile .age select").val();
		}
		if(gender==undefined){
			alert('請選擇性別')
			return false
		}else if(age==0) {
			alert('請選擇年齡')
			return false
		}else {
			if (gender=='male') {
				if (age=='20') { $(".tab-list").attr('data-table-group','a')};
				if (age=='30') { $(".tab-list").attr('data-table-group','b')};
				if (age=='40') { $(".tab-list").attr('data-table-group','c')};
			}else {
				if (age=='20') { $(".tab-list").attr('data-table-group','d')};
				if (age=='30') { $(".tab-list").attr('data-table-group','e')};
				if (age=='40') { $(".tab-list").attr('data-table-group','f')};
			}
			$(".data-box .tab-list li:first-child").click();
			$(".data-box .tab-list li:first-child").addClass('active');
		}
	});
	//失扶真經-搜尋結果表格-tab切換
	$(".data-box .tab-list li").click(function(event) {
		$(".data-box .tab-list li").removeClass('active');
		$(this).addClass('active');
		var tableGroup = $(this).parent().attr('data-table-group');
		var tableNum = $(this).attr('data-table-num');

		//切換table
		$(".data-box .details-wrap").fadeOut(300);
		$(".data-out-box.for-mobile .details img").fadeOut(300);
		setTimeout(function() {
			$(".data-box .details-wrap .data-table").removeClass('active');
			$(".data-box .details-wrap .data-table[data-table-num="+tableGroup+tableNum+"]").addClass('active');
			$(".data-box .details-wrap .fee img").attr("src", "images/section4/table-title/"+tableGroup+tableNum+".png");
			$(".data-out-box.for-mobile .details img").attr("src", "images/section4/table-title-mobile/"+tableGroup+tableNum+".png");
			$(".data-out-box.for-mobile .details .data-table a").attr("href", "data/"+tableGroup+tableNum+".html");
			//console.log(tableGroup+tableNum);
			$(".data-box .details-wrap").fadeIn(300);
			$(".data-out-box.for-mobile .details img").fadeIn(300);
		},300)

		//切換下方兩個按鈕超連結
		if (tableNum==1) {
			$(".section4 .data-box .details .btn-box .more a").attr('href', 'https://www.transglobe.com.tw/product_detail.html?id=LDH&oiu=traditional');
			$(".section4 .data-box .details .btn-box .contact a").attr('href', 'https://www.transglobe.com.tw/service-contact-mailbox.html?productId=LDH');
		}else if (tableNum==2) {
			$(".section4 .data-box .details .btn-box .more a").attr('href', 'https://www.transglobe.com.tw/product_detail.html?id=LDG&oiu=traditional');
			$(".section4 .data-box .details .btn-box .contact a").attr('href', 'https://www.transglobe.com.tw/service-contact-mailbox.html?productId=LDG');
		}else if(tableNum==3){
			$(".section4 .data-box .details .btn-box .more a").attr('href', 'https://www.transglobe.com.tw/product_detail.html?id=XDJ&oiu=traditional');
			$(".section4 .data-box .details .btn-box .contact a").attr('href', 'https://www.transglobe.com.tw/service-contact-mailbox.html?productId=XDJ');
		}else if(tableNum==4){
			$(".section4 .data-box .details .btn-box .more a").attr('href', 'https://www.transglobe.com.tw/product_detail.html?id=XDK&oiu=traditional');
			$(".section4 .data-box .details .btn-box .contact a").attr('href', 'https://www.transglobe.com.tw/service-contact-mailbox.html?productId=XDK');
		}
	});




	//Q&A問題列表控制
	var wkdefen = 0;
	var targetQaNum;
	$(".question-list li").click(function(event) {
		if (!$(this).hasClass('active')) {
			if (wkdefen==0) {
				targetQaNum = $(this).attr('data-qa');
				wkdefen = 1;
				$(".question-list li").removeClass('active');
				$(this).addClass('active');
				$(".answer-box .answer").fadeOut(300);

				setTimeout(function(){
					$(".answer-box").removeClass('qa-1 qa-2 qa-3 qa-4 qa-5').addClass('qa-'+targetQaNum);
					$(".answer-box .answer img").attr('src','images/section4/qa/content-txt-'+targetQaNum+'.png');
					$(".answer-box .answer").fadeIn(700);
				},300)
				setTimeout(function(){
					wkdefen = 0;
				},1100)
			}
		}
	});
	//Q&A區塊按鈕錨點功能
	$(".answer .calculation,.qa-box.for-mobile .btn-calculation").click(function(event) {
		$body.animate({
			scrollTop: $(".section4").offset().top-50
		}, 1000, 'easeInOutCubic');
	});
	$(".answer .data").click(function(event) {
		$body.animate({
			scrollTop: $(".section2 .retired-life").offset().top-50
		}, 1000, 'easeInOutCubic');
	});
	$(".qa-box.for-mobile .btn-data").click(function(event) {
		$body.animate({
			scrollTop: $(".section2 .retired-life.for-mobile").offset().top-50
		}, 1000, 'easeInOutCubic');
	});

	//備註區塊收合功能
	$(".remark-box .remark").click(function(event) {
		$("html,body").animate({scrollTop: $(".section5 .section-wrap").offset().top-50}, 400);
		if (!$(this).hasClass('active')) {

			$(".remark-box .remark").removeClass('active');
			$(this).addClass('active')

		}else {
			$(this).removeClass('active')
		}
	});
	//備註區塊點擊圖片禁止冒泡
	$(".remark-box .remark-detail img").click(function(event) {
		stopPropagation(event);
	});

})
//阻止預設事件
function cancelHandler(event){
	var event = event || window.event;	//用于IE
	if(event.preventDefault) event.preventDefault();	//标准技术
	if(event.returnValue) event.returnValue = false;	//IE
	return false;	 //用于处理使用对象属性注册的处理程序
}
//阻止冒泡
function stopPropagation(event){
	window.event? window.event.cancelBubble = true : e.stopPropagation();
}

