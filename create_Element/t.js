var div = document.createElement('div');
var textNode = document.createTextNode('Yas I\'m ');
div.className ='content';
div.appendChild(textNode);
document.body.appendChild(div);

var s = div.style;

div.innerHTML = '<strong> YAS!</strong>';


var newLi = document.createElement('li');
newLi.innerHTML = 'Hellow World';

list.appendChild(newLi);

list.insertBefore(newLi,list.children[1]);
var lala =list.insertBefore(newLi,list.firstChild);
console.log( lala);


var ferst = document.body.children[0];
var last = document.body.children[1];

console.log(ferst, last);

document.body.insertBefore(last, document.getElementById('list').nextElementSibling);
																
var div = document.createElement('div');
  div.className = "alert alert-success";
  div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

  document.body.appendChild(div);
console.log(div.parentNode);
  setTimeout(function() {
    div.parentNode.removeChild(div);
  }, 5000);

  
var span = document.createElement('span');
span.innerHTML = 'Hellow Andrey';
span.style.color = 'red';  
 
 setTimeout(function(){
	  document.body.replaceChild(span,document.getElementById('list') );
 },5000);
  
  var div3 = document.createElement('div');
  document.body.appendChild(div3);
  var text = document.createTextNode('новый текстовый узел');
  var text2 = 'sldjflskfj';
  div3.textContent=text2;
  