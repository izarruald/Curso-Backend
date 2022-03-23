// va a existir el tipo de dato cliente
class Cliente {
    // los objetos de cliente se construyen con los siguientes datos
    constructor(nombre, fecha, direccion) {
        this.nombre = nombre; // atributos de las instancias
        this.fechaNacimiento = fecha; // atributos de las instancias
        this.direccion = direccion; // atributos de las instancias
    }

    // atributo de la clase (caracteristica de la clase cliente no de cada objeto)
    static empresa = 'CoderHouse'

    verStringDePresentacion() {
        return `nombre: ${this.nombre}`
    }
}

// creo un nuevo objeto de tipo cliente 
const cliente1 = new Cliente('marian', '2022-03-17', 'CABA')

const cliente2 = new Cliente('pepe', '2022-03-17', 'Rosario')

console.log(cliente1)
console.log(cliente2)

console.log(cliente1.verStringDePresentacion())// nombre: marian
console.log(cliente2.verStringDePresentacion())// nombre: pepe

console.log(cliente1.empresa) // no existe 
console.log(cliente2.empresa) // no existe

console.log(Cliente.empresa) // caracteristica de la clase cliente no de cada objeto