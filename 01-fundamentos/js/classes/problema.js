const fran = {
    nombre: 'francisco',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// fran.imprimir();

const maria = {
    nombre: 'maria',
    edad: 20,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// maria.imprimir();

function Persona(nombre, edad) {
    console.log('Hola persona');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const persona = new Persona('Maria', 50);
console.log(persona);
console.log(persona.imprimir());


