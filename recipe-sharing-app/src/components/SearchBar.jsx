import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);  // Update the search term in the store
    filterRecipes();            // Filter recipes based on the new search term
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes by title"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;