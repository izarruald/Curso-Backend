//SETTIMEOUT: retrasa la ejecucion de la funcion
//setTimeout(function, milliseconds, param1, param2, ...)
//es una funcion nativa, no hace falta importarla
//la funcion setTimeout() revibe un callback, y lo ejecuta despues de un numero especifico de milisegundos
//trabaja sobre un medelo asincronico no bloqueante ??
//El método setInterval() continuará llamando al callback hasta que se llame a clearInterval() o se cierre la ventana.

let i = 0

//espera 10 segundos y manda por consola el msj
const timer = setTimeout(
    () => {
        console.log('adios argentina, me voy de viaje')
    }, 10_000)

//lo corta a los 2 segundos por lo que la funcion no es ejecutada
setTimeout(() => {
    clearTimeout(timer)
}, 2_000)



//SETINTERVAL

/* const timer = setInterval(
    () => {
        //muestra por console i incrementada en 1
        console.log(i++)
        if (i > 10) {
            //cuando llegue a 10 veces repetido corta intervalo
            clearInterval(timer)
        }
    }, 500) */

//La función setInterval() también recibe un callback, pero a diferencia de setTimeout() 
//...lo ejecuta una y otra vez cada vez que se cumple la cantidad de milisegundos indicada.
//Trabaja sobre un modelo asincrónico no bloqueante.
//El método setInterval() continuará llamando al callback hasta que se llame a clearInterval() o se cierre la ventana.
//El objeto devuelto por setInterval() se usa como argumento para llamar a la función clearInterval().    




