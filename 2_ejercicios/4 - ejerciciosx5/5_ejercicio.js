/*Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.*/

const validacion = (cadena) => {
    if (cadena === ''){
        return false;
    }else{
        return true;
    }
};
let cadena = '';
let intento = 1;
do{
    cadena = prompt('Ingrese un texto, si quiere salir, escriba ESC');
    console.log('Valor booleano: '+validacion(cadena) + ' intento n°' + intento);
    intento++;
}while (cadena != 'ESC');