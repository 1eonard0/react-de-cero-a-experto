import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    const [imgs, setImgs] = useState([]);

    const handlerImages = async () => {
        const imgs = await getGifs(category);
        setImgs(imgs);
    };

    useEffect(() => {
        handlerImages();
    }, [ ])

    return {imgs};
}
