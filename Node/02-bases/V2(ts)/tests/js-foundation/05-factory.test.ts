import { buildMakePerson } from '../../src/js-foundation/05-factory';


describe('js-foundation/05-factory', () => {

    const getUUID = () => '123-123-123';
    const getAge = () => 25;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge,});

        expect(makePerson).toBeInstanceOf(Function);
    });

    test('buildMakePerson should return a valid person', () => {
        const makePerson = buildMakePerson({ getUUID, getAge, });

        const person = makePerson({ name: 'John Doe', birthdate: '1985-10-21' });

        expect(person).toEqual({
            id: '123-123-123',
            name: 'John Doe',
            birthdate: '1985-10-21',
            age: 25,
        });
    });

});