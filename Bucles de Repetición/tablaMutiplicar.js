//Solicito el número al usuario y hago la tabla de multiplicar.
let variable = prompt('Qué número desea calcular');
    for (let i = 1; i < 11; i++) {
    console.log(variable + '*' + i + ' = '+variable*i);
}

/*Solicito el número al usuario y hago la tabla de multiplicar Salteando el n°
solicitado x5*/
let variable2 = prompt('Qué número desea calcular');
for (let i = 1; i < 11; i++) {
    if (i == 5) {
        console.log('No te imprimo la multiplicación de: '+variable2+'x'+i);
        continue; //Con esto salteo esta etapa.         
    }
console.log(`${variable2} * i = ${variable2*i}`);
}

/*Solicito el número al usuario y hago la tabla de multiplicar, en x5
rompo el FOR y no ejecuto nada más.*/
let variable3 = prompt('Qué número desea calcular');
for (let i = 1; i < 11; i++) {
    if (i == 5) {
        console.log('termino acá -->: '+variable3+'x'+i);
        break; //Con esto terminó acá, es decir, sale del bucle.       
    }
console.log(variable3 + '*' + i + ' = '+variable3*i);
}