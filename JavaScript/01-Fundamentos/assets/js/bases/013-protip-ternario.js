
const elMayor = (a,b) => (a > b) ? 'a es mayor' : 'b es mayor';
console.log(elMayor(15,10));


const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 dolares';
console.log(tieneMembresia(false));


const amigo = true;
// const amigo = false;
const amigosArr = [
    'Tony',
    'Peter',
    'Dr. Strange',
    (amigo) ? 'Thor' : 'Loki'
];
console.log(amigosArr);



const nota = 65; // A+ A B+
const grade =   nota >= 95 ? 'A+' :
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C' : 'F';

console.log({nota, grade});                


                