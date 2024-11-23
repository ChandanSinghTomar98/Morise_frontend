import React from "react";
import Container from "../components/Container";
const Account = () => {
  return (
    <Container>
      <div className="mx-auto bg-white p-4 md:p-6 min-h-screen">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* Left Column */}
          <div className="mb-8 md:mb-0">
            {/* Header Section */}
            <div className="space-y-4 mb-8">
              <h1 className="text-2xl font-bold">HI, Mr. Demo user</h1>
              <p className="text-blue-700 font-medium md:pr-8">
                The Morise Card is your ultimate career companion. Register now
                and let us handle everything - from documentation to visa
                success. With this card, your career aspirations know no
                boundaries!
              </p>
            </div>

            {/* Profile Status */}
            <div className="bg-yellow-300 rounded-lg p-4 mb-4 flex justify-between items-center">
              <span className="font-medium">Profile Status</span>
              <span className="font-medium">Approved/Pending</span>
            </div>

            {/* First Set of Navigation Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
                GO PREMIUM / PREMIUM PROFILE
              </button>

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
                MY REFERALS
              </button>

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
                REWARDS
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="hidden md:block h-32"></div>{" "}
            {/* Spacer for desktop alignment */}
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
              RAISE A TICKET
            </button>
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
              OUR CERTIFICATIONS
            </button>
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
              Download Morise Card
            </button>
            {/* Back Button - Only visible on desktop for right column */}
            <div className="hidden md:flex justify-center mt-8">
              <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
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

          {/* Back Button - Only visible on mobile at the bottom */}
          <div className="md:hidden flex justify-center mt-8">
            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
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
    </Container>
  );
};

export default Account;
