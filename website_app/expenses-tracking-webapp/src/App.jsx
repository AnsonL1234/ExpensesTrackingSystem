import { BrowerRouter, Routes, Route } from 'react-router-dom';
import { Home } from './landing-page/Home-page/Home'
import { About } from './landing-page/About-page/About'
import { Feature } from './landing-page/Feature-page/Feature'
import './App.css'

function App() {
  

  return (
    <>
      <BrowerRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}  />
          <Route path="/Feature" element={<Feature />}  />
        </Routes>
      </BrowerRouter>
    </>
  )
}

export default App
