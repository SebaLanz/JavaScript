//Diferentes formas de declarar Variables.
// Las variables declaradas con var tienen alcance de función o alcance global, dependiendo de si se declaran dentro de una función o en el ámbito global
var numero = 10;
//Let sirve para declarar variables encerradas dentro de llaves {}.
let otroNumero = 20;
//const sirve para declarar constantes, por ejemplo, valores de base de datos, nombre, host, usuario, password, pi, ETC
const CONSTANTE_NUMERO = 30;
//Alert = muestra cartel estilo PopUP.
alert("¡Hola, mundo!");
//console.log muestra el resultado en la consola del navegador.
console.log("¡Hola, mundo!");
//prompt se utiliza para solicitar valor al usuario.
let variable = prompt("Ingresar variable");
//Parse.
parseFloat(variable);/*Valor a float*/
parseInt(variable);/*Valor a int*/


/*Parse de Json */
const jsonString = '{"nombre": "Juan", "edad": 30}';
const objeto = JSON.parse(jsonString);
console.log(objeto.nombre); // salida: Juan
console.log(objeto.edad);   // salida: 30
