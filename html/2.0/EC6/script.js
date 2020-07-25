const array1 = ['uno', 'dos', 'tres'];

document.querySelector('.reverse').addEventListener('click', function(){
    document.querySelector('.ejemplo1').innerHTML = array1.reverse();
});
