var autor = document.querySelector('.txtautor');
var titulo = document.querySelector('.txtitulo');
var editorial = document.querySelector('.seleditorial');
var edicion = document.querySelector('.seledicion');
var pais = document.querySelector('.txtpais');

var boton = document.querySelector('.boton');
var formulario = document.querySelector('#frmbook');
var infoLibro = document.querySelector('#infoLibro');
var formLibro = '';

class Libro {

    constructor(autor, titulo, editorial, edicion, pais){
        this.autor = autor.value;
        this.titulo = titulo.value;
        this.editorial = editorial.value;
        this.edicion = edicion.value;
        this.pais = pais.value;
    }
    
    showProperties(){
        let infBook = "";
        var datos = [this.autor, this.titulo, this.editorial, this.edicion, this.pais];
        let j = 0;
        for(var i in this){
            infBook += "Libro" + "." + i + " = " + datos[j]+ "\n";
            j++
        }
        if(!confirm(infBook + "\n\n¿Es esta información correcta?")){
            autor.value = "";
            titulo.value = "";
            editorial.value = "";
            edicion.value = "";
            pais.value = "";
        }else {
            formulario.style.display = "none";
            formLibro = `
            <table class='bookinfo'>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Edición</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>${this.titulo}</td>
                    <td>${this.autor}</td>
                    <td>${this.editorial}</td>
                    <td>${this.edicion}</td>
                    <td>${this.pais}</td>
                    </tr>
                </tbody>
            </table>
            `;
            infoLibro.innerHTML = formLibro;
        }
    }
}

libro1 = null;

boton.addEventListener('click', ()=> {
    libro1 = new Libro(autor, titulo, editorial, edicion, pais);;
    libro1.showProperties();
});