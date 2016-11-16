var imgsrc="img/snow.gif";
var div = document.getElementById('snow');
var tempCss = getComputedStyle(div);
var height =parseInt(tempCss.height);
 console.log(height);
var width =parseInt(tempCss.width);
var quantity = 30; //количество снежинок

var amp=[]; //амплитуда
var x_pos=[]; //падения снежиноки вертикаль 
var y_posHeight=0;// высота окна 
var stx= [];//
var stepY=3;//шаг падения снежиноки вертикаль
var deltax=[];// аргумент для sin
var obj= {};// ссылка на объект со снежинкой

for (let i=0; i<quantity;i++){
	deltax[i]=0;
	amp[i]=Math.random()*19;
	x_pos[i]= Math.random()*(width-amp[i]-20); // падать снежинка по горизонтали
	stx[i]=0.03+Math.random()*0.25;
	//stepY[i]=3+Math.random();//заполняем масив шаг падения снежиноки
	// y_posHeight[i]=Math.random()*height;
}



div.innerHTML='<img src="'+imgsrc+'" id="sn" style="position:absolute;border: 0px;z-index: 1;visibility: visible;top: 0px;left:50px;">';
obj= document.getElementById('sn');
var s= obj.style;
var x_mv=[];
function randommaker(range) {
        rand=(range*Math.random())
    return rand
}
setTimeout(function snow(){
	y_posHeight+=stepY; // опускаем снежинку вниз шаг +2px
	
	 for( let i=0; i<quantity; i++){
       // x_mv[i] = 0.03 + Math.random()/10;
		//console.log(x_mv[i]);
		 deltax[i]+=stx[i];
		
		 if (y_posHeight>height-49) {
		
        x_pos[i]=Math.random()*(width-amp[i]-20);
        y_posHeight=0;//возвращаем снежинку наверх
    }
		s.top=y_posHeight+"px";
		s.left =x_pos[i]+amp[i]*Math.sin(randommaker(0.8))+"px"; // позиция где будет выводится снежинка левее правее
		//console.log(randommaker(2.2));
	 //console.log(s.left);
	
		 
	

  }
	
	
	
	setTimeout(snow,40);
},40);