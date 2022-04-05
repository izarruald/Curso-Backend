//EJEMPLO 2

const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]

function getNombres(productos) {
    const nombres = []
    for (const producto of productos) {
        nombres.push(producto.nombre)
    }
    // nombres = productos.map(producto => producto.nombre)
    return nombres.join(', ')
}

//SUMA TODOS LOS PRECIOS DE TODOS LOS PRODUCTOS Y LOS PONE EN UNA VARIABLE (total)
function getPrecioTotal(productos) {
    let total = 0
    for (const producto of productos) {
        total += producto.precio
    }
    // const total = productos.reduce((acum, prod) => prod.precio + acum, 0)
    return total
}

//SACA EL PROMEDIO DEL PRECIO TOTAL
function getPrecioPromedio(productos) {
    //llama a la funcion que da el valor total de de los prod y lo divide por la cantidad de objetos en el array
    //console.log(productos.length) = 6
    return getPrecioTotal(productos) / productos.length
    
}

function getProdPrecioMinimo(productos) {
    if (productos.length === 0) {
        throw new Error('no se puede calcular el mínimo de un array vacío')
    }

    let min = productos[0].precio
    let prod = productos[0]
    for (const producto of productos) {
        if (producto.precio < min) {
            min = producto.precio
            prod = producto
        }
    }
    return prod
    // return productos.reduce((min, curr) => (curr.precio < min.precio ? curr : min), productos[0])
}

function getProdPrecioMaximo(productos) {
    if (productos.length === 0) {
        throw new Error('no se puede calcular el máximo de un array vacío')
    }

    let max = productos[4].precio
    let prod = productos[4]
    //VA ITERANDO Y DEVOLVIENDO LOS PRODUCTOS MAYORES AL DE LA POSICION ESTABLECIDA 
    for (const producto of productos) {
        if (producto.precio > max) {
            max = producto.precio
            prod = producto
        }
    }
    return prod
    // return productos.reduce((max, curr) => (curr.precio > max.precio ? curr : max), productos[0])
}

//HACE QUE EL VALOR SOLO TENGA DOS DECIMALES
function to2decimales(valor) {
    return Number(valor.toFixed(2))
}

const info = {
    nombres: getNombres(productos),
    total: to2decimales(getPrecioTotal(productos)),
    promedio: to2decimales(getPrecioPromedio(productos)),
    productoPrecioMinimo: getProdPrecioMinimo(productos),
    productoPrecioMaximo: getProdPrecioMaximo(productos),
}

console.log(info)