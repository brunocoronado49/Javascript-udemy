let personaje = {
    nombre: 'Bruce Wayne',
    edad: 35,
    alias: 'Batman',
    refugio: 'Baticueva',
    auto: 'Batmovil',
    esElMejor: true,
    aliados: ['robin', 'batichica', 'nightwing', 'gordon', 'red hood', 'alfred'],
    direccion: {
        ciudad: 'ciudad gotica',
        pais: 'USA'
    },
    'peor-enemigo': 'Joker',
};

console.log({personaje});
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Ciudad:', personaje.direccion.ciudad);
console.log('No.Aliados:', personaje.aliados.length);
console.log('Enemigo:', personaje['peor-enemigo']);

// mas detalles

delete personaje.esElMejor; // elimina una propiedad
console.log({personaje});

personaje.casado = false;
const entriesPares = Object.entries(personaje); // pasa todo a un array con 2 elementos (llave - valor)
console.log(entriesPares);

Object.freeze(personaje); // congela el objeto para que no sea modificado
personaje.nuevo = 'prop';
console.log({personaje});

const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});