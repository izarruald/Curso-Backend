const express = require('express') //traigo exprese de la libreria

const app = express()

//para acceder a la carpeta public desde la ruta que yo quiero uso '/static' (puede ser cualquier nombre)
app.use('/static', express.static('public'))

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))