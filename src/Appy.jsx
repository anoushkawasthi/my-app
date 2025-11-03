import React,{useState} from "react";


export default function Appy() {

    const [ingredients,setingregidents] = React.useState([]);
    
    function removeIngredient(ingredientToRemove) {
        setingregidents((prevIngredients) => 
            prevIngredients.filter((ing) => ing !== ingredientToRemove)
        );
    }
    
    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient} className="ingredient-item">
            <span>{ingredient}</span>
            <button className="remove-btn" onClick={() => removeIngredient(ingredient)}>✕</button>
        </li>
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

    const [recipe, setRecipe] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    async function fetchRecipe() {
        if (ingredients.length < 4) {
            setRecipe("Add at least 4 ingredients to get a recipe.");
            return;
        }

        setLoading(true);
        setRecipe(null);

        try {
            const prompt = `Create a recipe using these ingredients: ${ingredients.join(", ")}. 
            
Please include:
1. Recipe Title
2. Ingredients List (with quantities)
3. Cooking Time
4. Serves (number of servings)
5. Step-by-step Instructions (numbered steps)

Format it clearly with headings.`;
            
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    { text: prompt }
                                ]
                            }
                        ]
                    }),
                }
            );

            if (!response.ok) {
                const error = await response.text();
                setRecipe(`Error: ${response.status} - ${error}`);
                setLoading(false);
                return;
            }

            const result = await response.json();
            const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(result);
            setRecipe(generatedText);
        } catch (err) {
            setRecipe(`Network error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    function no_copy()
    {
        return (
            <>
                <h2>Ingredients in Hand:</h2>
                <ul className="ing-list">
                    {ingredientList}
                </ul>
                <div className="ready">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                    <div className="top">
                        <button className="recipe_button" onClick={fetchRecipe} disabled={loading}>
                            {loading ? "Generating..." : "Get a recipe"}
                        </button>
                    </div>
                    {recipe && (
                        <div className="generated-recipe">
                            <h3>Generated Recipe</h3>
                            <div className="recipe-content">
                                {recipe.split('\n').map((line, idx) => {
                                    if (line.trim() === '') return null;
                                    if (line.includes('**') || line.includes('##')) {
                                        return <h4 key={idx}>{line.replace(/\*\*/g, '').replace(/##/g, '').trim()}</h4>;
                                    }
                                    if (line.match(/^\d+\.|^-|^\*/)) {
                                        return <li key={idx}>{line.replace(/^\d+\.|^-|^\*/, '').trim()}</li>;
                                    }
                                    return <p key={idx}>{line.trim()}</p>;
                                })}
                            </div>
                        </div>
                    )}
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
