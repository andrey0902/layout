

function bind(func,contex){
	return function(){
		return func.apply(contex,arguments);
	};
};
var user = {
	name: 'Andrey is clouse',
	sayHi: function(){console.log(this.name)}
};

setTimeout(bind(user.sayHi,user),1000);

var anon1 = {
	name: 'Bonds',
	sayHi: function(ho){
		console.log(arguments);
		console.log(ho + ' ' + this.name);
	}
};


var anon = bind(anon1.sayHi, anon1);

anon('Hellow');


/*
function binding(func,contex){
	return function(){
		return func.apply(contex,arguments);
	};
}


function f(a,b){
	 console.log( a+ b);
		
	console.log(this);
}

var g = binding(f,'Andrey');
 g(1,3);
*/
 
function sum(){
	arguments.arg = [].reduce;
	return arguments.arg(function(a,b){
		return a+b;
	});
}

console.log(sum(1,2,3,4,5));



function fullName(){
	console.log(this.name + ' '+ this.surName);
}


var user = {
	name : 'Andrey',
	surName: 'Pavlov'
};


user.full = fullName;
user.full();

function Nam(b, a){
	console.log(b + a);
	console.log(this.name + ' '+ this.surName);
}
Nam(2,5);
Nam.call(user,4,3);