class Persona {
    static porObjeto({nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre} ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Lupita', apellido1 = 'Rios', pais1 = 'Mexico';
const fran = {
    nombre: 'Francisco',
    apellido: 'Rangel',
    pais: 'Mexico'
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fran);

persona1.getInfo();
persona2.getInfo();



