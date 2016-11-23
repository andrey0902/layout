var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99,
  'Anton': 4,
  'Anton': 0,
  'Anton': 66,
  'Anton1': 300
  
};
 
 function goodFellow( obj) {
	 
	 var ball = 0;
	 var name = '';
	 for ( var item in obj){
		 if ( ball < +obj[item]){
			 ball =+obj[item];
			 name = item;
		 }else {
			
		 }
		 console.log(obj[item] + ' '+ name);
		 
	 }
	 return ball;
 }
console.log( 'mani ball ' + goodFellow(tasksCompleted) );

/*var arr = [ 1, 'aaaaa', {'name' : 'andrey'}, 'ttttt', 6666,77,45,65666];


function randomElement (arr){
	var elem = 0;
	elem = Math.floor(Math.random()*arr.length);
	
	return arr[ elem ];
}

console.log(randomElement(arr));
*/
/*var arr = ['apple', 'orange'];

arr =addInArray(arr, 'kiwi');

function addInArray( array, newelement){
	
	 array[array.length] = newelement;
	 return array;
}
console.log(arr);

arr[arr.length-2] = 'pear';
console.log(arr);
console.log(arr.shift());
console.log(arr);
arr.unshift('apricot','peach');
console.log(arr);
*/

/*var arr = [ 1, 'aaaaa', {'name' : 'andrey'}, 'ttttt', 6666,77,45,65666];


function lastElements (mass){
	
	return mass[mass.length-1];
}
console.log(lastElements(arr));
function addInArray( array, newelement){
	
	 array[array.length] = newelement;
	 return array;
}
console.log(addInArray(arr, 'sisky'));
*/
/*
var salaries ={
	'junior' : 30,
	'midl'   : 50,
	'senior' : 100,
	'lead'   : 500
}

function jacpot ( obj ){
	var cech = 0;
	for (item in obj){
		cech += obj[item];
	}
	return cech;
}

console.log ( 'денежек к выплате $ ' + jacpot(salaries) );

console.log( isEmpty(salaries));



var user = {
	name: 'Andrey',
	ferstname: 'Pavlov',
	sex : 'men',
	hench : {
		left1 : 'hand',
		right1 : 'foot'
	}
}

 
 function isEmpty( obj){

	 for ( var item in obj) {
	  return  false;
 }
	 return true;
 }
 

console.log( isEmpty(user));

*/



/*

var countelement =  16 ;



for ( var i = 0; i < countelement/2+1; i++){
	var elem = '';
	
	for ( var j = 0; j < countelement; j++){
		if ( i%2 === 0 ){
			elem = (j%2 ===0)? elem +=' ' : elem+= '#';
		}else {
			elem = (j%2 ===0)? elem +='#' : elem+= ' ';
		}
		
	}
	

	console.log( elem);
	}
	
*/

/*
elem = (j%2 ===0)? elem +=' ' : elem+= '#';
		elem = (j%2 ===0)? elem +='\n' : elem+= '';
for ( var j = 0; j < countelement; j++){
function summ (n) {
	return ( n != 1)? n + summ( n-1 ): n ;
}

console.log( summ(100));

var a = 100;
var rezault = 0;
for ( var i = 1; i <= a; i++){
		rezault += i;  
}
console.log(rezault);

*/