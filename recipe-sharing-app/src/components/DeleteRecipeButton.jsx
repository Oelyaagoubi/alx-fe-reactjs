import { useRecipeStore } from './recipeSore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.setRecipes); // Assuming this can update the recipes list
  const recipes = useRecipeStore((state) => state.recipes);
  const navigate = useNavigate();

  const handleDelete = () => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    deleteRecipe(updatedRecipes);
    navigate('/'); // Redirect to Recipe List
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;