
// # Los primitivos son pasados por valor
let a = 10;
let b = a;

a = 30;

console.log({a, b});

// # Los objetos son pasados por referencia
let juan = { nombre: 'Juan'};
let ana = juan;

ana.nombre = 'Ana';

console.log({juan, ana});



const cambiaNombre = (persona) => {
    persona.nombre = 'Tony'
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

console.log('-------------------------------');
// ? Como podemos solucionar esto?
// * Lo sulucionaremos a traves de el siguiente operador spread '...'

let daniel = { nombre: 'Daniel'};
let camilo = {...daniel};
camilo.nombre = 'Camilo'

console.log({daniel, camilo});


// ! Es importante agregar las {} para que '...' funcione como spread
const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'Sara'
    return persona;
}

let silvia = {nombre: 'Silvia'};
let sara = cambiaNombre2(silvia);

console.log({silvia, sara});






// @ Haciendo el mismoe ejercicio con arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

// *Podemos hacerlo de dos maneras:
// * Y podemos medir el tiempo qu tarda cada una de ellas

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');


console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');


otrasFrutas.push('Mango');


console.table({frutas, otrasFrutas, otrasFrutas2});







