import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Test unitarios para 07-deses-arr', () => {

    test('La function retornaArreglo retorna una palabra y un numero.', () => {
        const [letters, number] = retornaArreglo();
        //expect(letters).toBe('ABC');
        //expect(number).toBe(123);

        expect(letters).toEqual( expect.any(String) );
        expect(number).toEqual( expect.any(Number) );
    });
});




