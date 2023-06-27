import Clave from '../modelo/clave.js';//Me traigo las propiedades y métodos de "Clave".

class Controlador extends Clave {
  
  clave_generada = '';
  //Creo la funcion "validar_longitud".
  validar_longitud = (longitud_clave) => { 

    //Instancio un objeto de tipo Clave
    const claveValida = new Controlador();

    /*Ejecuto la función "validarNumeroEntero" con el objeto "claveValida". La función está heredada de la clase "Clave".
    Realizo las validaciones correspondientes.

    1) !claveValida.validarNumeroEntero(longitud_clave) = al negar la función (no se cumple), estoy diciendo que no es un número entero.
    2) longitud_clave == '' = si se cumple, ESTÁ VACÍO.
    3) !Number(longitud_clave) = si se cumple, NO ES UN NÚMERO.*/
    

    try {
      if ((!claveValida.validarNumeroEntero(longitud_clave) || longitud_clave == '' || !Number(longitud_clave))){
        if (longitud_clave == ''){
          return ('El campo no puede estar vacío.');      
        }
        if (longitud_clave == null) {
          return ('Omitió ingresar un valor.');
        }
        else if (longitud_clave === '0') {
          return 'El valor no puede ser cero';
        }
        else if(!claveValida.validarNumeroEntero(longitud_clave)){
            return (`No es un número entero, digitó: '${longitud_clave}'`);
        }
      }
      //Cumple con los requisitos anteriores pero no cumple con la longitud.
      else if (longitud_clave<7 || longitud_clave>20){
          return (`La longitud de: '${longitud_clave}' no cumple los requisitos.`);
      }
      //Cumple todos los requisitos
      else{
          /*genero la variable "clave_generada" y ejecuto la función "generarCadenaAleatoria" heredada de "Clave".
          La propiedad "SUPER" se utiliza para llamar a una función desde una clase HIJA.*/
        const clave_generada = super.generarCadenaAleatoria(longitud_clave);
        
        return `Se generó su clave --> ${clave_generada}`;        
      }
    
    } catch (longitud_clave) {
      return 'Error sin validar en Controlador';
    }   
  }

  validar_cantidad_claves = (cantidad) => {
    let cantidad_claves = prompt('¿Cuántas claves desea generar?');
    let i = 0;
    let longitud_clave = [];
    let array_de_claves=[];
    while ( i <= (cantidad_claves - 1)) {
        longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
        i++;
    }

  }




}

export default Controlador;//Exporto la clase "Controlador"
