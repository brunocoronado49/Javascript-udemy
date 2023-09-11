let juegos = ['zelda', 'metroid', 'mario', 'dark souls'];
console.log('largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

console.log('\nForEach ===========');
juegos.forEach((juego, index, arr) => {
    console.log({juego, index, arr});
});

let nuevosJuegos = juegos.push('Final fantasy'); // agrega elemento al final
console.log({juegos});
console.log({nuevosJuegos});

nuevosJuegos = juegos.unshift('resident evil'); // agrega elemento al inicio
console.log({juegos});
console.log({nuevosJuegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado});
console.log({juegos});
console.log({nuevosJuegos});

let indice = 1;
let eliminado = juegos.splice(indice, 1);
console.log({eliminado});
console.log({juegos});

let findJuego = juegos.indexOf('resident evil');
console.log({residentIndex: findJuego}); // cuando no encuentra retorna un -1
