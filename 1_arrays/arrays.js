const listaDeNumeros = [5,1,3,5,7,199,1,3,-10,999]; //Declaro Array
let valorMax = -Infinity, valorMin = Infinity;//Declaro variable donde almaceno el valor maximo

//N° MAX
for (let i = 0; i < listaDeNumeros.length; i++) {
    //busco Max con la función Math.max
    if (valorMax < listaDeNumeros[i]) {
        valorMax = listaDeNumeros[i];
    }
}
console.log(`Valor máximo: ${valorMax}`);
//----------------------------------------------------------------------------------
//N° MIN
for (let i = 0; i < listaDeNumeros.length; i++) {
    //busco Min con la función Math.min  
    if (valorMin > listaDeNumeros[i]) {
        valorMin = listaDeNumeros[i];
    }
}
console.log(`Valor mínimo: ${valorMin}`);
console.log(`Pi redondeado ${Math.PI.toFixed()}`);
//-----------------------------------------------------------------------------------
//Busco n° random entre el 100 y 200. el primer parametro es el máximo y el segundo es el mínimo
let numRandom = parseInt(Math.random()*10+1);
console.log(numRandom);

//max
let nMax = Math.max();
//min
let nMin = Math.min(...listaDeNumeros);//con lo 3... puedo utilizar la función Max en una variable/arreglo.
console.log(`min2: ${nMin}`);