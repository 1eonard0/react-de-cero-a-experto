import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Test unitarios para <GifItem />', () => {
    const title = 'sample title';
    const url = 'http://url.com/';
    test('Debe conicidir con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url }/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={ title } url={ url }/>);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titlo dentro del elemento p', () => {
        render(<GifItem title={ title } url={ url }/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});