import { X } from "lucide-react";
import React from "react";

const ContactModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="relative p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>

          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Enter Phone no.
          </h2>
          <div>
            <input
              type="text"
              placeholder="Enter Phone no."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {/* Content */}
          <div className="space-y-6">
            <p className="text-center text-gray-600 uppercase">
              Whatsapp or call us at+91 1234567890
            </p>
            <p className="uppercase">Or reach us at info@help.com</p>

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-2 bg-secondary text-primary rounded-lg hover:bg-secondaryDark transition-colors font-medium"
              >
                Request a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModel;
