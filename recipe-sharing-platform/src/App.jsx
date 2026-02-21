import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add" element={<AddRecipeForm />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>      
  );
}

export default App;
