/* La clase Router se usa para crear un nuevo objeto de enrutador, que es una instancia aislada de middleware y rutas.
Se utiliza cuando se desea crear un nuevo objeto de enrutador para manejar solicitudes.

El Router de express nos permite crear múltiples "mini aplicaciones" para que se pueda asignar un espacio
de nombre al api público, autenticación y otras rutas en sistemas de enrutamiento separados. 

Basicamente lo usamos para agrupar algunos puntos de acceso al servidor,
*/
const express = require('express')
const { Router } = express

const app = express()
const router = Router()

router.get('/recurso', (req, res) => {
   res.send('get ok')
})

router.post('/recurso', (req, res) => {
   res.send('post ok')
})

/* CARGAMOS EL ROUTER EN UNA URL EN PARTICULAR
Se concatenan las URL (/api/recurso) */
app.use('/api', router)

app.listen(8080)
