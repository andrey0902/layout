var list = document.querySelector('.list');
var li=list.querySelectorAll('li');
for(var i=0; i<li.length;i++){
    var span=document.createElement('span');
    var liSpan=li[i];
    liSpan.insertBefore(span, liSpan.firstChild);
    span.appendChild(span.nextSibling)
}

list.addEventListener('click',hidden);
function hidden(e) {
    var target = e.target;

    if (target.tagName == "SPAN") {
        var lis= target.parentNode; // lis==li

        var CildrenConteynerUL=  lis.getElementsByTagName('ul')[0];

        if(!CildrenConteynerUL)return;

        CildrenConteynerUL.hidden = !CildrenConteynerUL.hidden;





       // target.target.parentNode.visibility = 'hidden';
    }
}


var div= document.getElementById('menu');

function Menu(elem){

	this.load=function(){
		console.log('Загружаю!');
	};
	this.save=function(){
		console.log('Save')
	};
	this.open=function(){
		console.log('Open')
	};
	var self = this;
	elem.addEventListener('click',sabj);
	function sabj(e){
		var target= e.target;
		var action= target.getAttribute('data-action');
		if(action){
			self[action]();
		}
	}
};



new Menu(div);