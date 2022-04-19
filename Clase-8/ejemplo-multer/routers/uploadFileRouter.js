//le saco de adentro router a express
const { Router } = require('express')


const { extraerUnArchivo, extraerVariosArchivos } = require('../middlewares/procesamientoDeArchivos.js')

//IMPORTO LOS CONTROLADORES
const {
    uploadFileController,
    uploadFilesController
} = require('../controladores/uploadFiles.js')

//creo constante router
const router = new Router()

//VA A TENER DOS RUTAS

//hago una peticion a '/uploadfile', va a pasar por el middlewares de extracion de archivos y va a ir al controlador de
//uploadFileController que es quien decide que voy a hacer despues
router.post('/uploadfile', extraerUnArchivo, uploadFileController)
 
//hago una peticion a '/uploadfiles', va a pasar por el middlewares de extracion de archivos y va a ir al controlador de
//uploadFileController que es quien decide que voy a hacer despues
router.post('/uploadfiles', extraerVariosArchivos, uploadFilesController)

//exporto el modulo router
module.exports = router