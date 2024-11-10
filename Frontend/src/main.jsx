import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import "./index.css"; // Import your CSS file
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <App />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
