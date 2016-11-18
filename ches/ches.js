var table = document.createElement('table');
table.id='tl';
table.width=500;
table.border=1;
table.style.marginLeft= '300px';
table.style.marginTop= '70px';
document.body.appendChild(table);

var img = document.createElement('img');
img.src = img.src = './img/d.gif';
img.style.width= '50px';
img.style.height= '50px';

var img1 = document.createElement('img');
img1.src = img.src = './img/p.gif';
img1.style.width= '50px';
img1.style.height= '50px';

table.addEventListener('click',hi);
function hi(e){
	var target =e.target;
	while(target!=table){
		if(target.tagName=="TD"){
		console.dir('ура нашли ТД');
		return;
	}target= target.parentNode; 
	}
	
	console.dir(target);
	console.log(target.tagName);
	console.log(target.getAttribute('style'))
}


for (var i=0; i<8; i++){
	
	var row = table.insertRow(i);// строка
	for (var j=0; j<8;j++){		
	var	cell = row.insertCell(j); //столбец
	cell.innerHTML="с  "+i+" ст "+j ;
	cell.width="150";
	cell.height="50";
	
	  if(i==1){
		  console.log(i+ ' -'+ j);
		  (table.rows[1].cells[j].innerHTML='<img src="./img/p.gif" style="width: 50px; height: 50px;">');
	  }else if(i==6){
		  (table.rows[6].cells[j].innerHTML='<img src="./img/p_b.gif" style="width: 50px; height: 50px;">');
	  };
	  
	    if(i==0){
			if(j==3){
			  (table.rows[0].cells[j].innerHTML='<img src="./img/d.gif" style="width: 50px; height: 50px;">');
		  };
			if(j==4){
			  (table.rows[0].cells[j].innerHTML='<img src="./img/krl.gif" style="width: 50px; height: 50px;">');
		  };
			
			if(j==2||j==5){
			  (table.rows[0].cells[j].innerHTML='<img src="./img/o.gif" style="width: 50px; height: 50px;">');
		  };
			if(j==1||j==6){
			  (table.rows[0].cells[j].innerHTML='<img src="./img/c.gif" style="width: 50px; height: 50px;">');
		  };
		  if(j==0||j==7){
			  (table.rows[0].cells[j].innerHTML='<img src="./img/t.gif" style="width: 50px; height: 50px;">');
		  };
	  };
	    if(i==7){
			if(j==3){
			  (table.rows[7].cells[j].innerHTML='<img src="./img/d_b.gif" style="width: 50px; height: 50px;">');
		  };
			if(j==4){
			  (table.rows[7].cells[j].innerHTML='<img src="./img/krl_b.gif" style="width: 50px; height: 50px;">');
		  };
			
			if(j==2||j==5){
			  (table.rows[7].cells[j].innerHTML='<img src="./img/o_b.gif" style="width: 50px; height: 50px;">');
		  };
			if(j==1||j==6){
			  (table.rows[7].cells[j].innerHTML='<img src="./img/c_b.gif" style="width: 50px; height: 50px;">');
		  };
		  if(j==0||j==7){
			  (table.rows[7].cells[j].innerHTML='<img src="./img/t_b.gif" style="width: 50px; height: 50px;">');
		  };
	  };
	
	
				if(i%2==0&&j%2==0 ){
						table.rows[i].cells[j].style.backgroundColor= '#BD5222';
				}else if(i%2!=0&&j%2!=0 ){
						table.rows[i].cells[j].style.backgroundColor= '#BD5222';
				}else{
					table.rows[i].cells[j].style.backgroundColor= '#351201';
				}
	
	
	}
	
}






























/*

var table = document.createElement('table');
table.id='tl';
table.width=500;
table.border=1;
table.style.marginLeft= '300px';
document.body.appendChild(table);


for (var i=0; i<8; i++){
	
	var row = table.insertRow(i);// строка
	for (var j=0; j<8;j++){
	var	cell = row.insertCell(j); //столбец
	cell.innerHTML="с  "+i+" ст "+j;
	cell.width="250";
	cell.height="50";
	}
}

table.rows[0].cells[0].style.backgroundColor= 'red';






*/



















    















