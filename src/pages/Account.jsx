import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white p-4 md:p-6 min-h-screen">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        {/* Left Column */}
        <div className="mb-8 md:mb-0">
          {/* Header Section */}
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              HI, Mr. Demo User
            </h1>
            <p className="text-blue-700 font-medium md:pr-8">
              The Morise Card is your ultimate career companion. Register now
              and let us handle everything - from documentation to visa success.
              With this card, your career aspirations know no boundaries!
            </p>
          </div>

          {/* Profile Status */}
          <div className="bg-yellow-300 rounded-lg p-4 mb-6 flex justify-between items-center shadow-sm">
            <span className="font-medium text-gray-800">Profile Status</span>
            <span className="font-medium text-gray-800">Approved/Pending</span>
          </div>

          {/* First Set of Navigation Buttons */}
          <div className="space-y-4 w-full">
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              GO PREMIUM / PREMIUM PROFILE
            </button>
            <Link
              to="/referals"
              className="block text-center w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              MY REFERRALS
            </Link>

            <Link
              to="/rewards"
              className="block text-center w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              REWARDS
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            RAISE A TICKET
          </button>
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            OUR CERTIFICATIONS
          </button>
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Download Morise Card
          </button>
        </div>

        {/* Back Button - Only visible on mobile at the bottom */}
        <div className="md:hidden flex justify-center mt-8">
          <button
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors"
            aria-label="Scroll to Top"
          >
            <svg
              className="w-6 h-6 transform rotate-90"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
