var user = {
	name :"Andrey",
	age : 28
};
var str = JSON.stringify(user, '', 4);
console.log(str);
var nUser= JSON.parse(str);
console.log(nUser);


function bind(func, context) {
  return function() { // (*)
    return func.apply(context, arguments);
  };
}


function f(a, b) {
  alert( this );
  alert( a + b );
}

var g = bind(f, "Context");
g(1, 2); // Context, затем 3


function Article(name){
	this.data = new Date().getDate()+ '.' +new Date().getMonth()+ '.' + new Date().getFullYear(); 
	this.name = name;
	Article.data = new Date().getDate()+ '.' +new Date().getMonth()+ '.' + new Date().getFullYear();
	Article.count++;
	Article.show = function() {
		console.log(this.data+ ' ' + this.count);
	};
};
Article.count =0;
new Article('ldhgli');
new Article('ldhgl2i');
new Article('ldhgl32i');
Article.show();





function Accom(startValue){
	this.value =+ startValue;
	this.read = function(){
		this.value+= + prompt('number',0);
	};
	
};
var accom = new Accom(1);
accom.read();
accom.read();
console.log(accom.value);


function Cal(){
	this.read = function(){
		this.a = + prompt('a?',0);
		this.b = + prompt('b?',0)
	};
	this.sum = function (){
		return this.a + this.b;
	};
	this.mul = function(){
		return this.a * this.b;
	}
}
var calkin = new Cal;

calkin.read();
console.log(calkin.sum());
console.log(calkin.mul());



function Usert(name ,lastName){
	function getFN(){
		return(name +' '+ lastName);
	}
	this.name= name;
	this.fullName= getFN();
    this.sayHi = function (){
	console.log('Hellow' + ' ' + this.name);
};
};

var ivan = new Usert('Ivan','stovbyr');
ivan.sayHi();
console.log(ivan.fullName);


function Create(name){
	this.name = name;
	this.age = 29;
}

var user = new Create('Andrey');
console.log(user);


function showFullName(){
	console.log(this.firstName + " " + this.lastName);
}

var user = {
	firstName : 'Andrey',
	lastName : "Pavlov"
};

user.ful = showFullName;
user.ful();

showFullName.call(user);


function User(){
	this.sayHi = function (){
		console.log(this.name); 
	};
};

User.Anonimus = function(){
	var user = new User;
	user.name ='Anonim';
	return user;
}
User.userName =function(DateObj){
	var userName = new User;
	userName.name= DateObj.name;
	userName.age = DateObj.age;
	
	return userName;
}

var Andrey = User.userName({name:'Andrey', age:28});
var guest = User.Anonimus();

Andrey.sayHi();
guest.sayHi();







/*function MakeCount(){
	MakeCount.count++;
}
MakeCount.count =0;
MakeCount.show = function(){
	console.log(this.count);
}
MakeCount.set = function(value){
	this.count = value;
}

new MakeCount();
new MakeCount();
MakeCount.show();
MakeCount.set(6);
MakeCount.show();


function Calc(){
	var methods = {
		'+': function (a, b){
			return a + b;
		},
		'-': function (a,b){
			return a -b;
		}
	};


	this.colcul = function(str){
		var arr = str.split(' ');
		var a = +arr[0];
		var op = arr[1];
		var b = + arr[2];
		if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    };
	console.log(methods[op](+a, +b));
	return methods[op](+a, +b);
	}
	
}
var cal =new Calc;
console.log(cal);
console.log(cal.colcul('3 + 3'));	

*/


/*

function Accomulator(startValue){
	this.value = startValue;
	this.read = function(){
		this.value += +prompt ('number?',0);
	};
};

var accomulator = new Accomulator(1);
accomulator.read();
accomulator.read();
console.log(accomulator.value);



function Calculator(){
	this.read = function(){
		this.a = + prompt('a?',0);
		this.b = + prompt('b?',0);
	};
	this.sum = function(){
		return this.a + this.b;
	};
	this.mul = function(){
		return this.a * this.b;
	}
}



var calculator = new Calculator();
console.log(calculator);
calculator.read();


console.log( "Сумма=" + calculator.sum() );
console.log( "Произведение=" + calculator.mul() );
















function User(festName,lastName){
	var phrase = 'Hellow';
	
	function getFullName(){
		return festName +' '+ lastName;
	};
	
    this.SayHi= function (){
	console.log(phrase + ' '+ getFullName());
};
};

var user = new User('Andrey', 'Pavlov');

user.SayHi();
*/

/*

var user = {ferstName : 'Andrey'};
var admin = {ferstName : 'Admin'};

function func(){
	console.log(this.ferstName);
}

user.f = func;
admin.f = func;

user.f();
admin.f();
admin['f']();


var obj = {
  go: function() { console.log(this) }
};

(obj.go)();

var obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();            // (1) object

(obj.go)();          // (2) object

(obj.method = obj.go)();

for ( let k =0; k< 10; k++){
	console.log(k);

}
	const a = 5;
console.log(a);


var culculator = {
	num : [],
	red : function (){
		this.num.push( + prompt('Введите число А', 0));
		this.num.push( + prompt('Введите число B', 0));
	},
	sum: function(){
		return this.num[0]+ this.num[1];
	},
	mul:function(){
		return this.num[0]* this.num[1];
	}
}

culculator.red();
console.log(culculator.num);
console.log(culculator.sum());
console.log(culculator.mul());

var culculator1 = {
	
	red : function (){
		this.a =( + prompt('Введите число А', 0));
		this.b=( + prompt('Введите число B', 0));
	},
	sum: function(){
		return this.a+ this.b;
	},
	mul:function(){
		return this.a * this.b;
	}
}
culculator1.red();

console.log(culculator1.sum());
console.log(culculator1.mul());

 console.dir( bool = new Boolean(false));
 
 
 function sum(a){
	 var currentSum =a;
	  function la (b){ 
		  currentSum+=b;
		 return la;
	 }
	 la.toString =function(){
		 return currentSum;
	 }; 
	 return la;
 }

 alert(sum(6)(6)(3)(3)(2));

 
 
 function Animal(name){
	this.name = name;
	this.value = true;
	
 };
 
 var animal = new Animal('Kolay');
 console.log(animal);
 
 
 function User(name){
	 this.name = name;
	 this.sayHi = function(){
		 console.log('my name ' + this.name);
	 };
 };
 
 var user = new User('Admin');
 
 user.sayHi();
 
 */
 
 
 
 
 