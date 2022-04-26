
const fs = require('fs') //funcion que me pertmite traer la libreria FileSistem de los modulos de node

let ultimoId = 0
let i = 0


module.exports = class Contenedor{
    // los objetos de cliente se construyen con los siguientes datos
    constructor() {
        this.ruta = "productos.txt"
        this.cosas = []

    }

    sumarCosas(prod){
        //a this.cosas que es el ¿array? vacio le sumo el producto que le paso
        this.cosas.push(prod)
        //invoco a la duncion this.save y le paso x param el producto 
        this.save(prod)
        //console.log(this.cosas)
    }        

    
    save(prod){
        //esta funcion le agrega a producto un ID y ese ID tiene como VALOR la variable ultimoID(0) + 1
        prod.id = ultimoId + 1
        ultimoId++
        console.log(prod.id)
    }
    //tira un array de numeros aleatoreos
    elementoAleatorio(datos){
        const aleatorio = datos[Math.floor(Math.random() * array.length)];
        return aleatorio
    } 


    //recibe el PRODUCTO por param
    async guardar(array){
        try{
            //ACA ADENTRO SI SE COMPORTARA DE FORMA SINCRONICA POR LO "AWAIT"
            //el await espera a que se resuelva antes de seguir a la siguiente linea
            //con fs.promises.writeFile creo un archivo "productos.txt" = ruta y le agrego el ¿array? cosas 
            //console.log(array) //pido ver como llega el array
            await fs.promises.writeFile(this.ruta, JSON.stringify(array))
            
            //cuando termina se hace la promesa de readFile y a este tambien le pongo un await para que haga los mismo y dps muestre el console
            const datos = await fs.promises.readFile('productos.txt', 'utf-8')  
            console.log( "SALE DE DATOS" + datos)

            

            //ELIMINAR EL OBJETO BUSCADO POR ID
            await caja.deleteById(3)
            console.log(array)

            //ELIMINAR TODOS LOS OBJETOS DEL ARCHIVO
            await caja.deleteAll(array)
            console.log(array)
            

        } catch (error){
            console.log(error)
        } finally {
            console.log('termine')
        }
    }
}