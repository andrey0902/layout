function pow( x, n) {
	var res = x;
	for ( var i= 1; i < n; i++){
		res *= x;
	}
 return res;
}
alert( pow (2,4));

function paw ( x, n ) {
	if(n!= 1){
		return x * paw(x, n-1);
	}else{
		return x;
	}
}

alert( paw (2 , 5));

function sis (a){
	if(a!=1){
		return a + sis(a-1);
	}else{
		return a;
	}
}

alert(sis (100));



 var board = '';
 var limit = 64;
 
   for ( var i = 0, j = 1; i < limit; i++, j++){
	 
	   if(i%2===0){
		   if(i%8===0){
			   board =board + "\n";
			   }else{
				   board = board + "#";
			   }
		   
	   } else if(i%2!==0){
		   board = board +  ' ';
		}
 
   }
   console.log ( board );
 /*
 
 for( var i = 1; i <= 100; i++){
	 (i%3===0)? console.log ( 'Fizz' ) : (i%5===0)? console.log( 'Buzz' ) : '';
	 
 }



var number = true;
while(number){
	number = + prompt('Введите число больше 100','');
	number = (number >= 100) ? !true : true ;	
}

for ( var i=0; i<=8; i++) {
    (i==2 || i%2 ===1)? console.log(i): '';
	
}
*/
/*
var a = "";
for(var i=0; i<=7; i++){
	a=a + "#";
	console.log(a);
}*/