var div = document.getElementById('grid');

var boll = document.getElementById('boll');
var css = getComputedStyle( boll);

div.addEventListener('click',anime);

function anime(event){
	var event=event||window.event;
	var s= boll.style;
    if((event.clientY+30)>290 ||(event.clientX+30)>290 ){
		 s.top = (event.clientY-50) + 'px';
         s.left = (event.clientX-50) + 'px';	
		 console.log('больше 290');
} else{
		 s.top = (event.clientY-30) + 'px';
         s.left = (event.clientX-30) + 'px';
         console.log('все поле');		 
	}





	console.log(event.clientY +" координати У");
	console.log(event.clientX +" координати Х");
	
   
}