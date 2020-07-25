var nombreProducto = [];
var precioProd = []; 

var respuesta = 'n';
var numProd = 0;

var tabla = document.querySelector("#table");
var contenido;

var totalPrecioProducto = 0;

do {

    nombreProducto[numProd] = prompt("Ingresa el nombre del producto #" + (parseFloat(numProd) +1) );
    do {
        precioProd[numProd] = prompt("precio del producto " +  nombreProducto[numProd] + ": "  );
    }while(isNaN(precioProd[numProd]) || precioProd[numProd]<0);

    totalPrecioProducto += parseFloat(precioProd[numProd]);

    numProd++;
    
    respuesta = prompt("Desea agresar otro producto? (s/n)");

} while (respuesta == "s" || respuesta ==  "s");

contenido = 
`<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Producto</th>
            <th>precio</th>
        </tr>
    </thead>
    <tbody>
`;

for(i=0;i<numProd;i++){
    contenido += `
    <tr>
        <th class="n">${i+1}</th>
        <th class="producto">${nombreProducto[i]}</th>
        <th class="precioProducto">$${parseFloat(precioProd[i]).toFixed(2)}</th>
    </tr>
    `;
}

contenido += `
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th></th>
            <th>Total:</th>
            <th>$${totalPrecioProducto.toFixed(2)}</th>
        </tr>
    </tfoot>
</table>
`;

tabla.innerHTML = contenido;