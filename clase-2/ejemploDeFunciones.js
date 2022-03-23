//funciones con parametros anonimoas
function sumar(num1, num2) {
    return num1 + num2
}

//expresion\
console.log(sumar(4, 5))

console.log(sumar('hola', 'chau'))


//ES POSIBLE PASAR FUNCIONES POR PARAMETRO
//funciones de primera orden (funciones que reciben otras funciones)
function cuentaDoble(operacion, num1, num2,) {
    const result1 = operacion(num1, num2)
    const result2 = operacion(num1, num2)
    return result1 + result2
}

console.log(cuentaDoble(sumar, 2, 3))



//ADEMAS DE PASAR FUNCIONES POR PARAMETROS TAMBIEN PUEDO DEVOLVER FUNCIONES COMO RESULTADOS
//la funcion crearMultiplicador recibe por parametro multip (numero por el cual se multiplicara),
//el cual en las varibles declaradas es 2, 3 o 4 depende la variable elegida
//y en la funcion de adentro recibe "n", valor que se le da a la variable que multiplica
function crearMultiplicador(multip) {

    return function (n) {
        return multip * n
    }
}

// function doble(n) {
//     return 2 * n
// }

// function triple(n) {
//     return 3 * n
// }

// function cuadruple(n) {
//     return 4 * n
// }

//CLAUSURAS (hace que el valor de una variable LOCAL sea GLOBAL) en este caso el parametro (multip)
//una funcion que se devuelve como resultado, sigue manteniendo un valor que esta declarado (adentro de la funcion) por fuera de la funcion
//esta variable tiene dentro una funcion que multiplica el numero del parametro por la cantidad del nombre (2, 3 o 4)
const doble = crearMultiplicador(2)
const triple = crearMultiplicador(3)
const cuadruple = crearMultiplicador(4)

//es la variable que multiplica y se le da como parametro el numero a multiplicar = ("n")
console.log(doble(10))
console.log(triple(10))
console.log(cuadruple(10))


const nombre = "marian"
const fraseLarga = `hola como estas "${nombre}", todo bien? - '${sumar(2, 3)}'`
//const fraseLarga = 'hola como estas "' + nombre + '", todo bien? - ' + "'" + (sumar(2, 3)) + "'"

console.log(fraseLarga)  