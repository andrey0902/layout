function camelCase(str){
	var newArr=[];
	var arr=str.split('-');
	
	arr.forEach(function(item,i){
		if(i>0)item=item.charAt(0).toUpperCase()+item.substring(1);
		newArr.push(item);
	})
return newArr.join('');
}
console.log(camelCase('font-familu'))
console.log(camelCase('-webkit-border-radius'))


var obj1={

}
function cla(obj,c){
	var arr=[];
	if(!obj.class)obj.class='';
	if(!obj.class==''){
    	var arr=obj.class.split(' ');	
	}
	
	
	if(!~arr.indexOf(c))arr.push(c);
	obj.class=arr.join(' ');
	return obj;
}


cla(obj1,'top');
cla(obj1,'top');
cla(obj1,'nima');
console.log(obj1.class)


var a=[1,5,2,11,8,6,'jamp','java','php'];

a.sort(function(a,b){
	if(+a&&+b){
	return a-b;	
	}else if(!+b){
		return 1;
	}else{
		return 1;
	}
	
	});
console.log(a);



var str= ' сегодня';
var arr=[];
arr=str.split('').reverse().join('');

console.log(arr);

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