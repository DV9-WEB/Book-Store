import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <div>
        <Navbar />
        <App />
        <Footer />
      </div>
      
    </AuthProvider>
  </BrowserRouter>
);
