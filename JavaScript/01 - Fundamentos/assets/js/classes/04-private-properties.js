
// # Importante revisar el soporte de navegadores:
// https://caniuse.com/mdn-javascript_classes_private_class_fields

class Rectangulo {
    
    // @ Para crear una propiedad privada podemos usar # antes del nombre de la variable.
    #area = 0;

    constructor( base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    // @ En JS aun no podemos crear metodos privados.
    calcularArea(){
        console.log( this.#area * 2 );
    }
}


const rectangulo = new Rectangulo( 10, 15 );
console.log( rectangulo );

rectangulo.calcularArea();
















