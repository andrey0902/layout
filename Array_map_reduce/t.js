function count2(){
	var count1=1;
	return function(){
	return	count1++;
	
	}
}

var Count= count2();

Count();
Count();

console.log(Count());


var Count3= count2();

Count3();
Count3();
Count3();
console.log(Count3());

var arr = ['vasa1','vasa1','vasa','vasa','vasa','andrey2','andrey2','andrey','lexa','lexa','lexa','lexa3'];

function selector(arr){
var	mas=[];
var rezault=[];	
var obj={};
	arr.forEach(function(elem){
		if(!obj[elem]){
			obj[elem]=1;
		}else{
			obj[elem] +=1;
		}
	})
	for(var key in obj){
	  mas.push(key);
}
rezault=mas.sort(function(a,b){
	return obj[b]-obj[a];
})
	return mas;
}

;
console.log(selector(arr))

var arr1 = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор",'вася'];

function anagram(arr){
	var obj={};
	var rezault=[];
for(var i=0; i<arr.length;i++){
  var key =	arr[i].toLowerCase().split('').sort().join('');
  obj[key]=arr[i];
}
for(var key1 in obj) rezault.push(obj[key1]);
return rezault;
}

console.log(anagram(arr1));























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