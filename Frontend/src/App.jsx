import React from 'react'
import "./index.css";
import Home from './Home/Home';
import Course from './components/Course';
import { Routes, Route} from "react-router-dom"
import Signup from './components/Signup';
import About from './components/About';

const App = () => {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          </Routes>
  
    </>
  )
}

export default App
