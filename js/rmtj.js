$(function(){
	//加载界面
	$('#headrm').load('header.html');
	$('#footerrm').load('footer.html');
	var rmtjIdx=window.location.search.substr(1);
//	console.log(rmtjIdx);
	var rmtjList=rmtjDate[rmtjIdx];
	$('.rmtj_img').attr('src',rmtjList.rmtjimg);
	$('.rmtj_content h2').html(rmtjList.rmtjbt);
	$('.rmtj_content p').eq(0).html(rmtjList.rmtjfont01);
	$('.rmtj_content p').eq(1).html(rmtjList.rmtjfont02);
	
})