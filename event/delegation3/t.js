///   $0.removeChild($0.children[1]) удалял из таблицы просто для примера
//    $0.removeChild($0.childNodes[3]) //////
var table = document.getElementsByTagName('table')[0];

//table.removeChild();

function Table(elem){
    this.charSort=function (e,arr) {
        var colNum =e.target.cellIndex;
        arr.sort(function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;}
            );
         return arr;
    };
    this.numSort=function(e,arr){
        var colNum =e.target.cellIndex;
        arr.sort(function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;}
            );
        return arr;
    };
    var self=this;
    elem.addEventListener('click',function(e) {

       // console.log(e.target.cellIndex)
        if(e.target.tagName!="TH")return;
        var action=e.target.getAttribute('data-sort');
        if(!action)return;

        var row= this.rows;
        var arr=[];
        for( i=1;i<row.length;i++){
            arr.push(this.rows[i])
        }
         arr= self[action](e,arr);

        var tbody= table.removeChild(table.children[1]);
        for (var i = 0; i < arr.length; i++) {
            tbody.appendChild(arr[i]);
        }
        table.appendChild(tbody);
    });
}

new Table(table);



