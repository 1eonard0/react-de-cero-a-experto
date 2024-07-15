import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Megaman']);

    const addNewCategory = (newCategory) =>{
        setCategories(categories => [newCategory, ...categories]);
    }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory onAddCategory={ (value) => addNewCategory(value) } />

        
        { 
          categories.map( category => <GiftGrid key={category} category={category} />) 
        }
        
    </>
  )
}
