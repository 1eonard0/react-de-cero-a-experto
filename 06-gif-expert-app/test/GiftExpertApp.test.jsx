import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('Pruebas en <GiftExpertApp />', () => {
    test('Debe ejecutar el metodo addNewCategory', () => {

        render(<GiftExpertApp />);

        

        screen.debug();
    });
});