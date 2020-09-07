const radios = document.querySelectorAll('.radio');
const galones = document.querySelector('#galones');
const btnAdd = document.querySelector('#btnAdd');
const form = document.querySelector('form');
const precio = document.querySelector('.precio');

let gasolina;
let valGalones = galones.value;
let total;

radios.forEach(radio => {
    radio.addEventListener('click', ()=> {
        gasolina = radio.value;
    });
});

form.addEventListener('submit', (e)=> {
    e.preventDefault();
});

setInterval(() => {
    valGalones = galones.value;
    total=valGalones*gasolina;
    if(!isNaN(total)){
        precio.value = "$" + total.toFixed(2);
    }
    if(galones.value > 150){
        galones.value = "150"
    }else if(galones.value<0.05){
        galones.value = "0.05"
    }
}, 0);

