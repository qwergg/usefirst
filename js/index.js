$(function(){
	//加载界面
	$('#headerx').load('header.html');
	$('#footer').load('footer.html');
	var $img=$('.index_banner li');
	for(var i=0;i<$img.length;i++){
		$img.eq(i).css('background','url(img/img_header_bg0'+(i+1)+'.jpg)no-repeat center')
	}
    var Oindex=0;  //定义轮播索引值
    var timer;//定义timer启动循环用
    timer=setInterval(lunbo,1800);
     //鼠标移动到banner图上清除自动轮播
     $('.index_banner_wrap').mouseenter(function(){
     	clearInterval(timer);
     });
     //鼠标离开到banner图继续轮播
     $('.index_banner_wrap').mouseleave(function(){
     	timer=setInterval(lunbo,1800);
     });
     //小圆点的点击事件；
     $('.index_dian li').click(function(){
     	$(this).css('background-color','burlywood').siblings().css('background-color','beige');
     	var idx=$(this).index();
     	$img.eq(idx).stop().fadeIn(900).siblings().stop().fadeOut(500);
     })
    //自动轮播
    function lunbo(){
    	Oindex++;
    	Oindex=Oindex>2?0:Oindex;
    	$img.eq(Oindex).stop().fadeIn(900).siblings().stop().fadeOut(500);
        $('.index_dian li').eq(Oindex).css('background-color','burlywood').siblings().css('background-color','beige');
    }
    //右击切换
    $('.idx_btn_right').click(function(){
    lunbo();
    });
    //左点击切换
    $('.idx_btn_left').click(function(){
    	Oindex--;
    	Oindex=Oindex<0?2:Oindex;
    	$('.index_dian li').eq(Oindex).css('background-color','burlywood').siblings().css('background-color','beige');
    	$img.eq(Oindex).stop().fadeIn(900).siblings().stop().fadeOut(500);
    })
    //鼠标移动到banner图上面左右按钮显示，离开隐藏
    $('.index_banner_wrap').mouseenter(function(){
    	$('.idx_btn_left,.idx_btn_right').css('display','block');
    }).mouseleave(function(){
    	$('.idx_btn_left,.idx_btn_right').css('display','none');
    });    
       
   var Listidx;
   Ljiazai();
   //封装函数用来加载单个相同界面
   function Ljiazai(){
   	if(!Listidx){Listidx=0;}  	
   	var getdate=listDate['listDate0'+Listidx];
   	var list=getdate.date.list;
   	var yuansu; 
   	for(var i=0;i<list.length;i++){   			
   		yuansu=$('.moban00').html().replace('$title',list[i].title).replace('$wenzhang',list[i].fonts).replace('$bg',list[i].img);
   	    $('.index_body_kuangjia').append(yuansu);  	   	
   	}  	
   	Listidx++; 	
   	if(Listidx>=2){
// 		$('.index_body_jiantou li').eq(0).css('opacity','0');
   		$('.index_body_jiantou li').eq(1).html('没有更多了');
   	}
   } 
     
     //查看更多 热门推荐下面
    $('.index_body_jiantou li').eq(1).mouseenter(function(){
    	$(this).css('cursor','pointer');
    }).click(function(){
    	if(Listidx<2){
    		Ljiazai()
    	}
    });   
    //单个数据界面的文字显示与淡出
    //因为要执行鼠标移动事件一次要给它们父元素注册事件 效果才会自动委托下去
    $('.index_body_kuangjia').on('mouseenter','.index_moban',function(){
    	$(this).find('.index_moban_wenzhang').stop().fadeIn(1000);
    }).on('mouseleave','.index_moban',function(){
    	$(this).find('.index_moban_wenzhang').stop().fadeOut(300);
    });;
//  on(事件,元素,data,fn)统一了所有注册事件
//  delegate(元素,事件,fn)注册事件
//  $('.index_body_kuangjia').delegate('.index_moban','mouseenter',function(){
//  	$(this).find('.index_moban_wenzhang').stop().fadeIn(1000);
//  }).delegate('.index_moban','mouseleave',function(){
//  	$(this).find('.index_moban_wenzhang').stop().fadeOut(300);
//  });;  
var loadjz;
loadjz();
function loadjz(){
	if(!loadjz){loadjz=0;}
	var getjz=listsj.listsj00.list;
	var jzyuansu;
	for(var i=0;i<getjz.length;i++){
		jzyuansu=$('.moban01').html().replace('$bg',getjz[i].img).replace('$title',getjz[i].title);
		$('.index_xuanzekuanjia').append(jzyuansu);
	}
}
$('.index_index_city').mouseenter(function(){
	$('.index_index_city button').css('display','block');
}).mouseleave(function(){
	$('.index_index_city button').css('display','none');
})
//city介绍
var $i=0;
var arrcity=['city_one','city_two','city_three','city_four','city_five'];
var arrname=['芬兰:拉普兰','重庆洪崖洞','广州塔','芬兰群岛','芬兰:湖区']
$('.index_city_leftbtn').click(function(){
   
	$i--;
	$i=$i<0?4:$i;
	 $('.cityname').html(arrname[$i]);
	var first=arrcity.shift();
	arrcity.push(first);
	$('.index_city_img img').each(function(i,e){
		e.className=arrcity[i];
		
	});
});
$('.index_city_rightbtn').click(function(){
	$i++;
	$i=$i>4?0:$i;
	 $('.cityname').html(arrname[$i]);
	var last=arrcity.pop();
	arrcity.unshift(last);
	$('.index_city_img img').each(function(i,e){
	e.className=arrcity[i];
	
	
	});
});
});