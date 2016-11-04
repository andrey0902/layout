/*var subj_c = + prompt('Введите количество предметов');*/


var subject_queue = [
    'Math',
    'Biolog',
    'Fizra'
];
var min_mark = 4.5;

function askStudent(){
    do{
        var name = prompt ('Введите имя студента');

    }while(!name);
    return name;
};

function askStudentMark(tip) {
 return  prompt();
}


function askDataForStudent(){
    var name = askStudent();
    var marks =[];
    var total_mark =0;
    for (var j=0;  j < subject_queue.length; j++){
        var sabject_name = subject_queue[j];
        mark=askStudentMark('введите оценоку'+ sabject_name);
        marks.push(mark);
        total_mark += + mark;

    }
    var avg_mark =(total_mark/subject_queue.length);
    /*	document.writeln(`<p>${name}:${marks.join(', ')}</p>`);*/
    return{
        name: name,
        list: marks,
        avg: avg_mark
    };
}

function printDataForStudent(student){

    document.writeln(`<h2>${student.name}</h2>`);
    document.writeln('<ul>');
    student.list.forEach(function(mark, i){
        var sabject_name =subject_queue[i];
        document.writeln(`<li>${sabject_name}- ${mark}</li>`);


    })
    document.writeln(`<li style="color:${student.avg>=min_mark? "green":'red'}">${student.avg.toFixed(2)}</li>`);
    document.writeln('</ul>');


}

function fill(){
    var people_c = + prompt ('Введите количество студентов');
    for ( var i= 0; i<people_c; i++){

        var student = askDataForStudent();

        printDataForStudent(student);


    }
}

fill();