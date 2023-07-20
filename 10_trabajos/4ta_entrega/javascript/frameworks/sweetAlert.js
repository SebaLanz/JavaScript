class SweetAlert {

//sweetalert de Error
    errorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'El valor ingresado no es correcto.'
        });
    }

    borrarContenidoAlerta = () => {
        Swal.fire({
        title: 'Contraseñas eliminadas',
        icon: 'success',
        text: 'Todas las contraseñas almacenadas han sido eliminadas.',
        confirmButtonText: 'Aceptar'
        });
        const numerosLista = document.getElementById("numeros-lista");
        numerosLista.innerHTML = "";
        // const modalContainer = document.getElementById("modalContainer");
        // modalContainer.innerHTML = "";
    }

}
export default SweetAlert;