// 获取菜单与其内容的id并建立对象
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var txt1 = document.getElementById("word1");
var txt2 = document.getElementById("word2");
var txt3 = document.getElementById("word3");
// 获取两组图片的id与按钮的标签名字
var pic = document.getElementById('pic');
var pic1 = document.getElementById('pic1');
var btn = document.getElementsByTagName('ai');
//获取音频的id
var voice = document.getElementById("voice");
// 获取视频的id
var video = document.getElementById("video");
//获取边栏的id
var side = document.getElementById("side");
var s1 = document.getElementById("loctd1");
var s2 = document.getElementById("loctd2");
var s3 = document.getElementById("loctd3");
var s4 = document.getElementById("loctd4");
var s5 = document.getElementById("loctd5");
var s6 = document.getElementById("loctd6");




//定义一个数组用来存放第一组图片
var arr = [
	{ picSrc: 'img//img1/00.png' },
	{ picSrc: 'img//img1/01.png' },
	{ picSrc: 'img//img1/02.png' },
	{ picSrc: 'img//img1/03.png' },
	{ picSrc: 'img//img1/z.png' },
	{ picSrc: 'img//img1/z1.png' },
	{ picSrc: 'img//img1/z2.png' },
	{ picSrc: 'img//img1/z3.png' },
	{ picSrc: 'img//img1/z4.png' },
	{ picSrc: 'img//img1/z5.png' },
	{ picSrc: 'img//img1/z6.png' },
	{ picSrc: 'img//img1/z7.png' },
	{ picSrc: 'img//img1/z8.png' },
	{ picSrc: 'img//img1/z9.png' },
	{ picSrc: 'img//img1/z10.png' },
	{ picSrc: 'img//img1/z11.png' },
	{ picSrc: 'img//img1/z12.png' },
	{ picSrc: 'img//img1/z13.png' },
	{ picSrc: 'img//img1/z14.png' },
	{ picSrc: 'img//img1/z15.png' },
	{ picSrc: 'img//img1/z16.png' },
	{ picSrc: 'img//img1/z17.png' },
	{ picSrc: 'img//img1/z18.png' },
	{ picSrc: 'img//img1/z19.png' },
	{ picSrc: 'img//img1/z20.png' },
	{ picSrc: 'img//img1/z21.png' },
	{ picSrc: 'img//img1/z22.png' },
	{ picSrc: 'img//img1/z24.png' },
	{ picSrc: 'img//img1/z25.png' },
	{ picSrc: 'img//img1/z26.png' },
	{ picSrc: 'img//img1/z27.png' },
	{ picSrc: 'img//img1/z28.png' },
	{ picSrc: 'img//img1/z29.png' },
	{ picSrc: 'img//img1/z30.png' }

];
var arr1 = [
	{ pic1Src: 'img//img1/00_1.png' },
	{ pic1Src: 'img//img1/01_1.png' },
	{ pic1Src: 'img//img1/02_1.png' },
	{ pic1Src: 'img//img1/03_1.png' },
	{ pic1Src: 'img//img1/z0.png' },
	{ pic1Src: 'img//img1/z01.png' },
	{ pic1Src: 'img//img1/z02.png' },
	{ pic1Src: 'img//img1/z03.png' },
	{ pic1Src: 'img//img1/z04.png' },
	{ pic1Src: 'img//img1/z05.png' },
	{ pic1Src: 'img//img1/z06.png' },
	{ pic1Src: 'img//img1/z07.png' },
	{ pic1Src: 'img//img1/z08.png' },
	{ pic1Src: 'img//img1/z09.png' },
	{ pic1Src: 'img//img1/z010.png' },
	{ pic1Src: 'img//img1/z011.png' },
	{ pic1Src: 'img//img1/z012.png' },
	{ pic1Src: 'img//img1/z013.png' },
	{ pic1Src: 'img//img1/z014.png' },
	{ pic1Src: 'img//img1/z015.png' },
	{ pic1Src: 'img//img1/z016.png' },
	{ pic1Src: 'img//img1/z017.png' },
	{ pic1Src: 'img//img1/z018.png' },
	{ pic1Src: 'img//img1/z019.png' },
	{ pic1Src: 'img//img1/z020.png' },
	{ pic1Src: 'img//img1/z021.png' },
	{ pic1Src: 'img//img1/022.png' },
	{ pic1Src: 'img//img1/z024.png' },
	{ pic1Src: 'img//img1/z025.png' },
	{ pic1Src: 'img//img1/z026.png' },
	{ pic1Src: 'img//img1/z027.png' },
	{ pic1Src: 'img//img1/z028.png' },
	{ pic1Src: 'img//img1/z029.png' },
	{ pic1Src: 'img//img1/z030.png' }

];
// 记录点击次数
var count = 0;
var count1 = arr.length - 1;
var count2 = 1;
//左边按钮
btn[0].onclick = function () {
	vre(0);
}
// 右边按钮
btn[1].onclick = function () {
	next(0);
}
// 向前n位移动
function vre(num){
	num=Number(num);
	count=count-num;
	count--;
	//达到最小值还要减少时，使其下标等于数据最大值
	if (count < 0) {

		count = arr.length - 1;
	}
	pic.src = arr[count].picSrc;
	pic1.src = arr1[count].pic1Src;

}
// 向后n位移动
function next(num){
	count=count-num;
	count++;
	// 达到最大值时，再增加就返回数组的第一个元素
	if (count > arr.length - 1) {

		count = 0;
	}
	pic.src = arr[count].picSrc;
	pic1.src = arr1[count].pic1Src;

}
//获取音频以及操作按钮的id
var audio = document.getElementById('music');
var audio2 = document.getElementById('play');
video.onclick = function () {
	if (video.paused) {
		// console.log('stop');
		// 当视频开始时音频暂停
		audio.pause();
		audio2.src = 'img//img4/back/nosound.png';
	}
	else{
		audio.pause();
		audio2.src = 'img//img4/back/nosound.png';
	}
}
function play() {//点击，切换音频状态,同时暂停视频
	if (audio.paused) {
		audio.play();
		video.pause();
		audio2.src = 'img/img1/mu1.gif';
	} else {
		audio.pause();
		video.pause();
		audio2.src = 'img/img4/back/nosound.png';
	}
}
menu1.onclick = function () {//改变对应的className，使点击的内容处于最高层
	txt1.setAttribute('class', 'txt1');
	txt2.setAttribute('class', 'txt2');
	txt3.setAttribute('class', 'txt2');
}
menu2.onclick = function () {
	txt1.setAttribute('class', 'txt2');
	txt2.setAttribute('class', 'txt1');
	txt3.setAttribute('class', 'txt2');
}
menu3.onclick = function () {
	txt1.setAttribute('class', 'txt2');
	txt2.setAttribute('class', 'txt2');
	txt3.setAttribute('class', 'txt1');
}
voice.onclick = function () {
	alert("功能尚未完善，敬请期待");

}
s1.onclick = function () {//通过获取当前页面顶的位置，使导航栏的字颜色改变，确保一直与背景有颜色差
	document.documentElement.scrollTop = 596;
}
s2.onclick = function () {
	document.documentElement.scrollTop = 1260;
}
s3.onclick = function () {
	document.documentElement.scrollTop = 1867;
}
s4.onclick = function () {
	document.documentElement.scrollTop = 3373;
}
s5.onclick = function () {
	document.documentElement.scrollTop = 3956;
}
s6.onclick = function () {
	document.documentElement.scrollTop = 2735;
}
//side.onclick=function(){
//	console.log(document.documentElement.scrollTop);
//	document.documentElement.scrollTop=1000;
//	console.log(document.documentElement.scrollTop);
//}
// document.addEventListener("load",function(e){
// console.log("123124");
// })
//通过获取的位置判断应该使什么颜色
//原本使用的是fixed定位确保导航栏位置不变，现在采用监听顶部位置确保位置不变，因为整体有个transform，会导致fixed失效，因此用js实现
document.addEventListener("scroll", function (e) {
	b = document.documentElement.scrollTop;
	var a=b/0.789;
	console.log(b);
	if(a<4825)
	{side.style.top=a+200+"px";}
	if (a >= 0 && a <= 584) {
		side.className = "side1";
	}
	if (a > 584 && a < 2148) {
		side.className = "side2";
	}
	if (a > 2148 && a < 4082) {
		side.className = "side1";
	}
	if (a > 4032 && a < 4825) {
		side.className = "side2";
	}

})