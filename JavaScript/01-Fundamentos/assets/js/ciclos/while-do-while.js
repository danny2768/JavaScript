
const carros = ['Ford', 'Mazda', 'Honda','Toyota','Lexus']
let i = 0;

console.warn('While');
while(carros[i]) {
    // if (i === 3){ 
    //     break;
    // }

    console.log(carros[i]);
    i += 1;
}

// * undefined, null, false hacen que un while nunca se ejecute.

console.warn('Do-while');
let j = 0;
do {
    console.log(carros[j]);
    j += 1;
} while (carros[j]);
