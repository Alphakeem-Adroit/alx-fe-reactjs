const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              RecipeShare
            </h3>
            <p className="text-sm leading-relaxed">
              A modern platform to discover, share and explore delicious recipes 
              from around the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Add Recipe
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>
            <p className="text-sm">
              Made with ❤️ by <a href="https://github.com/Alphakeem-Adroit/" className="hover:text-blue-300 underline">Busari Akeem Tunde</a> using React & Tailwind CSS.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} RecipeShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
