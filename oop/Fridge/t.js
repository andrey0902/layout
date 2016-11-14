function Machine(power){
	var self = this;
	self._power = power;
	self._enabled= false;
	
	this.enable = function(){
		self._enabled = true;
	};
	this.disable= function(){
		self._enabled = false;
	};
}

function Fridge(power){
	var power=maxFood = power/100;
	Machine.apply(this,arguments);
	
	var food =[];
	this.addFood= function(){
		if(arguments.length+food.length >maxFood){
			alert('Холодильнике лежит продуктов ' + food.length + ' Максимальный розмер '+maxFood);}else{
				if(arguments&&this._enabled==true){
			      for(var i= 0; i<arguments.length; i++){
			         food.push(arguments[i]);
		           }
				 }else{
			       alert('Холодильник выключен добавить еду нельзя!');
		          }
		}
		
		
	};
	this.getFood=function(){
		console.log(food);
		console.log(power);
	}
}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood('apple','limon');
fridge.getFood();
fridge.disable();
fridge.addFood('apple','limon');
fridge.enable();
fridge.addFood('colla','milcka');
fridge.getFood();
fridge.addFood('colla','milcka');
fridge.getFood();