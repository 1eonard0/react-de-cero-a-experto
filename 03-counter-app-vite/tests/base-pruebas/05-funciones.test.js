import { getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'
describe('Test en el modulo 05-funciones', () => {

    test('The function getUser should return an object', () => {
        const obj = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const testObj = getUser();
        expect(obj).toEqual(testObj);
    });

    test('The function getUsuarioActivo should return an object', () => {
        const obj = {
            uid: 'ABC123',
            username: 'Leonardo'
        };
        const name = 'Leonardo';
        const testObj = getUsuarioActivo(name)
    });
});