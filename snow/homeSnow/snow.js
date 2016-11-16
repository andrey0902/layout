var div = document.getElementById('snow');
var css = getComputedStyle(div);
var height = parseInt(css.height);
var width = parseInt(css.width);
//console.log(width +'' + heigth);

var text = '*';
var fontFamily = ['vardana','arial','Times','Georgia','Comic Sans MS'];
var color = ['#99b5ff','#097cf7','#f7f309','#3dce5f','#3dbbce','#ce3d3d','#3261ad','#3261ad'];


var count =50;
var snowSizeMax = 40;
var snowSizeMin =10;
var snow =[];
var argSin=[];
var sin0 = [];
var steep =0.6;
var leftRight =[];
var posY=[];
var posX=[];

for (let i =0; i<=count;i++){
	div.innerHTML+= `<span id='s${i}' style="position: absolute;font-size: ${snowSizeMax} top: -50px;">${text}</span>`;
}

function random(arg){
	return Math.floor(Math.random()*arg);
}

function initialize(){

	for( var i=0; i<=count;i++){
		sin0[i]=0;
		leftRight[i]=random(15)*20;
		argSin[i]= 0.03 + Math.random()/10;

		snow[i]= document.getElementById('s'+i);
		snow[i].style.fontFamily = random(fontFamily.length);
		snow[i].size=random(snowSizeMax)+snowSizeMin;
		snow[i].style.fontSize= snow[i].size;
		snow[i].style.color=color[random(color.length)];
		snow[i].steep=steep*snow[i].size/6;
		snow[i].posY=random(height)-snow[i].size ;
		snow[i].posX=random(width-40);
		snow[i].style.top=snow[i].posY +'px';
		snow[i].style.left= snow[i].posX +'px';

	}
move();

};
function move(){
	for (let i=0; i<=count;i++){
		sin0[i]+=argSin[i];
		snow[i].posY+=snow[i].steep;

		snow[i].posX = snow[i].posX+leftRight[i]*Math.sin(argSin[i]);
		snow[i].style.top=snow[i].posY +'px';
		snow[i].style.left= snow[i].posX +'px';
		if(snow[i].posY>height||snow[i].posX>width){
			snow[i].posY=0;
			snow[i].posX=random(width-40);
		}



	}
	setTimeout(move,50);
}


initialize();