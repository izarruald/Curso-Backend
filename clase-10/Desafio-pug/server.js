// const express = require('express')
// const exphbs = require('express-handlebars')
const express = require('express')
const Contenedor = require('./Contenedor/Contenedor')
const datosProductos = new Contenedor('productos')

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

//---------------------------------------

//cargan los productos desde form
app.get('/', (req, res) => {
  res.render('formularioProductos', req.query)
})

//recibe los productos cargados en el form y la const "hayProductos"
app.get('/vistaProductos', async (req, res) => {
  const allProductos = await datosProductos.getAll()
  const hayProductos = allProductos.length > 0
  res.render('vistaProductos', { hayProductos, allProductos })
})

// va a ser una api rest
app.post('/vistaProductos', async (req, res) => {
  try {
    console.log(await datosProductos.getAll())
    console.log(req.body + ' sale de console')
    const allProductos = await datosProductos.getAll()
    let lastID = 0
    const noImage =
      'https://cdn4.iconfinder.com/data/icons/basic-ui-element-flat-style/512/Basic_UI_Elements_-_2.3_-_Flat_Style_-_36-02-64.png'

    if (allProductos.length) {
      lastID = allProductos[allProductos.length - 1].id
    }

    const productoNuevo = {
      id: lastID + 1,
      nombre: req.body.nombre ? req.body.nombre : 'N/N',
      precio: req.body.precio ? req.body.precio : 0,
      imagen: req.body.imagen ? req.body.imagen : noImage,
    }

    await datosProductos.add(productoNuevo)
    res.redirect('/')
  } catch (error) {
    console.log(`ERROR: ${error}`)
    console.log(allProductos)
  }
})

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port} http://localhost:8080`)
})
server.on('error', (error) => console.log(`Error en servidor ${error}`))
