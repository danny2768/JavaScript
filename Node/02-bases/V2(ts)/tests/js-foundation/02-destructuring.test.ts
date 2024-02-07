import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {
    
    test('characters should contain Flash & Superman', () => {
       expect(characters).toContain('Flash');
       expect(characters).toContain('Superman');
    });

    test('characters should not contain IronMan', () => {
        expect(characters).not.toContain('IronMan');
    });

    test('characters should contain only 2 elements', () => {
        expect(characters.length).toBe(4);
    });

    test('First character should be Flash and second Superman', () => {
        const [first, second] = characters;                
        expect(first).toBe('Flash');
        expect(second).toBe('Superman');
    });
});