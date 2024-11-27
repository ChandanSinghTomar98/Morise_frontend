import React, { forwardRef, useRef } from "react";
import Container from "./Container";
import html2canvas from "html2canvas";

const MoriseCard = forwardRef(({ user }, ref) => {
  const cardRef = useRef(null); 

  // Function to handle downloading the Morise Card
  const downloadCard = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        scale: 2, 
        useCORS: true, 
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "MoriseCard.png"; 
        link.href = canvas.toDataURL("image/png"); 
        link.click(); 
      });
    }
  };

  return (
   <>
       <div
        className="rounded-2xl m-auto max-w-3xl mt-5 shadow-lg border sm:px-10 md:px-16 lg:px-16 p-4 w-full"
        ref={cardRef} // Attach ref to the card container
      >
        <div className="relative">
          <h1 className="text-center text-green-600 font-bold text-xl sm:text-2xl mb-4">
            MORISE CARD
          </h1>

          <div className="flex flex-row items-center gap-4 sm:gap-6">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-16 h-16 text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM21 20a9 9 0 1 0-18 0" />
              </svg>
            </div>

            {/* User Details */}
            <div className="flex-1 ml-16 sm:ml-9 space-y-1.5 sm:space-y-2">
              <p className="font-bold text-base sm:text-lg">
                {user?.fullName || "John Doe"}
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                Software Engineer
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                BLOOD GROUP: A+
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                {user?.email || "john@example.com"}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-row justify-between items-center gap-4">
            <button className="bg-primary text-white px-4 sm:px-6 py-2 mx-3 rounded-full hover:bg-blue-800 transition-colors text-sm sm:text-base">
              {user ? (user.status ? "Active" : "Inactive") : "Register Now"}
            </button>
          </div>

          <p className="text-center text-xs sm:text-sm font-medium text-gray-600 mt-4">
            A single card that opens doors to your international career.
          </p>
        </div>
         {/* Download Button */}
      <div className="mt-5 m-auto w-fit">
        <button
          onClick={downloadCard} // Attach the download function
          className="bg-primary m-auto text-white px-4 sm:px-6 py-2 mx-3 rounded-full hover:bg-blue-800 transition-colors text-sm sm:text-base"
        >
          Download Morise Card
        </button>
      </div>
      </div>

   </>
  );
});

export default MoriseCard;
