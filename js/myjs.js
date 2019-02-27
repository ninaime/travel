/*
* @Author: hp
* @Date:   2018-10-27 10:13:09
* @Last Modified by:   hp
* @Last Modified time: 2018-11-01 19:43:27
*/

//预约按钮
$(function(){
	$("#ticket tr td input").click(function(event) {
		$(this).val("已预约");
		$(this).css({
			"background-color": "#888",
			"cursor": 'auto'
		});
	});

	$(".nav-btn").click(function(event) {
		$(".nav-right").slideToggle(1000);
	});

	$(window).resize(function(){
	    var Width = $(window).width();
	    if(Width>750){
	    	$(".nav-right").css('display', 'block');
	    }else{
	    	$(".nav-right").css('display', 'none');
	    }	    	    
	});


	$(".nav-right ul li").hover(function() {
		$(this).css('background-color', '#999').siblings('li').css('background-color', '#333333');
	}, function() {
		$(this).css('background-color', '#333333')
	});

})




