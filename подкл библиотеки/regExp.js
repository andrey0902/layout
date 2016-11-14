
var str = document.querySelector('p').innerHTML;

var regexp = /(127.\d+\.\d+\.\d+)\s-\s- \[(\d+.?\w+.?\d+:\d+:\d+:\d+)/ig;

var result;


while(result = regexp.exec(str) ){
	console.log(result);
}
	
var myres= str.replace(regexp,replace)	
	
	function replace(str,p1,p2){
		var element= document.createElement('p');
		element.className = 'log';
		document.getElementById('home_work').appendChild(element);
		console.log('<' + p2 + '>'+ ' - ' + ' <'+ p1 + '>');
		element.innerHTML = '<' + p2 + '>'+ ' - ' + ' <'+ p1 + '>'+'\n'; 
	};

	
	var str = 'я люблю абрикосы, я очень люблю абрикосы';
	
	var reg = /[\b\W\b]+/ig;
	
	var res = str.match(reg);
	
	console.log(res);
	
	var temp ='Завтрак в 09:00. Обед - в 21-30';
	
	var reg= /\b[0-2][0-9][-:][0-5][0-9]/ig;
	var res = temp.match(reg);
	console.log(res);