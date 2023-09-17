// clases basicas
class Persona {
    // propiedades
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // metodo constructor que se crea al instanciar una clase
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        console.log(`Hola soy ${nombre} mi codigo es ${codigo}... ${frase}`);
    }

    // set y get
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `Mi comida favorita es ${this.comida}`;
    }

    // metodos comunes
    quienSoy() {
        console.log(`Soy ${this.nombre}!`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.nombre} dice: ${this.frase}`);
    }
}

const batman = new Persona('Batman', 117, 'Soy la venganza');
// const shin = new Persona('Shin Hati', '25', 'No tienes poder');
// console.log(shin);
batman.miFrase();
// shin.miFrase();
batman.setComidaFavorita = 'sopa maligatoni';
batman.nemesis = 'Joker';
console.log(batman.getComidaFavorita);
console.log(batman);


