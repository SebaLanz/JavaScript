/*Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.*/

let numero = parseFloat(prompt('Ingrese un número'));
    while (!Number(numero)) {
        numero = parseFloat(prompt('Ingrese un número'));
    }
    if (numero >= 0 && numero <= 1000) {
        alert('Presupuesto bajo');
    }
    if (numero >= 1001 && numero <= 3000) {
        alert('Presupuesto medio');
    }
    if (numero>3000){
        alert('Presupuesto alto');
    }