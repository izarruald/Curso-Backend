const express = require('express') //traigo exprese de la libreria

const app = express()


/* le pasamos la propiedad static y como argumento 'public' el nombre de una carpeta/directorio
que va a estar en la misma carpeta en la que se desarrolla mi proyecto (index.html)*/ 
//para acceder a la carpeta public desde la ruta que yo quiero uso '/static' (puede ser cualquier nombre)
app.use('/static', express.static('public'))

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))