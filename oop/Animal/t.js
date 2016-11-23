function CoffeMachine(power){
	this.power=power;
	this.waterAmot=0;
}
CoffeMachine.prototype.run=function () {

	setTimeout(function () {
		console.log('Coffe готов');
	},this.getTimeToBoil())

}
CoffeMachine.prototype.WATER_HEAT_CAPACIT=42;

CoffeMachine.prototype.getTimeToBoil=function () {


	return this.waterAmot*this.WATER_HEAT_CAPACIT*this.power;

}

CoffeMachine.prototype.setWaterAmount=function(amount){
	this.waterAmot = amount;
}

var coffeMachine= new CoffeMachine(30);
coffeMachine.setWaterAmount(1);
coffeMachine.run();





















function Animal(name) {
	this.spid=0;
	this.name=name;
}
Animal.prototype.stop=function (spid) {
	this.spid=0;
	console.log(this.name +' стоит');
}
Animal.prototype.run=function (spid) {
	this.spid+=spid;
	console.log(this.name+'бежит со скоростью: ' + this.spid);
};

var animal= new Animal('Зверь');
animal.run(6);
animal.stop();