// Suponiendo que tenemos una tienda en donde
/**
 * Dias entre semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// Usuario entra sitio web para consultar si esta abierto hoy...

const date = new Date(); 
let dia = date.getDay();    // 0:domingo, 1:lunes.... 

// dia = 1
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado., hoy abrimos a las XX

// if ( dia === 0 || dia === 6) {
// if ( [0,6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

// @ Se puede hacer lo mismo utilizando el operador ternario:
horaApertura = ( dia === 0 || dia === 6 ) ? 9 : 11
// horaApertura = ( [0,6].includes(dia) ) ? 9 : 11



// if (horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las: ${horaApertura}`;
// }

// @ Se puede hacer lo mismo utilizando el operador ternario:
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrios a las ${horaApertura}`



console.log({horaApertura, mensaje});