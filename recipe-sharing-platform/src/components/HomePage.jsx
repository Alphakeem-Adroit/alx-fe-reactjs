import { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data when component mounts
    setRecipes(recipesData);
  }, []);

  return (
    <div class="flex flex-wrap gap-6 justify-center">
      {recipes.map((recipe) => (
        <div key={recipe.id} class="p-3 rounded bg-gray-50 flex flex-col w-50 h-90 hover:shadow-md ">
          <img src={recipe.image} alt={recipe.title} class="rounded-lg h-48 w-48 object-cover"/>
          <h2 class="text-xl font-bold pt-2 pb-2 truncate">{recipe.title}</h2>
          <p class="truncate">{recipe.summary}</p>
          <button class="bg-blue-500 rounded py-2 px-6 text-gray-100 my-6 hover:bg-blue-600 t">View Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
