import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Test unitarios para <CounterApp />', () => {
    const initialCounter = 100;
    test('Tarea 1: Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp />);
        expect( container ).toMatchSnapshot();
    });

    test('Tarea 2: Debe hacer mostrar 100 al comenzar', () => {
        render(<CounterApp value={initialCounter}/>);
        expect( screen.getByRole("heading", { level: 2}).innerHTML ).toContain(initialCounter.toString());
    });

    test('Debe incrementar a 101', () => {
        render(<CounterApp value={initialCounter}/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByRole("heading", { level: 2}).innerHTML ).toContain('101');
    });

    test('Debe decrementar a 99', () => {
        render(<CounterApp value={initialCounter}/>);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByRole("heading", { level: 2}).innerHTML ).toContain('99');
    });

    test('Debe hacer reset a 100', () => {
        render(<CounterApp value={initialCounter}/>);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByRole("button", { name: 'btn-rst'}) );
        expect( screen.getByRole("heading", { level: 2}).innerHTML ).toContain(initialCounter.toString());
    });
});