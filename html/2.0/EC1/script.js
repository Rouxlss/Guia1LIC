do {
    var numero = prompt("Ingrese un nùmero entero: ");
} while (isNaN(numero) || numero<0);

var cifraIngresada = document.querySelector(".cifraIngresada");
var TotalCifras = document.querySelector(".cantiCifras");
var cImpares = document.querySelector(".cifrasImpares");
var cPares = document.querySelector(".cifrasPares");
var sumImpares = document.querySelector(".sumaImpares");
var sumPares = document.querySelector(".sumaPares");
var todasCifras = document.querySelector(".todasCifras");
var cifraMayor = document.querySelector(".cifraMayor");
var cifraMenor = document.querySelector(".cifraMenor");

var pares=0, impares=0;
var sumaPares=0, sumaImpares=0, total=0;
var nMayor=0, nMenor=999999;

for( i = 0; i<numero.length; i++ ){

    if(numero[i]%2==0 || numero[i]==0){
        pares++;
        sumaPares = sumaPares+ parseInt(numero[i]);
    }else{
        impares++;
        sumaImpares = sumaImpares + parseInt(numero[i]);
    }
    total += parseInt(numero[i]);

    if( numero[i] > nMayor ){
        nMayor = numero[i];
    }

    if( numero[i] < nMenor ){
        nMenor = numero[i];
    }

}

cifraIngresada.innerHTML = "Cifra ingresda: " + numero;

TotalCifras.innerHTML = "Total de cifras: " + numero.length;
cImpares.innerHTML = "Cifras impares: " + impares;
cPares.innerHTML = "Cifras pares: " + pares;
sumImpares.innerHTML = "Suma de los número impares: " + sumaImpares;
sumPares.innerHTML = "Suma de los número impares: " + sumaPares;
todasCifras.innerHTML = "Suma de todas las cifras: " + total;
cifraMayor.innerHTML = "Cifra mayor: " + nMayor;
cifraMenor.innerHTML = "Cifra menor: " + nMenor;


