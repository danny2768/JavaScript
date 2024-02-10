import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin', () => {

    test('getAge should return age', () => {
        const birthdate = '2001-09-27'
        const age = getAge(birthdate);
        expect( typeof age).toBe('number');
    });

    test('getAge should return the current age', () => {
        const birthdate = '2001-09-27'
        const age = getAge(birthdate);
        new Date().getFullYear() - new Date(birthdate).getFullYear();
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculatedAge);
    });

    test('getAge should return 0', () => {
        const spy = jest.spyOn( Date.prototype, 'getFullYear' ).mockReturnValue(1995)
        const birthdate = '1995-09-27'

        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();

    });

});