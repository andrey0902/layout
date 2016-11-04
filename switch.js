function pow( x, n){
var x =	(n>1)? x * pow(x, n-1):x;
	 return x;
}

console.log(pow(2, 5));


/*var num1 =5;
var num2 = 3;

function min(x, y){
	return (x > y)? y : x;
}
console.log(min(num1, num2));
*/
/*function boolen(x){
	return(x > 5)?  x :  prompt ('number');
}

console.log(boolen(7));

*/
/*var number = + prompt ('write number');

switch (number){
	case 0:
	console.log( '0');
	break;
	case 1:
	console.log( '1' );
	break;
	case 2:
	case 3:
	console.log( '2||3');
	break;
	default:
	console.log( 'odd numbers' );
}
*/

/*

var brauser = prompt( 'Введите ваш браузер');

if(brauser=='IE'){
	console.log('ie');
} else if(brauser =='opera'||brauser =='moz'||brauser =='safa'){
	console.log('good brauser');
}else{
	console.log('lala');
}

*/

/*

var x = 8;


switch (2+1) {
	case 3:
	console.log( 'x==3');
	break;
	case 4:
	console.log( 'x==4');
	break;
	default:
	console.log( 'you niga');
	break;
	
}

*/