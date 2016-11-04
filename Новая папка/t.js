var mas = [222,[[99,35],53],23,1,[55,[44,55,555]],4];
var mas3 =[[222, 99, 35, 53, 23, 1, 55, 44, 55, 555, 4],[222, 99, 35, 53, 23, 1, 55, 44, 55, 555, 4]];

function alignArray(mass){
   var array =[];
return function align(mass){
	
	 for (var i =0; i<mass.length; i++){
		 if(mass[i] instanceof Array){
			 align(mass[i]);
		 }else{
			array.push(mass[i]);  
		 }
	 }
	 return array;
 }(mass);
 }
 
var rezault =alignArray(mas);
 
 
 console.log(rezault);
  console.log(alignArray(mas3));
 
 if(typeof  mas =='array'){
	 alert('fff')
 }
 console.log( refggt instanceof Array);
 rezault = alignArray(mas);
 
 
 function is_array (a) {
    return (a instanceof Array);
}
console.log(is_array(mas));