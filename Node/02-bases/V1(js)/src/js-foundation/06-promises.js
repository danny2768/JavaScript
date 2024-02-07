
// * Usando promesas normales

// const getPokemonById = ( id ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     return fetch( url )
//         .then( resp => resp.json() )
//         // .then( () => throw new Error('No existe el pokemon') )
//         .then( pokemon => pokemon.name )
// }

// * Async y Await

const { http } = require('../plugins/http-client.plugin')

const getPokemonById = async( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get( url );

    // const resp = await fetch( url );
    // const pokemon = await resp.json();

    // throw new Error('No existe el pokemon')

    return pokemon.name
    // return fetch( url );
    //     .then( resp => resp.json() )
    //     .then( pokemon => pokemon.name )
}

module.exports = getPokemonById