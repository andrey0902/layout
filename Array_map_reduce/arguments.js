var arr = [ 1, 5,-3,-7,2,8,0,-88];


function sum(a,b){
b = b || 4;
	return a+b;
}

console.log( sum( 3,5));
console.log( sum( 3));

function sayHi(){
	var test =[];
for (var i=0; i<arguments.length; i++){
	test[i]= arguments[i];
	console.log( 'Привет ' + arguments[i]);
}
test.push('dima')
console.log(test );
}

sayHi('Андрей','Наташа');


var vasya = {
  age: 21,
  name: 'Вася',
  surname: 'Петров'
};

var user = {
  isAdmin: false,
  isEmailConfirmed: true
};

var student = {
  university: 'My university'
};

// добавить к vasya свойства из user и student
var copy= copy1({},vasya, user, student);

console.log(copy.name);

function copy1(){
	var dst = arguments[0];
	for (var i=0; i< arguments.length; i++){
		 var arg = arguments[i];
		for(var key in arg){
			dst[key]= arg[key];
		}
	}
	return dst;
}


function sum(arguments){
var a = arguments.a || 5;
var b = arguments.b || 6;
var c = arguments.c || 27;

return a+b+c;
}


var arguments ={
	a : 5,
	b : 88
};

console.log(sum(arguments));


var setings ={
	width : 200,
	height : 100,
	text :undefined
};

function getElement1(arg){
var width = arg.width || 200;
var height = arg.height || 100;
var text = arg.text || 'Очень Важное Сообщение';
console.log( 'Ширина = '+width + ' Высота = ' + height +' '+ text);

};

getElement1(setings);


setings.text = 'New message';
getElement1(setings);


function apply(x){
	if(arguments.length!= 0){
		return 1;
	}
	return 0;
}

console.log(apply('sdfls'));