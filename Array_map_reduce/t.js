var arr = [ 1, 5,-3,-7,2,8,0,-88];

function filterRange(arr,a,b) {
	var newArr= arr.filter(function(item){
		return item>=a&&item<=b;
	});
return newArr;
}
var newA=filterRange(arr,0,7);
console.log(newA);


var arr1 = arr.forEach(function(item){
	item += 100;
	console.log(item);
	return item;
});
console.log(arr1);

var newArr =arr.filter(function(number){return number >= 0;});

console.log( newArr);

var Name = ['Andrey','Yliay', 'Css','JavaScript'];


var NameLength = Name.map(function(item){return item.length;});

console.log( NameLength );


var every = arr.every(function(item){return item > 0});

console.log( every );

var some = arr.some(function( item ){return item > 0});

console.log(some);

var result = arr.reduce(function(sum,item, indexEl ){
	return sum + item;
	
});


console.log(result);

var benchmarck = [1,2,3,4,5];

function sum(arr){
	var temp = [];
	var result= arr.reduce(function(sum,item,i){
		temp.push( sum )
		return sum + item;
		
	});
		temp.push(result);
		return temp;
}

console.log(sum(benchmarck));


function sum1(arr){
	return arr.reduce(function(sum,item,i){
		if(i!==0){
			sum.push( item + sum[i-1] );
	}else{
		sum.push(item);
	}
	return sum;	
	},[])
	

}
console.log(sum1(benchmarck));