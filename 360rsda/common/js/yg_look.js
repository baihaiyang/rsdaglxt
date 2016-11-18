// JavaScript Document
(function(){
	$('#download_all').click(function(){
		$('.dialog').css("display","block");
	});
	$('.cancel').click(function(){
		$('.dialog').css("display","none");
	});
	
	/*
	 * left菜单
	 */
	$('.f_menu > a').click(function(){
		if($(this).next("ul").css("display") == "none") {
			$(this).next("ul").css("display","block");
			sec_menu($(this).parent('.f_menu'));
		}else if($(this).next("ul").css("display") == "block") {
			$(this).next("ul").css("display","none");
		}
	});
	function sec_menu(sec) {
		$(sec).find("ul li a").click(function(){
			$('.sec_ul li a').removeClass("active");
			$(this).addClass("active");
			$('.right').css("display","block");
		});
	}
	/*
	 * right table tr行颜色控制
	 */
	var i=0;
	$('#img_num tr').each(function() {
		if(i%2==1) {
			$(this).css("background-color", "#F9F9F9");
		}
		i++;
	});
	
	$('.btn_2').click(function(){
		self.close();
	});
	
	/*
	 * 预览图片
	 */
	$('.img').each(function(){
		$(this).click(function(){
			var h = $(this).offset().top - 196;
			$(this).css("color","#43970e");
			$(this).css("position","relative");
			$('.img_active').css("top",h);
			$('.img_active').css("display","block");
		});
		$('.b_close').click(function(){
			$('.img').css("color","#000");
			$('.img').css("position","static");
			$(this).parent('.img_active').css("display","none");
		});
	});
	
	/*
	 * right 宽度
	 */
	var r_w = 1063 + "px";
	$('.right').width(r_w);
	var r_h = $('.left').height();
	$('.right').height(r_h);
	/*$('.left').height().resize(function(){
		var r_h = $('.left').height();
		$('.right').height(r_h);
	});*/
	var fan = function getContentSize() {
		var wh = $(document).height(); 
		
		var eh = 271;
		ch = (wh - eh) + "px";
		$('.right').height(ch);
		
	}
	window.onresize = fan;
})(jQuery);
