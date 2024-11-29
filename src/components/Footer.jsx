import React from "react";
import { Link } from "react-router-dom";
import images from "../constants";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="hidden md:block mt-auto shadow-2xl border  py-4 text-sm text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span>© 2024 Morise</span>
            <div className=" hidden space-x-3">
              <a href="#" className="hover:text-gray-600">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-gray-600">
                <FaWhatsapp />
              </a>
              <a href="#" className="hover:text-gray-600">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-600">
                <FaTwitter />
              </a>
            </div>
          </div>
          <p className="text-xs">
            Disclaimer: Morise guarantees reliable service but does not hold
            authority over visa approval decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
