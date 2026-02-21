import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").length < 2) {
      validationErrors.ingredients =
        "Please include at least two ingredients (one per line)";
    }

    if (!instructions.trim()) {
      validationErrors.instructions = "Preparation steps are required";
    }

    if (!image.trim()) {
        validationErrors.image = "Image URL is required";
    }

    {errors.image && (
  <p className="text-red-500 text-sm mt-1">
    {errors.image}
  </p>
)}

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        summary: instructions.substring(0, 80) + "...",
        image: "https://via.placeholder.com/400",
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n"),
      };

      console.log("New Recipe:", newRecipe);

      // For now just navigate back home
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Recipe Image */}
          <div>
            <label className="block font-medium mb-2">
                Image URL
            </label>
            <input
                type="text"
                placeholder="Paste image URL"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            </div>


          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className="block font-medium mb-2">
              Preparation Steps (one per line)
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">
                {errors.instructions}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;

// validate
// md
// grid-cols-1
