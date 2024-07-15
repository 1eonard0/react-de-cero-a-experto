describe('Test de <TestComponent />', () =>{
    test('Test de pruebas Trim', () => {
        const message1 = 'Test Message';
        const message2 = message1.trim();
        expect(message1).toBe(message2);
    });

    test('Test de pruebas UpperCase', () => {
        const message1 = 'Test Message';
        const message2 = message1.toUpperCase();
        expect(message1).not.toBe(message2);
    });
});
