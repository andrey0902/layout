function checData(){
    do{
        var num = + prompt ('Введите любое число');
    }while(!num)

    return num;
}

function settData(){
    var number =checData();
    var setFunction = prompt('Введите три функции через запятую - plus,minus,up');
    var nameFunction =setFunction.split(',');
    console.log( number, nameFunction);
    return [number, nameFunction];
};




function getRezault () {

    var listFunction = {
        'plus'  : function ( number ){ return number + 5;},
        'minus' : function ( number ){ return number - 3;},
        'up'    : function ( number ){ return number * 2;}
    };

    var data = settData();
    var key= data[1][0];
    var key1= data[1][1];
    var key2= data[1][2];



   return listFunction[key2](listFunction[key1]( listFunction[key](data[0] )) );
};


var rezault = getRezault();

console.log( rezault);
