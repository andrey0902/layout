var hidden =1;
var div = document.getElementById('snow');
var css = getComputedStyle(div);
var height = parseInt(css.height);
var width = parseInt(css.width);
var timeI;

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




//----- создание сугробов
var hiddenId = setTimeout(function hid(){
    document.getElementById('c'+hidden).style.display= '';
    ++hidden;
    hiddenId=setTimeout(hid,15000);
},15000);
setTimeout(function () {
    clearTimeout(hiddenId);
},70000);
//------удаление снежинок снизу
function delElement(selector){
    var p = document.querySelectorAll(selector);
    for(let i=0;i<p.length;i++){
        div.removeChild(p[i]);
    }
}
setTimeout(function(){
    delElement('p');
    delElement('span');
    clearTimeout(timeI);
    createButtonSnow(0);
},60100);
//------- создание последних снежинок
var tId= setTimeout(function newSnow() {
    createButtonSnow(0);
    tId= setTimeout(newSnow,100);
},60100);
setTimeout(function(){clearTimeout(tId)},95000);
//------------ показываем снеговика
setTimeout(function(){
    var snowMan=document.querySelector('.snowMan').style.visibility='visible';



},60200);


function createButtonSnow(hieg){
    var snowButtn;
    var t;
    var z;
     if(hieg==0){snowButtn=0; t=0;z=height; }else{snowButtn=hieg; t=100;z=20;}


    var p = document.createElement('p');
    var s = p.style;
    p.innerText=text;
    s.position='absolute';
    s.color=color[random(color.length)];
    s.fontSize= random(snowSizeMax)+'px';
    s.fontFamily=fontFamily[random(fontFamily.length)];
    s.top=snowButtn-t+random(z)+'px';
    s.left= random(width-snowSizeMax)+'px';

    div.appendChild(p);



    }
var timeId=setTimeout(function ls() {
    createButtonSnow(height);
    timeId=setTimeout(ls,500);
},500);
setTimeout(function(){clearTimeout(timeId)},60000)

    for (var i=0; i<=count;i++)div.innerHTML += `<span id='s${i}' style="position: absolute;font-size: ${snowSizeMax} top: -50px;">${text}</span>`;


function random(arg){
	return Math.floor(Math.random()*arg);
}

function initialize(){

	for( var i=0; i<=count;i++){
		sin0[i]=0;
		leftRight[i]=Math.random()*40;
		argSin[i]= 0.03 + Math.random()/10;

        snow[i]= document.getElementById('s'+i);
		snow[i].style.fontFamily = random(fontFamily.length);
		snow[i].size=random(snowSizeMax)+snowSizeMin;
		snow[i].style.fontSize= snow[i].size;
		snow[i].style.color=color[random(color.length)];
		snow[i].steep=steep*snow[i].size/6;
		snow[i].posY=random(height)-snow[i].size ;
		snow[i].posX=random(width-snow[i].size*3);
		snow[i].style.top=snow[i].posY +'px';
		snow[i].style.left= snow[i].posX +'px';
	}


}
function move() {

    for (var i = 0; i <= count; i++) {

        sin0[i] += argSin[i];
        snow[i].posY += snow[i].steep;
        snow[i].style.left = snow[i].posX + leftRight[i] * Math.sin(sin0[i]) + 'px';
        snow[i].style.top = snow[i].posY + 'px';

        if (snow[i].posY > height - 30 || snow[i].posX < 10) {
            snow[i].style.top = height-30 + 'px';
            snow[i].style.left =snow[i].posX+ 'px';
            snow[i].posY = 0;
            snow[i].posX = random(width - 40);
        }
    }
     timeI = setTimeout(move, 50);
}


initialize();
move();

