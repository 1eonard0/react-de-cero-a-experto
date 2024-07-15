import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}


/*
Tarea
1. Agregar las propTypes pata title y url 
2. agregar la validación para el snapshot
*/

GifItem.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
}


