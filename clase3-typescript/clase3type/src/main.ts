console.log("hola mundo");
let edad :number ;

function getNumber (mensajeParaUsuario :string):number{
  let dato :string | null = prompt(mensajeParaUsuario)
  while(!dato || isNaN(Number(dato)) ){
    alert("Error dato no numerico")
    dato = prompt(mensajeParaUsuario)
  }
  return Number (dato)
}

function calcularIva(precio :number):number{
  let iva :number = precio *21/100
  return precio + iva
}
let precios_db :number[] = [100, 400, 450, 321, 500]


///Calculo todos los precios con iva y los sumo en un total
function calcularIvaListaDePrecios(listaDePrecios:number[]){
    let ivaTotal : number = 0;

  listaDePrecios.map(precio =>{
    let ivaPrecio : number = calcularIva(precio)
    ivaTotal+=ivaPrecio
  })
    return ivaTotal
}

const listaCalculada : number = calcularIvaListaDePrecios(precios_db)
console.log(listaCalculada);



