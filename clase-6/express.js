//EXPRESS: modulo externo
//Algunas de sus principales características son:
//-Es muy popular y fácil de usar.
//-Nos facilitará la tarea de crear los distintos puntos de entrada de nuestro servidor.
//-También permite personalizar la manera en que se maneja cada petición en forma más simple y rápida.

//es un mircoframework, conjunto de librerias que toman algunas desicion sobre como tenemos que trabajar (1 o 2 decisiones)

//TRAEMOS LA LIBRERIA
const express = require('express')

//INVOCAMOS LA FUNCION Y NOS CREA UNA APPLICACION
const app = express()

//INDICAMOS LA URL Y LE ENVIAMOS EL MENSAJE/CONTENIDO DE ESA DIRECCION
app.get('/', (req, res) => {
    res.send( 'ok' )
})

app.get('/llegada', (req, res) => {
    res.send( 'hola mundo' )
})

app.get('/salida', (req, res) => {
    res.send( 'chau mundo' )
})
 

//CONFIGURAR (escuchar servidor en el puerto 8080)
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

//CAPTURA ALGUN ERROR EN EL SERVIDOR
server.on("error", error => console.log(`Error en servidor ${error}`))
