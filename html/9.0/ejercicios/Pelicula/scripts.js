const title = document.querySelector('.title');
let resObj;
const xhr = new XMLHttpRequest();

xhr.onload = () => {
    if(xhr.status === 200){
        try {
            resObj = JSON.parse(xhr.responseText);
            title.innerHTML = resObj.cine;
        }catch (e) {
            console.warn('Hay un error al parsear el JSON')
        }
        console.log(xhr.responseText);
        
    }else {
        console.warn('Error');
    }
}

xhr.open('get', 'data.json');
xhr.send();

const titulo = document.querySelector('.titulo');
const sinopsis = document.querySelector('.sinopsis');
const director = document.querySelector('.director');
const personajes = document.querySelector('.personajes');

const movies = document.querySelectorAll('.movie');

const getData = (index) => {
    titulo.innerHTML =  resObj.peliculas[index].titulo;
    sinopsis.innerHTML = "Sinopsis: " + resObj.peliculas[index].sinopsis;
    director.innerHTML = "Director: " + resObj.peliculas[index].director;
    personajes.innerHTML = "Personajes: " + resObj.peliculas[index].protagonistas;
}

movies[0].addEventListener('click', ()=> {
    getData(0);
});
movies[1].addEventListener('click', ()=> {
    getData(1);
})
movies[2].addEventListener('click', ()=> {
    getData(2);
})