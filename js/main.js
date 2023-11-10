const carrito = []
const prendas = [{codigo: 1, nombre: 'Guantes 12oz', precio: 20.000},
                 {codigo: 2, nombre: 'Protector Bucal', precio: 2000},
                 {codigo: 3, nombre: 'Vendas 5x5', precio: 8000},
                 {codigo: 4, nombre: 'Saco de Boxeo', precio: 34.000},
                 {codigo: 5, nombre: 'Botas de Boxeo', precio: 32.000},
                 {codigo: 6, nombre: 'Cabezal', precio: 16.000},
]



//Me insipire en el profe pero bueno es justo lo que quiero una tienda jajaj


function buscarPrenda(codigo) {
    let prendaSeleccionada = prendas.find((prenda)=> prenda.codigo === codigo)
    return prendaSeleccionada
}
function comprar() {
    let codigo = prompt("Ingresa el código de la prenda de vestir. \n(el código numérico del HTML)")
    let prendaElegida = buscarPrenda(parseInt(codigo))
    if (prendaElegida !== undefined) {
        carrito.push(prendaElegida)
        let respuesta = confirm("¿Desea elegir otra prenda?")
        if (respuesta === true) {
            comprar()
        } else {
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            alert("✅ El costo total de tu compra es de $ " + subtotal + ".\nMuchas gracias por elegirnos.")
        }
    } else {
        alert("Error en el código de prenda ingresado. Refresca para comenzar de nuevo.")
    }
}