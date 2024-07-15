import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GiftGrid = ({ category }) => {

    const { imgs } = useFetchGifs(category); 

  return (
    <div>
        <h1>{ category }</h1>
        <div className="card-grid">
            {
                imgs.map( (img) => 
                <GifItem key={img.id} {...img}/>
                )
            }
        </div>
    </div>
  )
}

GiftGrid.propTypes = {
  category : PropTypes.string.isRequired
}
