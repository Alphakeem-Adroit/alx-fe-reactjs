import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // =========================
  // FAVORITES STATE
  // =========================
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => {
      // Prevent duplicates
      if (state.favorites.includes(recipeId)) return state;

      return {
        favorites: [...state.favorites, recipeId],
      };
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  toggleFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites.filter((id) => id !== recipeId)
        : [...state.favorites, recipeId],
    })),

  // =========================
  // RECOMMENDATIONS
  // =========================
  recommendations: [],

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Example logic:
    // Recommend recipes that share words with favorite recipe titles
    const favoriteRecipes = recipes.filter((recipe) =>
      favorites.includes(recipe.id)
    );

    const keywords = favoriteRecipes.flatMap((recipe) =>
      recipe.title.toLowerCase().split(" ")
    );

    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) &&
        keywords.some((word) =>
          recipe.title.toLowerCase().includes(word)
        )
    );

    set({ recommendations: recommended });
  },

  // =========================
  // BASIC CRUD (if not already added)
  // =========================
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      favorites: state.favorites.filter((id) => id !== recipeId), // remove from favorites if deleted
    })),
}));

export default useRecipeStore;
