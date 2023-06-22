function hola() {
    return console.log('hola');
}
hola();

//básica func arrow
arrow = () => 'Arrow';

// básica con parametro

arrow2 = (material) => 'Arrow de: ' + material;

// básica con suma 

suma = () =>{
    return 2+2;
}

// operaciones matematicas

operaciones = (numero1, numero2, tipo_operacion) => {
    switch (tipo_operacion) {
        case '+':
            return numero1 + numero2;
            break;
    
        case '-':
            return numero1 - numero2;
            break;

        case '*':
            return numero1 * numero2;
            break;

        case '/':
            return numero1 / numero2;
            break;
    
        default:
            return 'Error';
            break;
    }
}

console.log(arrow());
console.log(arrow2('Mithril'));
console.log(suma());
console.log('Operación aritmetica: '+operaciones(5,5,'*'));