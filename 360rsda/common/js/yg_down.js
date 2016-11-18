// JavaScript Document
(function(){
	/*
	 * left菜单
	 */
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
	$('.select').click(function(){
		if($(this).hasClass("select_active")) {
			$(this).removeClass("select_active");
			$(this).parent().find(".select_c").removeClass("select_c_active");
		}else {
		  $(this).addClass("select_active");
		  $(this).parent().find(".select_c").addClass("select_c_active");
		}
		
	});
	$('.select_c').click(function(){
		if($(this).hasClass("select_c_active")) {
			$(this).removeClass("select_c_active");
		}else {
		  $(this).addClass("select_c_active");
		}
	});
	$('.select_all').click(function(){
		if($('.select').hasClass("select_active")) {
			$(this).removeClass("select_all_active");
			$('.select').removeClass("select_active");
			$('.select_c').removeClass("select_c_active");
		}else {
			$(this).addClass("select_all_active");
			$('.select').addClass("select_active");
			$('.select_c').addClass("select_c_active");
		}
		
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
})(jQuery);
