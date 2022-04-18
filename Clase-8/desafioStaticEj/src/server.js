const express = require('express')
const { routerMascotas } = require("./router/mascotas")
const { routerPersonas } = require("./router/personas")

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

/* le pasamos la propiedad static y como argumento 'public' el nombre de una carpeta/directorio
que va a estar en la misma carpeta en la que se desarrolla mi proyecto (index.html)*/ 
app.use(express.static('public'))
//se va a poder acceder a la carpeta public desde la ruta raiz del servidor ("localhost:8080/") 


/* ------------------------------------------------------ */
/* Cargo los routers */

app.use('/api/mascotas', routerMascotas)
app.use('/api/personas', routerPersonas)

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
