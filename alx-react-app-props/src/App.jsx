import ProfilePage from './components/ProfilePage.jsx'
import UserContext from './components/UserContext.js';

function App() {
  const userData = {
    name: "Alphakeem Adroit",
    email: "alphakeem12@gmail.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;