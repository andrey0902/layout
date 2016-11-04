var obj = {
  className: 'open menu'
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