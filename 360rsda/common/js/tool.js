// JavaScript Document
$.fn.extend({
	"createMenu":function(jsonNode){
		var jsonNode = jsonNode;
		var htmlStr = '';
		function recur(nodeArr){
			htmlStr = htmlStr + '<ul>';
			for(var i = 0 ; i < nodeArr.length ;i++){
				var icon = '';
				var aTagPrev = '';
				var aTagAfter = '';
				if(nodeArr[i]){
					if(nodeArr[i].children){
					
					}else{
						icon ='<div class="icon_menu"></div>';
					}
				}
				
				if(nodeArr[i]){
					if(nodeArr[i].url){
						if(nodeArr[i].target){
							aTagPrev = '<a href="###" target="'+ nodeArr[i].target+'">';
						}else{
							aTagPrev = '<a href="###">';
						}
						
						aTagAfter="</a>"
					}
				}
				
				
				
				if(nodeArr[i]){
					htmlStr = htmlStr + '<li><div class="menuTag">' + icon  + aTagPrev +  nodeArr[i].name + aTagAfter + '</div>';
					if(nodeArr[i].children){
						recur(nodeArr[i].children);
					}
				}
				
				
			}
			htmlStr = htmlStr + '</li></ul>';
		}
		recur(jsonNode);
		$(this).append(htmlStr);
		
		//点击事件 绑定
		$('body').on('click','.menuTag',function(){
			var _this = $(this);
			if($(this).next('ul').length>0){
				$(this).next('ul').slideToggle(10,function(){

				});
			}else{
					if(_this.children('.icon_menu').hasClass('on')){
						_this.children('.icon_menu').removeClass('on');
						
					}else{
						_this.children('.icon_menu').removeClass('on');
						_this.children('.icon_menu').addClass('on');
					}
			}
		})
		//点击事件 绑定
		$('body').on('click','.menuTag a',function(){
			$('.menuTag a').removeClass('a2_a_01_color');
			$(this).addClass('a2_a_01_color');
		})
		
		$('body').on('click','.menuTag a',function(event){
			 event.stopPropagation();
		})
	}
});