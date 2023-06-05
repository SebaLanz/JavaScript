/*Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
*/
let carnet_datos_na = ["Nombre: ","Apellido: ","Dni: ","Nacionalidad: ","Provincia: ","Categoria: ","Tipo de sangre: "];

let carnet_datos = [nombre="", apellido="", dni="", nacionalidad="", provincia="", categoria="", tipo_sangre=""];

for (let i = 0; i < carnet_datos.length; i++) {
    carnet_datos[i] = prompt('Digite su '+ carnet_datos_na[i]);
}
for (let i = 0; i < carnet_datos.length; i++) {
    console.log(carnet_datos_na[i] + carnet_datos[i]);   
}