const crearPersona = (nombre, apellido) => ({nombre, apellido});
console.log(crearPersona('bruce', 'wayne'));

// parametro 'rest'
const imprimeArgumentos = (...args) => {
    return args;
}

const [numero, saludo, soltero, dinero] = imprimeArgumentos(10, 'hola', true, 20.25);
console.log({numero});
console.log({saludo});
console.log({soltero});

const {apellido: nuevoApellido} = crearPersona('fran', 'rangel');
console.log({nuevoApellido});

const personaje = {
    nombre: 'Bruce Wayne',
    alias: 'Batman',
    refugio: 'Baticueva',
    auto: 'Batmovil',
    esElMejor: true,
};

// desestructuracion de objetos
const imprimeProps = ({nombre, edad = 40, alias}) => {
    console.log(nombre);
    console.log(edad);
    console.log(alias);
}

imprimeProps(personaje);


