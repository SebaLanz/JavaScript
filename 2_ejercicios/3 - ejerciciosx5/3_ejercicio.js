/*Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.*/

var alumnos = [];
var numAlumnos = 10;

for (var i = 0; i < numAlumnos; i++) {
    alumnos[i] = prompt("Ingrese nombre del alumno " + [i+1] + ": ");
}
for (let i = 0; i < alumnos.length; i++) {
    console.log(`Alumno: ${alumnos[i]}`);
}
alert(alumnos);