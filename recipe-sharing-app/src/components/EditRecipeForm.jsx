import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams(); // Get recipeId from URL
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.addRecipe); // Assuming addRecipe overwrites if ID matches

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  if (!recipe) {
    return (
      <div>
        <h2>Recipe Not Found</h2>
        <Link to="/">Back to Recipe List</Link>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    navigate(`/recipe/${id}`); // Redirect back to details page
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
      <Link to={`/recipe/${id}`}>Cancel</Link>
    </div>
  );
};

export default EditRecipeForm;
