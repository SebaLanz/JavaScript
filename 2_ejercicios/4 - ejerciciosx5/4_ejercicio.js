/*Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.*/

const cotizarDolar = (pesos, cotizacionDolar) => (pesos / cotizacionDolar);
const cotizarPesos = (dolar, cotizacionPeso)  => (dolar * cotizacionPeso);

let cant_pesos = parseFloat(prompt('Ingrese Cantidad de pesos.'));
let cotizacionDolar = parseFloat(prompt('Ingrese el valor de un Dolar.'));
let cant_dolares = parseFloat(prompt('Ingrese Cantidad de Dolares'));
let cotizacionPeso = parseFloat(prompt('Ingrese valor del peso.'));

console.log(`Tengo: $${Math.round(cotizarDolar(cant_pesos,cotizacionDolar))} dolares`);
console.log(`Tengo: $${Math.round(cotizarPesos(cant_dolares,cotizacionPeso))} Pesos`);
