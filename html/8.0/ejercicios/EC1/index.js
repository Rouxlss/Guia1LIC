const slides = document.querySelectorAll('.slides .slide');
const botones = document.querySelectorAll('button');

// 37 49
let i =0;
document.addEventListener('keydown', (e)=> {
    if(e.keyCode === 39){
        slides[i].style.display = "none";
        i++;
        if(i===10){
            slides.forEach(slide => {
                slide.style.display = "block";
            });
            i=0;
        }
    }else if (e.keyCode === 37){
        if(i>0){
            slides[--i].style.display = "block";
        }
    }
});

botones[0].addEventListener('click', ()=> {
    slides[i].style.display = "none";
    i++;
    if(i===10){
        slides.forEach(slide => {
            slide.style.display = "block";
        });
        i=0;
    }
});

botones[1].addEventListener('click', ()=> {
    slides[i].style.display = "none";
    i++;
    if(i===10){
        slides.forEach(slide => {
            slide.style.display = "block";
        });
        i=0;
    }
});
