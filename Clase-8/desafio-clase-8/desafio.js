const express = require('express')

const app = express()
const productos = []

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

//A TODAS LAS PETICIONES QUE LLEGUEN...
app.use((req, res, next) => {
    //si la url incluye un "@" (split separa todo en caracteres y analiza uno x uno)
    if (req.url.split().includes('@')) {
        //interrumpo la operacion
        res.status(400).json({ msj: 'ruta invalida' })
    } else {
        //sino segui
        next()
    }
})

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


//CREO UNA NUEVA RUTA Y AGRUPO UN PORCESO EN ESTA MISMA
//la const router es = exprese.Router()
const router = express.Router()


//uso los middlewares
router.use((req, res, next) => {
    console.log('llegó una peticion')
    next()
})

router.use((req, res, next) => {
    console.log(`metodo: ${req.method} - url: ${req.url}`)
    next()
})


//envio respuesta a '/' 
//PONER UNO POR UNO CON POST Y DESPUES BUSCARLOS POR ID

router.get('/', (req, res, next) => {
    res.json(array)
    console.log(array)
})

router.get('/:id', (req, res, next) => {
    const arrayObjeto = array;
    const id = req.params.id
    const filter = arrayObjeto.filter(function(array){
        //devuelve el array que tiene mismo id que 'id'
        return array.id == id;
    })
    if (id > array.length){
        res.send('id inexistente')
    }else{
        res.json(filter)
    }
})


//POST recibo algo
router.post('/', (req, res, next) => {
    //recibo un require en el body y lo guardo en bicicletas
    caja.sumarCosas(req.body)
    res.json(req.body)
})



app.use('/api/productos', router)


/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
