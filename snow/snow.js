var imgsrc="img/snow.gif";
var ie4=(document.all)?1:0;
var ns6=(document.getElementById&&!document.all)?1:0;
var height=window.document.body.scrollHeight;
if (height<window.document.body.clientHeight) height=window.document.body.clientHeight;
var width=window.document.body.clientWidth;
var col=Math.round(height/25);    //количество снежинок

amp=new Array();
x_pos=new Array();
y_pos=new Array();
stx=new Array();
stepY=new Array();
deltax=new Array();
obj=new Array();

for (i=0; i<col; ++i) {
 amp[i]=Math.random()*19;
 x_pos[i]=Math.random()*(width-amp[i]-29);
 y_pos[i]=Math.random()*height;
 stx[i]=0.03+Math.random()*0.25;
 stepY[i]=2+Math.random();//шаг падения снежиноки вертикаль
 deltax[i]=0;
 if (ns6) {
    document.write("<img id=\"sn"+ i +"\" style=\"position:absolute;" +
    "z-index: "+ i +"; visibility:visible; top:-50px; left:-50px;\"" +
    "src='"+imgsrc+"' border=0>");
 }
 obj[i] = document.getElementById("sn"+i);

}
 
function flake() {
 for (i=0; i<col; ++i) {
    y_pos[i]+=stepY[i];
    if (y_pos[i]>height-49) {
		
        x_pos[i]=Math.random()*(width-amp[i]-29);
        y_pos[i]=0;
    }

    deltax[i]+=stx[i];
    obj[i].style.top=y_pos[i]+"px";
    obj[i].style.left=x_pos[i]+amp[i]*Math.sin(deltax[i])+"px";
	console.log(Math.sin(deltax[i]));
	
 }
setTimeout("flake()", 40);
}
flake();

//--------------
/*
var up = document.querySelector('.up');
console.log(up);
up.addEventListener('click',setUp);


function setUp(){
	document.body.scrollTop= 10;
	console.log('устанавливаю новое значение');
}

setTimeout(function test(){
	var scrollY = window.pageYOffset;
	if(scrollY>150){
		console.log('да запустился'+ scrollY);
		up.style.visibility = 'visible';
	}else if(scrollY<100){
		console.log('шас скрою' +scrollY);
		up.style.visibility = 'hidden';
	}
	
	
	setTimeout(test,2000);
},2000)


console.log(window.screen);
console.log(window.screen.width);
console.log(window.screen.height);
*/

//-----------------


/*


var imgsrc="img/snow.gif";
var ie4=(document.all)?1:0;
var ns6=(document.getElementById&&!document.all)?1:0;
var height=window.document.body.scrollHeight;
if (height<window.document.body.clientHeight) height=window.document.body.clientHeight;
var width=window.document.body.clientWidth;
var col=Math.round(height/25);    //количество снежинок

amp=new Array();
x_pos=new Array();
y_pos=new Array();
stx=new Array();
sty=new Array();
deltax=new Array();
obj=new Array();

for (i=0; i<col; ++i) {
 amp[i]=Math.random()*19;
 x_pos[i]=Math.random()*(width-amp[i]-29);
 y_pos[i]=Math.random()*height;
 stx[i]=0.03+Math.random()*0.25;
 sty[i]=2+Math.random();
 deltax[i]=0;
 if (ie4||ns6) {
    document.write("<img id=\"sn"+ i +"\" style=\"position:absolute;" +"z-index: "+ i +"; visibility:visible; top:-50px; left:-50px;\"" +
    +"src='"+imgsrc+"' border=0>");
 }
 obj[i] = document.getElementById("sn"+i);
}

function flake() {
 for (i=0; i<col; ++i) {
    y_pos[i]+=sty[i];
    if (y_pos[i]>height-49) {
        x_pos[i]=Math.random()*(width-amp[i]-29);
        y_pos[i]=0;
    }
    deltax[i]+=stx[i];
    obj[i].style.top=y_pos[i]+"px";
    obj[i].style.left=x_pos[i]+amp[i]*Math.sin(deltax[i])+"px";
 }
setTimeout("flake()", 40);
}
flake();

8?

/*
var count=50;
var flake=new Array("flake1.gif","flake2.gif","flake3.gif","flake4.gif","flake5.gif")
var Y=new Array();
var X=new Array();
var Speed=new Array();
var Step=new Array();
var Xstep=new Array();



 for (i=0; i<count; i++) {
    Pic="img/" + flake[Math.floor(Math.random()*flake.length)];
    document.write('<img id="snow" src="'+Pic+'" style="position:absolute;">');
 }

Height=(document.layers)?window.innerHeight:window.document.body.clientHeight;
Width=(document.layers)?window.innerWidth:window.document.body.clientWidth;
for (i=0; i<count; i++){
 Y[i]=Math.round(Math.random()*Height);
 X[i]=Math.round(Math.random()*Width)-100;
 Speed[i]=Math.random()*5+2;
 Xstep[i]=0;
 Step[i]=Math.random()*0.1+0.05;
}

function fall(){
var Height=(document.layers)?window.innerHeight:window.document.body.clientHeight;
var Width=(document.layers)?window.innerWidth:window.document.body.clientWidth;
var hscroll=(document.layers)?window.pageYOffset:document.body.scrollTop;
var wscroll=(document.layers)?window.pageXOffset:document.body.scrollLeft;
for (i=0; i<count; i++) {
 sy=Speed[i]*Math.sin(Math.PI/2);
 sx=Speed[i]*Math.cos(Xstep[i]);

 if ( X[i]+sx>Width-99){ X[i]-=sx; }

 X[i]+=sx;
 Y[i]+=sy;

 if (Y[i]>Height-60) {
    Y[i]=0;
    X[i]=Math.round(Math.random()*Width)-99;
    Speed[i]=Math.random()*5+2;
 }

 snow[i].style.pixelLeft=X[i]+wscroll;  snow[i].style.pixelTop=Y[i]+hscroll; 
 Xstep[i]+=Step[i];
}
setTimeout("fall()", 20);
}
fall();
*/