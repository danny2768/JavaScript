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










// const resultado = sumar('daniel', 'cobos')
const resultado = sumar(10, 20)

console.log(resultado);
