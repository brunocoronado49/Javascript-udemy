let a = 10;
let b = a;
a = 30;

console.log({a, b});

let juan = {nombre: 'juan'};
let ana = {...juan}; // operador 'spread'
ana.nombre = 'ana';

console.log({juan, ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'shin';
    return persona;
}

let sabine = {nombre: 'sabine'};
let shin = cambiaNombre(sabine);

console.log({sabine, shin});

// arreglos
const frutas = ['manzana', 'pera', 'sandia'];
const otrasFrutas = [...frutas];
otrasFrutas.push('mango');
console.log({frutas, otrasFrutas});



