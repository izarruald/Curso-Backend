const express = require('express')
const Contenedor = require('./Contenedor/Contenedor')
const datosProductos = new Contenedor('productos')

//after clase 12 min 8:15 explica todo

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

//---------------------------------------

//cargan los productos desde form
app.get('/', (req, res) => {
  res.render('inicio') //(./views/formularioProductos)
})

// va a ser una api rest
app.post('/productos', async (req, res) => {
  const allProductos = await datosProductos.getAll()
  let lastID = 0

  if (allProductos.length) {
    lastID = allProductos[allProductos.length - 1].id
  }

  const noImage =
    'https://cdn4.iconfinder.com/data/icons/basic-ui-element-flat-style/512/Basic_UI_Elements_-_2.3_-_Flat_Style_-_36-02-64.png'

  const productoNuevo = {
    id: lastID + 1,
    nombre: req.body.nombre ? req.body.nombre : 'N/N',
    precio: req.body.precio ? req.body.precio : 0,
    imagen: req.body.imagen ? req.body.precio : noImage,
  }

  await datosProductos.add(productoNuevo)

  res.redirect('/')
})

//recibe los productos cargados en el form y la const "hayProductos"
app.get('/vistaProductos', async (req, res) => {
  const allProductos = await datosProductos.getAll()
  const hayProductos = allProductos.length > 0
  res.render('vistaProductos', { hayProductos, allProductos })
})

app.listen(8080, () => {
  console.log('conectado!')
})
