const express = require('express')
const router = require("./routes/router")
const Contenedor = require("./Contenedor")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))



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

app.use('/api/productos', router)


/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
