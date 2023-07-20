import Controlador from '../controlador/con_clave.js';
import SweetAlert from '../frameworks/sweetAlert.js';
const objClave = new Controlador();
const objCantidad = new Controlador();
const sweetBtn = new SweetAlert();

let arrayLi = [];
document.getElementById("idBtnGenerarClave").addEventListener("click", function(event) {
    event.preventDefault();
    
    // numerosLista.innerHTML = "";   

    let cantidad = document.getElementById("TxtCantidad").value;
    let claves_a_generar = objCantidad.validar_cantidad_claves(cantidad);
    if (claves_a_generar === true){
        let i = 0;
        let longitud_clave = [];
  
        while ( i <= (cantidad - 1)) {
            longitud_clave[i] = prompt('Ingrese logitud de clave, mínimo 7 máximo 20');
            i++;
        }
        let numerosLista = document.getElementById("numeros-lista");
        let numeroItem=[];
        let array_de_claves=[];
            for (let i = 0; i <= cantidad; i++) {           
                array_de_claves[i] =[''];
            }     
        let lastID = parseInt(localStorage.getItem("lastID")) || 0;
        for (let i = 0; i < longitud_clave.length; i++) {
            // Incrementamos el ID antes de usarlo
            lastID++;
            array_de_claves[i] += `${objClave.validar_longitud(longitud_clave[i])}\n`;
            numeroItem[i] = document.createElement("li");
            numeroItem[i].textContent = array_de_claves[i];
            numerosLista.appendChild(numeroItem[i]);
            arrayLi.push(numeroItem[i]);

            // Almacenamos el nuevo ID en localStorage
            localStorage.setItem("lastID", lastID);

            //Creamos un objeto de JSON.
            let datos = {
                id: lastID, // Usamos el nuevo ID
                clave: numeroItem[i].textContent
            };
            //Utilizamos stringify para crear un array(cadena) de JSON
            localStorage.setItem("datos", JSON.stringify(datos));

            //Parseamos a Json para poder acceder a los datos.
            let datosGuardados = localStorage.getItem("datos");
            let datosParseados = JSON.parse(datosGuardados);

            //Ahora se puede acceder a los valores individualmente
            let idGuardado = datosParseados.id;//id
            let claveGuardada = datosParseados.clave;//clave generada.
            //console.log(idGuardado, claveGuardada)
}
    }else{sweetBtn.errorAlert();}
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("idBtnMostrarClaves").addEventListener("click", function(event) {
    event.preventDefault();
    let lastID = parseInt(localStorage.getItem("lastID")) || 0;
    let numerosLista = document.getElementById("mostrar_lista"); 
    let numeroItem=[];
    let modalContent = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Claves Generadas.</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <ol id="mostrar_lista"></ol>`;
            
    for (let i = 0; i < (arrayLi.length); i++) {
        lastID++;

        numeroItem[i] = document.createElement("li");
        numeroItem[i].textContent = arrayLi[i].textContent;
        numerosLista.appendChild(numeroItem[i]);

        //Creamos un objeto de JSON.   
        let datos = {
            id: lastID, // Usamos el nuevo ID
            clave: numeroItem[i].textContent
        };
        //Utilizamos stringify para crear un array(cadena) de JSON
        localStorage.setItem("datos", JSON.stringify(datos));

        //Parseamos a Json para poder acceder a los datos.
        let datosGuardados = localStorage.getItem("datos");
        let datosParseados = JSON.parse(datosGuardados);

        //Ahora se puede acceder a los valores individualmente
        let idGuardado = datosParseados.id;//id
        let claveGuardada = datosParseados.clave;//clave generada.
        console.log(idGuardado, claveGuardada)
        numeroItem[i] = document.createElement("li");
        numeroItem[i].textContent = arrayLi[i].textContent;
        numerosLista.appendChild(numeroItem[i]);
    }
   
    
    modalContent += `
            </ol>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
        </div>
    </div>`;
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = modalContent;
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
    });
});


document.getElementById("idBtnBorrarClaves").addEventListener("click",function(event){
    event.preventDefault();  
    sweetBtn.borrarContenidoAlerta();
}); 


