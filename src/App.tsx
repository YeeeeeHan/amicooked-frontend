import { NavBar } from '@/components/ui-custom/navBar'
import Home from '@/pages/Home'
import Question from '@/pages/Question'
import { useState } from 'react' // Import useState
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false) // State for dark mode

  return (
    <div className={`flex min-h-screen flex-col ${isDarkMode ? 'dark bg-background' : 'bg-light'}`}>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/question/:id" element={<Question />} />
      </Routes>
    </div>
  )
}

export default App
