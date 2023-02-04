
// const arr = new Arrayy(10);
// const arr = [];
// console.log(arr);

// *Inicializar arreglo
let videoJuegos = ['Mario 3','Megaman', 'Terraria'];
console.log({videoJuegos});
console.log(videoJuegos[0]);

// @ JavaScript puede tener un arreglo de diferentes elementos, incluso funciones
let arregloCosas = [
    123,
    true,
    false,
    'Hola',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1},
    ['Daniel', 'crea', 'un', 'U Did it!', [
        'Hola',
        'U Did it twice'
    ]]
];

console.log({arregloCosas});
// console.log( arregloCosas[2] );

// * Obtener 'U Did it!'
console.log( arregloCosas[8][3] );

// * Obtener 'U Did it twice'
console.log( arregloCosas[8][4][1] );