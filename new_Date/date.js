var options = {
 
year: 'numeric',
  month: 'numeric',
  day: 'numeric',
 
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
var tamerId = setInterval (function(){
var temp = new Date().toLocaleString('ru',options);

/*var temp = new Date().getDate()+'-'+new Date().getMonth()+'-'+ new Date().getFullYear()+' '+ new Date().getHours()+' : '+ new Date().getMinutes()+' : '+new Date().getSeconds(); */

span.innerHTML ='Текущяя дата и время : '+ temp ;
	
},1000);
 
setTimeout(function(){
	clearInterval(tamerId);
},1000000)
 
var div = document.createElement('div');

div. id ='myElement';
div.appendChild(document.createTextNode('New Element'));

var lastDiv = document.querySelector('.date');

lastDiv.appendChild(div);
var span = document.createElement('span');
span.innerHTML ='Текущяя дата и время  : ' + new Date().toLocaleString('ru',options);
span.style.display = 'block';
span.className = 'dateNow';

div.appendChild(span);



var start = new Date();

for ( i = 0; i < 100000; i++){
	i = i +4;
}
var end = new Date();

console.log( 'Время выполнения скрипта заняло ' + (+end -  +start) + ' мс');

var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  for (var i = 0; i < 10000; i++) f(arr);
}

console.time("All Benchmarks");

console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");

console.time("walkLength");
bench(walkLength);
console.timeEnd("walkLength");

console.timeEnd("All Benchmarks");

var testData = new Date ();
var options = {

  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
 
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

console.log(testData.toLocaleString("ru", options))


var d = new Date();

console.log( d.toString() );
console.log( d.toDateString() );
console.log( d.toTimeString() );
console.log( Date.parse(new Date()));