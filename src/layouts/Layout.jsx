import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
function Layout() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);


  return (
    <div>
      {isAuthenticated ? <Navbar /> : null}
      {/* <Navbar /> */}

      {isAuthenticated ? (
        <div className="flex justify-center">
          {/* Sidebar */}
          <div className="w-[15%] bg-gray-800 text-white">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="w-[85%]">
            <div className="container mx-auto p-4">
              <Outlet /> {/* Nested route content goes here */}
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
      {isAuthenticated ? <Footer /> : null}
    </div>
  );
}

export default Layout;
