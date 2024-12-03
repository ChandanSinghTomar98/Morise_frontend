import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (auth && !isAuthenticated) {
    // Clear authentication-related data
    localStorage.setItem("authlocal", false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Redirect to login
    return <Navigate to="/signin" />;
  }

  // Render the protected component
  return <Component />;
};

export default ProtectedRoute;
