// JavaScript Document
(function(){
	$('#download_all').click(function(){
		$('.dialog').css("display","block");
	});
	$('.cancel').click(function(){
		$('.dialog').css("display","none");
	});
	
	
	
	var fan = function getContentSize() {
		var wh = $(document).height(); 
		
		var eh = 271;
		ch = (wh - eh) + "px";
		$('.content').height(ch);
		
	}
	window.onresize = fan;
})(jQuery);
