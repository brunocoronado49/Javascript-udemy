const arreglo = [];
console.log(arreglo);

arreglo.push('hola');
console.log(arreglo);

const videojuegos = ['Metal Gear Solid', 'Resident Evil', 'Crash Bandicoot'];
console.log({videojuegos});
console.log(videojuegos[0]);

let cosas = [
    true,
    'fran',
    123,
    7 * 4,
    function() {},
    () => {},
    {a: 1},
    ['x', 'f', 'z', [1, 2, 3, 4]]
];

console.log({cosas});
console.log({valor1: cosas[7][2]});
console.log({valor2: cosas[7][3][1]});
