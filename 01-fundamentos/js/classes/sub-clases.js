class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log('metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        console.log(`Hola soy ${nombre} mi codigo es ${codigo}... ${frase}`);
        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `Mi comida favorita es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}!`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.nombre} dice: ${this.frase}`);
    }
}

class Heroe extends Persona {
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        // super hace referencia a la clase que extiende
        super(nombre, codigo, frase);
        this.clan = 'La batifamilia';
    }

    quienSoy() {
        console.log('Hola soy', this.nombre);
        super.quienSoy();
    }
}

const batman = new Heroe('Batman', '117', 'Soy la vernganza');
console.log(batman);
batman.quienSoy();


