var miximFanction={
	sayHi:function(){
		console.log(this.name);
	},
	fak: function (level) {
		console.log(this.name+ '  you level: '+ level);
	}
};

function User(name) {
	this.name=name;
	for(var key in miximFanction)User.prototype[key]=miximFanction[key];

}
var user = new User('Dima');

user.sayHi();
user.fak(5);