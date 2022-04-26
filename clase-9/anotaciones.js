/* 


PATRONES DE DISEÑO: manera conocida de resolver un problema

MVC(Modelo Vista Controlador):
- MODELO: parte logica negocio modelado, reglas del negocio, (BACK END)
- VISTA: parte visual (FRONT END)
- CONTROLADORES: componentes que se encargan de tener en contacto la parte visual con la logica (modelo)(BACK END)

CLIENTES LIVIANOS??

MOTORES DE PLANTILLAS:
En la programación en general y en la programación web en particular existe el denominado patrón MVC (Modelo Vista Controlador)
Este patrón trata de separar los datos de su presentación. Por decirlo en términos web,
separar el código del programador del código del diseñador web. 
Las plantillas (templates) son una aproximación más para resolver este problema.

Un motor de plantillas lee un archivo de texto (plantilla) que contiene la presentación ya preparada en un lenguaje Pseudo HTML 
e inserta en él la información dinámica que le ordena el "controlador" (la C de MVC) que representa la parte que une la vista con la información.
La sintaxis a utilizar depende del motor de plantillas utilizado.
Los motores de plantillas suelen tener un pequeño lenguaje de script que permite generar código dinámico.

EN SINTENTIS SE ENCARGA DE HACER LA MEZCLA ENTRE COSAS DE FRONT END CON LAS DE BACK END, como por ejemplo un html en el que tenga: 
<h1>hola mi nombre es ${nombre}</h1> ||  y una variable: const contexto = {nombre: ivan}

una de las mayores VENTAJAS de los motores de plantillas es que podemos generar vistas html y devolverlas al frontend
para tener las vistas ya listas para ser mostradas y que no sea el front end quien tenga que armar las visualizacion
de los datos

HANDLEBARS 
Handlebars es un lenguaje de plantillas simple.
Utiliza una plantilla y un objeto de entrada para generar HTML u otros formatos de texto.
Las plantillas de Handlebars tienen el aspecto de texto normal con expresiones de Handlebars incrustadas.
Una expresión de Handlebars se compone de {{ + algunos contenidos + }}
Cuando se ejecuta la plantilla, las expresiones de Handlebars se reemplazan con valores de un objeto de entrada. 

QUEDE EN 40'
*/