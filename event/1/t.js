var k= document.getElementById('k10');
var d;
k.addEventListener('contextmenu',function(e){
	var target= e;
	e.preventDefault();
	e.target.classList.toggle('test');
d=e;
	console.log(e)
})


document.getElementById('k9')
.addEventListener('click',function (e) {
	if(!e.ctrlKey)return;
	console.log('Hellow');
})
document.getElementById('t1')
.addEventListener('mousemove',function (e) {

	this.value= e.clientX +" : "+e.clientY;
})
lasKlic=null;
 document.querySelector('ul')
	.addEventListener('click',function(e){
		if(e.target.tagName=="LI"){
			addClass(e);
		}

		if(e.target.tagName=="LI"&&e.ctrlKey){
			ctrlAddClassName(e);
		}
		if(e.target.tagName=="LI"&&e.shiftKey){
			shitAddClassName(e);
		}

		lasKlic=e.target;
	})

function addClass(e){
		e.target.classList.toggle('test');
}
function ctrlAddClassName(e){

}
function shitAddClassName(e) {
	var start= lasKlic||ul.children[0];
//console.log(start)
	var isLastClickedBefore = start.compareDocumentPosition(e.target) & 4
	var position= start.compareDocumentPosition(e.target);
	console.log(isLastClickedBefore);
	//if(position==2){
	//	for(var i = start; i != e.target; i=start.previousElementSibling){
		//	console.log(i)
		//	i.classList.add('selected');
		//}
	//}//else if(position==4){
	//	for(var i = start; i != e.target; i=start.nextElementSibling){
	//		console.log(i)
			//i.classList.add('selected');
	//	}
	}

//}
var ul = document.querySelector('ul');

var lastClickedLi = null;

// --- обработчики ---



// --- функции для выделения ---

function toggleSelect(li) {
//	li.classList.toggle('selected');
}

function selectFromLast(target) {

}




function deselectAll() {
	for (var i = 0; i < ul.children.length; i++) {
		ul.children[i].classList.remove('selected');
	}
}

function selectSingle(li) {
	deselectAll();
	li.classList.add('selected');
}