//EJEMPLO

//MIDDLEWARE (entremedio) proceso entre la peticion y la respuesta
//LA FUNCION CALLBACK OBTIENE EL NOMBRE DE CONTROLADOR, RECIBE DOS PARAMETROS (peticion y respuesta) 
//la primera sirve para obtener info sobre lo enviado por el cliente y la segunda sirve para enviar una respuesta

app.get('/rota', (req, res, next) => {
    try {
        throw Error(mensajeDeError)
    } catch (error) {
        next(error)
    }
})

/* Las funciones de middleware pueden realizar las siguientes tareas:
Ejecutar cualquier código.
Realizar cambios en la solicitud y los objetos de respuesta.
Finalizar el ciclo de solicitud/respuestas.
Invocar la siguiente función de middleware en la pila.
 */