import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () =>{
  const[recipequeue,setRecipeQueue]=useState([])
  const[preparedRecipe,setPreparedrecipe]=useState([])

  const addRecipeToQueue = (recipe) =>{
    const isExist = recipequeue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist){
       setRecipeQueue([...recipequeue,recipe])
    }
    else{
      alert('Recipe alredy exist')
    }
  }
  const handelRemove = id=>{
    // find which recipe to rwmove
    const deletedRacipe =recipequeue.find(recipe=>recipe.recipe_id===id)
    // remove from want to remove table
    const updateQueue = recipequeue.filter(recipe=>recipe.recipe_id !==id)
    setRecipeQueue(updateQueue)
      setPreparedrecipe([...preparedRecipe,deletedRacipe])
    
  }
  return (
    <div className="container mx-auto px-20">
      {/* {Header} */}
      <Header></Header>
      {/* {Banner} */}
      <Banner></Banner>
      {/* {Our Recipes Section} */}
      <OurRecipes></OurRecipes>
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards sectin */}
        <Recipes addRecipeToQueue = {addRecipeToQueue}></Recipes>
        {/* side bar */}
        <Sidebar handelRemove={handelRemove} recipequeue ={recipequeue}preparedRecipe={preparedRecipe}></Sidebar>
      </section>
    </div>
  )
}
export default App;