import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useEffect, useState } from 'react'
import HomePage from './landing_page/Home_Page/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './landing_page/About_Page/About.jsx';
import MainPage from './main-page/MainPage.jsx';
import './index.css';


function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div className='app h-100'>
      {/* <Navbar />
      <HomePage theme={theme}/>
      <About theme={theme} /> */}

      <MainPage />
    </div>
  )
}

export default App
