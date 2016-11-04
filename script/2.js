var weekdays =[
	'monday',
	'tuesday',
	'wenday',
	'monday1',
	'tuesday1',
	'wenday1',

];
var listofCurrencies ={
		UAN : 26,
		EUR : 1.15,
		RUB : 75,
		JPN : 120
	};


var vasya={
	name: "Vasya",
	day: 1,
	exp: 2
};

var ivanich = {
	name: "Ivan Ivanovich",
	day: 2,
	exp: 14
};

function salaryOnExp(person){
	var base = 50;
	var m =1.3;
	return base + person.exp * m;
	
	
}

function sendSms(person){
	console.log("Здарофа " + person.name + "! Вам на смену в " + weekdays[person.day-1]);
	
}

function sendSmsManagerSalary(person, currency){
	 
	 if(!listofCurrencies[currency]){
		console.error('wrong currency');
		return;
		
	}
	var salary = salaryOnExp(person);
	salary = currencyTransform( salary, currency);  
	
	console.log( person.name + " получает "+ '' +currency+'' + salary.toFixed(2) );
}
function currencyTransform(numInDolar, toCurrency){
	
	return numInDolar * listofCurrencies[toCurrency];
}

sendSmsManagerSalary(vasya, "RiB");
sendSms(vasya);
sendSms(ivanich);