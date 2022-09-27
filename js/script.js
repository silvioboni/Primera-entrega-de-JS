//Variables del MENÜ//

let nombreProductoA = "Sushi"
let precioProductoA = 500
let stockProductoA = 100


let nombreProductoB = "Vino"
let precioProductoB = 600
let stockProductoB = 20


let nombreProductoC = "Helado"
let precioProductoC = 300
let stockProductoC =50

let precioTotal = 0

//FUNCIONES //

function calcularPrecio (cantidad,precio){
    precioTotal  += (cantidad * precio)
}

function calcularStock (cantidad,stock,precio) {
    if (cantidad <= stock){
        calcularPrecio (cantidad, precio)
    }
    else {alert ("No nos queda esa cantidad de " + nombreProductoA + ". Actualmente tenemos " + stock +" de ese producto")}
}

alert ( "Nuestro Menú:\n* " + nombreProductoA + "\n* " + nombreProductoB + "\n* " + nombreProductoC  )

let VariedadDeArticulos = parseInt (prompt ("¿qué cantidad de productos distintos quiere?"))

for (let i= 0; i < VariedadDeArticulos; i= i + 1) {


    let productoCompra = prompt ("Ingrese que productor quiere comprar\n* " + nombreProductoA + "\n* " + nombreProductoB + "\n* " + nombreProductoC)


    if (productoCompra.toLowerCase () == "sushi") 
    {let cantidadProductoA = prompt ("Ingrese la cantidad que quiere de " + nombreProductoA )
        calcularStock (cantidadProductoA,stockProductoA,precioProductoA)

    }
    else if (productoCompra.toLowerCase () == "vino")
    {let cantidadProductoB = prompt ("Ingrese la cantidad que quiere de " + nombreProductoB )
        calcularStock (cantidadProductoB,stockProductoB,precioProductoB)
    }
    else if (productoCompra.toLowerCase () == "helado")
    {let cantidadProductoC = prompt ("Ingrese la cantidad que quiere de " + nombreProductoC )
    calcularStock (cantidadProductoC,stockProductoC,precioProductoC)

    }
    else{
    alert("No tenemos ese producto")}

    }

if (precioTotal != 0){
    alert ("El precio total es " + precioTotal)}
    let clientePaga = parseInt (prompt ("¿Con cuánto va apagar?"))
        if (clientePaga > precioTotal) {
            alert ("Le llevaremos de vuelto " + (clientePaga - precioTotal ))}
        else if (clientePaga == precioTotal) {
            alert ("Gracias por pagar justo")
        }
        else {alert ("Tiene que pagar como mínimo " + precioTotal)}
    

alert ("Gracias por su visita a Zona Sushi")