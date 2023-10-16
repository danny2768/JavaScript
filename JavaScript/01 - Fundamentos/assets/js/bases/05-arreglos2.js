let juegos = ['Zelda', 'Mario', 'Metroid', 'Minecraft']
console.log(
    'largo: ', juegos.length
);

let primero = juegos[0]

let ultimo = juegos[ juegos.length - 1 ]

console.log('primero:',primero,'|','ultimo:', ultimo);

// * Iterar sobre un array
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );

// * Agregar un elemento de ultimo          Retorna la nueva longitud del arreglo al imprimir
juegos.push('Valorant');

// * Agregar un elemtento al principio      Retorna la nueva longitud del arreglo al imprimir
juegos.unshift('LoL');

// * Borrar el ultimo elemento del array    Retorna el elemento borrado
juegos.pop();



// * Eliminar elemento del indice y elminar x elementos a partir de esa posicion
console.log('------------------------');
console.log({juegos});
let pos = 2;
let juegosBorrados = juegos.splice( pos, 2 );
console.log({juegosBorrados});

// * Buscar un indice
console.log('------------------------');
console.log({juegos});
let minecraftIndex = juegos.indexOf('Minecraft');
console.log({minecraftIndex});
// @ Si indexOf retorna un -1 significa que no encontro el elemento