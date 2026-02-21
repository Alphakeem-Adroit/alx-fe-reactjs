import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Ingredients
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Cooking Instructions
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
