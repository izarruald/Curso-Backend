const fs = require('fs') //funcion que me pertmite traer la libreria FileSistem de los modulos de node

let ultimoId = 0
let i = 0


class Contenedor{
        // los objetos de cliente se construyen con los siguientes datos
        constructor() {
            this.ruta = "productos.txt"
            this.cosas = []

        }

        sumarCosas(prod){
            //a this.cosas que es el ¿array? vacio le sumo el producto que le paso
            this.cosas.push(prod)
            //invoco a la duncion this.save y le paso x param el producto 
            this.save(prod)
            //console.log(this.cosas)
        }        

        
        save(prod){
            //esta funcion le agrega a producto un ID y ese ID tiene como VALOR la variable ultimoID(0) + 1
            prod.id = ultimoId + 1
            ultimoId++
            console.log(prod.id)
        }


        //recibe el PRODUCTO por param
        async guardar(array){
            try{
                //ACA ADENTRO SI SE COMPORTARA DE FORMA SINCRONICA POR LO "AWAIT"
                //el await espera a que se resuelva antes de seguir a la siguiente linea
                //con fs.promises.writeFile creo un archivo "productos.txt" = ruta y le agrego el ¿array? cosas 
                //console.log(array) //pido ver como llega el array
                await fs.promises.writeFile(this.ruta, JSON.stringify(array))
                
                //cuando termina se hace la promesa de readFile y a este tambien le pongo un await para que haga los mismo y dps muestre el console
                const datos = await fs.promises.readFile('productos.txt', 'utf-8')  
                console.log( "SALE DE DATOS" + datos)

                

                //ELIMINAR EL OBJETO BUSCADO POR ID
                await caja.deleteById(3)
                console.log(array)

                //ELIMINAR TODOS LOS OBJETOS DEL ARCHIVO
                await caja.deleteAll(array)
                console.log(array)
                

            } catch (error){
                console.log(error)
            } finally {
                console.log('termine')
            }
        }
        
        getById(id){
            if(id == 1){
                console.log(caja.cosas[0])
            }else if (id== 2){
                console.log(caja.cosas[1])
            }else if(id== 3){
                console.log(caja.cosas[2])
            }else{
                console.log("no se encontro el producto")
            }
        }
        getAll(objeto){
            console.log(objeto)
        }



        async deleteById(id){
            try {
                //pasa por todos los objetos del array
                for(let i = 0; i < array.length; i++){
                    //y si encuentre el id igual al pasado por param aplique la funcion
                    
                    if(id == array[i].id){
                        array.splice(id - 1, 1)
                        
                    }
        
                }
                await fs.promises.writeFile(this.ruta, JSON.stringify(array, null))
                console.log("SALE DE ELIMINAR POR ID" + await fs.promises.readFile('productos.txt', 'utf-8'))
                //const datos = await fs.promises.readFile('productos.txt', 'utf-8')  
                //console.log(datos)
                
            } 
            catch (error) {
                return 'Error! ID no existe o ya fue eliminado'
            }
            finally{
                console.log("TERMINE DE BORRAR POR ID")
            } 
        }

        async deleteAll(array){
            try {
                //pasa por todos los objetos del array
                for(let i = 0; i < array.length; i++){
                    //y si encuentre el id igual al pasado por param aplique la funcion
                    
                    if(array == array){
                        array.splice( 0, array.length + 1)
                        
                    }
        
                }
                await fs.promises.writeFile(this.ruta, JSON.stringify(array, null))
                console.log(await fs.promises.readFile('productos.txt', 'utf-8'))
                //const datos = await fs.promises.readFile('productos.txt', 'utf-8')  
                //console.log(datos)
                
            } 
            catch (error) {
                return 'Error! ID no existe o ya fue eliminado'
            }
            finally{
                console.log("TERMINE DE BORRAR EL ARRAY")
            } 
        }

}

//caja significa un NUEVO CONTENEDOR
caja = new Contenedor()
array = caja.cosas
archivo = caja.ruta


//OBJETO 1
const producto1 = {
    titulo: "Escuadra",
    precio: 200,
    thumbnail: 'https://cdn3.iconfinder.com',
}

//OBJETO 2
const producto2 = {
    titulo: "Lapiz",
    precio: 50,
    thumbnail: 'https://cdn3.iconfinder.com',
}

//OBJETO 3
const producto3 = {
    titulo: "Calculadora",
    precio: 300,
    thumbnail: 'https://cdn3.iconfinder.com',
}

//SAVE
//a caja que es el array vacio le sumo los productos con la funcion "sumarCosas",
//la cual dentro tiene una funcion SAVE que le suma un id diferente a cada uno
caja.sumarCosas(producto1)
caja.sumarCosas(producto2)
caja.sumarCosas(producto3)


//GUARDAR ARRAY (pasado a string) EN ARCHIVO TXT DE FORMA SINCORNICA 
// Y MUESTRA EL ID APLICADA A CADA UNO CON save()
caja.guardar(array)


//RECIBIR ARRAY POR ID
caja.getById(2)


//DEVUELVE UN ARRAY CON LOS OBJETOS PRESENTES EN EL ARCHIVO
caja.getAll(array)  










