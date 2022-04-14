//obtengo el objeto que exporte desde ambas rutas
const routerAutos = require('./routers/routerAutos')
const routerBicicletas = require('./routers/routerBicicletas.js')

const express = require('express')

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Router es una funcion
//creo una mini app de autos

app.use('/api/autos', routerAutos)
app.use('/api/bicicletas', routerBicicletas)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))