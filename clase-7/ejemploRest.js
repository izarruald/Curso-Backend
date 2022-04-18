const express = require('express')

const app = express()

//CRUD (siglas)
/*
Create  : crear         ==> post
Read    : leer          ==> get
Update  : actualizar    ==> put 
Delete  : borrar        ==> delete
*/



/* 
Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON
en formato urlencoded al recibirlos, debemos indicarlo en forma explícita, 
agregando las siguiente líneas luego de crearlo.
*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



/* QUERY
Las peticiones pueden incorporar detalles sobre la búsqueda que se quiere realizar.
Estos parámetros se agregan al final de la URL, mediante un signo de interrogación ‘?’ y enumerando pares ‘clave=valor’, 
separados por un ampersand ‘&’ si hay más de uno. 
Al recibirlos, los mismos se encontrarán en el objeto ‘query’ dentro del objeto petición (req).
*/

// Para acceder a los campos despues de ? se lo hace a traves req.query o 
//{ query } el cual esta dentro del objeto req quien tiene los datos de la pericion

app.get('/', ({ query }, res) => {

    //EJ: localhost:8080/?hola=mundo , DEVOLVERIA {hola : mundo} en query
    //EJ: localhost:8080/?hola=mundo&saludos=cordiales , DEVOLVERIA {hola : mundo , saludos : cordiales} en query
    console.log(query)

    //uso "res.json" para que me devuelva un objeto en formato JSON con clave mensaje y valor la respuesta
    res.json({ mensaje: query })
})


/* PARAMS
//Ejemplo de petición GET con identificador 
En caso de que se quiera acceder a un recurso en particular ya conocido, es necesario enviar un identificador unívoco en la URL.
Para enviar este tipo de parámetros, el mismo se escribirá luego del nombre del recurso (en la URL), separado por una barra. 
Por ejemplo: http://miservidor.com/api/mensajes/1 
(En este ejemplo estamos queriendo acceder al mensaje nro 1 de nuestros recursos.)

Para acceder al campo identificador desde el lado del servidor,
Express utiliza una sintaxis que permite indicar anteponiendo ‘dos puntos’ antes del nombre del campo identificador,
al especificar la ruta escuchada. Luego, para acceder al valor del mismo, se hará a través del campo ‘params’ del objeto petición (req)
recibido en el callback.

SE USA CUANDO QUIERA ACCEDER A UN RECURSO UNIVOCO
*/
app.get('/:id', ({ params }, res) => {
    //params == id
    console.log(params)
    res.json( params )
})






/* 
Algunas peticiones requieren el envío de algún dato desde el cliente hacia el servidor.
Por ejemplo, al crear un nuevo registro. 
Este es el caso de la petición POST.
Para acceder al cuerpo del mensaje, incluído en la petición, lo haremos a través del campo ‘body’ del objeto petición
recibido en el callback. En este caso, estamos devolviendo como respuesta el mismo registro que se envió en la petición.
*/
app.post('/', ({ body }, res) => {
    // const { body } = req
    console.log(body)
    res.json({ mensaje: 'recibí una petición con método "post"' })
})

app.put('/:id', ({ body, params }, res) => {
    // const { body, params } = req
    console.log(params, body)
    res.json({ mensaje: 'recibí una petición con método "put"' })
})

app.delete('/:id', ({ params }, res) => {
    // const { params } = req
    console.log(params)
    res.json({ mensaje: 'recibí una petición con método "delete"' })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))