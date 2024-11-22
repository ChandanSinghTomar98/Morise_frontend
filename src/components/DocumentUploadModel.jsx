import React from "react";
import { X } from "lucide-react";

const DocumentUploadModal = ({ onClose }) => {
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
            Proceed with Documents
          </h2>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-center text-gray-600">
              Start your visa application process by uploading your documents
              for just <span className="font-semibold text-blue-600">₹59</span>.
              Our platform ensures that your documents are processed accurately
              and quickly.
            </p>

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-2 bg-secondary text-primary rounded-lg hover:bg-secondaryDark transition-colors font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadModal;
