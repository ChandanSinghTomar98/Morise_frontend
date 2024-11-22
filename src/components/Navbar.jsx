import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import images from "../constants";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = React.useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("userId"); // Clear any stored auth token
    navigate("/signin");
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="bg-black w-full shadow-sm">
      <div className="container mx-auto  flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={images.LogoNav}
              alt="Morise"
              className="w-[12rem] h-[7rem]"
            />
          </Link>
        </div>

        {/* Icons and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          {/* <button
          aria-label="Notifications"
          className="hidden md:inline text-xl text-gray-500 hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faBell} />
        </button> */}

          {/* Profile Image with Dropdown */}
          <div className="relative">
            <img
              src={images.Avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-gray-700 rounded-lg shadow-lg z-10">
                <ul>
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/documents"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Documents
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Settings and Help
                    </Link>
                  </li>
                  <li
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          {/* <button
          onClick={toggleMenu}
          className="md:hidden text-gray-500 hover:text-gray-300"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button> */}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <div className="flex flex-col space-y-2 text-gray-300">
            <button
              aria-label="Notifications"
              className="mt-2 text-gray-500 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faBell} />
            </button>
            {/* Add mobile links here if needed */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
