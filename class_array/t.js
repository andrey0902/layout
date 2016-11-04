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
addNewName(obj,'ffg');

console.log(obj);
addNewName(obj,'f5647g');

console.log(obj);