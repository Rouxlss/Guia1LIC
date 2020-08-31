var base = document.querySelector('#base');
var potencia = document.querySelector('#potencia');

var boton = document.querySelector('.calcular');

var formualario = document.querySelector('form');
var viewResult = document.querySelector('.mostrarResultado');

var almcHTML = '';

var formula;

class Formula {

    constructor(base, potencia) {
        this.base = base.value;
        this.potencia = potencia.value;
        this.resultado;
    }

    calculo(){
        this.resultado = Math.pow(this.base, this.potencia);
        return this.resultado;
    }

    mostrarResultado(){    
        deleteElement(formualario);
        almcHTML = `
            <p class='big'>Resultado: ${this.resultado}</p>
        `;
        viewResult.innerHTML = almcHTML;
    }

}

boton.addEventListener('click', ()=>{
    formula = new Formula(base, potencia);
    formula.calculo();
    formula.mostrarResultado();
});