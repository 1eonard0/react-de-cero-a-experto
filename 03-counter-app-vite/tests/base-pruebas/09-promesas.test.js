import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test unitarios para 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un hero por id', (done) => {
        getHeroeByIdAsync(1)
                .then( hero => {
                    expect(hero).toEqual({
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    });
                    done();
                });
    });

    test('getHeroeByIdAsync debe lanzar un error', (done) => {
        getHeroeByIdAsync(100)
                .catch( err => {
                    expect('No se pudo encontrar el héroe').toBe(err);
                    done();
                });
    });
});