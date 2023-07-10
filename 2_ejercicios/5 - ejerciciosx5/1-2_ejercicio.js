/*Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase.
*/

    class Tienda{

        constructor(nombre, direccion, propietario, rubro) {
            this.nombre = nombre;
            this.direccion = direccion;
            this.propietario = propietario;
            this.rubro = rubro;
        }
        
    }
    const tiendas = [
        new Tienda('t1', 'lanus', 'seba', 'quiosco'),
        new Tienda('t2', 'lanush', 'pepe', 'almacen'),
        new Tienda('t3', 'escalada', 'daniel', 'cervecería'),
      ];

    
    //Ejercicio 1

    /*tiendas.forEach(tienda => {
        console.log(`Nombre: ${tienda.nombre} \nDirección: ${tienda.direccion} \nPropietario: ${tienda.propietario} \nRubro: ${tienda.rubro}`);
    });*/


 // Ejercicio 2.

 /*Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.*/

let ingresados = '';
for (let index = 0; index < 2; index++) {
    let tienda =  new Tienda(prompt("NOMBRE"), 
                             prompt("DIRECCION"), 
                             prompt("PROPIETARIO"),
                             prompt("RUBRO"));

    ingresados+= "Tienda: "+tienda.nombre+" "+
             "Direccion: "+tienda.direccion+" "+
             "Propitario: "+tienda.propietario+" "+
             "rubro: "+tienda.rubro+"\n";
}
alert(ingresados);

