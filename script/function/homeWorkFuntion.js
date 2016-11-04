



var mas =['naMe','minus','up'];
var numder =5;
var ppp = {
    'naMe': function(number){
        return number +3;
    },
    'minus': function(number){
        return number -1;
    },
    'up': function(number){
        return number *2;
    }

};

function rez( mas, ppp, number){

    var key = mas[0];
    var key1= mas[1];
    var key2= mas[2];
    return ppp[key](ppp[key1](ppp[key2](number)));
}

var sex = rez(mas, ppp, numder);

console.log(sex);

var key= 'naMe';








function settData(){
    var number =+ prompt ('Введите любое число');
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



    return listFunction[key](listFunction[key1]( listFunction[key2](data[0] )) );
};


var rezault = getRezault();

console.log( rezault);

