// Singleton: instancia unica de la clase
class Singleton {
    static #instancia;
    nombre = '';

    constructor(nombre = '') {
        if (!!Singleton.#instancia) {
            return Singleton.#instancia;
        }
        Singleton.#instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('ironman');
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('batman');
console.log(`Nombre en la instancia1: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3: ${instancia3.nombre}`);



