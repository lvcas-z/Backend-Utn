// Datos primitivos : string - number - boolean - undefined



//- En el caso de un objeto al no ser un tipo de dato primitivo , esta guarda la referencia NO EL VALOR
const persona ={
    name:"Ivan",
    surname:"Z",
    age:"23"
}

const persona2= persona;

persona2.name="Lucas"

console.log("Persona1:",persona);
console.log("Persona2:",persona2);

// Parametros: precio-number , tipoFactura

// Va a DEVOLVER : objeto y el precio con el tipo de factura y uno modificado , cSI LA FACTURA ES A NO TIENE IVA, B SI 21%
/*funcion mal hecha

function calcularIva (precio,tipoFactura){
    const factura={
        precio,
        tipoFactura,
    }
    const facturaFinal = factura
    let iva = precio *(21/100) 

    if (tipoFactura === "A") {
        facturaFinal.iva = iva
        facturaFinal.precio = precio    
    }
    else{
        facturaFinal.iva = iva
        facturaFinal.precio = precio + iva
    }
    return[factura,facturaFinal]

}

let calculoA =  calcularIva(100,"A");
let calculoB =  calcularIva(100,"b");

console.log(calculoA);
console.log(calculoB);
*/

function calcularIva (precio,tipoFactura){
    const factura={
        precio,
        tipoFactura,
    }
    ///Creo un objeto nuevo copiado, con el spread
    const facturaFinal = {...factura}
    let iva = precio *(21/100) 

    if (tipoFactura === "A") {
        facturaFinal.iva = iva
        facturaFinal.precio = precio    
    }
    else{
        facturaFinal.iva = iva
        facturaFinal.precio = precio + iva
    }
    return[factura,facturaFinal]

}

let calculoA =  calcularIva(100,"A");
let calculoB =  calcularIva(100,"b");

console.log(calculoA);
console.log(calculoB);



const nombres = ['juan', 'pedro', 'maria', 'messi', 'lucas', 'Julieta', 'marcos']
/* 
Con codigo
-Eliminar al ultimo de la lista
-Eliminar al anterior a messi y a messi
*/
console.log(nombres.pop());
console.log(nombres);
const indiceMessi = nombres.findIndex(nombre => nombre.toLowerCase() === 'messi');
if (indiceMessi > 0) {
    nombres.splice(indiceMessi - 1, 2);
}
console.log(nombres);



const products=[

]

function findProductById(id){
    products.map(product =>product.id === id)
}
function findProductsByName(name){}
function findProductByRange(name){}










