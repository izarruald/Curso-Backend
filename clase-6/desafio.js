const fs = require('fs') //funcion que me pertmite traer la libreria FileSistem de los modulos de node

let ultimoId = 0
let i = 0


class Contenedor{
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
                // await caja.deleteById(3)
                // console.log(array)

                //ELIMINAR TODOS LOS OBJETOS DEL ARCHIVO
                // await caja.deleteAll(array)
                // console.log(array)
                

            } catch (error){
                console.log(error)
            } finally {
                console.log('termine')
            }
        }
}

//caja significa un NUEVO CONTENEDOR
caja = new Contenedor()
array = caja.cosas
archivo = caja.ruta


//OBJETO 1
const producto1 = {
    titulo: "Escuadra",
    precio: 200,
    thumbnail: 'https://cdn3.iconfinder.com',
}

//OBJETO 2
const producto2 = {
    titulo: "Lapiz",
    precio: 50,
    thumbnail: 'https://cdn3.iconfinder.com',
}

//OBJETO 3
const producto3 = {
    titulo: "Calculadora",
    precio: 300,
    thumbnail: 'https://cdn3.iconfinder.com',
}

//SAVE
//a caja que es el array vacio le sumo los productos con la funcion "sumarCosas",
//la cual dentro tiene una funcion SAVE que le suma un id diferente a cada uno
caja.sumarCosas(producto1)
caja.sumarCosas(producto2)
caja.sumarCosas(producto3)


//GUARDAR ARRAY (pasado a string) EN ARCHIVO TXT DE FORMA SINCORNICA 
// Y MUESTRA EL ID APLICADA A CADA UNO CON save()
caja.guardar(array)


//IMPORTAMOS LA LIBRERIA
const express = require('express')

//INVOCAMOS LA FUNCION Y NOS CREA UNA APPLICACION
const app = express()

let contadorVisitas = 1

//INDICAMOS LA URL Y LE ENVIAMOS EL MENSAJE/CONTENIDO DE ESA DIRECCION
app.get('/', (req, res) => {
    res.send( `
    <h1>Desafio Express</h1>
    <p>Esto es un txt</p>
    <a href="/visitas"</a>
    ` )
})

//PARA ENVIAR UN ARCHIVO (ej: index.html)
app.get('/pagina', (req, res) => {
    //"enviame el archivo que esta en este directorio(cwd) + /index.html "
    res.sendFile(process.cwd() + '/index.html')
})

//MUESTRA CANTIDAD DE VECES QUE SE VISITO EL SITIO
app.get('/visitas', (req, res) => {
    //si contador esta en 1 pone "vez" , sino "veces"
    const palabraFinal = contadorVisitas == 1 ? 'vez' : 'veces'

    //le paso contador inicializado en 1 y a medida que se va recargando aumenta el valor en 1 con el ++
    res.send( `sitio visitado  ${contadorVisitas++} ${palabraFinal}` )
})

app.get('/fyh', (req, res) => {
    const fecha = new Date()
    const fechaStr = fecha.toLocaleString() 
    res.send({
        //ENVIAMOS UN OBJETO CON CLAVE "fyh" y VALOR "fechaStr"
        fyh:fechaStr
    })
})


//DESAFIO!!!!

 

app.get('/productos', (req, res) => {
    res.send (array)
})

app.get('/productosRandom', (req, res) => {
    res.send (caja.elementoAleatorio(array))
})

//CONFIGURAR (escuchar servidor en el puerto 8080)
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

//CAPTURA ALGUN ERROR EN EL SERVIDOR
server.on("error", error => console.log(`Error en servidor ${error}`))