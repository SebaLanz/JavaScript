
let cantidad_clientes = prompt('Cuantos clientes tenes'); // pido clientes
let cantidad_total_manz = 0; //var de almacenamiento.
    for (let i = 1; i <= cantidad_clientes; i++) {
        cantidad_total_manz+= parseInt(prompt(`Cuantas manzanas tiene el cliente: ${i}`));//pido cantidad de manz a cada cliente. 
    
    }
console.log(`Cantidad de manzanas requeridas: ${cantidad_total_manz}`); //Imprimo total de manzanas. 

//  cantidad_total_manz+=  es lo mismo que poner  cantidad_total_manz = cantidad_total_manz + parseInt(prompt(`Cuantas manzanas tiene el cliente: ${i}`))