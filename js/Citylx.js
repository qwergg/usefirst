$(function(){
	$('#headerx').load('header.html');
	$('#footerx').load('footer.html');
	var $Idximg=$('.City_content_img');
	

$('.qaq').hover(function(){
	var qidx=$(this).index();
	$Idximg.eq(qidx).css({'width':749,'height':300,'border-radius':50});
	$(this).css('opacity',1);
},function(){
	var qidx=$(this).index();
	$Idximg.eq(qidx).css({'width':300,'height':300,'border-radius':300});
	$(this).css('opacity',0);
})
	


    
    
    
});