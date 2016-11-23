var arr = [
	{
		name: 'Andrey',
		'listmark': [
		 5,5,5,5,5,5,5
		]
	},
	{
		name: 'Alex',
		'listmark': [
		 4,4,3,2,2,4,2
		]
	},
	{
		name: 'Lina',
		'listmark': [
		 5,3,5,3,3,3,3
		]
	},
	{
		name: 'Den',
		'listmark': [
		 5,2,5,4,3,4,4
		]
	}


];

function beststudent(arr){


var rez = arr
		.map (function (obj){
			obj.avg = obj['listmark'].reduce( function (fest, next){
			return fest+next;})/obj['listmark'].length;
			return obj;
			})
			.reduce(function (fest, last){
			return (fest.avg > last.avg)? fest: last;
		});
		
		
		
	return console.log(' лучший студент ' + rez['name'] + '  его средний бал '+rez['avg']);	
		
	

}	
	beststudent(arr);	
		

		
		
		
		
		
		

/*

var net = array1.reduce(function(hew, mid ){
	hew[mid]= 5;
	return hew; },{});

console.log(net);



var arr = [1, 2, 3, 4, 5];


var result1 = arr.reduce(function(sum, current) {
  return sum + current;
}, 15);

console.log( result1 ); 


var names = ['HTML', 'CSS', 'JavaScript'];


var newarr= names.map(function(names1){
  names1 += 'hop heu lalala';
return names1;  
	
});

console.log(newarr);
*/