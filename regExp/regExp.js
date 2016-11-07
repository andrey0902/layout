
var str = document.querySelector('p').innerHTML;

var regexp = /(127.\d+\.\d+\.\d+)\s-\s- \[(\d+.?\w+.?\d+:\d+:\d+:\d+)/ig;

var result;
console.log(result);

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
