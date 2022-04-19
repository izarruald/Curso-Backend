const express = require('express')

//me traigo las rutas
const uploadFilesRouter = require('./routers/uploadFileRouter.js')

const app = express()

//RECIBO FORMULARIOS
app.use(express.urlencoded({ extended: true }))

//SERVIDOR ESTATICO DE ARCHIVOS (raiz)
app.use(express.static('public'))

//las cargo a la url '/uploadfile'
app.use('/', uploadFilesRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
