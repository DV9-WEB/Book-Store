import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext); // Custom hook to use the context
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("User")) || null
  );

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("User", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("User");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
