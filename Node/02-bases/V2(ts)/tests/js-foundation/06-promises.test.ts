import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {

    test('gerPokemonById should return a pokemon name', async() => {
        const pokemonId = 1;
        const pokemonName = await getPokemonById( pokemonId );
        expect( pokemonName ).toBe('bulbasaur');    
    });

    test('Should return an error if pokemon does not exist', async() => {
        const pokemonId = 100000000;

        try {
            await getPokemonById( pokemonId );        
            expect( true ).toBe( false ); // This line should't be executed
        } catch (error) {
            expect( error ).toBe(`Pokemon not found with id ${pokemonId}`);            
        }

    });

});