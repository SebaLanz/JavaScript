import Controlador from '../controlador/con_clave.js';
import SweetAlert from '../frameworks/sweetAlert.js';
const objClave = new Controlador();
const objCantidad = new Controlador();
const sweetBtn = new SweetAlert();

document.getElementById("idBtnGenerarClave").addEventListener("click", function(event) {
    event.preventDefault();    
    let cantidad = document.getElementById("TxtCantidad").value;
    let claves_a_generar = objCantidad.validar_cantidad_claves(cantidad);
    if (claves_a_generar === true){
        let i = 0;
        let longitud_clave = [];    
        while ( i <= (cantidad - 1)) {
            longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
            i++;
        }
        const numerosLista = document.getElementById("numeros-lista");
        const numeroItem=[];
        let array_de_claves=[];
            for (let i = 0; i <= cantidad; i++) {           
                array_de_claves[i] =[''];
            }      
            for (let i = 0; i < longitud_clave.length; i++) {
                array_de_claves[i] += `${objClave.validar_longitud(longitud_clave[i])}\n`;
                numeroItem[i] = document.createElement("li");
                numeroItem[i].textContent = array_de_claves[i];
                numerosLista.appendChild(numeroItem[i]);   
            }
    }else{sweetBtn.errorAlert();}


});
document.getElementById("idBtnBorrarClaves").addEventListener("click",function(event){
    event.preventDefault();  
    sweetBtn.borrarContenidoAlerta();
}); 

// document.getElementById("idBtnMostrarClaves").addEventListener("click",function(event){
//     event.preventDefault();  
//     console.log('hola');
// });

