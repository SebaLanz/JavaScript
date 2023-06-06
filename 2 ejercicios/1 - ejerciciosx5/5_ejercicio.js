/*Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
*/
var RE = /^\d*\.?\d*$/; /*Validación de número flotante*/

let precios = []; //array de valores (precios)
let cantidad_precios = ""; // n° de precios a ingresar, 1,2,3  etc.
let porcentaje = ""; //porcentaje elejido.
let valor_total = 0;//var de almacenamiento.

do{
    cantidad_precios = parseInt(prompt('Ingresar la cantidad de precios.'));
    porcentaje = parseFloat(prompt('Ingresar el porcentaje de descuento, formato entero.'));
} while (!Number.isInteger(cantidad_precios) || !Number.isInteger(porcentaje) || porcentaje>100);
// Si CANTIDAD_PRECIOS NO ES ENTERO
// SI PORCENTAJE NO ES INT O FLOAT
// SI PORCENTAJE ES MAYOR A 100
// while - repetir mientras cantidad_precios != numero
// while - repetir mientras porcentaje != a entero o float
// while - repetir mientras porcentaje sea mayor a 100

for (let i = 0; i < cantidad_precios; i++) {
    precios[i] = parseFloat(prompt('Digite su precio n° '+(i+1)));//solicito los precios
    if(!RE.test(precios[i])){   //Si el precio no es un número entero o flotante, resto i-1 para estar en la misma
                                //posicion.
        i--;
    }else{
        valor_total+= precios[i];
    }
}

for (let i = 0; i < precios.length; i++) {
    console.log('Se aplicó ' + porcentaje + '% de descuento a ' + valor_total  
         + ', valor final: ' +(valor_total - ((valor_total * porcentaje) / 100)));
}