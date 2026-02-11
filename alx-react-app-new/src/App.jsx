import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import './App.css'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'

function App() {

  return (
    <>
      <Header />

      <WelcomeMessage />

      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      
      <MainContent />  

      <Footer />
    </>
  )
}

export default App
