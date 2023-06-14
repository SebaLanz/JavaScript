/*Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados.*/

var nombre = prompt("Ingrese su nombre");
var todos_los_nombres = [];
while (nombre.toUpperCase()!= "VOLDEMORT") {
    alert("Nombre incorrecto");
    todos_los_nombres+= ' '+nombre;
    nombre= prompt("Ingrese su nombre");
}
alert(todos_los_nombres +' '+nombre);