import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './landing-page/Home-page/Home.jsx'
import About from './landing-page/About-page/About.jsx'
import Feature from './landing-page/Feature-page/Feature.jsx'
import Header from './landing-page/nevigation/header.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}  />
          <Route path="/feature" element={<Feature />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
