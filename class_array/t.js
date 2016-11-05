var obj = {
  className: ''
}

function addNewName(obj, name){
	var str = obj.className.toLowerCase();
		if(!~str.indexOf(name)){
			str += ' '+ name;
		}
		return obj.className = str;
}

addNewName(obj,'div');
console.log(obj);

function addNewElement(obj, name){
	var mas = obj.className.split( ' ');
	for ( var i=0; i<mas.length; i++){
		if(mas[i]==name)return ;
	}
	mas.push(name);
	
	return obj.className =mas.join(' ');
	
}
addNewElement(obj,'f5647g');
console.log(obj);

var str = 'list-style-image';

function camelize(str){
	var mas =str.split('-');
	for (var i=1; i<mas.length; i++){
		var netWord=mas[i];
		var ferstLitter = mas[i].charAt(0).toUpperCase();
		for (var j=1; j< netWord.length; j++){
		  ferstLitter+=netWord.charAt(j);
	}
	mas[i] =ferstLitter;
	}
	return str = mas.join('');
	
}

console.log(camelize(str));



function checkEmail(email){
	var AtIndex = email.indexOf('@');
	
	if(~AtIndex||AtIndex==0){
		return false;
	}
if(~email.indexOf('.',email.indexOf('@'))||(email.length-1)==email.indexOf('.')){
		return false;
	}
if(email.indexOf('@')- email.indexOf('.') <= 1 ){
	return false;
}

var lastAtIndex = email.lastIndexOf('@');
if(lastAtIndex!==email.indexOf('@')){
	return false;
}

return true;
}



console.log(checkEmail("email@local.com"));


function checkEmailRegExp(email){
	var tpl = new RegExp('\\w+@\\w+\\.\\w+');
	
	return tpl.test(email);
}


console.log(checkEmailRegExp("email@local.com"));

var tpl = 'Hello, #name#! This is tutorial about regex.';
var name = 'Andrey';
console.log(tpl.replace('#name#', name));

function replaceCustom(str){
	var tpl = new RegExp('([,!.])', 'g');
	var tpl_literal = /([,.!])/g;
	return str.replace(tpl_literal, '$1 ');
}

console.log(replaceCustom(tpl));