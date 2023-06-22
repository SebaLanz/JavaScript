/*Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.
*/

const impuesto = (precio,porcentaje) => {
    return precio + ((precio * porcentaje) / 100);
}

const operacion = () => {
    let valor, porcentaje;
    valor = parseFloat(prompt('ingrese valor'));
    porcentaje = parseInt(prompt('ingrese porcentaje en números enteros.'));
    console.log('Valor de la suma de: '+ valor + ' + el porcentaje del impuesto es del: % '+ porcentaje +'. El total es: '+ '$'+impuesto(valor,porcentaje));
}

const repito  = (cantidad_repeticiones) => {
    for (let i = 0; i < cantidad_repeticiones ; i++) {
        operacion();       
    }   
}

repito(5);
