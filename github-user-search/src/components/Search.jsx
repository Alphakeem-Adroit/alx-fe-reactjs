import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <p className="text-blue-500 mt-4">Loading...</p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {/* Success State */}
      {user && (
        <div className="mt-6 p-6 bg-white shadow-lg rounded-xl text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto"
          />

          <h2 className="text-xl font-bold mt-3">
            {user.name || user.login}
          </h2>

          {user.bio && (
            <p className="text-gray-600 mt-2 text-sm">
              {user.bio}
            </p>
          )}

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View GitHub Profile →
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
