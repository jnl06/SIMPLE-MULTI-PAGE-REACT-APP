import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'  
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './component/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
