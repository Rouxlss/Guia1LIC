var select = document.querySelector('select');
var opciones = document.querySelectorAll('option');

var boton = document.querySelector('button');
var input = document.querySelector('.campo');

var mensaje = 'Formato incorrecto';
valido = false;

var x = 0;

select.addEventListener('change', ()=> {
    input.value = '';
    if(select.value == 0){
        input.placeholder = '###.###.###.###';
        console.log('ip');
        input.addEventListener('keyup', ()=> {
            validarIP();
        });
        input.addEventListener('keypress', ()=> {
            validarIP();
        });
    }else if (select.value == 1){
        input.placeholder = 'protocolo://www.nombredelsitio.com';
        console.log('url');
        input.addEventListener('keyup', ()=> {
            validarWEB();
        });
        input.addEventListener('keypress', ()=> {
            validarWEB();
        });
    }else if (select.value == 2){
        input.placeholder = 'alguien@example.com';
        console.log('correo');
        input.addEventListener('keyup', ()=> {
            validarCORREO();
        });
        input.addEventListener('keypress', ()=> {
            validarCORREO();
        });
    }
});

const validarIP = () => {
    console.log(input.value);
    regEx = /^[1-2]{1}[1-9]{2}.?[1-2]{1}[1-9]{2}.?[1-2]{1}[1-9]{2}.?[1-2]{1}[1-9]{2}$/;
    if(regEx.test(input.value)){
        valido = true;
    }else {
        mensaje = `El formato: ${input.value} es invalido`;
        valido = false;
    }
}

const validarWEB = () => {
    console.log(input.value);
    regEx = /^(http:\/\/|https:\/\/|ftp:\/\/)(www).?\w.?\w/;
    if(regEx.test(input.value)){
        valido = true;
    }else {
        mensaje = `El formato: ${input.value} es invalido`;
        valido = false;
    }
}

const validarCORREO = () => {
    console.log(input.value);
    regEx = /\w(@)\D.?\D/;
    if(regEx.test(input.value)){
        valido = true;
    }else {
        mensaje = `El formato: ${input.value} es invalido`;
        valido = false;
    }
}

input.addEventListener('keydown', ()=> {
    if (event.key === "Enter") {
        if(valido == true){
            alert('Formato correcto!');
        }else {
            alert(mensaje);
        }
    }
});

boton.addEventListener('click', ()=> {
    if(valido == true){
        alert('Formato correcto!');
    }else {
        alert(mensaje);
    }
});
