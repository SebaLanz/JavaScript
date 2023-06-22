//Fechas
let fecha = new Date();
// Obtiene el día, el mes y el año de la fecha actual
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; // Los meses en JavaScript se indexan desde 0, por lo que se suma 1
let anio = fecha.getFullYear();
let hora = fecha.toLocaleTimeString();
// Asegúrate de que el día y el mes tengan dos dígitos
if (dia < 10) {
  dia = '0' + dia;
}                   //Les agrego el 0 adelante a los números menores a 10.
if (mes < 10) {
  mes = '0' + mes;
}
// Crea la cadena de fecha en el formato 'dd-mm-aaaa'
let formatoFecha = dia + '-' + mes + '-' + anio;
console.log('Fecha: ' + formatoFecha + '\nHora: ' + hora); // Imprime la fecha en el formato 'dd-mm-aaaa'

