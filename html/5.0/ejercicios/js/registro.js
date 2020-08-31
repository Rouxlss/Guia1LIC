var nombres = document.querySelector('input#nombres');
var apellidos = document.querySelector('input#apellidos');
var correo = document.querySelector('input#email');
var password = document.querySelector('input#password');
var password2 = document.querySelector('input#confirmPassword');
var date = document.querySelector('input#fechaNac');

var boton = document.querySelector('.registrar');
var formulario = document.querySelector('.formStyle');

var miembro1;
var contenido;
var mostrarResultado = document.querySelector('.mostrarResultado');

class Miembro{

    constructor(nombres, apellidos, correo, password, date){
        this.id;
        this.nombres = nombres.value;
        this.apellidos = apellidos.value;
        this.correo = correo.value;
        this.password = password.value;
        this.fechaNac = date.value;
    }

    generarId(){

        var L1 = this.apellidos[0].toUpperCase();
        var L2;
        for (let i = 0; i<this.apellidos.length;i++){
            if(this.apellidos[i] == " "){
                L2 = this.apellidos[i+1].toUpperCase();;
                break;
            }else {
                L2 = L1;
            }
        }

        var p1 = L1+L2;
        var anio = new Date().getFullYear()
        var random = Math.floor(1000 + Math.random() * 9000);

        this.id = p1+anio+random;

    }

    mostrarDatos () {

        Object.keys(this).forEach(key => {
            console.log(this[key]);
        });
          
        var datos = [this.id,this.nombres,this.apellidos,this.correo,this.fechaNac];

        contenido = 
        `<table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Fecha Nac</th>
                </tr>
            </thead>
            <tbody>
            <tr>
        `;

        for(let i = 0; i<datos.length; i++){
            contenido += `
                <th>${datos[i]}</th>
            `;
        }
        
        contenido += `
        </tr>
        </tbody>
        </table>
        `;
        deleteElement(formulario);
        mostrarResultado.innerHTML = contenido;
    }
    
} 

boton.addEventListener('click', ()=> {
    if (password.value !== password2.value) {
        alert('Las contraseñas no son correctas');
    } else {
        if(password.value.length < 8 ){
            alert('La contraseña debe contener al menos 8 caracteres');
        }else {
            miembro1 = new Miembro(nombres, apellidos, correo, password, date);
            miembro1.generarId();
            miembro1.mostrarDatos();
        }
    }
});