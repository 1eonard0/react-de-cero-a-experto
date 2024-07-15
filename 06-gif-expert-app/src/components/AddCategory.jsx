import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputValueChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue);
        if(inputValue.trim().length == 0) return;
        //onAddCategory( (categories) => [inputValue, ...categories]);
        onAddCategory(inputValue);
        setInputValue('');
    };

  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input 
            type="text"
            placeholder="Buscar Gift"
            value={inputValue}
            onChange={ onInputValueChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onAddCategory : PropTypes.func.isRequired
}
