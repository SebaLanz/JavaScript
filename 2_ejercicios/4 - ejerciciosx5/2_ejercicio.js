/*Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.
*/

const fun = (numero) => Math.round(numero); 
let array = [];
let n1;
console.log(fun(10.50));

for (let i = 0; i < 5; i++) {
    array[i] = (prompt(`n°: ${i+1}`));
}
for (let i = 0; i < array.length; i++) {
    console.log(fun(array[i]));   
}

