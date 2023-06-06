/*Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.*/
var nombre_almacenado = 'homero';
var nombre = prompt("Ingrese su nombre");
if (nombre_almacenado.toUpperCase() == nombre.toUpperCase()) {
    alert(`Fui yo, ${nombre}, ${nombre_almacenado}`);
} else {
    alert(`No fui yo, ${nombre}, ${nombre_almacenado}`);
}