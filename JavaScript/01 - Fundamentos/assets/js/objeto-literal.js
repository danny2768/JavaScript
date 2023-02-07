
// * Al ver {} se deben asociar a un objeto
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

// * Al imprimir se ordenan atributos de manera alfabetica.
console.log(personaje);

// * Acceder a un atributo de la variable
console.log('Nombre:', personaje.nombre);
// *Tambien se puede acceder a un atributo con []
console.log('Nombre:', personaje['nombre']);


console.log('Edad:', personaje.edad);

console.log('Coords:', personaje.coords);
console.log('Zip:', personaje.direccion.zip);

console.log('Num. trajes:', personaje.trajes.length);

console.log('Ultimo Traje:', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('------------------');
console.log('Vivo', personaje.vivo);

