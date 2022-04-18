/*API: es un iterfaz que permite que aplicaciones o programas de software se comuniquen y compartan datos entre ellos
bajo ciertos estandares (ej protocolo http), en sintesis habilita y facilita el intercambio de mensajes entre sistemas.
sirve para aprovechar el desarrollo de otras empresas para tu app o sitio
pueden ser publicas (cualquiera puede consultar esa info, como google maps, youtube etc..) o privadas (necesitas una autenticacion)
*/

/*API REST:
Es una de las arquitecturas mas usada para apis, cuando hablamos de aplicaciones RESTful, 
nos referimos a aplicaciones que operan en forma de servicios web, respondiendo consultas a otros sistemas a través de internet.
Dichas aplicaciones lo hacen respetando algunas reglas y convenciones 

Es una arquitectura que usa el protocolo HTTP para establecer la comunicacion entre cliente servidor (dos componentes que se comunican x internet),
- HTTP es, como su nombre lo dice, un protocolo (conjunto de reglas y especificaciones) que se utiliza a la hora de intercambiar datos a través de internet. 
- El protocolo se basa en un esquema de petición-respuesta.
- Existen clientes que realizan solicitudes de transmisión de datos, y un servidor que atiende la peticiones. 
- HTTP establece varios tipos de peticiones, siendo las principales: POST, GET, PUT, y DELETE.

Se utiliza exclusivamente para comunicación entre sistemas, mediante el protocolo HTTP.
Para que una API se considere REST, debe cumplir con las siguientes características:
- Arquitectura Cliente-Servidor sin estado (los datos no se guardan en la memoria ram, unicamente persisten hasta que el ciclo se acabe)
- Cacheable (almacenamiento para acceso rapido, recursos que se usan con mucha concurrencia)
- Operaciones comunes (Todos los recursos detrás de nuestra API deben poder ser consumidos mediante peticiones HTTP)
- Interfaz uniforme 
- Utilización de hipermedios


Para cada datos/recursos se necesita un edintificador unico (uri),el cual se consulta por endpoint que es la URL de
esa uri permite consultar un unico recurso, esto envia un codigo de estado los cuales cada uno tiene un significado

//CODIGO DE ESTADO
1xx (Informativo): La petición fue recibida, y continúa su procesamiento. 
2xx (Éxito): La petición fue recibida con éxito, comprendida y procesada. 
3xx (Redirección): Más acciones son requeridas para completar la petición. 
4xx (Error del cliente): La petición tiene algún error, y no puede ser procesada (invalida). 
5xx (Error del servidor): El servidor falló al intentar procesar una petición aparentemente válida.

//Comunicar la intencion de la accion mediante los metodos HTTP (POST, GET, PUT, y DELETE) y no por un verbo en el llamado (EJ:"obtenerIva")
METODOS HTTP: son quienes nos permiten interactuar con la api
GET    ==  solicitar/obtener informacion
POST   ==  enviar/crear nueva informacion (crear un usuario)
PUT    ==  actualizar informacion que ya existe (cambiar datos del usuario)
DELETE ==  borrar un recurso 
suelen devolver la informacion en formato JSON


*/