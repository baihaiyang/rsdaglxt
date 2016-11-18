// JavaScript Document
(function(){
	$(document).on('click','#up_all',function(){
		$('.s_dialog').css("display","block");
	});
	
	$(document).on('click','.cancel',function(){
		$('.s_dialog').css("display","none");
	});
	$(document).on('click','#download_all',function(){
		$('.dialog').css("display","block");
	});
	
	$(document).on('click','.cancel',function(){
		$('.dialog').css("display","none");
	});
	
	$(document).on('click','.section a',function(){
		var href = $(this).attr('data_href');
		var taget = $(this).attr('taget_data');
		$(taget).load($(this).attr('data_href'),{"radom":Math.random()* Math.random()});
	});
	
	/*
	 * left菜单
	 */
	 $(document).on('click','.f_menu > a',function(){
		$(this).parent('li').siblings('li').children('.sec_ul').hide();
		$(this).next('ul').toggle();
		select_click();
		
		sec_click($(this));
		
	});
	
	$(document).on('click','.select',function(){
		if($(this).hasClass("select_active")) {
			$(this).removeClass("select_active");
			$(this).parent().find(".select_c").removeClass("select_c_active");
		}else {
		  $(this).addClass("select_active");
		  $(this).parent().find(".select_c").addClass("select_c_active");
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
	 * 预览图片
	 */
	$(document).on('click','.img',function(){
		var h = 171 + 'px';
		$(this).css("color","#43970e");
		$(this).css("position","relative");
		$('.img_active').css("top",h);
		$('.img_active').css("display","block");
		
		close_click();
		
	});
		
})(jQuery);
function sec_click(sec){
	sec.parent('li').find("ul li a").click(function(){
		$('.sec_ul li a').removeClass("active");
		$(this).addClass("active");
		$(taget).load($(this).attr('data_href'),{"radom":Math.random()* Math.random()});
	});
}
function select_click(){
	$('.select_c').click(function(){
		if($(this).hasClass("select_c_active")) {
			$(this).removeClass("select_c_active");
		}else {
		  $(this).addClass("select_c_active");
		}
	});
}
function close_click(){
	$('.b_close').click(function(){
		$('.img').css("color","#000");
		$('.img').css("position","static");
		$(this).parent('.img_active').css("display","none");
	});
}