import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './landing-page/Home-page/Home.jsx'
import About from './landing-page/About-page/About.jsx'
import Feature from './landing-page/Feature-page/Feature.jsx'
import Header from './landing-page/nevigation/header.jsx'
import Login from './login-page/Login.jsx';
import Register from './register-page/Register.jsx'
import MainPage from './MainPage/MainPage.jsx';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}  />
            <Route path="/feature" element={<Feature />}  />
          </Route>

          {/* <Route path='/mainPage' element={<MainPage />}> */}
            {/* <Route path="/dashboard" element={<Home />} /> */}
          {/* </Route> */}

          {/* Render it without header */}
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />}  />
          <Route path="/mainPage" element={<MainPage />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
