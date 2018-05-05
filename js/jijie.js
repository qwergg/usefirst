$(function(){
	//加载界面
	$('#headj').load('header.html');
	$('#footerj').load('footer.html');
	
	$('.jijie_img li').mouseenter(function(){
		$(this).stop().animate({"width":1000}).siblings().stop().animate({"width":70});
		$(this).find('p').fadeIn();
	});
 $('.jijie_img li').mouseleave(function(){
	$('.jijie_img li').stop().animate({"width":300});
	$(this).find('p').fadeOut();
});

})