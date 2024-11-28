import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Images from "../constants/Images";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <div className="h-[5rem] w-full"></div>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-2">
        <nav
          className={`transition-all duration-300 rounded-2xl ${
            scrolled
              ? "bg-[#111827]/80 backdrop-blur-md shadow-lg"
              : "bg-[#111827]"
          }`}
        >
          <div className=" mx-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center py-4 space-x-2">
              <Link to="/">
                <img
                  src={Images.MoriseLogo}
                  alt="Morise"
                  className="w-[12rem] h-[4rem]"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                aria-label="Notifications"
                className="hidden md:inline text-3xl
           text-white hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faBell} />
              </button>

              <div className="relative">
                <img
                  src={Images.Avatar}
                  alt="Profile"
                  className="w-14 h-14 rounded-full border border-gray-300 cursor-pointer"
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
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
