//console.log esta en un ambito global sin necesidad de exportarla (10:30)
//hay algunas que no

//MODULOS EXTERNOS: no son parte de NODE, podemos traerlos por fuera de node instalarlos y traelos
//esto se hace con un administrador de paquetes
//el paquete de NODE es NPM, ES EL ENCARGADO DE DESCARGAR LOS MODULOS(LIBRERIAS)

//INSTALAR DE FORMA LOCAL: es la opción es la más recomendable, para poder tener múltiples proyectos usando distintas versiones de una misma librería 
//sin generar problemas de compatibilidad al actualizar a una nueva versión que no sea retrocompatible con las anteriores.

//Libreria/modulo de colores al console
//INSTALACION: npm install console-log-colors
//ELIMINARLA: npm uninstall console-log-colors

//INSTALAR DE FORMA GLOBAL:es útil instalar en forma global librerías utilitarias 
//(por ejemplo librerías de testing) que son usadas para facilitar las tareas de programación y revisión durante la etapa de desarrollo
//pero que no son necesarias para el uso de la aplicación.

//INSTALACION: npm install --global (10:50)

//NPM INSTALL a secas para obtener las cosas ignoradas por el gitignore no subidas al repo (11:32)

//!!!VOLVER A VER (11:40)

//LIBRERIAS QUE SE USAN SOLO PARA EL DESARROLLO DEL PROYECTO:
//npm install console-log-colors -d (developer)

//PARA ACCEDER A ALGUNA DEPENDENCIA  COMO BCRYPT (para encriptar cosas - se vera mas tarde)


//VERSIONADO (11:47)
//version de las librerias 
//primer numer: publicacion con cambios mayores muy significativos
//segundo numer: publicacion con cambios menores
//tercer numer: parches, cambios muy chiquitos y no afecta la funcionalidad 

//ACTUALIZAR DEPENDENCIAS DE LIBRERIAS
//solo parches (11:51): escribimos en nuestro package.json: ~0.13.0 
//patches y actualizaciones menores: en nuestro package.json: ^0.13.0
//todas las actualizaciones:  en nuestro package.json: *0.13.0 
 




