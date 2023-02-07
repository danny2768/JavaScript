/*
    ===== Código de TypeScript =====
*/
// @ Para las siguientes lineas coloque el cursor sobre la variable.

// * Inicializamos la variable y el tipo.
let nombre: string = 'Daniel';

let itsAlive: boolean = true;

// * Las constantes no mencionan el tipo, solo el valor asignado.
const constante = 'Eduardo';



// ? Que pasa si necesitamos que una variable sea de varios tipos?
// * Usamos el operador 'OR' -> '|'
let health: number | string = 87;
console.log(health);

health = 'Full'
console.log(health);


