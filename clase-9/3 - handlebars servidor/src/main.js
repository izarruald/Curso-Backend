const express = require('express')

//instalo e importar express-handlebars
const exphbs = require('express-handlebars')

const app = express()

//le decimos cual es la extension que se usa para leer los archivos de hbs que por defecto es hbs (extname: 'hbs')
//y tambien le vamos a decir el layuot (marco comun donde voy a inscristar todas mi paginas)
const handlebarsConfig = {
  // extname: 'hbs',
  // defaultLayout: 'index.hbs'
  defaultLayout: 'index.handlebars'
}

//exphbs es lo que me traigo de la libreria handlebars
app.engine('handlebars', exphbs(handlebarsConfig))


app.set('view engine', 'handlebars')

//defino que las vistas estan dentro de la carpeta views
app.set('views', './views')

//rellenar el layouts ( {{{body}}} en el index) con el get
//hago un end point donde le paso el nombre de la plantilla y luego le paso el contexto
app.get('/', (req, res) => {
  //nombre de la plantilla = "datos" la cual quiero rellenar
  res.render('datos', {
    //le paso el contexto (lo que rellenara la plantilla "datos")
    nombre: 'coder',
    apellido: 'house',
    edad: 25,
    email: 'coder@house',
    telefono: '12345678'
  })
})

app.listen(8080)