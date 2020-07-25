const elementos = ['Fuego', 'Aire', 'Agua', 'Tierra'];

document.querySelector('.signo1').addEventListener('click', function(){
    document.querySelector('.ejemplo1').innerHTML = elementos.join('-');
});

document.querySelector('.signo2').addEventListener('click', function(){
    document.querySelector('.ejemplo1').innerHTML = elementos.join('+');
});

document.querySelector('.signo3').addEventListener('click', function(){
    document.querySelector('.ejemplo1').innerHTML = elementos.join(',');
});

const verduras = ['broccoli', 'coliflor', 'zanahoria', 'lechuga', 'tomate'];

document.querySelector('.button').addEventListener('click', function(){
    document.querySelector('.ejemplo2_1').innerHTML = "Último elemento: " + `"${verduras[verduras.length-1]}"`;
    document.querySelector('.ejemplo2').innerHTML = "Array: ['broccoli', 'coliflor', 'zanahoria', 'lechuga'];";
});