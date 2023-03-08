let nombre = 'Daniel'
console.log(nombre);

// @ Se pueden crear strings con ' , " y `

// * Coon typeof podemos averiguar el tipo de dato de una variable
console.log( typeof nombre);

nombre = 123;
console.log( typeof nombre);

// @ Al declarar booleanos tiene que ser en minuscula
let bool = true;

let superPoder;
console.log( typeof superpoder );

let soyNull = null;
console.log( typeof soyNull);

// @ Los symbol le permiten a JS crear identificadores unicos
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1);


console.log( symbol1 === symbol2 );
