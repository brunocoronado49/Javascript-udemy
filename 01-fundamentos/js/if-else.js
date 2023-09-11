let edad = 20;

if (edad >= 18) {
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad');
}

let hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es domingo, ni lunes ni martes');
}

// tarea, alternativa if-else
const diaUno =  6;
const diaDos =  2;

const diasObjeto = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
};

console.log(diasObjeto[diaUno] || 'No valido');

const diasArreglo = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
];

console.log(diasArreglo[diaDos] || 'No valido');



