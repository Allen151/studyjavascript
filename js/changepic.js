var pic = 1 ;//这个变量要定义为全局变量
function autoChangePic(){//自动改变图片的方法
	if(pic < 8){//改变图片编号
		pic ++ ;
	}else{
		pic = 1 ;
	}
	var picObj = document.getElementById("myImg");//取得图片的对象
	picObj.src = "image/pic-"+pic+".jpg" ;
	setTimeout(autoChangePic,2000);
}
function handChangePic(x){//手动改变图片，接收按键的内容，指定哪一张图片。
	var picObj = document.getElementById("myImg");//取得图片的对象
	picObj.src = "image/pic-"+x+".jpg" ;		//改变对象的属性来改变图片
}
function discernBut(but){//识别是哪个按键后
	var butObj = document.getElementById(but);//得到传递的按键的对象
	handChangePic(butObj.innerHTML);//用对象的编号去取图片
}
window.onload = function(){//动态绑定事件
	autoChangePic();//打开网页图片就自动切换
	document.getElementById('but1').addEventListener("click",function(){
		discernBut("but1");
	},"false");//点击but1就调用识别按键方法，并告诉方法是哪个按键

	document.getElementById('but2').addEventListener("click",function(){
		discernBut("but2");
	},"false");

	document.getElementById('but3').addEventListener("click",function(){
		discernBut("but3");
	},"false");

	document.getElementById('but4').addEventListener("click",function(){
		discernBut("but4");
	},"false");

	document.getElementById('but5').addEventListener("click",function(){
		discernBut("but5");
	},"false");

	document.getElementById('but6').addEventListener("click",function(){
		discernBut("but6");
	},"false");

	document.getElementById('but7').addEventListener("click",function(){
		discernBut("but7");
	},"false");

	document.getElementById('but8').addEventListener("click",function(){
		discernBut("but8");
	},"false");
}