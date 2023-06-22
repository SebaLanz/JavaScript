/*
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
*/
entrada();
console.log(mostrarMsj());


function entrada() {
    let algo = prompt('Ingrese algo');
    console.log(algo);
}
function procesos(p1, p2) {
    return p1+p2;
}
function mostrarMsj() {
    n1 = 10;
    n2 = 231;
    return procesos(n1,n2);
}

hola = () => {
    return console.log('hola');
}
hola();

flechaParam = (par1, par2) => {
    return par1.concat(par2);
}
console.log(flechaParam('hola',' mundo'));