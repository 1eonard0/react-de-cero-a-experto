import { getGifs } from "../../src/helpers/getGifs";

describe('Test unitarios sobre getGifs()', () => {
    test('Debe retornar resultados mayores que 0', async () => {
        const gifs = await getGifs('Terminator');
        expect(gifs.length ).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id : expect.any( String ),
            title : expect.any( String ),
            url : expect.any( String )
        });
    });
});