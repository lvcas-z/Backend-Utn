class Persona{
    nombre:string
    edad:number
    inventario:string[]=[]
    vida : number =100
    especie:string='humana'

    constructor(
        edad: number, //Definimos al parametro
        nombre: string
    ){
        if(edad < 0){
            this.edad = 0
        }
        else{
            this.edad = edad
        }
        this.nombre = nombre
    }
}
const persona1 :Persona = new Persona(12,'Lucas')
console.log(persona1);


class Item{
    id:number = 0
    nombre:string
    precio:number = 0
    descripcion:string = ''

    constructor(
        id:number,
        nombre:string,
        precio:number,
        descripcion:string
    ){
        this.id = id,
        this.nombre=nombre,
        this.precio=precio,
        this.descripcion = descripcion
    }
    mostrarItem():void {
    console.log(`${this.nombre} es ${this.descripcion} y cuesta : $ ${this.precio} pesos`);
    }
}

class ItemTienda extends Item{
  stock :number
  ganancia:number

  constructor(
        id:number,
        nombre:string,
        precio:number,
        descripcion:string,
        stock: number,
        ganancia:number
    ){
        super(id,nombre, precio, descripcion)
        this.stock=stock
        this.ganancia=ganancia
    }
  setStock(nuevoStock:number):void{
    this.stock=nuevoStock
  }
}

class Tienda extends ItemTienda{
  id:number
  nombre:string
  cantidadDeDineroEnCuenta:number = 0
  items: ItemTienda[]

  constructor(
        id:number,
        nombre:string,
        cantidadDeDineroEncuenta:number,
        items:ItemTienda[],
        precio:number,
        descripcion:string,
        stock: number,
        ganancia:number
  ){
    super(id,nombre, precio, descripcion,stock,ganancia)
    this.id=id
    this.nombre=nombre
    this.cantidadDeDineroEnCuenta= cantidadDeDineroEncuenta
    this.items=items
  }

  buscarItemPorId(id:number):ItemTienda | null{
    const itemPorId =  this.items.find(item=>item.id === id)
    if (itemPorId) {
      return itemPorId
    }else{
      return null
    }
  }

  comprar(nuevoItem: Item, cantidad: number, ganancia: number): void {
        const gastoDeCompra: number = cantidad * nuevoItem.precio;
        if (gastoDeCompra > this.cantidadDeDineroEnCuenta) {
            alert('la compra no se puede realizar')
			return //Cortar la funcion en caso de fallo
        }
        this.agregarItem(nuevoItem, cantidad, ganancia)
        this.cantidadDeDineroEnCuenta -= gastoDeCompra;
    }

agregarItem(nuevoItem: Item, cantidad: number, ganancia: number){
		const itemEnTienda = new ItemTienda(
            nuevoItem.id,
            nuevoItem.nombre,
            nuevoItem.precio,
            nuevoItem.descripcion,
            cantidad,
            ganancia
        );
        this.items.push(itemEnTienda);
	}


}
// mostrarItem :void (){
//   console.log(`${this.nombre} es ${this.descripcion} y cuesta : $ ${this.precio}`);
// }

const item1 = new ItemTienda(1, "Televisor", 500, "TV LED 42 pulgadas", 10, 50);
const item2 = new ItemTienda(2, "Celular", 300, "Smartphone 128GB", 20, 40);
const tienda1 = new Tienda(10, "Electro Mundo", 10000, [item1, item2], 0, "", 0, 0);

console.log("Buscando en tienda 1:", tienda1.buscarItemPorId(2));


/* -comprar(nuevoItem: Item, cantidad: number, margen_gancia: number)
            -Calcular el costo de la operacion y en caso de ser mayor a la cantidad de dinero en cuenta lanzar un error por consola diciendo, no se puede realizar la operacion, motivo: no hay dinero suficiente
            -Crear un ItemTienda a partir de Item
            -pushear a la lista de items */


