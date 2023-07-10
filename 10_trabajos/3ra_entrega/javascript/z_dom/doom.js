/*Formas de obtener valores de un documento HTML.
1) document.getElementById('TxtLongitud'); OBTENGO POR ID MAX 1
2) document.getElementsByClassName('TxtLongitud'); OBTENGO POR CLASES >=1
3) document.querySelector("#TxtLongitud"); # = ID
4) document.querySelector("#TxtLongitud"); . = CLASS
*/
let longitud_clave = document.querySelector("#TxtLongitud");

//console.log('longitud: ' + longitud_clave.value);