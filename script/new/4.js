
var obj = {
	properti : 'new value'
}

function addProp(obj, prop){
	var mas= obj['properti'].indexOf(prop);
	if(mas<0){
		obj['properti'] = obj['properti']+= ' '+prop;
		};
		return obj; 
	}
	

obj = addProp(obj ,'vasa');
console.log(obj);

obj = addProp(obj ,'ne1w');
console.log(obj);
/*

var mas = [1,2,3,4,5,'Mandarin',6,7,8, "Апельсин",9,0, "Груша"];



mas = mas.sort(function(a,b){
	if(+a&&+b){
		return  0 ;
	}else if(+a){
		return 1;
	}else{
		return -1;
	}
	
});

console.log(mas);
*/
/*


var string = "Яблоко";
var arr = ["Яблоко", "Апельсин", "Груша"];

arr.splice(0,0,'Mandarin','Limon' );
console.log(arr);

arr.splice(2,2,'Mandarin','Limon');
console.log(arr);
arr.splice(0,1);
console.log(arr);


arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});

var mas = string.split('');

console.log (mas);

for (var i=0; i<mas.length; i++){
	console.log('Вам сообщение: '+ mas[i]);
}
var z = mas.reverse().join(', ');

console.log(z);
*/

/*
function serch(array, serchName) {
	
var i =	array.reduce(function(ferst,last, i, array){
	
		 if(ferst == last){
			 console.log ((ferst + '- значение которое ищем' + 'позиция в массиве :' + i ))
		 }else{
			 return ferst;
		 }
		
					
			
	},serchName);
	console.log ( i );
	
}
serch (arr, 'Груша');

*/
/*
console.log ((item + '- значение которое ищем' + 'позиция в массиве :' + i ))
var users= {
maxa : 100,
maxa1 : 100,
maxa2 : 100,
maxa3 : 100
};



function isEmptu (obj) {
	var sum= 0;
	for (var item in obj) {
		 sum += obj[item];
	}
	return ('общак = ' +sum);
}


console.log(isEmptu(users));

var mas = [1,2,3,4,5,6,7,8,9,0];

function randMas (mas){
	var index = Math.floor(Math.random()*10);
	
	return mas[index];
	
}

console.log(randMas(mas));


*/