import { Navbar } from '@/components/navbar/navbar'
import Home from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
