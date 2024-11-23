import {create} from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],         // Store for all recipes
  searchTerm: '',      // Store for the search term
const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));
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
  // addRecipe: (newRecipe) =>
  //   set((state) => ({
  //     recipes: [...state.recipes, newRecipe],
  //   })),

  
  // Update an existing recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

//   Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),


}));
