import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import { useState } from "react";
import Header from './components/Header';

export default function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");
      setUser(null);

      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <Search
        onSearch={handleSearch}
        user={user}
        loading={loading}
        error={error}
      />
    </div>
  );
}


