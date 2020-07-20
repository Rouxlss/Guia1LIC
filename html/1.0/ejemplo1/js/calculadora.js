/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Lenguajes interpretados en el cliente *
* Archivo: calculadora.js *
* Descripción: Realizar operaciones aritméticas básicas. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//Funcion que trabaja como manejador de evento
//al producirse el evento load (carga la pagina)

function init(){

    //Ingresar los datos de los números a operar 

    do{

        var op1 = prompt('Introduzca el primer numero: ', '');

        if(isNaN(op1)){
            alert("Ingrese un numero valido.");
        }
        
    }while( isNaN(op1) );


    do{
        var op2 = prompt('Introduzca el segundo numero: ', '');

        if(isNaN(op2)){
            alert("Ingrese un numero valido.");
        }
        
    }while( isNaN(op2) );

    //Elemento div donde se mostrara el menú de las operaciones
    var operaciones = document.getElementById('operaciones');

    //Elemento div donde se mostraran los resultados
    var resultado = document.getElementById('resultado');

    //Creando el contenido de la pagina
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Sumar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Restar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Multiplicar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Dividir</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Residuo</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";

    //Colocar el contenido dentro del elemento div
    operaciones.innerHTML = contenido;

    //Preparando el manejo del evento click sobre los enlaces del menú
    var opciones = document.getElementsByTagName('a');

    //Recorrer todos los elementos de enlace (elementos a)
    //y asignar el manejador del elemento click

    for(var i = 0; i < opciones.length; i++){

        switch(i){
            case 0:
                //Funcion sumar

                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " + " + op2 + " = " + (parseFloat(op1) + parseFloat(op2)) + "</p>\n";
                    
                }

                break;

            case 1:
                //Funcion restar

                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " - " + op2 + " = " + (op1 - op2) + "</p>\n";

                }

                break;

            case 2:

                //Funcion multiplicar
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " * " + op2 + " = " + (op1 * op2) + "</p>\n";

                }

                break;

            case 3:
                //Funcion dividir

                opciones[i].onclick = function(){

                    if(op2 == 0){
                        resultado.innerHTML = "<p class=\"letterpress\">No se puede dividir entre cero</p>";
                    } else {
                        resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " / " + op2 + " = " + Math.round((op1 / op2) * 100) / 100 + "</p>\n";  
                    }

                }

                break;

            case 4:

                //Funcion residuo

                opciones[i].onclick = function(){

                    if(op2 == 0){
                        resultado.innerHTML = "<p class=\"letterpress\">No se ha podido obtener el residuo, por división entre cero</p>";
                    } else {
                        resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " % " + op2 + " = " + (op1 % op2) + "</p>\n";  
                    }

                }

                break;

        }

    }


    
}

window.onload = init;