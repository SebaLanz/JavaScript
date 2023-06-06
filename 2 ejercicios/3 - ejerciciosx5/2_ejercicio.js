/*Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.*/

var numero = prompt("Ingrese un número: ");

for (var i = 1; i <= numero; i++) {
    if (i>4) {
        alert('No hay más de 4 lados');
        break;
    }
    alert("lado " + i) ;
}