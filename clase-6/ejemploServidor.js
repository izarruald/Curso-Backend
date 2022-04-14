//INSTALAR NODEMON:
//- Se instala de forma global con "npm i -g nodemon" (LO HICE DE FORMA LOCAL EN "package.json / script")

//- Vamos a ejecutar el programa cada vez que detecte un cambio en lugar de escribir "node desafio.js" todo el tiempo

//- require nos permite incluir el codigo de esa libreria "http" dentro de nuestro proyectos,...
//esta dentro de node pero no dentro de nuestro proyecto
console.log("probando nodemon x consola")
const http = require('http')

//-la mision de un servidor es responder todas las preguntas que un cliente le haga

//-http tiene varios metodos, uno de ellos es create server 
//- La funcion callback que enviamos a createServer() recibe dos parametros que son la peticion y la respuesta
//- La petición por ahora no la usamos, pero contiene datos de la petición realizada.
// -La respuesta la usaremos para enviarle datos al cliente que hizo la petición. 
// -De modo que "respuesta.end()" sirve para terminar la petición y enviarle datos al cliente.

//CONFIGURO EL SERVIDOR
const server = http.createServer ((peticion, respuesta) => {
    //respuesta.end('hola mundo, soy el pili')
    //peticion tiene un valor url, de esta forma creamos una const que cambia el valor de la url...
    const { url: ruta } = peticion
    //y aca hacemos un switch evaluanco la url
    switch (ruta) {
        //en caso que sea "localhost/8080/llegada" envia esto
        case '/llegada':
            respuesta.end('Hola mundo')
            break
        //en caso que sea "localhost/8080/salida" envia esto    
        case '/salida':
            respuesta.end('Chau mundo')
            break
        //en caso que sea "localhost/8080" envia esto    
        default:
            respuesta.end('ok...')
            break
    }
    //llegara cuando se recargue el navegador
    //console.log('Llego un pedido!')//llega dos veces porque se hacen dos pedidos, el del contenido y el del icono del la pagina
})

//para conectar el servidor
//SERVIDOR QUIERO QUE EMPIECES A ESCUCHCAR ENVENTOS QUE SUCEDEN EN ESTA COMPUTADORA 
//se le da un puerto (8080), cuando alguien quiera comunicarse con mi aplicacion debe acceder al puerto 8080
const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})

//- Cliente http: aplicacion capaz de enviar mensajes usando el protocolo http el cual usamos nosotros para comunicarnos
//- el navegador se comporta como un cleinte http cuando buscamos una url, hace una peticion y recibe una respuesta

//- el navegador no es el unico que que pueder hacer pedidos con este protocolo, podemos usar la extension thunder client...
//a la cual le pasamos una url de la misma forma y te da la respuesta

//- tambien lo podemos hacer desde la terminal con fetch 39'