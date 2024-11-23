// AuthContext.js
import React, { createContext, useEffect, useState } from "react";

// Create Context
export const AuthContext = createContext();

// Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const userDetails = (data) => {
    const user = data;
    return user;
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};
