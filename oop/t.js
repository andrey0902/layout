function Machine(pow){
	var self = this;
	self._power =pow;
	  self._enabled = false;
	this.enable = function(value){
		self._enabled = value||true;
	};
	this.disabled = function(value){
		self._enabled = value||false;
	};
	this.getEnabled= function(){
		console.log(self._enabled +'  Smting');
	};
}
var machine = new Machine(100);
machine.enable();
machine.getEnabled();
console.log(machine._power);

function Coffe(pow,capacity){
	Machine.apply(this,arguments);
	
	this.run = function(){
		if(this._enabled==true){
			
			var tamerId = setTimeout(function(){alert('Щас все будет');},2000)
		}else{
			
		alert ('Опаньки а кофеварка ВЫКЛЮЧЕНА!!!');
			
			};
			var parentDisable= this.disabled;
		this.disabled = function (){
			parentDisable();
			clearTimeout( tamerId);
			alert ('кофеварка ВЫКЛЮЧЕНА!!!');
			}	
			
			
	}

	
};
var co = new Coffe(100);

co.run();
co.enable();
co.run();
co.disabled();
co.run();

/*
function CoffeeMachine(pow, capacity) {
	Machine.call(this);
  var waterAmount=H2O=0;
 var power =pow ;
  this.power =function(max){
	  if(!arguments.length) return power;
	  if(max<0){
		  throw new Error("Значение должно быть положительным");
	  }else if(max > pow){
		 throw new Error("Нельзя задать большую мощьность Max: " + pow); 
	  }
	  power = max;
  };
 
  
  
  this.setWaterAmount = function(amount) {
	 
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }
	if((H2O+=amount)>capacity){
	 	throw new Error("Сейчас залито воды  " + waterAmount+ ' максимум можно залить : ' + capacity);
	}else{
		 waterAmount += amount;
	}
    
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

 // что делать по окончании процесса
  var onReady = function() {
    alert( 'Кофе готово!' );
  };
  
  
  this.setOnReady = function (func){
	  onReady = func;
  }
  
  this.isRunning= function(){
	  if(tamerId>0){return true}
	  return false;
  }
  
  
  
  
  
  
  	this.info= function(){
		console.log('мощьность кофеварки ' + pow+ ' Ватт');
	};
	var WATER_HEAT_CAPACITY = 42;
	// расчёт времени для кипячения
  var sel = this;
  function getBoilTime(){
	  console.log(waterAmount);
	    console.log((waterAmount*WATER_HEAT_CAPACITY*80)/pow);
	  return  (waterAmount*WATER_HEAT_CAPACITY*80)/pow;
  };
 
  var tamerId=0;
  this.run =function(){
  tamerId =  setTimeout(function(){  onReady(); tamerId=0; },getBoilTime());
 
  
  };
  this.stop = function(){
	  if(tamerId)clearTimeout(tamerId);
	  
  }
}


var coffe = new CoffeeMachine(100,100);
coffe.setWaterAmount(50);
coffe.power(20);
console.log(coffe.power());
coffe.setWaterAmount(10);
coffe.setWaterAmount(10);
console.log(coffe.getWaterAmount());
console.log('this');
coffe.getEnabled();


coffe.setOnReady(function() {
  var amount = coffe.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});
coffe.run();
console.log('its work :'+ coffe.isRunning());
setTimeout(function(){console.log('its work :'+ coffe.isRunning());},5000);
console.log(coffe.getWaterAmount());









function User(){
	var ferstName='';
	var surName = '';
	this.setFerstName = function(name){
		ferstName = name;
	};
	this.setSurname = function (name){
		surName = name;
	};
	this.getFullName = function(){
		console.log(ferstName +' '+ surName);
	};
};

var user = new User;
user.setFerstName('Andrey');
user.setSurname('Pavlov');

user.getFullName();



*/


/*


function Coffemahcine(watt,opaciti){
	
	 var waterAmount  =0;
	this.setWaterAmos =function (amount){
		if(amount<0 ){
			 throw new Error("Значение должно быть положительным");
		};
		if(amount>opaciti){
			throw new Error("Значение должно быть меньше размера кофеварки");
		}
		waterAmount= amount;
	}
	this.getWaterAmos= function(){
		console.log('Емкость кофеварки ' + waterAmount + ' ml');
	};
	
	
	this.info= function(){
		console.log('мощьность кофеварки ' + watt+ ' Ватт');
	};
	var WATER_HEAT_CAPACITY = 42;
	// расчёт времени для кипячения
  var sel = this;
  function getBoilTime(){
	  console.log(waterAmount);
	    console.log((waterAmount*WATER_HEAT_CAPACITY*80)/watt);
	  return  (waterAmount*WATER_HEAT_CAPACITY*80)/watt;
  };
  // что делать по окончании процесса
  function onReady() {
    alert( 'Кофе готово!' );
  };
  var tamerId=0;
  this.run =function(){
  tamerId =  setTimeout(onReady,getBoilTime());
  
  };
  this.stop = function(){
	  if(tamerId)clearTimeout(tamerId);
	  
  }
  
};

var coffemahcine = new Coffemahcine(10,100);
coffemahcine.setWaterAmos(20);

console.log(coffemahcine.getWaterAmos());
coffemahcine.info();
coffemahcine.run();
coffemahcine.stop();
coffemahcine.run();

function User(name){
	var test = 55;
	var b = 100;
	
	this.sum =function (){
		console.log(b + test);
	};
	
	this.sayHi =function (){
		console.log('Hellow, Im  ' + name);
	};
};




var user = new User('Andrey');

user.sayHi();
user.sum();
*/