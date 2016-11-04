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
	if (rezaultQuestion ==  null)return false ;
	if(i==3)break;
	}
	while (rezaultQuestion != quest)
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
				
				
			}else if(rez == false){return;}
			
	}
	
	
}
games();





		


	
