import {create} from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],         // Store for all recipes
  searchTerm: '',  
  favorites: [],             // Store for favorite recipes (as an array of IDs)
  recommendations: [],    // Store for the search term

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes based on the search term
  filteredRecipes: [],

  // Filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Update an existing recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

   
  setSearchTerm: (term) => set((state) => {
    const newFilteredRecipes = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: newFilteredRecipes };
  }),

  addRecipe: (newRecipe) => set((state) => {
    const newRecipes = [...state.recipes, newRecipe];
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    };
  }),

  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));
