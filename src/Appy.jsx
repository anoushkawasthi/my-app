import React,{useState} from "react";


export default function Appy() {

    const [ingredients,setingregidents] = React.useState([]);
    
    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

    
   /* function handleSubmit(event){
        event.preventDefault();
 
        const formData=new FormData(event.currentTarget);
        const newingredient=formData.get("ingredient");
        setingregidents((prevIngredients) => [
            ...prevIngredients,
            newingredient
        ]);
        event.currentTarget.reset(); 
    }*/
    function addingredients(formData){
        const new_ingredient =formData.get("ingredient");
        setingregidents((prevIngredients) => [
            ...prevIngredients,
            new_ingredient
        ]);
    }

    function no_copy()
    {
        return (
            <>
                <h2>Ingredients on Hand:</h2>
                <ul className="ing-list">
                    {ingredientList}
                </ul>
                <div className="ready">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                    <div className="top">
                        <button className="recipe_button">Get a recipe</button>
                    </div>
                </div>
              </>
            );
        }
    function no_copy2()
    {
        return (
            <>
                <h2>Ingredients on Hand:</h2>
                <ul className="ing-list">
                    {ingredientList}
                </ul>
                <div className="ready">
                    <p>Add atleast 4 ingredients to get a recipe</p>
                    <p>Keep adding ingredients to your list</p> 
                </div>
              </>
            );
        }


    return(
        <main>
            <form action={addingredients} className="add-ingredient-form" >
                <input 
                  type="text" 
                  name='ingredient' 
                  placeholder="e.g. oregano" 
                  className="input"
                />
                <button type="submit" className="subtitle">+Add ingredient</button>      
            </form>
            {(ingredients.length > 0 )? (ingredients.length<4 ? no_copy2() : no_copy()) : (
                <div className="no-ingredients">
                    <h2>No ingredients added yet</h2>
                    <p>Start by adding ingredients you have at home!</p>
                </div>
            )}
        </main>
    )
}
