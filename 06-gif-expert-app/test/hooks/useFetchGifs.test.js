import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en custom hook useFetchGifs', () => {
    const category = 'Terminator';
    test('Debe de retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { imgs } = result.current;
        expect(imgs.length).toBe(0);
    });

    test('Debe de retornar imagenes', async () => {
        const { result } = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect(result.current.imgs.length).toBeGreaterThan(0)
        );

        const { imgs } = result.current;
        expect(imgs.length).toBeGreaterThan(0);
    });
});