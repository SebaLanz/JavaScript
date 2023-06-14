/*Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.*/

let almacen_productos = ['','','',''];

    for (let i = 0; i < almacen_productos.length; i++) {
        almacen_productos[i] = prompt('Ingrese el producto ' + (i+1));
        if (almacen_productos[i] == '') {
            almacen_productos[i] = prompt('Error, Ingrese el producto ' + (i+1) + ' no puede estar vacío');
            i--;
        }
    }
    for (let i = 0; i <1; i++) {
        // console.log(`Los productos ingresados son: ${almacen_productos[i]}`); 
        alert(`Los productos ingresados son: ${almacen_productos[0]}`);
        alert(`Los productos ingresados son: ${almacen_productos[1]}`);               
        alert(`Los productos ingresados son: ${almacen_productos[2]}`);               
        alert(`Los productos ingresados son: ${almacen_productos[3]}`);               
    }
    