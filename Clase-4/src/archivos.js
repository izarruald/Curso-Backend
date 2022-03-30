const fs = require('fs') //funcion que me pertmite traer la libreria FileSistem de los modulos de node
//WRITEFILE = es una operacion que escribe/agrega un archivo en el filesistem
//grabar un archivo
//paso ruta, datos y callback
fs.writeFile('prueba.txt', 'probando...'.repeat(30_000_000), ()=>{ })

//READFILE = operacion asincrona que lee el archivo que le pasamos por primer param
fs.readFile('prueba,txt', "utf-8", (err, result) =>{
    if(err){
        console.log(err)
    } else {
        console,log(result)
    }
})
console.log('termine')

//PERO ESTE COD GENERA DESECUENCIALIDAD, NO SABES CON CERTEZA QUE SE EJECUTARA PRIMERO 
//(una funcion asincrona sabes cuando empieza pero no cuando termina)
//Para hacer q el codico tenga una secuencialidad y controlarlo debemos hacer lo siguente 


/* //creamos la oprecion y la callback recibe un error (si es que lo hay)
fs.writeFile('prueba.txt', 'probando...'.repeat(3_000), (err) => {
    //si hay erro entra y muestra por consola
    if (err) {
        console.log(err)
        console.log('terminé')
    } else {
        //sino lo hay empieza a leer el archivo y ejecuta sus funciones sincronicamente/secuencialmente
        fs.readFile('prueba.txt', 'utf-8', (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
            console.log('terminé')
        })
    }
})
//LO QUE HACE ESTE CODIGO ES ESPERAR A TERMINAR UNA OPERACION Y RECIEN EN ESE MOMENTO EMPIEZAR A EJECUTAR LA OTRA 

//PERO PARA NO TENER QUE TENER UN CODIGO QUE SE VA CORRIENDO HACIA LA DERECHA COMO PIRAMIDE INVERTIDA 
//Y HACERLO MAS CORTO SE USA LO SIGUIENTE FORMA
*/


/* //hace exactamente lo mismo pero vuelve todo sincronico (Sync), espera que termine una operacion para comenzar con la otra
//con el catch captamos el erro y luego con el finaly ponemos lo q queremos ejecutar cuando termine la operacion/funcion
try{
    fs.writeFileSync('prueba.txt', 'probando...'.repeat(3_000))
    const result = fs.readFileSync('prueba.txt', 'utf-8')
    console.log(result)
}catch (err) {
    console.log(err)
} finally{
    console.log('termine')
}

console.log(10 + 10)
//ESTE CODIGO BLOQUEA EL HILO DE EJECUCION, NO DEJA SEGUIR CON NINGUNA TAREA HASTA QUE EL EVENTO TERMINE 
*/

//EVENT LOOP
//NODE TIENE UNA UNICA LINEA DE TIEMPO Y SOBRE ESA LINEA DE TIEMPO COLOCA LAS OPERACIONES UNA POR UNA
//cola de eventos = hilo de EJECUCION, es decir una sola cola de EJECUCION en la que maneja todo
//trabajar en paralelismo (en este caso se intenta que la ejecucion del writeFile y readFile...
//no detenga la ejecucion del console de (10 + 10))
//PROMESAS = devuelve un resultado, que en algun momento tendra un valor (como un pagare)

async function trabajarConArchivos(){
    // async crea un contexto asincronico, es decir que todo lo que pase dentro sera asincronico 
    //(delegado al sist operativo), no va estar bloqueando el hilo del programa
    try{
        //ACA ADENTRO SI SE COMPORTARA DE FORMA SINCRONICA POR LO "AWAIT"
        //el await espera a que se resuelva antes de seguir a la siguiente linea
        await fs.promises.writeFile('prueba.txt', 'probando...'.repeat(30))
        //cuando termina se hace la promesa de readFile y a este tambien le pongo un await para que haga los mismo y dps muestre el console
        const datos = await fs.promises.readFile('prueba.txt', 'utf-8')  
        console.log(datos)
    } catch (error){
        console.log(error)
    } finally {
        console.log('termine')
    }
}

//LLAMO LA FUNCION, DELEGA Y SIGUE CON EL HILO
trabajarConArchivos()
console.log(10 + 10)    