
let a = 15;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
}
else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

console.log('--------------------');

// @ Si queremos obtener el dia:

if (dia === 0) {
    console.log('Hoy es domingo');
} else {
    console.log('Hoy no es domingo');
}

// @ Uso de =
// * = quiere decir asignacion
// * == compara pero sin importar el tipo
// * === compara pero teniendo en cuenta el tipo

console.log('----------------------');

// @ Obtener el dia de la semana con if y else es muy largo.
// @ Si no queremos usar otras funciones podemos usar objetos para hacerlo

const diaSemana = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado'
}

console.log(diaSemana[dia] || 'Dia no valido');

// * Tambien se pueden usar arreglos
