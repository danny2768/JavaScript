// # Cuando se quiere retornar algo en un objeto y el nombre de la propiedad es el mismo al
// # nombre de la variable a la cual se quiere hacer la impresion no es necesario hacerlo asi:
// ! Las llaves son importantes para crear el objeto literal
/*
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}
 */

// # Se puede hacer asi:
const crearPersona = function (nombre, apellido) {
    return {
        nombre,
        apellido
    }
}
console.log(crearPersona('Tony', 'Stark'));

// *Como hacer el anterior codigo como una funcion de flecha
const crearPersona1 = (nombre, apellido) => {
    return {
        nombre,
        apellido
    }
}
console.log(crearPersona1('Ted', 'Mosby'));

// * Simplificandolo aun mas
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});
console.log(crearPersona2('Daniel', 'Cobos'));

// ------------------------------------------------------------------------------ //

// * Imprimir argumentos con una funcion tradicional
function imprimeArgumentos(){
    console.log(arguments);
}
imprimeArgumentos('Daniel', true, false, 10, 20, 30)

// * Hacerlo con una funcion de flecha
const imprimeArgumentos1 = (args) => {
    console.log(args);
}
imprimeArgumentos1('Daniel', true, false, 10, 20, 30)

// ? Esto solo imprime el primer argumento, como lo solucionamos?

// * Usamos ... antes del parametro de la funcion, de esta manera imprimira todos los args
// ! La funcion rest '...' debe ir al final, es decir no se pueden pedir mas argumentos despues de ella
const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({ edad, args });
    // console.log(args);
    return args
}

// imprimeArgumentos2('Daniel', true, false, 10, 20, 30)
console.log('------------------------------------------------');

// * Que pasa si queremos guardar cada argumento en una variable

const argumentos = imprimeArgumentos2('Daniel', true, false, 10, 20, 30)

/*
const nombre = argumentos[0]
const vivo = argumentos[1]
*/ //@ Lo aterior suguiere mucho trabajo. Es mejor hacer los siguiente

const [vivo, sueno, num1, num2, num3] = argumentos
// console.log(nombre);//*No se extre el nombre porque en imprimeArgumentos2 tenemos el parametro edad
console.log({vivo, sueno, num1, num2, num3});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );


