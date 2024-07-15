import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Test unitarios sobre el elemento <AddCategory />', () => {
    const textToSearch = 'Terminator';
    test('Debe de cambiar el valor de la caja de texto.', () => {
        render(<AddCategory onAddCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value : textToSearch }});
        expect(input.value).toBe(textToSearch);
    });

    test('Debe llamar onAddCategory si la caja de texto tiene un valor.', () => {

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value : textToSearch }});
        fireEvent.submit(form);
        expect( input.value ).toBe('');
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledWith(textToSearch);
    });

    test('No debe llamar onAddCategory si la caja de texto tiene un valor vacio.', () => {

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onAddCategory).not.toHaveBeenCalled();
        expect(onAddCategory).not.toHaveBeenCalledWith(textToSearch);
    });
});