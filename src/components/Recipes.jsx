import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({addRecipeToQueue}) =>{
    const[recipes,setRecipes]=useState([])
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res=>res.json())
        .then(data => setRecipes(data))
    })
    
    return(
       <div className="md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map(recipe =>
                <div key={recipe.recipe_id} className="card bg-base-100 border-2">
                <figure className="px-8 pt-6">
                  <img className="md:h-52 w-full rounded-xl"
                    src={recipe.recipe_image}
                    alt="recipes image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl text-gray-700 
                   font-semibold">{recipe.recipe_name}</h2>
                  <p>{recipe.short_description}</p>
                  <h3 className="text- text-gray-800 font-semibold">Ingradients : {recipe.ingredients.length}</h3>
                  <ul className="list-disc text-gray-500 ml-8">
                    {recipe.ingredients.map((item,index) => <li key={index}>{item}</li>)
                    
    }
                  </ul>
                  <div className="flex gap-5 mt-4">
                    <div className="flex items-center gap-1"><i class="fa-regular fa-clock"></i>
                    <p className="text-sm">{recipe.preparation_time}</p></div>
                    <div className="flex items-center gap-1"><i class="fa-solid fa-fire-flame-curved"></i>
                    <p className="text-sm">{recipe.calories} calories</p></div>
                   

                  </div>
                  <div className="card-actions ">
                    <button onClick={()=>addRecipeToQueue(recipe)} className="bnt bg-green-400 rounded-full w-36 h-10 mt-4 text-gray-600 border-2 text-sm font-semibold">Want to Cook</button>
                  </div>
                </div>
              </div>
            )}
        </div>
       </div>
    );
};
export default Recipes;