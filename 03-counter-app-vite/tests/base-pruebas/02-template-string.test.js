import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Test en el modulo 02-template-string', () => {
    test('The function getName should return Hola Leonardo', () => {
        const name = 'Leonardo';
        const greeting = getSaludo(name);
        expect(greeting).toBe(`Hola ${ name }`);
    });
});