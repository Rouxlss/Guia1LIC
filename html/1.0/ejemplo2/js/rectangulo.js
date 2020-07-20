/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: rectangulo.js *
* Uso: Calcular el área de un rectángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
do{
    var base = prompt('Introduzca la base del rectangulo: ', '');

    if(isNaN(base)){
        alert("Ingrese un numero valido.");
    }
    
}while( isNaN(base) );

do{
    var altura = prompt('Introduzca la altura del rectangulo: ', '');

    if(isNaN(altura)){
        alert("Ingrese un numero valido.");
    }

}while( isNaN(altura) );

var area;

area = base * altura;

document.write("<header><h1>El área del rectángulo es : " + area + "</h1><hr> </header");