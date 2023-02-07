// 获取切歌与暂停的按钮图标的id
var playPusebtn = document.getElementById('bon');
var playLeft = document.getElementById('left');
var playRight = document.getElementById('right');
//获取进度条有关的id
var sArea = document.getElementById('tiao-total');
var insTime = document.getElementById('ins-time');
var seekBar = document.getElementById('seek-bar');
//获取音量调节有关的id
var soundBar = document.getElementById("seek-sound");
var totalSound = document.getElementById("sound");
var Sound = document.getElementById("soundbon");
//获取音乐封面图片的id
var img = document.getElementById('img1');
var imgright1 = document.getElementById('img2');
var imgright2 = document.getElementById('img4');
var imgleft1 = document.getElementById('img3');
var imgleft2 = document.getElementById('img5');
//获取播放器有关动画的三个id
var jpg1 = document.getElementById('pic1');
var jpg2 = document.getElementById('pic2');
var jpg3 = document.getElementById('pic3');
// 获取歌名的id
var word = document.getElementById("txt");
//获取目录有关操作的id
var mulu = document.getElementById("mulu");
var songs = document.getElementById("songs");
var ifback = document.getElementById("ifback");
var back = document.getElementById('fanhui');
var fan = document.getElementById("fan");
//储存音频的数组
var musicArr = [
    { musicsrc: "../music/music4/1.mp3" },
    { musicsrc: "../music/music4/2.mp3" },
    { musicsrc: "../music/music4/3.mp3" },
    { musicsrc: "../music/music4/4.mp3" },
    { musicsrc: "../music/music4/5.mp3" },
    { musicsrc: "../music/music4/6.mp3" },
    { musicsrc: "../music/music4/7.mp3" },
    { musicsrc: "../music/music4/8.mp3" },
    { musicsrc: "../music/music4/9.mp3" },
    { musicsrc: "../music/music4/10.mp3" },
    { musicsrc: "../music/music4/11.mp3" },
    { musicsrc: "../music/music4/12.mp3" },
    { musicsrc: "../music/music4/13.mp3" },
    { musicsrc: "../music/music4/14.mp3" },
    { musicsrc: "../music/music4/15.mp3" },
    { musicsrc: "../music/music4/16.mp3" },
    { musicsrc: "../music/music4/17.mp3" },
    { musicsrc: "../music/music4/18.mp3" },
    { musicsrc: "../music/music4/19.mp3" },
    { musicsrc: "../music/music4/20.mp3" },
    { musicsrc: "../music/music4/21.mp3" },
    { musicsrc: "../music/music4/22.mp3" },
    { musicsrc: "../music/music4/23.mp3" },
    { musicsrc: "../music/music4/24.mp3" },
    { musicsrc: "../music/music4/25.mp3" },
    { musicsrc: "../music/music4/26.mp3" },
    { musicsrc: "../music/music4/27.mp3" },
    { musicsrc: "../music/music4/28.mp3" },
    { musicsrc: "../music/music4/29.mp3" },
    { musicsrc: "../music/music4/30.mp3" },
    { musicsrc: "../music/music4/31.mp3" },
    { musicsrc: "../music/music4/32.mp3" },
    { musicsrc: "../music/music4/33.mp3" },
    { musicsrc: "../music/music4/34.mp3" },
    { musicsrc: "../music/music4/35.mp3" },
    { musicsrc: "../music/music4/36.mp3" },
    { musicsrc: "../music/music4/37.mp3" },
    { musicsrc: "../music/music4/38.mp3" },
    { musicsrc: "../music/music4/39.mp3" },
    { musicsrc: "../music/music4/40.mp3" },
    { musicsrc: "../music/music4/41.mp3" },
    { musicsrc: "../music/music4/42.mp3" },
    { musicsrc: "../music/music4/43.mp3" },
    { musicsrc: "../music/music4/44.mp3" },
    { musicsrc: "../music/music4/45.mp3" },
    { musicsrc: "../music/music4/46.mp3" },
    { musicsrc: "../music/music4/47.mp3" },
    { musicsrc: "../music/music4/48.mp3" },
    { musicsrc: "../music/music4/49.mp3" },
    { musicsrc: "../music/music4/50.mp3" },
    { musicsrc: "../music/music4/51.mp3" },
    { musicsrc: "../music/music4/52.mp3" },
    { musicsrc: "../music/music4/53.mp3" },
    { musicsrc: "../music/music4/54.mp3" },
    { musicsrc: "../music/music4/55.mp3" },
    { musicsrc: "../music/music4/56.mp3" },
    { musicsrc: "../music/music4/57.mp3" },
    { musicsrc: "../music/music4/58.mp3" },
    { musicsrc: "../music/music4/59.mp3" },
    { musicsrc: "../music/music4/60.mp3" },
    { musicsrc: "../music/music4/61.mp3" },
    { musicsrc: "../music/music4/62.mp3" },
    { musicsrc: "../music/music4/63.mp3" },
    { musicsrc: "../music/music4/64.mp3" },
    { musicsrc: "../music/music4/65.mp3" },
    { musicsrc: "../music/music4/66.mp3" },
    { musicsrc: "../music/music4/67.mp3" },
    { musicsrc: "../music/music4/68.mp3" },
    { musicsrc: "../music/music4/69.mp3" },
    { musicsrc: "../music/music4/70.mp3" },
    { musicsrc: "../music/music4/71.mp3" },
    { musicsrc: "../music/music4/72.mp3" },
    { musicsrc: "../music/music4/73.mp3" },
    { musicsrc: "../music/music4/74.mp3" }
];
// 储存音乐封面图的数组
var imgArr = [
    { picsrc: "../img/img4/pic/10001.png" },
    { picsrc: "../img/img4/pic/10002.png" },
    { picsrc: "../img/img4/pic/10003.png" },
    { picsrc: "../img/img4/pic/10004.png" },
    { picsrc: "../img/img4/pic/10005.png" },
    { picsrc: "../img/img4/pic/10006.png" },
    { picsrc: "../img/img4/pic/10007.png" },
    { picsrc: "../img/img4/pic/10008.png" },
    { picsrc: "../img/img4/pic/10009.png" },
    { picsrc: "../img/img4/pic/10010.png" },
    { picsrc: "../img/img4/pic/10011.png" },
    { picsrc: "../img/img4/pic/10012.png" },
    { picsrc: "../img/img4/pic/10013.png" },
    { picsrc: "../img/img4/pic/10014.png" },
    { picsrc: "../img/img4/pic/10015.png" },
    { picsrc: "../img/img4/pic/10016.png" },
    { picsrc: "../img/img4/pic/10017.png" },
    { picsrc: "../img/img4/pic/10018.png" },
    { picsrc: "../img/img4/pic/10019.png" },
    { picsrc: "../img/img4/pic/10020.png" },
    { picsrc: "../img/img4/pic/10021.png" },
    { picsrc: "../img/img4/pic/10022.png" },
    { picsrc: "../img/img4/pic/10023.png" },
    { picsrc: "../img/img4/pic/10024.png" },
    { picsrc: "../img/img4/pic/10025.png" },
    { picsrc: "../img/img4/pic/10026.png" },
    { picsrc: "../img/img4/pic/10027.png" },
    { picsrc: "../img/img4/pic/10028.png" },
    { picsrc: "../img/img4/pic/10029.png" },
    { picsrc: "../img/img4/pic/10030.png" },
    { picsrc: "../img/img4/pic/10031.png" },
    { picsrc: "../img/img4/pic/10032.png" },
    { picsrc: "../img/img4/pic/10033.png" },
    { picsrc: "../img/img4/pic/10034.png" },
    { picsrc: "../img/img4/pic/10035.png" },
    { picsrc: "../img/img4/pic/10036.png" },
    { picsrc: "../img/img4/pic/10037.png" },
    { picsrc: "../img/img4/pic/10038.png" },
    { picsrc: "../img/img4/pic/10039.png" },
    { picsrc: "../img/img4/pic/10040.png" },
    { picsrc: "../img/img4/pic/10041.png" },
    { picsrc: "../img/img4/pic/10042.png" },
    { picsrc: "../img/img4/pic/10043.png" },
    { picsrc: "../img/img4/pic/10044.png" },
    { picsrc: "../img/img4/pic/10045.png" },
    { picsrc: "../img/img4/pic/10046.png" },
    { picsrc: "../img/img4/pic/10047.png" },
    { picsrc: "../img/img4/pic/10048.png" },
    { picsrc: "../img/img4/pic/10049.png" },
    { picsrc: "../img/img4/pic/10050.png" },
    { picsrc: "../img/img4/pic/10051.png" },
    { picsrc: "../img/img4/pic/10052.png" },
    { picsrc: "../img/img4/pic/10053.png" },
    { picsrc: "../img/img4/pic/10054.png" },
    { picsrc: "../img/img4/pic/10055.png" },
    { picsrc: "../img/img4/pic/10056.png" },
    { picsrc: "../img/img4/pic/10057.png" },
    { picsrc: "../img/img4/pic/10058.png" },
    { picsrc: "../img/img4/pic/10059.png" },
    { picsrc: "../img/img4/pic/10060.png" },
    { picsrc: "../img/img4/pic/10061.png" },
    { picsrc: "../img/img4/pic/10062.png" },
    { picsrc: "../img/img4/pic/10063.png" },
    { picsrc: "../img/img4/pic/10064.png" },
    { picsrc: "../img/img4/pic/10065.png" },
    { picsrc: "../img/img4/pic/10066.png" },
    { picsrc: "../img/img4/pic/10067.png" },
    { picsrc: "../img/img4/pic/10068.png" },
    { picsrc: "../img/img4/pic/10069.png" },
    { picsrc: "../img/img4/pic/10070.png" },
    { picsrc: "../img/img4/pic/10071.png" },
    { picsrc: "../img/img4/pic/10072.png" },
    { picsrc: "../img/img4/pic/10073.png" },
    { picsrc: "../img/img4/pic/10074.png" }
]
// 储存歌名的数组
var txtArr = [

    { word: "深海火种" },
    { word: "星之原野" },
    { word: "神所留下的" },
    { word: "导师与学生" },
    { word: "终末的花火" },
    { word: "奇异恩典" },
    { word: "期冀者的飘零" },
    { word: "飘零者的期冀" },
    { word: "门扉之外" },
    { word: "微光" },
    { word: "废土机神" },
    { word: "相拥之时" },
    { word: "虚妄之月" },
    { word: "琉璃之鸟" },
    { word: "怪物的心脏" },
    { word: "幻彩之扉" },
    { word: "箱庭风暴" },
    { word: "毁灭大地" },
    { word: "牺牲的意义" },
    { word: "深蓝之星" },
    { word: "黑暗中的身影" },
    { word: "两个人的旅途" },
    { word: "世界的心跳" },
    { word: "被抛下的人" },
    { word: "寂静之雨" },
    { word: "始终" },
    { word: "两个人的城市" },
    { word: "记忆的种子" },
    { word: "纯白的救济" },
    { word: "漆黑的终音" },
    { word: "折翼残响" },
    { word: "庇护之树" },
    { word: "神的嘲讽" },
    { word: "黄昏的祈祷者" },
    { word: "黎明的见证者" },
    { word: "守夜人" },
    { word: "子夜的毁灭者" },
    { word: "没有你的世界" },
    { word: "紧紧相握的双手" },
    { word: "觐见神明的人" },
    { word: "轮回" },
    { word: "业火" },
    { word: "白夜之笼" },
    { word: "神明坠落" },
    { word: "神之一闪" },
    { word: "破碎之日" },
    { word: "来自地狱的天使" },
    { word: "未竟之愿" },
    { word: "告罪" },
    { word: "心之空穴" },
    { word: "与你并肩" },
    { word: "希望已死" },
    { word: "永不磨灭的光芒" },
    { word: "星辰坠落之时" },
    { word: "最后的战役" },
    { word: "鏖战" },
    { word: "最后一杯酒" },
    { word: "复还" },
    { word: "无尽寂地" },
    { word: "夜色二重奏" },
    { word: "死灵之穹" },
    { word: "救赎止符" },
    { word: "如愿以偿" },
    { word: "祝祷远星" },
    { word: "猩红馈赠" },
    { word: "雪降之时" },
    { word: "白律穹音" },
    { word: "第一位牺牲者" },
    { word: "携手同行" },
    { word: "异数0313" },
    { word: "永不落幕的毕业礼" },
    { word: "永世的孤灯" },
    { word: "终结与重启" },
    { word: "重生" }
]
//定义一个技术用的count表示现在，countl1表示左一，countr1表示右一，用于图片操作
var count = 0;
var countr1 = 1;
var countr2 = 2;
var countl1 = imgArr.length - 1;
var countl2 = imgArr.length - 2;
//音量的计数，判断是否禁音，与记录禁音前音量的变量temp
var soundCount = 0;
var tempSound = 0;
// 初始化函数
function init() {
    //新建一个音频对象，获取第一首的地址
    audio = new Audio();
    audio.src = musicArr[0].musicsrc;
    //通过监听歌曲播放时间，来实时改变进度条长度
    audio.ontimeupdate = function () {
        // 获取现在播放时间与总时长
        var time1 = audio.currentTime;
        var time2 = audio.duration;
        // 转换为分秒表示
        var current_Time = timeFormat(audio.currentTime);
        var time_All = timeFormat(audio.duration);
        // 将转换后的时间返回给网页
        document.getElementById('ins-time').innerText = current_Time;
        document.getElementById('alltime').innerText = time_All;
        //console.log(time_All);
        //var x=audio.volume;
        //audio.volume=1;
        //console.log(audio.volume);
        //改变进度条长度与已播放时间的位置
        seekBar.style.width = Math.floor(time1 / time2 * 800) + "px";
        insTime.style.left = Math.floor(time1 / time2 * 800 - 30) + "px";
        // 通过NaN不等于自身的特点，确保歌曲切歌时缓存时，网页不显示出0NaN
        if (time1 != time1 || time2 != time2) {
            document.getElementById('ins-time').innerText = "00:00";
            document.getElementById('alltime').innerText = "00:00";
        }
        // if (time1 == time2&&time1!=0) {
        //     next();
        // }
        // console.log(time2);
    }
     /// 当一首歌结束时，自动播放下一首
    audio.addEventListener("ended",function(){
        next();

     })
     audio.addEventListener('loadstart', function () {
        console.log("客户端开始请求数据");
        document.getElementById('ins-time').innerText = "00:00";
        document.getElementById('alltime').innerText = "00:00";
        playPusebtn.src = "../img/img4/back/10028.png";
        jpg1.className = "pic1";
        jpg2.className = "pic8stic";
        jpg3.className = "pic6stic";
    }, false);
    audio.addEventListener('progress', function () {
        console.log("客户端正在请求数据");
        document.getElementById('ins-time').innerText = "00:00";
        document.getElementById('alltime').innerText = "00:00";
        playPusebtn.src = "../img/img4/back/10028.png";
        jpg1.className = "pic1";
        jpg2.className = "pic8stic";
        jpg3.className = "pic6stic";
    }, false);
    // audio.addEventListener('error', function () {
    //     console.log("请求数据时遇到错误 ");
    // }, false);
    // audio.addEventListener('stalled', function () {
    //     console.log("网速失速 ");
    // }, false);
    // audio.addEventListener('play', function () {
    //     console.log("play()和autoplay开始播放时触发 ");
        
    //     playPusebtn.src = "../img/img4/back/10027.png";
    //     jpg1.className = "pic1active";
    //     jpg2.className = "pic8active";
    //     jpg3.className = "pic6_1";
        
    // }, false);
    // audio.addEventListener('pause', function () {
    //     console.log("暂停触发");
    // }, false);
    // audio.addEventListener('loadedmetadata', function () {
    //     console.log("当指定的音频/视频的元数据已加载时");


    // }, false);
    // audio.addEventListener('loadeddata', function () {
    //     console.log("当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时，会发生 loadeddata 事件。");
    // }, false);
    // audio.addEventListener('waiting', function () {
    //     console.log("等待数据，并非错误");
    // }, false);
    audio.addEventListener('playing', function () {
        console.log("正在播放时触发。");
        playPusebtn.src = "../img/img4/back/10027.png";
        jpg1.className = "pic1active";
        jpg2.className = "pic8active";
        jpg3.className = "pic6_1";
    }, false);
    // audio.addEventListener('canplay', function () {
    //     console.log("可以播放，但中途可能因为加载而暂停");
    // }, false);
    // audio.addEventListener('canplaythrough', function () {
    //     console.log("可以播放，歌曲全部加载完毕");
    // }, false);
    // audio.addEventListener('seeking', function () {
    //     console.log("当用户开始移动/跳跃到音频/视频中的新位置时");
    // }, false);
    // audio.addEventListener('seeked', function () {
    //     console.log("当用户已移动/跳跃到音频/视频中的新位置时");
    // }, false);
    // audio.addEventListener('timeupdate', function () {
    //     console.log("播放时间改变");
    // }, false);
    // audio.addEventListener('ended', function () {
    //     console.log("播放结束");
    // }, false);
    // audio.addEventListener('ratechange', function () {
    //     console.log("播放速率改变");
    // }, false);
    // audio.addEventListener('durationchange', function () {
    //     console.log("资源长度改变");
    // }, false);
    // audio.addEventListener('volumechange', function () {
    //     console.log("音量改变");
    // }, false);
    //console.log(tempSound);
    //点击音量按键后，计数加1当计数为偶数时，音乐有声音，通过记录的之前的长度，确保禁音前后音量不变，计数为奇数时，禁音，音量条归零
    Sound.onclick = function () {
        soundCount++;
        if (soundCount % 2 == 0) {
            audio.volume = tempSound;
            Sound.src = "../img/img4/back/sound.png";
            soundBar.style.width = 150 * tempSound + "px";
        }
        else {
            tempSound = audio.volume;
            audio.volume = 0;
            Sound.src = "../img/img4/back/nosound.png";
            soundBar.style.width = 0;
        }
        console.log(tempSound);
    }
    //向前切歌，更改歌名与音乐封面
    playLeft.onclick = function () {
        playPusebtn.src = "../img/img4/back/10027.png";
        jpg1.className = "pic1active";
        jpg2.className = "pic8active";
        jpg3.className = "pic6_1";
        count--;
        if (count < 0) {
            count = imgArr.length - 1;
        }
        audio.src = musicArr[count].musicsrc;
        word.innerText = txtArr[count].word;
        audio.play();
        countl1--;
        countr1--;
        countl2--;
        countr2--;
        if (countl1 < 0) {
            countl1 = imgArr.length - 1;
        }
        if (countr1 < 0) {
            countr1 = imgArr.length - 1;
        }
        if (countl2 < 0) {
            countl2 = imgArr.length - 1;
        }
        if (countr2 < 0) {
            countr2 = imgArr.length - 1;
        }
        img.src = imgArr[count].picsrc;
        imgleft1.src = imgArr[countl1].picsrc;
        imgright1.src = imgArr[countr1].picsrc;
        imgleft2.src = imgArr[countl2].picsrc;
        imgright2.src = imgArr[countr2].picsrc;
    }
        //切下一首歌
        playRight.onclick= function(){
            next();
        }
        function next () {
        playPusebtn.src = "../img/img4/back/10027.png";
        jpg1.className = "pic1active";
        jpg2.className = "pic8active";
        jpg3.className = "pic6_1";
        count++;
        if (count > imgArr.length - 1) {
            count = 0;
        }
        word.innerText = txtArr[count].word;
        audio.src = musicArr[count].musicsrc;
        audio.play();
        countl1++;
        countr1++;
        countl2++;
        countr2++;
        if (countl1 > imgArr.length - 1) {
            countl1 = 0;
        }
        if (countr1 > imgArr.length - 1) {
            countr1 = 0;
        }
        if (countl2 > imgArr.length - 1) {
            countl2 = 0;
        }
        if (countr1 > imgArr.length - 1) {
            countr2 = 0;
        }
        img.src = imgArr[count].picsrc;
        imgleft1.src = imgArr[countl1].picsrc;
        imgright1.src = imgArr[countr1].picsrc;
        imgleft2.src = imgArr[countl2].picsrc;
        imgright2.src = imgArr[countr2].picsrc;
    }
    //点击切换播放状态，同时改变背景动画
    playPusebtn.onclick = function () {
        if (audio.paused) {
            playPusebtn.src = "../img/img4/back/10027.png";
            jpg1.className = "pic1active";
            jpg2.className = "pic8active";
            jpg3.className = "pic6_1";
            audio.play();
        }
        else {
            playPusebtn.src = "../img/img4/back/10028.png";
            jpg1.className = "pic1";
            jpg2.className = "pic8stic";
            jpg3.className = "pic6stic";
            audio.pause();
        }
    }
    // 点击目录后，目录有关的部分出现，不再隐藏
    mulu.onclick = function () {
        songs.className = "if";
        ifback.className = "otherback";
        fan.className = "fanhui";
    }
    //点击返回后，目录有关的部分隐藏
    back.onclick = function () {
        songs.className = "yincang";
        ifback.className = "yincang";
        fan.className = "yincang";
    }
    // 通过监听鼠标的点击事件获取鼠标的位置
    document.addEventListener("click", function (e) {
        console.log(e.pageX);
         console.log(e.pageY);
        //var time1=audio.currentTime;
        //通过鼠标点击时的坐标，如果点击到音量或者进度条，就根据点击位置改变音量与进度的长度，同时改变音量与音频进度
        var timeall = audio.duration;
        //1420 1570
        var s = 0;
        var posx = parseInt(e.pageX);
        var j, i = 0;
        if (posx > 500*0.789&& posx < 1300*0.789) {
            j = posx - 500*0.789;
        }
        i = j - 30*0.789;
        if (posx > 1420*0.789 && posx < 1570*0.789) {
            s = posx - 1420*0.789;
        }
        if (e.pageY >= 938*0.789 && e.pageY <= 951*0.789 && posx > 1420*0.789 && posx < 1570*0.789) {
            audio.volume = s/150/0.789;
            soundBar.style.width = s/0.789+"px";
            //console.log(audio.volume);
        }
        //console.log(time1);
    
        if (e.pageY >= 938*0.789 && e.pageY <= 952*0.789 && posx > 500*0.789 && posx < 1300*0.789) {
            //  console.log(j);
            audio.currentTime = Math.floor(timeall * j / 800/0.789);
            //根据体验，如果暂停的时候拖进度条，改变之后仍旧是暂停，拖动前是播放，拖动后是播放，让人可以随时从某个位置开始听
            if(audio.paused)
            {
                audio.pause();
                playPusebtn.src = "../img/img4/back/10028.png";
                jpg1.className = "pic1";
                jpg2.className = "pic8stic";
                jpg3.className = "pic6stic";
            }
            else{
                audio.play();
                playPusebtn.src = "../img/img4/back/10027.png";
                jpg1.className = "pic1active";
                jpg2.className = "pic8active";
                jpg3.className = "pic6_1";
            }

        }
        //通过监听事件，获取目录内子页面的数据
        window.addEventListener('message', function (messageEvent) {
            //子页面发送的数据
            var data = messageEvent.data;
            //console.log('message from child:', data);
            //使计数等于目录发送回来的值
            count = Number(data) - 1;
            countl1 = count - 1;
            countl2 = count - 2;
            countr1 = count + 1;
            countr2 = count + 2;
            audio.src = musicArr[count].musicsrc;
            //因为传送消息使异步事件，这里控制台会报错，根据错误查了之后找到的解决方法，但是还没特别理解
            audio.load()
            var playPromise = audio.play()
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audio.play()
                }).catch(() => {

                })
            }
            word.innerText = txtArr[count].word;
            img.src = imgArr[count].picsrc;
            if (countl1 < 0) {
                countl1 = imgArr.length - 1;
            }
            if (countl2 < 0) {
                countl2 = imgArr.length - 1;
            }
            if (countr1 > imgArr.length - 1) {
                countr1 = 0;
            }
            if (countr2 > imgArr.length - 1) {
                countr2 = 0;
            }
            imgleft1.src = imgArr[countl1].picsrc;
            imgright1.src = imgArr[countr1].picsrc;
            imgleft2.src = imgArr[countl2].picsrc;
            imgright2.src = imgArr[countr2].picsrc;
            playPusebtn.src = "../img/img4/back/10027.png";
            jpg1.className = "pic1active";
            jpg2.className = "pic8active";
            jpg3.className = "pic6_1";
        }, false);
    })
}
// 通过计算获取分数与秒数。并给个位的数字补零
function timeFormat(number) {
    var minute = parseInt(number / 60);
    var second = parseInt(number % 60);
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;
    return minute + ":" + second;
}
init();