// JavaScript Document
$(function(){
	$('.iframe').load('yg/yg_index.html',{"radom":Math.random()*Math.random()});
	$('.head > ul > li > a').click(function(){
		$('.iframe').load($(this).attr('data_href'),{"radom":Math.random()*Math.random()});
	});
	function setIfrmae(){
		$('.iframe').css("min-height",$(window).height() - $('.head').height());
	}
	setIfrmae();
	$(window).resize(setIfrmae);
});	