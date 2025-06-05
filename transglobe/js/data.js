$(function() {

	//表格智能彈窗功能
	var dataHint
	$(".btn-hint").click(function(event) {
		dataHint = $(this).attr('data-hint');
		lightBoxShow($(this))
	});
	function lightBoxShow(thisTarget) {
		if (!dataHint==0) {
			$(".light-box[data-hint="+dataHint+"]").fadeIn(300).addClass('active');
			$("body").addClass('fixed')
		}
	}
	$(".close, .btn-close").click(function(event) {
		$("body").removeClass('fixed')
		$(".light-box[data-hint="+dataHint+"]").fadeOut(300);
		setTimeout(function(argument) {
			$(".light-box[data-hint="+dataHint+"]").removeClass('active');
			dataHint = 0;
		},300)
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

