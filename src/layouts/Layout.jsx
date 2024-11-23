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
    <div className="min-h-screen flex flex-col">
      <div className="mb-3">{isAuthenticated ? <Navbar /> : null}</div>

      {/* Main content wrapper */}
      <div className="flex-grow flex flex-col">
        {isAuthenticated ? (
          <div className="flex justify-between flex-grow">
            {/* Sidebar */}
            <div className="w-[2%] text-white">
              <Sidebar onSupportClick={() => setIsDialogOpen(true)} />
            </div>

            {/* Main Content Area */}
            <div className="w-[98%]">
              <div className="h-full">
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-grow">
            <Outlet />
          </div>
        )}
      </div>

      {/* Footer */}
      {isAuthenticated ? <Footer /> : null}

      {/* Contact Modal */}
      <ContactModel
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}

export default Layout;
