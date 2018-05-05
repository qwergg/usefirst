$(function(){
	$('#headM').load('header.html');
	$('#footerM').load('footer.html');
	Mjz();
	//点击隐藏 显示
	$('.Mudi_img_top_fontfirst').click(function(){
		$('.Mudi_img_top_fontfirst_js').fadeToggle(600);
	});
	$('.Mudi_img_top_fontsecond').click(function(){
		$('.Mudi_img_top_fontsecond_js').fadeToggle(600);
	});
	
	$('.Mudi_img_mid_fontfirst').click(function(){
		$('.Mudi_img_mid_fontfirst_js').fadeToggle(600);
	});
	$('.Mudi_img_mid_fontsecond').click(function(){
		$('.Mudi_img_mid_fontsecond_js').fadeToggle(600);
	});
	
	$('.Mudi_img_bottom_fontfirst').click(function(){
		$('.Mudi_img_bottom_fontfirst_js').fadeToggle(600);
	});
	$('.Mudi_img_bottom_fontsecond').click(function(){
		$('.Mudi_img_bottom_fontsecond_js').fadeToggle(600);
	});
	

function Mjz(){
var Mlist=window.location.search.substr(1);
var Ml=MudiDate[Mlist];
$('.Mudi_wrap_img').attr('src',Ml.imgbg);
$('.Mudi_content h1').html(Ml.place);
$('.Mudi_img_topone').attr('src',Ml.imgt01);
$('.Mudi_img_toptwo').attr('src',Ml.imgt02);
$('.Mudi_img_top_fontfirst').html(Ml.tf);
$('.Mudi_img_top_fontsecond').html(Ml.ts);
$('.Mudi_img_top_fontfirst_js h3').eq(0).html(Ml.tfjs01);
$('.Mudi_img_top_fontfirst_js p').eq(0).html(Ml.tfjs02);
$('.Mudi_img_top_fontfirst_js h3').eq(1).html(Ml.tfjs03);
$('.Mudi_img_top_fontfirst_js p').eq(1).html(Ml.tfjs04);
$('.Mudi_img_top_fontfirst_js p').eq(2).html(Ml.tfjs05);
$('.Mudi_img_top_fontfirst_js p').eq(3).html(Ml.tfjs06);
$('.Mudi_img_top_fontsecond_js h3').html(Ml.tsjs01);
$('.Mudi_img_top_fontsecond_js p').html(Ml.tsjs02);
$('.Mudi_img_midone').attr('src',Ml.imgm01);
$('.Mudi_img_midtwo').attr('src',Ml.imgm02);
$('.Mudi_img_mid_fontfirst').html(Ml.tfmid);
$('.Mudi_img_mid_fontsecond').html(Ml.tsmid);
$('.Mudi_img_mid_fontfirst_js h3').html(Ml.tfmidjs01);
$('.Mudi_img_mid_fontfirst_js p').html(Ml.tfmidjs02);
$('.Mudi_img_mid_fontsecond_js h3').html(Ml.tsmidjs01);
$('.Mudi_img_mid_fontsecond_js p').html(Ml.tsmidjs02);

$('.Mudi_img_bottomone').attr('src',Ml.imgb01);
$('.Mudi_img_bottomtwo').attr('src',Ml.imgb02);
$('.Mudi_img_bottom_fontfirst').html(Ml.tfbottom);
$('.Mudi_img_bottom_fontsecond').html(Ml.tsbottom);
$('.Mudi_img_bottom_fontfirst_js h3').html(Ml.tfbottomjs01);
$('.Mudi_img_bottom_fontfirst_js p').html(Ml.tfbottomjs02);
$('.Mudi_img_bottom_fontsecond_js h3').html(Ml.tsbottomjs01);
$('.Mudi_img_bottom_fontsecond_js p').html(Ml.tsbottomjs02);
}




	
})