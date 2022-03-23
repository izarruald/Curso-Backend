//contiene coleccion de datos adentro
const array = [1, 2, 3, 4, 5]

//se define entre llaves, contiene definiciones / nombre => valor
const diccionario = {
    nombre: 'marian', // key: value    ==>   k,v
    apellido: 'aquino',
    rol: 'profe'
}


//esto se puede (se le pueden agregar cosas a CONST solo que no se le podra volver a asignar un valor como en la linea 2)
array.push(6)

// esto no funciona! tira error! porque es CONST (no se le puede volver a asignar un valor con "=")
array = []

// esto si se puede (estoy modificando el estado interno del diccionario)
diccionario['pais'] = 'argentina'
diccionario.provincia = 'capital federal'

// esto no funciona! tira error! porque es CONST (no se le puede volver a asignar un valor con "=")
diccionario = {
    animales: 'perros'
}

function nombre(parametros) {
    //cuerpo
}

