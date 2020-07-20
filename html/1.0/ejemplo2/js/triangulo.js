/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: triangulo.js *
* Uso: Calcular el área de un triángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

do{
    var base = prompt('Introduzca la base del triangulo: ', '');

    if(isNaN(base)){
        alert("Ingrese un numero valido.");
    }
    
}while( isNaN(base) );

do{

    var altura = prompt('Introduzca la altura del triangulo: ', '');

    if(isNaN(altura)){
        alert("Ingrese un numero valido.");
    }
    
}while( isNaN(altura) );

var area;

area = (base * altura)/2;

document.write("<header><h1>El área del triángulo es : " + area + "</h1><hr> </header");