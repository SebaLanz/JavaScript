/*Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.
*/

let numero_opcion;
numero_opcion = prompt('ingrese un número del 1 al 4');
do {
    switch (numero_opcion) {    
        case '1':
            console.log('1');
            break;
        case '2':
            console.log('2');
            break;
        case '3':
            console.log('3');
            break;
        case '4':
            console.log('4');
            break;
    }
    numero_opcion = prompt('ingrese un número del 1 al 4');
} while (numero_opcion != 'ESC')
    
