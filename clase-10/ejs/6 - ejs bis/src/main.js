const express = require('express')

const personas = []

const app = express()

//PODER RECIBIR FORMULARIOS
app.use(express.urlencoded({ extended: true }))

//CARGO LOS MOTORES DE VISTAS
app.set('views', './views');
app.set('view engine', 'ejs');

//CARGO ESTA PAGINA DE INICIO Y LE MANDO LAS PERSONAS EN EL CONTEXTO (array)
app.get('/', (req, res) => {
    res.render('inicio', { personas });
});

//END POINT DONDE RECIBO LAS PERSONAS Y AVISAR QUE ESA PERSONA ESTA CARGADA "res.redirect('/')" 
//LO REDIRIGE A LA DIRECCION('/') ES DECIR AL INICIO
app.post('/personas', (req, res) => {
    personas.push(req.body)
    console.log(personas)
    res.redirect('/')
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
