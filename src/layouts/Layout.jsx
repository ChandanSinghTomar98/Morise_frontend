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
import ContactModel from "../components/ContactModel";

function Layout() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [userToken, setUserToken] = useState("");
  const username = Cookies.get("authToken");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      {isAuthenticated ? <Navbar /> : null}
      {/* <Navbar /> */}

      {isAuthenticated ? (
        <div className="flex justify-between">
          {/* Sidebar */}
          <div className="w-[2%]  text-white">
            <Sidebar onSupportClick={() => setIsDialogOpen(true)} />
          </div>

          {/* Main Content Area */}
          <div className="w-[98%]">
            <div className=" ">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
      {isAuthenticated ? <Footer /> : null}
      <ContactModel
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}

export default Layout;
