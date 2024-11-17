import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <Link to="/add">Add Recipe</Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link> |{' '}
            <Link to={`/edit/${recipe.id}`}>Edit</Link> |{' '}
            <Link to={`/delete/${recipe.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;