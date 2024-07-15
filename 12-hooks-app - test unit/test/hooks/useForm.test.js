import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'UserTester',
        email: 'tester@email.com'
    };

    test('Debe regresar los valores por defecto.', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onChangeForm: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('Debe de cambiar el nombre del formulario.', () => {
        const newValue = 'Pepe';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onChangeForm } = result.current;
        act( () => {
            onChangeForm({
                target : {
                name: 'name',
                value: newValue
                }
            });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe de realizar el reset del formulario.', () => {
        const newValue = 'Pepe';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onChangeForm, onResetForm } = result.current;
        act( () => {
            onChangeForm({
                target : {
                name: 'name',
                value: newValue
                }
            });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });

});