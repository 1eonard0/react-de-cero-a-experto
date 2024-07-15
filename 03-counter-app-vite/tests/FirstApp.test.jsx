import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    const name = 'Leonardo Toledo';
    const edad = '32';
    // test('Debe hacer match con el snapshot', () => {
    //     const { container } = render( <FirstApp /> );
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe contener un h1', () => {
        render( <FirstApp username={name} />); 

        expect( screen.getByRole('heading', {level: 1}) ).toBeTruthy();
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(name);
    });

    test('Debe contener la edad', () => {
        render( 
            <FirstApp username={name} edad={edad}/>
        );
        expect( screen.getByText(edad) ).toBeTruthy();
    });
});