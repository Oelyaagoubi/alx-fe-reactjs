import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <div>
      <h1>Welcome to the User Profile App</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <Counter />
      </div>
    </>
  )
}

export default App