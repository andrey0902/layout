
var div = document.getElementById('snow');

var tempCss = getComputedStyle(div);



var snowMax=35;
// Set the colors for the snow. Add as many colors as you like
var snowColor=["#b9dff5","#b9dff5","#b9dff5","#b9dff5","#b9dff5","red"];
// Set the letter that creates your snowflake (recommended: * )
var snowLetter="*";
// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkSpeed=0.6;

// Set the maximum-size of your snowflakes
var snowMaxSize=35;

// Set the minimal-size of your snowflakes
var snowMinSize=8;



// Do not edit below this line
var browserok=true;
var snow=[];
var height =parseInt(tempCss.height);
var right =parseInt(tempCss.width);
var timer;
var x_mv=[];
var argS=[];
var lftrght=[];






function RANDOM(range) {    
    return Math.floor(range*Math.random());
}

function initsnow() {
  

        var sizeNormal=snowMaxSize-snowMinSize// средний размер снежинки
        for (i=0;i<=snowMax;i++) {
			
			
					argS[i] = 0;
            lftrght[i] = Math.random()*50;
            x_mv[i] = 0.03 + Math.random()/10;
					snow[i]=document.getElementById("s"+i)
                
				snow[i].style.fontFamily="Times";               // font -familu
                snow[i].style.fontSize=snow[i].size+'px';
                snow[i].style.color=snowColor[RANDOM(snowColor.length)]
                snow[i].style.zIndex=1000
				snow[i].size=RANDOM(sizeNormal)+snowMinSize; // 
                snow[i].sink=sinkSpeed*snow[i].size/5
                snow[i].lay=3.14;
				
					snow[i].posx=RANDOM(right-snow[i].size) 
					//рандомное появление  ( ширина - размер снежинки) по горизонтали
			
               
                snow[i].posy=RANDOM(height-2*snow[i].size) // появляются сразу на єкране а не сверху
				
                snow[i].style.left=snow[i].posx+'px';
                snow[i].style.top=snow[i].posy+'px';
        }
   movesnow() 
}

function movesnow() {
        for (i=0;i<=snowMax;i++) {
			
                argS[i] += x_mv[i];
                snow[i].posy+=snow[i].sink
                snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(argS[i])+'px';
                snow[i].style.top=snow[i].posy+'px';

                if (snow[i].posy>=height-2*snow[i].size || parseInt(snow[i].style.left)>(right-3*lftrght[i])){
                       snow[i].posx=RANDOM(right-snow[i].size);
                       
                        snow[i].posy=0;
                }
        }
        var timer=setTimeout("movesnow()",100)
}

for (let i=0;i<=snowMax;i++) {
        div.innerHTML+="<span id='s"+i+"' style='position:absolute;top:-"+snowMaxSize+'px\'>'+snowLetter+"</span>";
}

      if (browserok) {
        window.onload=initsnow
}  

