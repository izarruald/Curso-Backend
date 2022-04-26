/* Pug JS es un motor de plantillas que nos permite utilizar archivos estáticos como plantillas, 
enviar valores para reemplazar variables dentro de las mismas y transformar estos archivos en páginas HTML 
que se envían al cliente.
Express permite trabajar con muchos motores de plantillas, entre los que se encuentra Pug JS.
Pug es muy fácil de implementar, solo bastará un par de líneas de código para 
indicarle a express que use Pug JS como motor de plantillas. 

diapo 8
Una vez que se ha configurado e instalado correctamente Pug js solo queda crear nuestra primera plantilla
y mostrarla al cliente. Para ello crearemos el archivo hello.pug (.pug es la extensión de las plantillas) 
y la mostraremos al ingresar en la url: localhost:8080/hello

El siguiente paso será modificar la ruta “/hello” que actualmente está mostrando al usuario el mensaje “Hola mundo”. 
Lo reemplazamos con la plantilla que creamos. 

Para ello usaremos la función “render” que está disponible en el objeto res (response). 
Esta función recibe dos parámetros: el primero es el nombre de la plantilla a mostrar 
y el segundo un objeto con los valores a reemplazar.

res.render(view: string, options?: Object)
*/ 