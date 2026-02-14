import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // If there is a search term, use filtered results
  const displayedRecipes =
    searchTerm.trim() !== "" ? filteredRecipes : recipes;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>

      {/* Search Component */}
      <SearchBar />

      {displayedRecipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        <ul className="space-y-2">
          {displayedRecipes.map((recipe) => (
            <li
              key={recipe.id}
              className="border p-3 rounded hover:bg-gray-100"
            >
              <Link
                to={`/recipe/${recipe.id}`}
                className="font-semibold text-blue-600"
              >
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
