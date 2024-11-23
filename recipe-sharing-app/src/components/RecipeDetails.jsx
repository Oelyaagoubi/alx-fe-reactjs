import { useRecipeStore } from './recipeSore';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipeId from the route
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe Not Found</h2>
        <Link to="/">Back to Recipe List</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Optional: Add Edit and Delete Buttons */}
      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link> |{' '}
      <Link to={`/delete/${recipe.id}`}>Delete Recipe</Link>
      <br />
      <Link to="/">Back to Recipe List</Link>
    </div>
  );
};

export default RecipeDetails;