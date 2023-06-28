import Controlador from '../controlador/con_clave.js';//Me traigo las propiedades y métodos de "Controlador".

//Creo objetos de tipo Controlador.
const objClave = new Controlador();
const objCantidad = new Controlador();

let cantidad_claves = prompt(`¿Cuántas claves desea generar?. Digite un número natural`);
let claves_a_generar = objCantidad.validar_cantidad_claves(cantidad_claves);

    if (claves_a_generar === true){
        let i = 0;
                let longitud_clave = [];
                let array_de_claves= [];
                while ( i <= (cantidad_claves - 1)) {
                    longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
                    i++;
                }

                for (let i = 0; i < longitud_clave.length; i++) {
                    array_de_claves += `${i+1}) ${objClave.validar_longitud(longitud_clave[i])}\n`;
                }
                alert(array_de_claves);
    }
    else if (claves_a_generar != true) {
        while (claves_a_generar != true) {
            alert(claves_a_generar);//Muestro el valor MAL ingresado por el usuario. 
            if (claves_a_generar === 'Omitió ingresar un valor.') {
                alert('Se cerrará el programa.');
                break;
            }
            cantidad_claves = prompt('¿Cuántas claves desea generar?');//Vuelvo a pedir cantidad.
            claves_a_generar = objCantidad.validar_cantidad_claves(cantidad_claves);//Vuelvo a comprobar si cumple los requisitos.
            //Si cumple los requisitos, ingresa al IF y genera un array concatenado de claves.
            
            if (claves_a_generar === true) {
                let i = 0;
                let longitud_clave = [];
                let array_de_claves= [];
                while ( i <= (cantidad_claves - 1)) {
                    longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
                    i++;
                }

                for (let i = 0; i < longitud_clave.length; i++) {
                    /*Genero un array con los resultados que arroja el objeto "objClave"
                    puede ser una clave generada o una excepción. agrego \n para imprimir
                    los resultados uno abajo del otro.*/
                    array_de_claves += `${i+1}) ${objClave.validar_longitud(longitud_clave[i])}\n`;
                }
                alert(array_de_claves);
            }
        }
    }
