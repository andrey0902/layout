var d= document.getElementById('d');
var d2= document.getElementById('d2');
var p1= document.getElementById('p1');
d.addEventListener('click',say1);
window.addEventListener('click',function(){console.log('HELOW Im window')})
var a;
var b;
function say1(event){
	
	var target = event.target;
console.log("target = " + event.target.tagName + ", this=" + this.tagName);
console.log('target name  '+ event.target.tagName + ' prosto target '+ event.target);
var date= target.getAttribute('data-action');
var color= target.getAttribute('style');
console.dir(a=event);
console.dir(this)
console.dir(b = event.currentTarget)
console.dir(event.target);
	if(event.target.tagName=='DIV'){
		console.log('div');
	}
	
	
}



var but_id = document.getElementById('k1');
var butK2= document.getElementById('k2');
var k3= document.getElementById('k3');
var k4 = document.getElementById('k4');
var k5 = document.getElementById('k5');
var k6 = document.getElementById('k6');
var k7 = document.getElementById('k7');
var text= document.getElementById('text');
var t1= document.getElementById('t1');


text.addEventListener('focus',fouc);
butK2.addEventListener('click',say);
but_id.addEventListener('click',sayHi);
but_id.addEventListener('onkeydown',sayHi);
k3.addEventListener('mouseup',Mousup);
k4.addEventListener('mousedown',Mousdoun);
k5.addEventListener('mousemove',Mousemov);

k6.addEventListener('mouseover',Mouseover);
k7.addEventListener('mouseout',Mouseout);


(function(){
	t1.value ='Мы получили фокус сразу';
})()

function fouc(){
	this.value='Мы получили фокус';
}



function Mouseover(){
	console.log('при навидении мыши на блок');
}
function Mouseout(){
	console.log('при вывода мыши из блока');
}


function Mousemov(){
	console.log('при движении  мыши ');
}
function Mousup(){
	console.log('когда мыш отпустили');
	
}
function Mousdoun(){
	console.log('когда мыш нажали');
}


function say(){
	if(but_id.hidden ==true){
		console.log(but_id.hidden);
		but_id.hidden= false;
		/*but_id.style.display = '';*/
			
	}else{
		but_id.hidden= true;   /*but_id.style.display = 'none';*/
	}
	
	
	console.log(this.value);
}

function sayHi(event){
	console.dir(event);
	console.log('HELOW ADMIN');
}




var show = document.querySelectorAll('.button');
//console.log(show);
for (var i =0; i<show.length; i++){
	var batton =show[i];
	batton.onclick = function (){
		var el = this.parentNode;
		console.log( el);
		el.style.display ='none';
	}
	
}




/*

var temp = document.querySelector('.menu > li');
console.log( temp);

var value = document.getElementById('menu').style.display;
console.log( value);
temp.addEventListener('click', hiden);

function hiden(){
	var value = document.getElementById('menu').style.display;
	if(value!= 'none'){
		value = document.getElementById('menu').style.display ='none';
	}else{
		value = document.getElementById('menu').style.display ='';
	}
}

function hendler(){
	document.getElementById('el').style.display = 'none';
	text1.style.backgroundColor = 'green';
};
function hendler1(){
	document.getElementsByClassName('privat')[0].style.display = 'none';
};
el.addEventListener('click',hendler);
el.addEventListener('click',hendler1);


function countRabbits(){
	for( var i=1; i<3; i++){
		alert('number click ' + i);
	}
}

elem.onclick = function (){
	alert( 'say hi!');
};

var text1 = document.getElementById('text');

text1.style.backgroundColor = 'red';


var parag = document.getElementsByTagName( 'p');



var articles = document.getElementsByClassName('privat');
console.log( articles );
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function isNumeric( num){
	return !isNaN(parseFloat(num))&&isFinite(num);
}

function upNumber( obj ){
	for ( key in obj ){
		obj[key] = (isNumeric(obj[key])==true)? obj[key]*2: obj[key];
	}
	return obj;
}

*/
/*console.log( location.href);*/
/*
document.body.style.backgroundColor = '';



 for ( var i = 0; i < document.body.childNodes.length; i++){
	 console.log(document.body.childNodes[i]);
 }

 var table = document.getElementById('table');
console.log (table);

for ( var i= 0; i<5; i++){
	table.rows[i].cells[i].style.backgroundColor = 'red';
}

*/
 
/*var s1alaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var salaries = {
 };

function perfekt( obj ) {
	var name = '';
	var cehc =0;
	for ( key in obj ){
		if (cehc < obj[key]){
			cehc = obj[key];
			name = key;
		}
		
		
	}
return name || 'нет сотрудников';
}

console.log ( perfekt(salaries));
*/
/*var injinia = {
	'vasa' : 300,
	'peta' : 200,
	'cergeu': 100
};
var errr ={};

function salaris( obj ) {
	var sum = 0;
	for ( var key in obj){
	  sum += obj[key];
}
	return sum;
}

console.log ( salaris(errr));
*/


/*function isEmptu( obj ){
	for ( var key in obj ){
		return false;
	}
	return true;
}

console.log( isEmptu(persone) );

var lexa ={};

var persone = {
	'name' : "Andrey "
};
var key = 'name';

persone['age'] = 28; 
delete persone.age;

persone.frend = 5;
persone['tac proverka la la la'] = 'lsdfjlsfjklskdfj';

persone['game'] = {
	ps : 'nitfospid',
	ps1 : 'gta',
	nops : 'ala'
};

console.log( persone['game']['ps']);

var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};
var count = 0;
for ( var key in menu ){
	count++;
	console.log ( 'key = '+ key+'; ' + 'value = '+ menu[key]);
}
console.log( 'count elements ='+ count );
console.log( isEmptu(persone) );

*/
/*
function createMani( str ){
	
	return + str.slice( 3 );
}
console.log ( createMani('грн363'));
	*/
/*
function truncate( str, x ){
	
	return str.slice(0 ,x) + '...';
}


console.log( truncate('ты есть редиска и тебя нельзя брать с собой', 17) );
*/
/*
function checSpam( str ){
	str= str.toLowerCase;
	if (~str.indexOf('viagra') ||  ~str.indexOf('xxx')) return true  ;
	
	return false ;
}

console.log( checSpam('lala lala lala lala'));

*/

/*function charFest(str){
	
	return str.charAt(0).toUpperCase() + str.slice(1 );
	
}
console.log( charFest('andrey') );
*/
/*var str = "Ослик Иа-Иа посмотрел на виадук";

var target = 'Иа';
 var position =-1;
while((position = str.indexOf( target, ++position )) != -1 ) {
		 
	 console.log( position );
	
	 
}
var name= 'Andrey';


var str = name.slice(-5,-2);

console.log ( str );
var str = '';
for (var i = 1034; i <= 1113; i++) {
  str += String.fromCharCode(i);
}

*/

/*
var str = 'Anddrey';

console.log( str.length);

var newStr = str.charAt(0) + str.charAt(4)+ str.charAt(6);

newStr += str[1];

newStr = newStr.toUpperCase();
console.log( newStr );
 
 var name = 'Andrey is good boy';
 
 if ( ~ name.lastIndexOf( 'ieees' )) console.log( ' yas i do ' );
 
 console.log ( );

*/
/*
function getSities(){
	
	var sities = prompt ('Введите название городов чежез запятую или нажмите отмену!!!!');
	  if (sities == false||sities == null){
		  return [ 'Запорожье', 'Киев', 'Донбас', 'Львов', 'Луганск', 'Бердянск'];
	  }
	sities = sities.split(',');
	return sities;
}


function random(str){
	var newRand ;
	var arr = [];
	while ( arr.length < str.length){
		newRand = Math.floor(Math.random()*str.length);
		 if (arr.indexOf(newRand) == -1) {         // проверим есть оно  у нас или нет 
              arr.push(newRand);         // записываем в массив т.к нету

         }
    }   
	return arr;	
}
function scipt(question){
	var encryptRand = random(question); 
	var newStr= '';
	
	for ( var i = 0; i < question.length; i++){
	newStr += question.charAt(encryptRand[i]);
}
	return newStr;
}

function question(quest){
	
	var i = 0;
	do{
		i++;
	var newStr = scipt(quest);
	var rezaultQuestion = prompt ( 'Соберите название города из букв - ' + newStr );
	}
	while (rezaultQuestion != quest||i==3)
	if (rezaultQuestion == quest){
		return true;
	}

	return false;
}

function games(){
	var siti = getSities();
	
	Game: for ( var i = 0; i < siti.length; i++ ){
		
			var rez = question (siti[i]);
			if (rez == true ){
				alert ( 'Выугадали!!!!');
				if(i+1 < siti.length ){
				var game = confirm('Хотите продолжить игру ?');	
				if (game != true){break Game;}
				}
				
				
			}
			
	}
	
	
}
games();





		


	
*/

/*
var random =  5 + Math.floor(Math.random()* (15 -5));
console.log(random);
*/
/*
function getDecimal(num) {
  var str = "" + num;
  var zeroPos = str.indexOf(".");
  if (zeroPos == -1) return 0;
  str = str.slice(zeroPos);
  return +str;
}

alert( getDecimal(12.5) ); // 0.5
alert( getDecimal(1.2) ); // 0.2
*/


/*
var i = 0;

while( i != 10 ){
i += 0.2 ;
 i = +i.toFixed(1);
	console.log(i);
}
*/
/*
console.log(( 0.2 * 10  + 0.1 * 10 )/10 + ' $' );
console.log( +( 0.2  + 0.1 ).toFixed(1) + ' $' );
*/
/*
var number = prompt ('munber, ');
var rezault = number.split(' ' );
console.log(+rezault[0] + +rezault[1]);
*/
/*
var x= (function(){return 1;})();

console.log(x);

*/
/*
var number =+ prompt ('number');

function fac( number ){
	
	return (number != 1)? number * fac(number -1): number;
}
console.log( fac( number ));
*/





/*var number =+ prompt ('number');

function sum( number ){
	
	return (number != 1)? number + sum(number -1): number;
}
console.log( sum ( number ));
 */
 /*
 var number = + prompt ( 'number');
var rezault=0;
for ( var i = 1; i <= number; i++ ){
	rezault += i; 
}
console.log( rezault);
*/
/*
var age = + prompt ('write uoy age')

var yas = (age > 18)? function(){console.log('yas age > 18')}: function(){console.log('no!!! age < 18')};

yas();

function sayHi() {   // (1)
  alert( "Привет" );
}


var music = sayHi;

var func = sayHi;    // (2)
func(); // Привет    // (3)

   music(); 


function shOw(){
	console.log('HELOW');
}

var x = shOw;
x();

*/
/*
nextPrime:
  for (var i = 2; i < 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }


for (var i = 2; i< 8; i++){
	if(i%2!=0 || i==2) console.log(i);
}
*/


/*
while (true){
	var rezault = + prompt ('write number hight 100');
	if (rezault >= 100 ||rezault == null ){
		break;
	}
}
*/


/*for (var i = 2; i <= 10; i++) {
if (i%2 == 0) console.log( i );

};
*/

/*
var sum =0;

for(;;){
	var number = + prompt('write number');
	
	if(!number)break;
	
	
	sum += number;
} 
console.log('sum numbers =' + sum);

*/
/*for(var i=0; i<=5; console.log(i)){(i++)}*/

/*
var j=0;
do{
	console.log(j);
	j++;
}
while (j==1);
*/
/*
var i=0;
while(i!=5){
	console.log(`${i}`)
	i++;
}
*/
/*
var age = 1;

if ( age >= 90 || age <=14) console.log('age >90 || age < 14');
*/

/*
var age = 52;

if( age >= 14 && age <= 90){
	console.log( 'age >14 && < 90');
}
*/
/*
var rez = 57 && 43;
console.log( rez);
*/

/*

var mesage = prompt ('vot it is');

(mesage =='vasay')? 
console.log('vasay'):(mesage == 'derek')?
console.log('direk'):mesage ==''? console.log('not login'):'';
*/

/*
var rez = prompt ('get login');

if(rez =='admin'){
	var pass= prompt ('get pass');
	if( pass == 'pass'){
	console.log('HELOW ADMIN');
	}else
	console.log('you not admin');
}else if( rez == null){
	console.log('gerari ir');
}else 
	console.log('I not andestent');
*/

/*
var rezault = + prompt ('write number');


(rezault == 0)? console.log('0'):(rezault > 0 )? console.log('2'):(rezault < 0 )? console.log('-2'): '';

*/