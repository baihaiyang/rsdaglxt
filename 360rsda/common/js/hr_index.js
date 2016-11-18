// JavaScript Document 
(function(){
	$(document).on('click','.tab a',function(){
		var href = $(this).attr('data_href');
		var taget = $(this).attr('taget_data');
		$(this).parent().parent().addClass("t");
		$(taget).load($(this).attr('data_href'),{"radom":Math.random()* Math.random()});
		
	});
	
	$(document).on('click','.t_1_btn a',function(){
		var href = $(this).attr('data_href');
		var taget = $(this).attr('taget_data');
		$(taget).load($(this).attr('data_href'),{"radom":Math.random()* Math.random()});
	});
	$(document).on('click','.add_nav li a',function(){
		$('.add_nav li').removeClass("li_active");
		$(this).parent().addClass("li_active");
		var href = $(this).attr('data_href');
		var taget = $(this).attr('taget_data');
		$(taget).load($(this).attr('data_href'),{"radom":Math.random()* Math.random()});
	});
	
	$(document).on('click','a.add_people',function(){
		$('.add_nav li').removeClass("li_active");
		$(this).parent().addClass("li_active");
		var href = $(this).attr('data_href');
		var taget = $(this).attr('taget_data');
		$(taget).load($(this).attr('data_href'),{"radom":Math.random()* Math.random()});
	});
	$(document).on('click','.a2_btn_02',function(){
		
		if($(this).attr('tag') == 1){
			$(this).parentsUntil('table').find('input[type="checkbox"]').prop("checked",false);
			$(this).attr('tag','0');
		}else{
			$(this).parentsUntil('table').find('input[type="checkbox"]').prop("checked",true);
			$(this).attr('tag','1');
		}
		
		
		
	});
	/*
	 * 隐藏弹出框
	 */
	 $(document).on('click','#download_all',function(){
		$('.dialog').css("display","block");
	});
	$(document).on('click','.cancel',function(){
		$('.dialog').css("display","none");
	});
	/*
	 *  table tr行颜色控制
	 */
	var i=0;
	$('#img_num tr,#img_num_1 tr,#img_num_2 tr').each(function() {
		if(i%2==1) {
			$(this).css("background-color", "#F9F9F9");
		}
		i++;
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
	
	$(document).on('click','.select_all',function(){
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
function close_click(){
	$('.b_close').click(function(){
		$('.img').css("color","#000");
		$('.img').css("position","static");
		$(this).parent('.img_active').css("display","none");
	});
}