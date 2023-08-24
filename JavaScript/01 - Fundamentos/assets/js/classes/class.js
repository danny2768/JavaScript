
class Persona {

    static _conteo = 0;

    static get getConteo() {
        return Persona._conteo + 'instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un metodo estatico');
    }

    // @ Esto es una instanciacion de propiedades, no de variables.
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ){    
        // @ Si al crear el objeto persona no le pasamos los anteriores parametros el codigo no genera error.
        // @ Simplemente aparecen las variables como undefined

        // @ Podemos hacer una comprobacion manual en caso de ser necesaria o definir valores por defecto.
        // if( !nombre ) throw Error('Necesitamos el nombre')

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase(); 
    }
    
    get getComidaFavorita() {
        return this.comida;
    }



    miNombre() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`Soy ${ this.nombre } y mi frase es ${ this.frase }`);
    }
}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Ur friendly neighbourhood' );
const ironman = new Persona( 'Tony Stark', 'Iron Man', 'Piu piu' );

// spiderman.miNombre();
// spiderman.miFrase();

// @ Los sets se definen como si fueran datos
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

// @ Los gets no deben tener () al invocarse
// console.log( spiderman.getComidaFavorita );

// @ La  linea a continuacion es aceptada sin embargo es preferible evitarlo a toda costa.
// spiderman.nemesis = 'Duende verde';

// console.log( spiderman );

// @ Llamado a propiedades estaticas
// Persona._conteo = 2;
console.log( Persona.getConteo);
Persona.mensaje();

// @ En JS se pueden definir propiedades estaticas fuera de la clase (Mejor no hacerlo).
Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );

