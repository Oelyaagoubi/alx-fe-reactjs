import { useRecipeStore } from './recipeSore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecipeList = () => {
  // Get filtered recipes from Zustand store
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const recipes = useRecipeStore((state) => state.recipes); // All recipes

  // Ensure that filtering is applied when recipes change
  useEffect(() => {
    filterRecipes(); // Reapply filter whenever recipes or search term changes
  }, [recipes]);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        <li><Link to="/add">Add Recipe</Link></li>
      
      <li><Link to="home">home</Link></li></ul>
      <ul>
        {filteredRecipes.length === 0 ? (
          <li>No recipes found.</li>
        ) : (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link> |{' '}
              <Link to={`/edit/${recipe.id}`}>Edit</Link> |{' '}
              <Link to={`/delete/${recipe.id}`}>Delete</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RecipeList;