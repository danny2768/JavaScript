/*
    ===== Código de TypeScript =====
*/

// * Importante definir el tipo para que no sea confundido con otras variables
// * Si no definimos el tipo podriamos hacer una concatenacion en vez de una suma.

// * Al colocar un tipo de dato fuera el parentesis podemos forzar el tipo que va a retornar la funcion.
function sumar(a: number, b: number): number {
    // return (a + b).toString(); 
    return a + b;
}

// * si no se fuerza el tipo en el retorno puede retornar any
const sumarFlecha = (a: number, b:number):number => {
    return a + b;
}

// # Existen argumentos opcionales y argumentos obligatorios
// # Primero deben ir los argumentos obligatorios, luego los opcionales y por ultimo los que tienen un valor definido

const multiplicar = (numero: number, otroNumero?: number, base:number = 2) => {
    return numero * base
}
// const resultado = sumar('daniel', 'cobos')
// const resultado = sumar(10, 20)
// const resultado = multiplicar(2)

// console.log(resultado);

// --------------------------------------------------------------------------------//

interface PersonajeLOR{
    name: string,
    hp: number,
    showHP: () => void
}

const curar = (personaje: PersonajeLOR, curarX: number):void => {
    personaje.hp += curarX;

    console.log(personaje);
}

const personaje1: PersonajeLOR = {
    name: 'Strider',
    hp: 50,
    showHP(){
        console.log('Puntos de vida', this.hp);
    }
}

curar(personaje1,20)

personaje1.showHP();
