const elementos = ['Fuego', 'Aire', 'Agua', 'Tierra'];
var push = document.querySelector('.push');
var pop = document.querySelector('.pop');
var content;

var array = document.querySelector('.array');
var array2 = document.querySelector('.array2');

var New;
var ex;

const e = () => {

    content="   const Array = [";
    for (i=0; i<elementos.length; i++){
        content+=`'${elementos[i]}',`;
    }

    content+= "];";

    content = content.replace(",];", "];");

    array.innerHTML = content;
    array2.innerHTML = content;

}

push.addEventListener('click', ()=> {
    New = prompt('Ingresa el nuevo elemento: ');
    elementos.push(New);
    e();
});


pop.addEventListener('click', ()=> {
    elementos.pop();
    e();
});

