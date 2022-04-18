//sacamos de la librerira express Router
const { Router } = require('express')

//creo const vacia de bicicletas
const bicicletas = []

//creo un nuevo Router (funcion que me devuelve un objeto de tipo Router)
const routerBicicletas = new Router()


//GET me devuelve la const bicicletas
routerBicicletas.get('/', (req, res) => {
    //cuando me lo piden devuelvo la coleccion/const
    res.json(bicicletas)
})


//POST recibo algo
routerBicicletas.post('/', (req, res) => {
    //recibo un require en el body y lo guardo en bicicletas
    bicicletas.push(req.body)

    //y lo muestro
    res.json(req.body)
})

//EXPORTO CON "module" QUE SIGNIFICA EL ARCHIVO QUE ESTOY MIRANDO
//CON EL "." ACCEDO A UNA DE LAS PROP DEL MODULO EN ESTE CASO EXPORT 
//(objeto donde puedo guardar cosas y lo que ponga dentro de exports lo podre usar en otro lado importandolo )
module.exports = routerBicicletas