/*Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.*/

let tecla =  prompt('Ingrese una tecla');
while (tecla.toUpperCase() != 'Y') {
    tecla = prompt('Error, Ingrese una tecla nuevamente');
}
    if (tecla.toUpperCase() == 'Y') {
        alert('Correcto');
    }    
