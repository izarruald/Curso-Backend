// JAVASCRIPT 
//- es un lenguaje de tipado dinamico, 
//- tipado debil, podes usar string y entero y te lo va a concatenar igualemente
//- las funciones

//EXPRESION es cualquier fragmento de codigo que se puede evaluar y devolver un resultado
//como por EJ evaluar una variable y devuelva el contenido de la variable

//DECLARACION: cuando hacemos una declaracion no arroja ningun resultado (undefined en consola)
// si nos arrojara un resultado cuando por ejemplo invocamos una funcion declarada o una variable declarada
//la cual nos dara el valor de dichas declaraciones
//a esto se le llama EVALUAR y es considerado una EXPRESION


//EXPRESION DE PRIMER ORDEN: es una funcion que recibe o devuelve otra funcion como resultado (FUNCION CALLBACK)
function crearSaludar (){
    return function(nombre){
        console.log("hola, " + nombre)
    }
}
const saludar = crearSaludar()
saludar("ivan") //hola, ivan




// -FUNCION QUE DEVUELVE OTRA FUNCION POR PARAMETRO (FUNCION CALLBACK)

// Creo una funcion con dos parametros, el primero es la cantidad de veces que se ejecutara
// y el segundo parametro es la funcion que sera ejecutada
function ejecutarMuchasVeces(cantVeces, fnAEjecutar){
    for(let i = 0; i < cantVeces; i++){
        fnAEjecutar()
    }
}

// Creo una funcion que muestra la fecha
function mostrarFecha(){
    console.log("Hola, me voy a ejecutar 5 veces")
}

// Invoco la funcion "ejecutarMuchasVeces" y le paso como primer param el numero 5 (cantidad de vesces que se ejecutara)
// Y como segundo parametro la funcion a ejecutar
ejecutarMuchasVeces(5,mostrarFecha)




// -FUNCION QUE DEVUELVE OTRA FUNCION CON PARAMETRO INCLUIDO (FUNCION CALLBACK)

// Creo una funcion con tres paramtros, el primero es la funcion que se ajecutara, 
// el segundo es la cantida de veces que lo hara
// y el tercero es valor que tendra el parametro de la funcion

function ejMuchasVeces(fn, cant, args){
    for (let i = 0; i < cant; i++){
        fn(args)
    }
}

// Invoco a la funcion y le paso como primer parametro otra funcion que devuelve un valor pasado por parametro y le + 1
// como segundo parametro le paso la cantidad de veces que se ejecutara dicha funcion
// y como tercer parametro le paso el argumento q tendra la funcion (parametro)S
ejMuchasVeces(function(n){console.log(n+1)}, 3 , 5) //6 (x3)




// -FUNCION QUE EJECUTA UNA FUNCION PARA CADA VALOR/DATO

//funcion que recibe dos parametros, el primero es la funcion q se ejecutara 
//y como segundo param los valores a ejecutar
function ejParaCadaArg(fn , vals ){
    //iterar cada uno de los valores y le aplico la funcion pasada por primer param
    for(const val of vals){
        fn(val)
    }
}

ejParaCadaArg(console.log , ["martin" , "andrea" , "geri" , "magui" , "ivan"])


//no tienen orden en cuanto a posicion ([0]) por lo que no son iterables con un for of
const diccionario = {
    nombre: 'pili',
    club: 'boquita',
    edad: '21',
    colorFav: 'azul'
}

array = [ "pili" , "ivan" , "jugue"]

arrayDeObj = [
    {nombre: "ivan", apodo: "pili"}
]

// FORMAS DE ACCESO
console.log(array)
console.log(arrayDeObj[0].nombre)
console.log(diccionario.nombre)

//FOR IN: recorre las posiciones del array
//FOR OF: recorre los valores del array

//Para recorrer 
console.log(Object.keys(diccionario)) //clave
console.log(Object.values(diccionario)) // valor  
console.log(Object.entries(diccionario)) // array de clave valor
console.table(Object.entries(diccionario)) //tablas


const valores = Object.entries(diccionario)
//iterar los valores de un diccionario
for(const valor of valores){
    console.log(valor)
}

//DESESTRUCTURACION
for(const [clave , valor] of valores){
    console.log(`${clave} = ${valor}`)
}


