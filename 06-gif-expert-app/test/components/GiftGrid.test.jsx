import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { GiftGrid } from "../../src/components/GiftGrid";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GiftGRid />', () => {
    const category = 'Terminator';
    test('Debe retornar imagenes', () => {
        const childImgs = [
            {
                id : 'ASD12',
                title : category,
                url : 'http://url.com'
            }
        ];
        useFetchGifs.mockReturnValue({
            imgs : childImgs
        })
        render(<GiftGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(1);
    });
});