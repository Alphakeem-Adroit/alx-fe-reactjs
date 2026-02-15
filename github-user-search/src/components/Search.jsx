import { useState } from "react";

export default function Search({ onSearch, user, loading, error }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    onSearch(username);
    setUsername("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering Section */}

      {loading && (
        <p className="text-center mt-4 text-gray-500">
          Loading...
        </p>
      )}

      {error && (
        <p className="text-center mt-4 text-red-500">
          {error}
        </p>
      )}

      {user && (
        <div className="mt-6 p-6 bg-white shadow-lg rounded-xl text-center">
            <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto border-4 border-blue-100"
            />

            <h2 className="text-xl font-bold mt-3">
            {user.name || user.login}
            </h2>

            {/* Bio */}
            {user.bio && (
            <p className="text-gray-600 mt-2 text-sm">
                {user.bio}
            </p>
            )}

            {/* Profile Link */}
            <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
            View GitHub Profile →
            </a>
        </div>
    )}
    </div>
  );
}
