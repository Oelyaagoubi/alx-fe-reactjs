
import './components/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile';
import StateHooks from './components/hooks'

function App() {
  

  return (
    <>
      
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <div>
      <h1>Welcome to the User Profile App</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <StateHooks/>
      </div>
    </>
  )
}

export default App
