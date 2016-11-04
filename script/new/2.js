



var number = Math.floor(Math.random()*10);
console.log(number);

var guest = + prompt('Введите число от 0-10', 10);





	mark: while(true){
	
		switch (true){
			case (guest==number):
			alert('Вы угадали, поздравляем!');
			 break mark;
			 case (guest < number / 2 ):
			 guest = + prompt('очень холодно' );
			 break ;
			 case (guest < Math.floor(  number / 1,3)) :
			 guest = + prompt('маловато)))' );
			 break ;
			 case (guest >number * 2):
			 guest = + prompt('очень много)))' );
			 break ;
			 case(guest >Math.floor(number * 1,5)):
			 guest = + prompt('многовато))) ' );
			 break ;
			default:
			guest = + prompt('Введите число от 0-10', 10);
		 
		};
	

	};

	
	