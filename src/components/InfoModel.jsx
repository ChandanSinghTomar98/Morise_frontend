import React from "react";

function InfoModal({ isOpen, onClose, message, title }) {
  if (!isOpen) return null; // Don't render the modal if isOpen is false

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-80 relative">
        <span
          className="absolute top-2 right-2 text-2xl text-gray-400 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
        <p className="text-center mb-4">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-green-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
