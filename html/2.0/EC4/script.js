// ABS

var absoluto;

var btnAbs = document.querySelector(".abs").addEventListener('click', function(){
    do {
        absoluto = prompt("Ingrese un número negativo, este retornará su positivo");
    }while(isNaN(absoluto));
    alert("Valor positivo: " + Math.abs(absoluto));
});

// ROUND

var redondeo;

var btnRound = document.querySelector(".round").addEventListener('click', function(){
    do{
        redondeo = prompt("Ingrese un número con decimal, este retornará su un número redondeado");
    }while(isNaN(redondeo));
    alert("Valor redondeoado: " + Math.round(redondeo));
});


// CEIL

var redondeoAlto;

var btnAbs = document.querySelector(".ceil").addEventListener('click', function(){
    do{
        redondeoAlto = prompt("Ingrese un número decimal, devuelverá el entero mayor o igual más próximo");
    }while(isNaN(redondeoAlto));
    alert("Valor redondeo: " + Math.round(redondeoAlto));
});

// FLOOR

var redondeoBajo;

var btnFloor = document.querySelector(".floor").addEventListener('click', function(){
    do{
        redondeoBajo = prompt("Ingrese un número decimal, devuelverá el entero menor o igual más próximo");
    }while(isNaN(redondeoBajo));
    alert("Valor redondeo: " + Math.floor(redondeoBajo));
});

// EXP

var exponencial;

var btnExp = document.querySelector(".exp").addEventListener('click', function(){
    do{
        exponencial = prompt("Ingrese un número");
    }while(isNaN(exponencial));
    alert("Valor: " + Math.exp(exponencial));
});

// LOG

var log;

var btnLog = document.querySelector(".log").addEventListener('click', function(){
    do{
        log = prompt("Ingrese un número");
    }while(isNaN(log));
    alert("Valor: " + Math.log(log));
});

// EXP

var random;

var btnRandom = document.querySelector(".random").addEventListener('click', function(){
    alert("Número random: " + Math.round(Math.random()*10));
});