import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // 🔎 Search State
  searchTerm: '',
  filteredRecipes: [],

  // ➕ Add Recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // ❌ Delete Recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // ✏️ Update Recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // 🔍 Set Search Term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // automatically re-filter when term changes
  },

  // 🔎 Filter Recipes
  filterRecipes: () => {
    const { recipes, searchTerm } = get();

    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
