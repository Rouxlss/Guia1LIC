const txtgrafica = document.querySelector('input');
const btnAgregar = document.querySelector('button');

const divBarras = document.querySelector('.bars');
const divNumber = document.querySelector('.data');

const form = document.querySelector('form');

let totValores=0;

const textContent = document.querySelector('.info');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
})

const crearBarra = (valor) => {

    totValores++;

    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = valor + "%";
    divBarras.append(bar);

    const numero = document.createElement('div');
    numero.classList.add('box');
    numero.innerHTML = valor + "%";
    divNumber.append(numero);

    const texto = document.createElement('p');
    texto.innerHTML = "Dato " + totValores + ": " + valor;
    textContent.append(texto);

};

btnAgregar.addEventListener('click', ()=> {
    if(txtgrafica.value>100){
        txtgrafica.value = "100";
    }
    crearBarra(txtgrafica.value);
});