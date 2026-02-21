import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Platform Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-black transition"
        >
            RecipeShare
        </Link>

        {/* Add Recipe Button */}
        <Link
          to="/add"
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          + Add Recipe
        </Link>
      </div>
    </header>
  );
};

export default Header;
