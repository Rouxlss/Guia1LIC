do {
    var celcius = prompt("Ingresa tu temperatura en ºC");
}while(isNaN(celcius));

var fahrenheit;
var fondo = document.getElementById("bg");
var texto = document.getElementById("temp");

fahrenheit = (celcius * 9/5) + 32;

texto.classList.add("animatetext");
fondo.classList.add("animateBg");
texto.innerHTML = "Temperatura: " + fahrenheit + "°F";


if (fahrenheit <= 40) {
    fondo.style.backgroundImage = "url('./img/winter.jpg')"; 
}
else if(fahrenheit >40 && fahrenheit <=90) {
    fondo.style.backgroundImage = "url('./img/spring.jpg')";
}
else if(fahrenheit >90 && fahrenheit <150 ) {
    fondo.style.backgroundImage = "url('./img/fall.jpg')"; 
}
else if(fahrenheit >150) {
    fondo.style.backgroundImage = "url('./img/summer.jpg')";
}
