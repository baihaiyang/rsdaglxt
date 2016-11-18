// JavaScript Document
$(function(){
	$('.tab_load').load('hr/hr_msg.html',{"radom":Math.random()*Math.random()});
	
	$(document).on('click','a',function(){
		var href = $(this).attr('data_href');
		var taget = $(this).attr('taget_data');
		$(taget).load($(this).attr('data_href'),{"radom":Math.random()* Math.random()});
	});
	
	function setIfrmae(){
		$('.iframe').css("min-height",$(window).height() - $('.head').height());
	}
	setIfrmae();
	$(window).resize(setIfrmae);
	
	
	$(document).on('click', '.tab > ul > li', function(){
		$('.t').removeClass('t');
		$(this).addClass('t');
		
		
		$('.t_btn_1_active').removeClass('t_btn_1_active');
		$('.t_btn_2_active').removeClass('t_btn_2_active');
		$('.t_btn_3_active').removeClass('t_btn_3_active');
		var div_class = $(this).children('div').attr('class');
		$(this).children('div').addClass(div_class + '_active');
	}); 
	$(document).on('click', '.add_nav > ul > li', function(){
		$(this).addClass('li_active').siblings('li').removeClass('li_active');
	})
});	