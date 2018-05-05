$(function() {
	//加载页面
	$('#headcity').load('header.html');
	$('#footercity').load('footer.html');
	var CitywxIdx = 0;
	var CitywxIdx01 = 0;
	var CitywxIdx02 = 0;
	var CitywxIdx03 = 0;
	var CitywxIdx04 = 0;
	//因为要是五个轮播，因此封装轮播方法，传参数调用相应的轮播
	function Llb(yl, yr, xidx) {
		//left
		$(yl).click(function() {
			var $citywxone = $(this).parent().siblings('.citywx_body_one_lunbo');
			if(xidx >= 2) {
				xidx = 0;
				$citywxone.css('left', 0);
			}
			xidx++;
			$citywxone.stop().animate({
				'left': -xidx * 500
			}, 700);
			$(this).parent().parent().siblings('.citywx_body_one_fonts_right').children('.citywx_body_one_fonts').eq(xidx).stop().fadeIn(700).siblings('.citywx_body_one_fonts').stop().fadeOut(500);
		});
		//	right
		$(yr).click(function() {
			var $citywxtwo = $(this).parent().siblings('.citywx_body_one_lunbo');
			if(xidx <= 0) {
				xidx = 2;
				$citywxtwo.css('left', -xidx * 500);
			}
			xidx--;
			$citywxtwo.stop().animate({
				'left': -xidx * 500
			}, 700);
			$(this).parent().parent().siblings('.citywx_body_one_fonts_right').children('.citywx_body_one_fonts').eq(xidx).stop().fadeIn(700).siblings('.citywx_body_one_fonts').stop().fadeOut(500);
		});
	}
		//封装加载内容函数：把cityDate数据调用到模板中在html中显示；
	function Citywxjz(x, q) {
		var ys;
		var list = x;//获取传递的参数 
		for(var i = 0; i < list.length; i++){
		ys = $('.mban').html().replace('$img01', list[i].imgone).replace('$img02', list[i].imgtwo).replace('$img03', list[i].imgone).replace('$wz01', list[i].fontone).replace('$wz02', list[i].fonttwo).replace('$wz03', list[i].fontthree).replace('$wz04', list[i].fontfour).replace('$wz05', list[i].fontone).replace('$wz06', list[i].fonttwo).replace('$left', list[i].left).replace('$right', list[i].right);
		$(q).append(ys);
		}
	}
	//调用封装函数
	Citywxjz(cityDate.date01, '.citywx_body_one');
	Citywxjz(cityDate.date02, '.citywx_body_two');
	Citywxjz(cityDate.date03, '.citywx_body_three');
	Citywxjz(cityDate.date04, '.citywx_body_four');
	Citywxjz(cityDate.date05, '.citywx_body_five');
	//调用封装的轮播函数
	Llb('.citywx_body_one .citywx_body_left', '.citywx_body_one .citywx_body_right', CitywxIdx);
	Llb('.citywx_body_two .citywx_body_left', '.citywx_body_two .citywx_body_right', CitywxIdx01);
	Llb('.citywx_body_three .citywx_body_left', '.citywx_body_three .citywx_body_right', CitywxIdx02);
	Llb('.citywx_body_four .citywx_body_left', '.citywx_body_four .citywx_body_right', CitywxIdx03);
	Llb('.citywx_body_five .citywx_body_left', '.citywx_body_five .citywx_body_right', CitywxIdx04);
});