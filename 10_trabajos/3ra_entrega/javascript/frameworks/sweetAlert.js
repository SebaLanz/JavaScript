class SweetAlert {

//sweetalert
    errorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'El valor ingresado no es correcto.'
        });
    }
}
    
export default SweetAlert;