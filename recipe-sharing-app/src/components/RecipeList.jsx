import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  // Function to check if a recipe is in the favorites
  const isFavorite = (recipeId) => favorites.includes(recipeId);

  // Function to toggle favorites
  const toggleFavorite = (recipeId) => {
    if (isFavorite(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <Link to="/add">Add Recipe</Link>
      <ul>
        {filteredRecipes.length === 0 ? (
          <li>No recipes found.</li>
        ) : (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link> |{' '}
              <Link to={`/edit/${recipe.id}`}>Edit</Link> |{' '}
              <Link to={`/delete/${recipe.id}`}>Delete</Link>
              |{' '}
              <button onClick={() => toggleFavorite(recipe.id)}>
                {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
