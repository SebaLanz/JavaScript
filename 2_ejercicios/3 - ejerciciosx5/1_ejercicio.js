/*Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.*/

var numero = prompt("Ingrese un número");
var texto = prompt("Ingrese un texto");

for (var i = 0; i < numero; i++) {
    alert(texto);
}