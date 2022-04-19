const express = require('express')

const app = express()

// app.use((req, res, next)=>{
//     if (req.method =='POST') {
//         sendMail('admin@mail.com')
//     }
//     db.insert({
//         fecha: new Date(),
//         metodo: req.method
//     })
//     next()
// })



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



//CREO UNA NUEVA RUTA Y AGRUPO UN PORCESO EN ESTA MISMA
//la const router es = exprese.Router()
const router = express.Router()


//uso los middlewares
//MIDDLEWARE (entremedio) proceso entre la peticion y la respuesta
//LA FUNCION CALLBACK OBTIENE EL NOMBRE DE CONTROLADOR, RECIBE DOS PARAMETROS (peticion y respuesta) 
//la primera sirve para obtener info sobre lo enviado por el cliente y la segunda sirve para enviar una respuesta
router.use((req, res, next) => {
    console.log('llegó una peticion')
    next()
})

router.use((req, res, next) => {
    console.log(`metodo: ${req.method} - url: ${req.url}`)
    next()
})

router.use((req, res, next) => {
    req.regalito = { hola: 'chau' }
    next()
})

//envio respuesta a '/'
router.get('/', (req, res, next) => {
    res.send('ok r')
})

//le digo que la ruta de router pasa a ser '/r'
app.use('/r', router)


//CREO UN MIDDLEWARE
function miMiddleware(req, res, next) {
    console.log('un middleware especial')
    next()
}

//middleware con ruta denominada de '/h'
app.get('/h', miMiddleware, (req, res, next) => {
    res.send('ok h')
})




/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
