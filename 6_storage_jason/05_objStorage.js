const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

/*for (let i = 0; i < localStorage.length -1; i++) {
    const clave = localStorage.key(i);
    const valor = localStorage.getItem(clave);
    const producto = JSON.parse(valor);
    
    console.log('ID: ' + i,producto.id, producto.producto, producto.precio);
}*/

for (let i = localStorage.length -2; i >0-1; i--) {
    const clave = localStorage.key(i);
    const valor = localStorage.getItem(clave);
    const producto = JSON.parse(valor);
    
    console.log(producto.id, producto.producto, producto.precio);
}