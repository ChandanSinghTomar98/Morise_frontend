import React from "react";
import { X, BadgeCheck } from "lucide-react";

const DocumentUploadSuccess = ({ onClose, orderId }) => {
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

          <BadgeCheck className="text-green-500" size={30} />

          {/* Content */}
          <div className="space-y-6">
            <p className="text-center text-gray-600">
              YOUR DOCUMENTS ARE UPLOADED SUCCESFULLY!
            </p>
            <p>OderId {orderId}</p>
            <p>Check your profile status daily or be in touch with us</p>
            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-2 bg-secondary text-primary rounded-lg hover:bg-secondaryDark transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadSuccess;
