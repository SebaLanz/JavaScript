import Controlador from '../controlador/con_clave.js';//Me traigo las propiedades y métodos de "Controlador".

//Creo objetos de tipo Controlador.
const objClave = new Controlador();
const objCantidad = new Controlador();


//ACCEDER a un elemento por ID
//let cantidadDeClaves;
let txtAreaClavesGeneradas = document.getElementById("idClavesGeneradasTextArea");//con esto después muestro el valor en el textarea

//Obtengo el texto que hay en el id 'cantidadClaves'.

//Obtener datos del formulario.




        
//Código
document.getElementById("idBtnGenerarClave").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón
    let cantidad = document.getElementById("TxtCantidad").value;//valor de la caja de texto
    let claves_a_generar = objCantidad.validar_cantidad_claves(cantidad);//llamo función validar

        if (claves_a_generar === true){
            /*Devuelve un Verdadero cuando la cantidad es un número válido, es decir, un número natural (n° positivo). Ingresa en este if
            donde genero las claves aleatorias.
            1) Pido la longitud de claves. */
            let i = 0;
                    let longitud_clave = [];//Declaro array donde almaceno la longitud de cada clave a crear. El usuario puede pedir n cantidad de claves.
                    let array_de_claves= [];
                    while ( i <= (cantidad - 1)) {
                        /*En longitud_clave[i] almaceno la longitud de la clave por cada espacio del array, por ejemplo:
                        lugar 0 = longitud de 7. (válido)
                        lugar 1 = 15. (válido)
                        lugar 2 = asd. (no válido)
                        */
                        longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
                        i++;
                    }
                    const numerosLista = document.getElementById("numeros-lista");
                    const numeroItem=[];
                    
                    for (let i = 0; i < longitud_clave.length; i++) {
                        
                        /*Al incovar la funcion validar_longitud, valido las longitudes ingresadas.
                        Si se encuentran dentro de los parametros arroja una clave aleatoria
                        si no, arroja la excepción que pueden ser varias.*/
                        array_de_claves[i] += `${i+1})${objClave.validar_longitud(longitud_clave[i])}\n`;
                        numeroItem[i] = document.createElement("li");
                        numeroItem[i].textContent = array_de_claves[i];
                        numerosLista.appendChild(numeroItem[i]);          //test     
                    }

        }
        else if (claves_a_generar != true) {
            while (claves_a_generar != true) {
                alert(claves_a_generar);//Muestro el valor MAL ingresado por el usuario. 
                if (claves_a_generar === 'El valor ingresado no es válido.') {
                    alert('Se cerrará el programa.');
                    break;
                }
                //cantidad = prompt('¿Cuántas claves desea generar?');//Vuelvo a pedir cantidad.
                //claves_a_generar = objCantidad.validar_cantidad(cantidad);//Vuelvo a comprobar si cumple los requisitos.
                //Si cumple los requisitos, ingresa al IF y genera un array concatenado de claves.
                
                if (claves_a_generar === true) {
                    let i = 0;
                    let longitud_clave = [];
                    let array_de_claves= [];
                    while ( i <= (cantidad - 1)) {
                        longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
                        i++;
                    }
                    for (let i = 0; i < longitud_clave.length; i++) {
                        /*Genero un array con los resultados que arroja el objeto "objClave"
                        puede ser una clave generada o una excepción. agrego \n para imprimir
                        los resultados uno abajo del otro.*/
                        array_de_claves += `${i+1}) ${objClave.validar_longitud(longitud_clave[i])}\n`;
                    }
                    /*Acá muestro las claves SI en el primer intento de cantidad de claves fue falso. es decir: 
                    1er intento = asdasd (false) | otroIntento  = verdadero*/
                    //Muestro en el text area las claves/excepciones generadas
                    const numeroItem = document.createElement("li");
                    numeroItem.textContent = array_de_claves;
                    numerosLista.appendChild(numeroItem);

                    //txtAreaClavesGeneradas.innerHTML = array_de_claves;
                }
            }
        }
});