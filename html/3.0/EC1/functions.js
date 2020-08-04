var borrar = document.querySelector('.backspace');
var inputOpc = document.querySelector('.inputOpc');
var alt = document.querySelector('.alt');
var numero = document.querySelectorAll('.num');
var suma = document.querySelector('.plus');
var resta = document.querySelector('.minus');
var multiplicacion = document.querySelector('.mult');
var division = document.querySelector('.division');
var mod = document.querySelector('.mod');
var raiz = document.querySelector('.sqrt');
var cuadrado = document.querySelector('.cuadrado');
var inversa = document.querySelector('.inv');
var mensaje = document.querySelector('.lista p');
var MC = document.querySelector('.mc');
var MS = document.querySelector('.ms');
var MR = document.querySelector('.mr');
var MPLUS = document.querySelector('.mplus');
var CE = document.querySelector('.ce');
var C = document.querySelector('.c');
var equals = document.querySelector('.equals');
var numAlmacenado1=0, numAlmacenado2=0, storage = null, i=0, memoryNumber=0;
var opc = "";
var msg = "";

const agregarNum = (num) => {
    inputOpc.value += num.value;
}

const borrarTodo =() => {
    inputOpc.value = inputOpc.value.slice(0, inputOpc.value.lenght-1)
}

const escribirNumero = () => {
    numero.forEach( e = (numero) => {
        numero.addEventListener('click', function (){
            if(i==0){
                borrarTodo();
            }
            agregarNum(numero);
            i++;
        });
    });
}

const opcKey = () => {
    if(inputOpc.value == ""){
        numAlmacenado1 = memoryNumber;
    }else {
        numAlmacenado1=parseFloat(inputOpc.value);
    }
    borrarTodo();
} 

const retorno = () => {
    inputOpc.value = operacionSola(numAlmacenado1, opc);
    numAlmacenado1 = operacionSola(numAlmacenado1, opc);
}

const operacion = ( num1, num2, signo ) => {
    switch (signo) {
        case 'SUMA':
            resultado = num1 + num2;
            break;
        case 'RESTA':
            resultado = num1 - num2;
            break;
        case 'MULTIPLICACION':
            resultado = num1 * num2;
            break;
        case 'DIVISION':
            resultado = num1 / num2;
            break;
        case 'MOD':
            resultado = num1 % num2;
            break;
    }
    return resultado;
}

const operacionSola = ( num1,  signo ) => {
    switch (signo) {
        case 'RAIZ':
            resultado = Math.sqrt(num1);
            break;
        case 'CUADRADO':
            resultado = Math.pow(num1,2);
            break;
        case 'INVERSA':
            resultado = 1/num1;
            break;
    }
    return resultado;
}

const message = (msg) =>{
    mensaje.innerHTML = ".";
    setTimeout(function(){
        mensaje.innerHTML = "..";
    }, 300);
    setTimeout(function(){
        mensaje.innerHTML = "...";
    }, 600);
    setTimeout(function(){
        mensaje.innerHTML = msg;
    }, 900);
    setTimeout(function(){
        mensaje.innerHTML = "";
    }, 2000);
}

borrar.addEventListener('click', ()=>{
    inputOpc.value = inputOpc.value.slice(0, -1);
});

const error = () => {
    inputOpc.value = "Syntax Error";
    alt.value = alt.value.slice(0, alt.value.lenght-1);
    i=0;
}

const procedEquals = () => {
    numAlmacenado2=parseFloat(inputOpc.value);
    borrarTodo();
    inputOpc.value = operacion(numAlmacenado1, numAlmacenado2, opc);
    numAlmacenado1 = operacion(numAlmacenado1, numAlmacenado2, opc);
    alt.value = alt.value.slice(0, alt.value.lenght-1);
    memoryNumber = numAlmacenado1;
    i=0;
}

const validateKeyPress = (signo2) => {
    if(press>=1){
        alt.value = numAlmacenado1 + signo2;
    }
    press++;
    decimalCount=1;
}

const validateKeyPress2 = (signo2) => {
    if(press>=1){
        alt.value = signo2 + numAlmacenado1;
    }
    press++;
    decimalCount=1;
}

const validateKeyPress3= (signo2) => {
    if(press>=1){
        alt.value = signo2 + numAlmacenado1 + ")";
    }
    press++;
    decimalCount=1;
}