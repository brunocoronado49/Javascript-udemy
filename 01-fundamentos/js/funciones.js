// function saludar() {
//     console.log(arguments);
//     console.log('Hola Mundo');
// }

// saludar();

// const nuevoSaludo = function() {
//     console.log('Hola Mundo');
// }

// nuevoSaludo();

const saludoFlecha = (nombre) => {
    console.log('Hola', nombre);
}

saludoFlecha('Fran');


// todas las funciones retornan undefined
// hasta que se les indica
const funcionConRetorno = () => {
    return 'Funcion con retorno';
}

const funcionDeRetorno = funcionConRetorno();
console.log({funcionDeRetorno});


const sumaDeNumeros = (numUno, numDos) => {
    return numUno + numDos;
}

const resultadoSuma = sumaDeNumeros(52, 74); 
console.log({resultadoSuma});

const retornaMasDeUno = () => {
    return (2, 4);
}



const retornoSaludo = name => `hola ${name}`;
console.log(retornoSaludo('bruce'));

const getRandom = () => Math.random();
console.log(getRandom());




