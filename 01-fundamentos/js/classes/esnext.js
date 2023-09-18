// propiedades privadas
class Rectangulo {
    // asi asignamos una prop privada
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    get getArea() {
        return this.#area;
    }

    multiplicarArea() {
        console.log(this.#area * 4);
    }

    #metodoPrivado() {
        console.log('Metodo privado');
    }
}

const rectangulo = new Rectangulo(10, 15);
console.log(rectangulo);
console.log(rectangulo.getArea);
rectangulo.multiplicarArea();


