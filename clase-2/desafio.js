class Usuario {
    // los objetos de cliente se construyen con los siguientes datos
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre; // atributos de las instancias
        this.apellido = apellido; // atributos de las instancias
        this.libros = libros; // atributos de las instancias
        this.mascotas = mascotas; // atributos de las instancias
    }

    // atributo de la clase (caracteristica de la clase cliente no de cada objeto)
    static empresa = 'CoderHouse'

    getFullName(){
        return `${this.nombre}` + " " + `${this.apellido}`;
    };

    addMascota(){
        return this.mascotas.push("pato") 
    };

    conuntMascotas(){
        return this.mascotas.length
    }

    addBooks(){
        return this.libros.push({nombre: 'Harry Potter y la piedra filosofal' , autor:'J. K. Rowling'}) 
    };

    getBookNames() {
        for (let i = 0; i < this.libros.length; i++) {
            console.log("nombre: " + this.libros[i].nombre)
        }
    }

    // Forma 2 con funcion flecha
    getBookNames2(){
        //creo una variable vacia
        const nombreLibro =[]
        
        //con foreach ejecuto la funcion por cada array elemento del array
        this.libros.forEach(libro =>nombreLibro.push(libro.nombre));
        
        return nombreLibro;
        
        }
    
    getBookNames3(){
        // creo una variable vacia
        const nombreLibro =[]
        
        // con foreach ejecuto la funcion por cada elemento del array, le paso por parametro libro 
        // y al array vacio le agrego libro.nombre de cada elemento
        this.libros.forEach(function(pepe){
            nombreLibro.push(pepe.nombre)
        });
        
        // devuelvo el valor de nombreLibro
        console.log(nombreLibro) 
        
    }
    
    getBookNames4(){
        const dosLibros = this.libros.map(elemnto => elemnto.nombre)
        console.log(dosLibros)
    }
}

const usuario1 = new Usuario('ivan', 'izarrualde', [{nombre:'viaje al centro de la tierra' , autor:'julio verne'}] , ['perro', 'gato'] )


/* console.log(usuario1.getFullName())// nombre completo
console.log(usuario1.addMascota())
console.log(usuario1.conuntMascotas())// conteo de mascotas
console.log(usuario1.mascotas)*/
console.log(usuario1.addBooks())
//console.log(usuario1.libros) 

//FOR OF
usuario1.getBookNames()

//FOR EACH
console.log(usuario1.getBookNames2())
usuario1.getBookNames3()

//MAP
usuario1.getBookNames4()