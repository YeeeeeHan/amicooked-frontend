import About from '@/pages/About'
import Home from '@/pages/Home'
import Question from '@/pages/Question'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/ui-custom/navBar'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`${theme}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/question/:id" element={<Question />} />
      </Routes>
    </div>
  )
}

export default App
