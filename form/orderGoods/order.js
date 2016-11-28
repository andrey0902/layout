
$('#myModal').on('hidden.bs.modal', function (event) {

	document.getElementById('form1').submit();
});

serchEelement('sabmit11')
	.addEventListener('click',function (e) {
		if(	($('#myModal').on('show.bs.modal', function (event) {
				return true;
			}))){
			e.preventDefault();
		}

	});


var country={
	'cantri':'Страна',
	'Usa':'USA',
	'Ukr':'Украина',
	'Rus':'Россия',
	'Bel':'Беларусь'
};
var state={

	'Bel':{
		'state':'Область',
		'Bel':'Минская'
	},
	'Usa':{
		'state':'Область',
		Usa:'Texas'
	},
	'state':'Область',
	'Rus':{
		'state':'Область',
		Ms:'Московская',
		Pt:'Питерская'
	},
	'Ukr':{
		'state':'Область',
		Dn:'Донецкая',
		Zp:'Запорожская',
		Lg:'Луганская',
		Kv:'Киевская'
	}
};
var sity={
	'sitis':'Город',
	Dn:{
		Don:'Донецк'
	},
	Zp:{
		Zap:'Запорожье',
		Ber:'Бердянск'
	},
	Lg:{
		Lyg:"Луганск"
	},
	Kv:{
		Kiev:'Киев'
	}
};
var stateKey=Object.keys(state);
var sitKey=Object.keys(sity);

function fill(arg,id,tag) {
	var elem=serchEelement(id);

	for(key in arg){
		var option=	creteElement(tag);
		option.value=key;
		option.innerText=arg[key];
		elem.appendChild(option);
	}
}
function creteElement(elem){
	return document.createElement(elem)
}
function serchEelement (id) {
	return document.getElementById(id);
}
function relation(){

}
function activElemetn(id,param) {
	serchEelement(id)
		.disabled=param;
}
activElemetn('stat',true);


function del(id){
	var parent=serchEelement(id);
	var children=parent.children;
	if(children.length!=0){
		var length=children.length;
		for(var i=0; i<length; i++){
			parent.removeChild(children[0]);
		}
	}

}
activElemetn('stat',true);
activElemetn('sit',true);


serchEelement('placeOrder')
	.addEventListener('change',function (e) {
		var target=e.target.value;
		if(e.target.value!='cantri') {
			activElemetn('stat', false);
			if(e.target.id != 'stat'&&e.target.id != 'sit'){
				if(stateKey.indexOf(target)||stateKey.indexOf(target)==0) {
					del('stat');
					fill(state[target], 'stat', 'option');
				}
			}

		}
		if(e.target.id=='stat'){
			activElemetn('sit',false);
			if(sitKey.indexOf(target)||sitKey.indexOf(target)==0) {
				del('sit');
				fill(sity[target], 'sit', 'option');
			}
		}

		if(target=='cantri') {
			activElemetn('stat', true);
			activElemetn('sit', true);
		}
	});


fill(country,'country','option');
fill(sity,'sit','option');
fill(state.Ukr,'stat','option');


serchEelement('sabmit11').disabled=true;

serchEelement('license')
	.addEventListener('change',function (e) {
		if(e.target.checked){
			serchEelement('sabmit11').disabled=false;
			return;
		}
		serchEelement('sabmit11').disabled=true;
	});



















function Order() {
	this.date=new Date();
	this.ear=this.date.getFullYear();
}
Order.prototype.check=function(){
	this.elem=this.serchElementBySelector('input[name=age]');
	var self= this;
	this.handler = function(e){
		var yearBirth= new Date(e.target.value).getFullYear();
		console.log(self.ear-yearBirth)
		if(self.ear-yearBirth<18){
			serchEelement('license').disabled=true;
			age.classList.toggle('has-error');
			age_error.style.display='';
		}else{
			serchEelement('license').disabled=false;
			age_error.style.display='none';
			age.classList.value='form-group';
			}

	};
	this.addEvent(this.elem,this.handler,'change')
};
Order.prototype.addEvent=function(element,func,subj){
	element.addEventListener(subj,func);
};

Order.prototype.serchElementBySelector=function (selector) {
	return document.querySelector(selector);
};


var order= new Order();
order.check();
//console.log(order.serchElementBySelector('input[name=age]'))
//console.log(order.date);
//console.log(order.ear);
