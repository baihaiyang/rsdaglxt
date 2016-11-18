// JavaScript Document
$(function(){
	//alert($('body').css('height'));
	
	var top = parseInt($('body').css('height'))/2 - 330;
	var top1 = parseInt($('body').css('height'))/2 - 268;
	if(top > 0){
		$('.login_img').css('top',top);
		var top_l = top + 130 + 'px';
		$('.login').css('top', top_l);
		$('.login').css('right', '170px');
	}else{
		$('.login_midd').css('top','0');
		$('.login').css('top', '139px');
		$('.login').css('right', '170px');
	}
	if(top1 > 62){
		$('.login_midd').css('top',top1);	
	}else{
		$('.login_midd').css('top','62px');	
	}
	
	$('#login').click(function(e) {
        location.href = "index.html";//location.href实现客户端页面的跳转  
    });
	$('#login_1').click(function(e) {
        location.href = "index_hr.html";//location.href实现客户端页面的跳转  
    });
});