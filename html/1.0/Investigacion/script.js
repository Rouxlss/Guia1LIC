function mostrarAlert(){
    alert(`
    Esta es una función mandada a llamar desde el HTML

    Con lo cual, el código Javascript estaría 
    interfiriendo con el código escrito HTML`);
};

var gif = document.getElementById("gifu");

var boton = document.getElementById("boton").addEventListener('click', function mostrarAlert(){

    gif.classList.add("gifanimation");

    alert(`
    Esta es una función mandada a llamar desde el archivo Javascript

    Con lo cual, el código Javascript no estaría 
    interfiriendo con el código escrito HTML`);

    setTimeout(function(){
        gif.classList.remove("gifanimation");
    }, 4000);

});

