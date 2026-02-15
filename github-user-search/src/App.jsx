// import Search from "./components/Search";
// import { fetchUserData } from "./services/githubService";
// import { useState } from "react";

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");

//   const handleSearch = async (username) => {
//     try {
//       setError("");
//       const data = await fetchUserData(username);
//       setUser(data);
//     } catch (err) {
//       setUser(null);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <Search onSearch={handleSearch} />

//       {error && (
//         <p className="text-red-500 text-center mt-4">{error}</p>
//       )}

//       {user && (
//         <div className="mt-6 p-4 bg-white shadow rounded-lg max-w-md mx-auto">
//           <img
//             src={user.avatar_url}
//             alt={user.login}
//             className="w-24 h-24 rounded-full mx-auto"
//           />
//           <h2 className="text-xl font-bold text-center mt-2">
//             {user.name || user.login}
//           </h2>
//           <p className="text-center text-gray-600">
//             {user.bio}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import { useState } from "react";

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
      <Search
        onSearch={handleSearch}
        user={user}
        loading={loading}
        error={error}
      />
    </div>
  );
}


