Function.prototype.defin=function (ms) {
	setTimeout(this,ms);
}

function d() {
alert('Tadam ');
}
d.defin(2000)
function Rabbit(name) {
	this.name = name;
}

function set (a,b,c) {
	console.log(arguments)
}
var amb={
	selfi:'FOTO'
}
set(44,'kis',amb)


Rabbit.prototype.sayHi = function() {
	alert( this.name );
}

var rabbit = new Rabbit("Macha");
rabbit.sayHi();


 console.log( Object.getPrototypeOf(rabbit)===Rabbit.prototype);





function Led() {}
Led.prototype={
	key:'Aladin'
}

var led= new Led();
console.log(led.key);

var user={
	jump: true
};

function Timer() {
	this.setEl='13-00';

}
Timer.prototype=user;
var timer= new Timer();

console.log(timer.jump);





function NewStrim() {
	this.stream= 'fifti cent'

}
NewStrim.prototype=user;
var newStrim =new NewStrim();
var worcer={
	worc: true,
	__proto__: newStrim

};
for(var key in worcer){
	if(!worcer.hasOwnProperty(key))continue;
	console.log('key '+ key + '  value  '+ worcer[key] )
}


user.test=function(){
	this.name='Vasiliy';
};

worcer.test();
console.log(worcer.name);

var head = {
	glasses: 1

};

var table = {
	pen: 3,
	__proto__:head
};

var bed = {
	sheet: 1,
	pillow: 2,
	__proto__:table
};

var pockets = {
	money: 2000,
	__proto__:bed
};

function CreateObj(name){
	this.name=name;
	this.getName=function () {
		return this.name;
	};
	this.__proto__=pockets;
}

var newUser= new CreateObj('Admin');
newUser.testim= function(){
	return 5+5;
}
var key =  Object.getOwnPropertyNames(newUser);
console.log( key);

for(var i=0; i<key.length;i++){
	console.log( key[i]);
}
var keyO= Object.keys(newUser);


console.log(keyO);


function Person(name){
	this.name = name;
}

Person.prototype.greet = function(otherName){
	return "Hi " + otherName + ", my name is " + name;
}