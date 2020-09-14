const name = document.querySelector('.name');
const email = document.querySelector('.email');
const textarea = document.querySelector('.textarea');
let arregloNombre;

name.addEventListener('keyup', ()=> {
    for(let i of name.value){
        if(!isNaN(i)){
            name.value = name.value.slice(0, -1);
        }
    }
});

email.addEventListener('keyup', ()=> {
    let contadorArroba=0;
    for(let i of email.value){
        if(i==="@"){
            contadorArroba++;
        }
    }
    if(contadorArroba>1){
        email.value = email.value.slice(0, -1);
    }
    console.log(contadorArroba);
});