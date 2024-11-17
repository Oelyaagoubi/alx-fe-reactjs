import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';


import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
  

  return (
    <Router>
    <>
       <h1>Recipe Manager</h1>
       <nav>
          <ul>
            <li><Link to="/">Recipe List</Link></li>
            <li><Link to="/add">Add Recipe</Link></li>
            
           
          </ul>
        </nav>
        <SearchBar />  {/* Include SearchBar to allow searching */}
        <FavoritesList /> {/* Render the FavoritesList component */}
        <RecommendationsList /> {/* Render the RecommendationsList component */}
        <Routes>
          
          <Route path="/" element={<RecipeList/>} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} /> {/* Add this */}
          <Route path="/delete/:id" element={<DeleteRecipeButton />} /> {/* Add this */}
          
        </Routes>

     
     

      
    </>
    </Router>
  )
}

export default App
