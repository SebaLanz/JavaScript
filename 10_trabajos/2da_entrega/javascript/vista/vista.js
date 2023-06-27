import Controlador from '../controlador/controlador.js';//Me traigo las propiedades y métodos de "Controlador".

//Creo objetos de tipo Controlador.
const objClave = new Controlador();
const objCantidad = new Controlador();


let cantidad_claves = prompt('¿Cuántas claves desea generar?');
let i = 0;
let longitud_clave = [];
let array_de_claves=[];
while ( i <= (cantidad_claves - 1)) {
     longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
     i++;
}


for (let i = 0; i < longitud_clave.length; i++) {
    array_de_claves += `${i+1}) ${objClave.validar_longitud(longitud_clave[i])}\n`;
}
alert(array_de_claves);
