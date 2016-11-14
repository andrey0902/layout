var i=1;
var timerId = setInterval(function(){
	if(i==20){
		clearInterval(timerId);
		return;
	}
	console.log(++i);
},100)

var j=0;

var timId =setTimeout(function setT(){
	if(j==30){
		clearTimeout(timId);
		return;
	}console.log(++j);
	setTimeout(setT,100);
	
},100);



var start =  (+new Date()+100000);

var t = setTimeout(function test(start){
	if (start < +new Date()){
		clearTimeout(t);
		return;
	}
	setTimeout(test,1000,start);
	console.log('a1 '  + new Date (start));


},1000,start);