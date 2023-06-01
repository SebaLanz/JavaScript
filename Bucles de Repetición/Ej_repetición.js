/*1) INICIO BUCLE FOR.
Bucle for, imprime del 0 al n°4*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//FIN BUCLE FOR.
//-----------------------------------------------------------------------------------------------------------

/*2) INICIO BUCLE WHILE
    Bucle While, imprime del 0 al n°4. el código se ejecuta si se cumple la condición*/
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
/*FIN BUCLE WHILE*/
//-----------------------------------------------------------------------------------------------------------

/*3) INICIO BUCLE DO WHILE
Bucle Do While, imprime del 0 al n°4. el código se ejecuta si o si 1 vez y después realiza la consulta ().*/
do{
    console.log(i);
    i++;
} while (i < 5);
/*FIN BUCLE DO WHILE*/
//-----------------------------------------------------------------------------------------------------------

/*4) BUCLE FOR IN
Declaro array para probar el (FOR - IN).*/
let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'México'
};

for (let propiedad in persona) {
console.log(propiedad + ': ' + persona[propiedad]);
}
/* Esto imprime el siguiente código. Propiedad sola imprime el 'nombre' de las variales
    y persona[propiedad] el valor que hay dentro de propiedad.

    propiedad | persona[propiedad]
    nombre:   | Juan
    edad:     | 30
    ciudad:   | México

FIN BUCLE POR IN*/
//-----------------------------------------------------------------------------------------------------------

/*5) BUCLE FOR OF
Declaro array de números, similar al for each*/
const numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
    console.log(numero);
}
/*Esto imprime 1,2,3,4,5.
FIN BUCLE FOR OF*/

