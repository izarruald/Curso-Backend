//ACA SE SUBEN LOS ARCHIVOS Y LOS ENVIO A LA CARPETA 'uploads'

const multer = require('multer')

//creo el almacenamiento de archivos en el disco duro  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //GUARDAR EN CARPETA 'uploads'
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        //LO VA A GUARDAR CON EL NOMBRE ORIGINAL
        const nombreFinal = `${Date.now()}-foto-${file.originalname}`
        cb(null, nombreFinal)
    }
})

//creo el objeto
const upload = multer({ storage }) 


/* PARA ENVIO DE ARCHIVOS(imagenes, docs) POR FORMULARIO */

//middleware para un solo archivo (espera que venga un solo archivo en la peticion y lo extrae) 
//'myFile'es el nombre del archivo que recibimos
const extraerUnArchivo = upload.single('myFile')

//middleware para varios archivos (cuando se envien mas de un img o doc vamos a usar "upload.array")
//'myFiles'es el nombre de los archivos que recibimos
const extraerVariosArchivos = upload.array('myFiles')

module.exports = {
    extraerUnArchivo,
    extraerVariosArchivos
}