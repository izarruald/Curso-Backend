//PROMESAS (comportamiento sincronico y asincronico)
//sirve para retrasar la entrada de un resultado

//COMPORTAMIENTOS BLOQUEATES 

//COMPORTAMIENTOS NO BLOQUEATES 
//son las operaciones delegadas al sistema operativo

function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error('no se puede dividir por cero')
    }
    return dividendo / divisor
}

const resultado = dividir(4, 2)
// Resultado2 tiene una dependencia de resultado porque necesita el valor de la cuenta para poder ejecutar la funcion
// esto no necesita un  .then porque no delega la busqueda de info sino que lo hace el mismo node 
const resultado2 = dividir(resultado, 2)

let datos 

//Fetch manda a buscar un archivo a una URL al sistema operativo lo que puede generar una tardanza,
//por eso mismo usa el .then que significa que recien CUANDO tenga ese resultado empiece a ejecutar la funcion
fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(function (res) {
        return res.json()
        //esto encia una promesa, por eso uso el .then de nuevo
    })
    //cuando tenga esa promesa ejecuta esta funcion
    .then(function (obj) {
        console.log(obj)
        datos = obj
    })