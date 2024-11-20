import React from 'react'
import { Link } from "react-router-dom";
import  images  from "../constants";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#E9EDC9] text-[#000] py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <img src={images.FooterLogo}  alt="logo" className="w-56"/>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">About Us</h3>
                <p className="text-sm">
                    We are dedicated to providing top-notch services and products. Our mission is to deliver value and innovation to our customers.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                    <li>
                        <span>Phone: </span>
                        <Link to="tel:+1234567890" className="hover:text-[#DBB000]">+123 456 7890 </Link>
                    </li>
                    <li>
                        <span>Email: </span>
                        <Link
                            to="mailto:info@example.com"
                            className="hover:text-[#DBB000]">info@example.com
                        </Link>
                    </li>
                    <li>Address: 123 Main Street, Anytown, USA</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Links</h3>
                <ul className="flex gap-4 text-xl">
                    <li><Link to={"https://www.linkedin.com"}><FaLinkedin /></Link> </li>
                    <li><Link to={"https://web.whatsapp.com"}><FaWhatsapp /></Link></li>
                    <li><Link to={"https://www.facebook.com"}><FaFacebook /></Link></li>
                    <li><Link to={"https://x.com/?lang=en"}><FaTwitter /></Link></li>
                </ul>
            </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
            <p>© 2024 Your Company Name. All rights reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer