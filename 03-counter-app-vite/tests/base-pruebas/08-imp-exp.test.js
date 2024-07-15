import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe( 'test unitarios para 08-imp-exp', () => {

    test('el metodo getHeroeById debe retornar un hero por su id', () => {
        const h = getHeroeById(1);
        expect(h).toEqual(expect.any(Object));
    });

    test('el metodo getHeroesByOwner debe retornar un arreglo de heros filtrados por su owner DC', () => {
        const h = getHeroesByOwner('DC');
        expect(h.length).toBe(3);
        expect(h).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },{
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }]);
    });

    test('el metodo getHeroesByOwner debe retornar un arreglo de heros filtrados por su owner Malvel', () => {
        const h = getHeroesByOwner('Marvel');
        expect(h.length).toBe(2);
    });
});


