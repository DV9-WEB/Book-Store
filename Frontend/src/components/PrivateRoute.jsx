import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Use the auth context

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Access user from context

  if (!user) {
    return <Navigate to="/signup" replace />; // Redirect to login if not logged in
  }

  return children; // Render the protected route if user is logged in
};

export default PrivateRoute;
