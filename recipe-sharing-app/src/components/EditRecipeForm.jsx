import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { ...recipe, title, description };
    updateRecipe(updatedRecipe);
    navigate(`/recipe/${id}`); // Redirect back to the recipe details page
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
