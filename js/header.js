$(function(){
      var Hhash=window.location.hash.substr(1);
      $('.header_nav').children('li').eq(Hhash).find('a').addClass('header_nav_color').siblings().removeClass('header_nav_color')
	    //保证点击时子元素不因继承父元素属性而改变颜色
	    $('.header_nav_menu li').find('a').addClass('ppq');
	   $('.header_nav li').hover(function(){
		$(this).find('.header_nav_menu').stop().slideDown(600);
	},function(){
		$(this).find('.header_nav_menu').stop().slideUp(400);
	});
	function Xs(){
		$('body').css('display','block');
	}
	setTimeout(Xs,300);
})
