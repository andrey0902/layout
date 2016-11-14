var list = document.getElementsByTagName('button');

var methods={
	printProperties:function (){
		this.winProperts = Object.keys(window);
		console.log(this.winProperts);
	},
	windowOpen: function(){
		window.open('http://vk.com');
	},
	winWreat: function(){
		var newWin = window.open('#','Hellow','width=300,height=300');
		var div = newWin.document.createElement('div');
	div.innerHTML =("Привет, мир!" )
		var body = newWin.document.body;
		body.appendChild(div);	
	}
}

list[0].addEventListener('click',methods.printProperties);
list[1].addEventListener('click',methods.windowOpen);
list[2].addEventListener('click',methods.winWreat);

