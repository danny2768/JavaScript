
class Persona {

    static _conteo = 0;

    static get getConteo() {
        return Persona._conteo + 'instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return this.comida;
    }


    miNombre() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`Soy ${this.nombre} y mi frase es ${this.frase}`);
    }
}

// @ Clases heredadas. (Extends o Subclases)
class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }

    // * Los metodos pueden tener el mismo nombre que el de la clase heredada.
    miNombre() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);

        // * Si queremos llamar ambos metodo podemos utilizar:
        super.miNombre();
    }
}

const spiderman = new Heroe('Peter Parker', 'SpiderMan', 'Your friendly neighborhood');
console.log(spiderman);

spiderman.miNombre();