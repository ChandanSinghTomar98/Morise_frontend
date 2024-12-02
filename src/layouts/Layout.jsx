import React, { useState, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ContactModel from "../components/ContactModel";
import { AuthContext } from "../context/AuthContext";

function Layout() {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Define routes where Navbar, Sidebar, and Footer should not appear
  const hideOnRoutes = ["/signin", "/signup"];
  const shouldHideLayout = hideOnRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {!shouldHideLayout && <Navbar />}

      {/* Main content wrapper */}
      <div className="flex-grow flex flex-col">
        {!shouldHideLayout ? (
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
      {!shouldHideLayout && <Footer />}

      {/* Contact Modal */}
      <ContactModel
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}

export default Layout;
