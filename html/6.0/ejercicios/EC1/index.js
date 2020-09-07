const createRows = document.querySelector('#createRows');
const createColumns = document.querySelector('#createColumns');
const btnCreate = document.querySelector('#btnCreate');

const updateRows = document.querySelector('#updateRows');
const updateColumns = document.querySelector('#updateColumns');
const dato = document.querySelector('#dato');
const btnUpdate = document.querySelector('#btnUpdate');

const forms = document.querySelectorAll('form');

const divTabla = document.querySelector('table');

let rows,
    columns;

let rowsTable = [];
    columsnTable = [];

let valueRow,
    valueCell;

let value;


// get td From HTML
let td,
    tr;

forms.forEach(form => {
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
    })
});

btnCreate.addEventListener('click', ()=> {

    divTabla.innerHTML = '';

    rows = createRows.value;
    columns = createColumns.value;
    console.log({rows,columns});

    for(let i = 0; i<rows; i++){
        rowsTable[i] = document.createElement('tr');
        divTabla.append(rowsTable[i]);
        for(let j = 0; j<columns; j++){
            columsnTable[j] = document.createElement('td');
            rowsTable[i].append(columsnTable[j]);
        }
    }


    tr = document.querySelectorAll('tr');
    td = document.querySelectorAll('tr td');
    console.log(rowsTable);

    for(let i=0; i<td.length; i++){
        td[i].innerHTML = i+1;
    }


});

btnUpdate.addEventListener('click', ()=> {

    valueCell = updateColumns.value;
    value = dato.value;
    
    console.log({valueCell, value});

    getCell = td[valueCell-1];
    if(valueCell*1>td.length){
        alert('No existe la celda ' + valueCell.toString() + '. El limite es ' + (td.length).toString())
    }else {
        getCell.innerHTML = value;
        getCell.classList.add('value');
    }

    console.log(getCell);

});