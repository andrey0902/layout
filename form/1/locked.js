var img = document.getElementsByTagName('img1');

function showImage(e) {

	img1.style.opacity=e.target.value;

}

var range=document.getElementById('range')
range.addEventListener('change',showImage);