








function Person(name){
  this.name = name;
  console.log(name);
  console.log(this.name);
}
console.dir(Person('Andrey'));


var obj = {
  go: function() { console.log(this) }
};

(obj.go)()

var arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();

function sayHi() {
  alert( this.firstName );
}
sayHi();

var user = {
  name: 'Василий',

  sayHi: function() {
    alert( this.name ); // приведёт к ошибке
  }
};

var admin = user;
user = null;

admin.sayHi();



var user = {
	name : 'Andrey',
	sayHi : function(){
		console.log('Hellow ' +  this.name );
	}
};
user.sayHi();

function f() {
  var value = Math.random();

  function g() {
    return value; // выполните в консоли alert( value ); Нет такой переменной!
  }

  return g;
}

var g = f();
console.log(g());









var vasya = {
	name: 'Vasya',
	friend :{name:'Petya'}
};
var petya = {name: 'Petya'};
vasya.friend = petya;
petya.friend = vasya;
console.log(vasya);
console.log(vasya.friend.name);

var lodash = (function() {

  var version = 3333;
  

  return {
    defaults: function() { console.log(111111); },
	version : '3333.444.5555',
	assignDefaults : function () {console.log(22222);}
  }

})();
console.log(lodash.version);
lodash.defaults();



;(function(){
	
	function test(){
		console.log(1);
	};
	function test2(){
		console.log(2);
	};
	
	test.test2 =test2;
	
	window._ =test;
	
})();
_();
_.test2();

+(function(){
	var message ='Hellow';
	console.log(arguments[0]);
	function sayHi(){
		console.log(message);
	}
	sayHi();
}('lalalfkaldfkjl'));



var i =7;
function petay (i){
	function vasay(){
		console.log(i);
	}
	
	return vasay;
}
var test =petay(i);

test();
i=9;
var test =petay(i);
test();


function makeShoter(){
	var myShoters = [];
	
	for(var i =0; i<10; i++){ (function(i){          
		
		var shot = function shoter(){
			console.log(i);
		}
		
		myShoters.push(shot);
		})(i);
	} 
	
	
	return myShoters;
	
}
var shot = makeShoter();

console.log(shot[6]());


/*
function makeShoter(){
	var myShoters = [];
	
	for(var i =0; i<10; i++){
		
		var shot = function shoter(){
			console.log(shoter.i);
		}
		shot.i =i;
		myShoters.push(shot);
		
	}
	
	
	return myShoters;
	
}

var shot = makeShoter();

console.log(shot[3]());


*/



























var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr,func){
	var newArr =[];
	for (var i=0; i<arr.length; i++){
		
		var value =arr[i];
		
		if(func(value)){
			newArr.push(value);
		}
	}
	return newArr;
};

function inBetween(a,b ){
	return function (value){
		return value >= a && value<=b;
	}
};

function inArray(arr1){
	return function (value){
		if(~arr1.indexOf(value))
		return true;
	}
};



console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2
























var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(name){
	function test(a,b){
		return a[name] > b[name]? 1: -1;
	} 
	return test;
}
 





users.sort(byField('name'));
users.forEach(function(user) {
  console.log( user.name );
}); // Вася, Маша, Петя









function makeBuffer(){
	var buffer ='';
	 var buff = function bu(word){
		if(arguments.length!=0){
			buffer +=word;
		}else{return buffer;}
	}
	buff.reset =function (){ buffer = '';}
	buff.test = function(){
	buffer +='eekkkkllllmmm';
}
	return buff;
}
var buffer = makeBuffer();

console.dir(buffer);
buffer('yas');
buffer('now');
buffer.test();
console.log(buffer());
buffer.reset();
buffer(6);
buffer(8);
buffer(10);
console.log(buffer());

function sum(a){
	return function(b){return a+b;}
	
	
}
console.log(sum(6)(6));


function makeCounter(){
	var currentCount= 1;
	 
	 function count(){
		 return currentCount++;
	 };
	 
	 count.set = function(value){
			currentCount = value;
		};
	 count.reset = function (){
			currentCount =1;
		};
		
		
	
	
	return count;
}
var count = makeCounter();
count();
count();
count();
count.reset();
console.log(count());



/*
function makeCounter(){
	var currentCount= 1;
	return {
		set: function(value){
			currentCount = value;
		},
		next: function (){
			return currentCount++;
		},
		reset: function (){
			currentCount =1;
		}
	} 
	
	
}
var count = makeCounter();

count.set(8);
count.next();
count.next();
count.next();
console.log(count.next());
count.reset();
console.log(count.next());
*/
/*
function makeCounter(){
	var currentCount= 1;
	return function (){
		return currentCount++;
	}
	
}
var count = makeCounter();
count();
count();
count();
console.log(count());
*/
/*
function makeCounter(){
	var currentCount =1;
	 
	return function(){
		return currentCount++;
	}
}
var counter = makeCounter();

counter();
counter();
counter();
console.log(counter());
console.dir(counter);
console.dir(makeCounter);

var x1 =function sum(a,b){
	return a+b+sum.x;
} 
x1.diff =function (a,b){return a-b;};
x1.x =6;
console.log(x1(3,5));
console.log(x1.diff(5,1));


function makeCounter2(){
	function counter(){
		return counter.currentCount++;
	};
    counter.currentCount = 1;
	return counter;
}

var counter1 =makeCounter2();
counter1();
counter1();
counter1();
counter1();
counter1.currentCount = 1000;
console.log(counter1());
*/
/*

var fe = function cler(){
	return function sex(){
		return x =5;
	
	}
	
sex.age = function(){
	console.log(28);
}	
};

console.log(fe);
fe.age();


*/
/*

function shoters(){
	var myShoters =[];
	
	for (var i =0; i<10; i++){
		
		var shot = function me(){
			console.log(me.i);
		};
		shot.i =i;
		myShoters.push(shot);
		 
	}
	
	return myShoters;
}

var shot = shoters();
console.dir(shot);
console.log(shot[6]());




function shoters(){
	var myShoters =[];
	
	for (var i =0; i<10; i++){
		
	 var shot = (function(x){
		  return function(){
			  console.log(x);
		  };
	  } )(i);
	
		myShoters.push(shot);
		 
	}
	
	return myShoters;
}

console.log(shot[3]());


function shoters(){
	var myShoters =[];
	
	for (var i =0; i<10; i++){(function(x){
		
	 var shot = function(){
			  console.log(x);
		  };
	  
	
		myShoters.push(shot);
		 
	})(i); 
	}
	
	return myShoters;
}


console.log(shot[2]());

*/
/*

var arr = [1, 2, 3, 4, 5, 6, 7];

	 function inBetween (a ,b){
		return  function(x){return x >= a && x <= b;};
	}
	
 function inArray(arr1){
	return function (val){
		  if (~arr1.indexOf(val)){
			 return true;
			 }
		
    }
}	
	

function filter(arr, func){
	var result=[];
	for (i=0; i<arr.length; i++){
		var val = arr[i];
		if(func(val)){
			result.push(val);
		}
	}
	return result;

	
	
}

console.log( filter(arr, inBetween(3,6)) );

console.log( filter(arr, inArray([1,2,4,5,1])) );

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];
function byField(key){
	
	return function (a,b){
		return (a[key] > b[key])? 1: -1;
	}
	
}

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); 

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
});




*/






/*

function sum(a){
	return function(b){
		return a+b;
	}
}

console.log(sum(5)(-1));

function makeBuffer(){
	var buffer ='';
	 var reset = function(word ){
	  if(arguments.length == 0){
		return buffer;
	}else{
		buffer+= word;
	}
	
	}
reset.res = function (){
	buffer ='';
}	
	return reset;
}
var buffer = makeBuffer();

buffer('lalala');
buffer(111111);
buffer(222222);
console.log(buffer());
buffer.res();
buffer(222222);
console.log(buffer());
*/

/*


function counter(){
	var counterElement =1;
	return function(){
		return counterElement++;
	}
}
var newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

var value = 0;

function f(){
	if(1){
		value = true;
}else{
	var value = false;
}
console.log( value);
}

f();
console.log( value);
function makeCounter() {
  var currentCount = 1;

  return function() {
     return currentCount;
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  };
}

console.log( makeCounter()());

function cloneCounter(){
	var counter =1;
	return {
		set : function(num){
			return counter = num;
		},
		getNext : function(){
			return counter++;
		},
	    reset : function(){
		return counter =1;
	    }
	}
}

var count = cloneCounter();

console.log(count.set(8));
console.log(count.getNext());
console.log(count.getNext());
console.log(count.getNext());
console.log(count.reset());


*/