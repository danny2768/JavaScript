

const heroes = ['Batman', 'Superman', 'MujerMaravilla', 'SpiderMan']

// @ For tradicional
console.warn('For Tradicional');

// for ( let i = 0 ; i < 5 ; i ++ ){
//     console.log(heroes[i]);
// }

// * Aqui tenemos el problema del undefined, es mejor hacerlo asi:
for ( let i = 0 ; i < heroes.length ; i ++ ){
    console.log(heroes[i]);
}




// @ For - in
console.warn('For in');
for (let i in heroes) {
    console.log(heroes[i]);
}




// @ For - of
console.warn('For of');
for (let heroe of heroes) {
    console.log(heroe);
}
// * Aqui no se acostrumbra a colocar i sino el arreglo en singular.

