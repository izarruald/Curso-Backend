//CREO UNA NUEVA RUTA Y AGRUPO UN PORCESO EN ESTA MISMA
//la const router es = exprese.Router()
const express = require('express')
const router = express.Router()


//envio respuesta a '/' 
//PONER UNO POR UNO CON POST Y DESPUES BUSCARLOS POR ID

//GET
router.get('/', (req, res, next) => {
    res.json(array)
    console.log(array)
})


//GET
router.get('/:id', (req, res, next) => {
    const arrayObjeto = array;
    const id = req.params.id
    const filter = arrayObjeto.filter(function(array){
        //filtra el array que tiene mismo id que 'id'
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

//PUT
router.put('/:id', ({ body, params }, res) => {
    //los estoy sacando de body
    let {titulo , precio , thumbnail} = body
    let id = Number(params.id)
    array[params.id - 1] = {titulo , precio , thumbnail, id}
    res.json(array)
    console.log(array)
})


//DELETE
router.delete('/:id', ({ params }, res) => {
    console.log(params.id)
    const filter = array.filter(function(array){
        //filtra el array que tiene mismo id que 'id'
        return array.id != params.id;
    })
    array = filter
    res.json(array)
    console.log(array)
})

module.exports = router