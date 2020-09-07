const select = document.querySelector('select');
const texto = document.querySelector('p');
const btnreset = document.querySelector('#reset');

let valor;                 

select.addEventListener('change', ()=> {
    valor = select.value;

    if(valor === '0'){
        texto.classList.add('izquierda');
        texto.classList.remove('justify');
        texto.classList.remove('center');
    }else if(valor === '1'){
        texto.classList.add('justify');
        texto.classList.remove('center');
        texto.classList.remove('izquierda');
    }else if(valor === '2'){
        texto.classList.add('center');
        texto.classList.remove('justify');
        texto.classList.remove('izquierda');
    }

    console.log({valor})
});

btnreset.addEventListener('click', ()=> {
    texto.classList.remove('center');
    texto.classList.remove('justify');
    texto.classList.remove('izquierda');
});