import React, { useEffect } from "react";
import { X, PhoneCall, Mail } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300 group z-10"
        >
          <X className="h-5 w-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 text-center">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Get in touch with our support team
          </p>

          {/* Phone Input */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              />
              <PhoneCall className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center space-x-3 text-gray-600 text-sm sm:text-base">
              <PhoneCall className="h-5 w-5" />
              <span>+91 9541299224</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600 text-sm sm:text-base">
              <Mail className="h-5 w-5" />
              <span>info@help.com</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300 font-semibold tracking-wide shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Request a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
