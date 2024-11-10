import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Course from "./components/Course";
import Signup from "./components/Signup";
import About from "./components/About";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"; // Protect course route
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar"; // Import Navbar

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/course"
          element={
            <PrivateRoute>
              <Course />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
