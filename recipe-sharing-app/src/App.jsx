import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from './components/DeleteRecipeButton';


function App() {
  return (
    <>
      <RecipeList />
      <AddRecipeForm />
    </>
  )
}

export default App


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<RecipeList />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/edit/:id" element={<EditRecipeForm />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;