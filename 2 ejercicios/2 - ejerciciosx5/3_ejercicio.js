/*Solicitar al usuario un (1) número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
*/

let numero = parseInt(prompt('Ingrese un número del 1 al 4'));

    // repetir mientras variable no sea un numero y numero sea menor a 1 y numero sea mayor a 4
    while (!Number.isInteger(numero) || numero<1 || numero>4) {
        numero = parseInt(prompt('Debe ingresar un número entre el 1 y el 4'));
    }
    switch (numero>=1 && numero<=4) {
        case numero == 1:
            alert('Elegiste a Homero');
            break;   
        case numero == 2:
            alert('Elegiste a Marge”');
            break;
        case numero == 3:
            alert('Elegiste a Bart”');
            break;            
        case numero == 4:
            alert('Elegiste a Lisa”');
            break;
    }
