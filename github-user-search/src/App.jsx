import Search from "./components/Search";
import { searchUsers } from "./services/githubService";
import { useState } from "react";
import Header from './components/Header';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await searchUsers({ username, location, minRepos });
      if (results.length === 0) throw new Error("No users found");
      setUsers(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow text-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="mt-2 font-bold">{user.login}</h3>
            
            {user.bio && (
      <p className="text-gray-600 text-sm mt-1">{user.bio}</p>
    )}

            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
