interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details;
}

interface Details {
    author: string,
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Vienna",
    details: {
        author: "Billy Joel",
        year: 1976
    }
}

// @ Para la desestructuracion lo podemos hacer de 2 maneras
// * Manteniendo el nombre original de la variable
const { song } = audioPlayer;

// * Cambiando el nombre de la variable
const { song: anotherSong } = audioPlayer;

// @ Para manejar objetos anidados
// * OPCION 1 ( RECOMENDADA )
const { songDuration:duration, details } = audioPlayer;
const {author, year} = details;


// * OPCION 2
// const { songDuration: duration, 
//         details:{author, year}} = audioPlayer;

console.log(song);
console.log(anotherSong);
console.log(duration);
console.log(author);
console.log(year);

console.log("----------------------");

// @ Array destructuring
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// * OPCION 1
// const [p1, p2, p3] = dbz;

// * OPCION 2
// const [ , , p3] = dbz;

// ? Que pasa si p3 es undefined

const dbz1: string[] = ['Goku', 'Vegeta'];
// * Definimos un valor default.
const [pj1, pj2, pj3 = 'Not found'] = dbz1;

console.log(pj3);



export{}