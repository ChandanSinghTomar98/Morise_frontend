import React, { forwardRef, useRef } from "react";
import Container from "./Container";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "./Button";
const MoriseCard = forwardRef(({ user, isactive }) => {
  const getBase64ImageFromUrl = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const downloadIdentityCard = async () => {
    // Create a PDF with slightly larger dimensions (ID card size)
    const doc = new jsPDF("landscape", "in", [2.5, 3.85]); // Landscape, slightly larger ID card dimensions in inches

    // Add a circular border for the profile picture
    // Black border
    // Draw a circle inside the page margins

    // Add a logo or profile picture
    const logoURL =
      "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Example image URL
    try {
      const base64Image = await getBase64ImageFromUrl(logoURL);
      doc.addImage(base64Image, "JPEG", 0.2, 0.9, 1.4, 0.8); // Image (x, y, width, height)
    } catch (error) {
      console.error("Error loading image: ", error);
    }

    // Add user details
    const userDetails = {
      fullName: "John Doe",
      occupation: "Software Engineer",
      bloodGroup: "O+",
      email: "johndoe@example.com",
    };

    // Set fonts for text
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Identity Card", 1.5, 0.5); // Title

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Name: ${userDetails.fullName}`, 1.8, 1.0);
    doc.text(`Occupation: ${userDetails.occupation}`, 1.8, 1.2);
    doc.text(`Blood Group: ${userDetails.bloodGroup}`, 1.8, 1.4);
    doc.text(`Email: ${userDetails.email}`, 1.8, 1.6);

    // Add a footer or custom message
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("Powered by Morise", 1.5, 2.4);

    // Save the PDF as an ID card
    doc.save("IdentityCard.pdf");
  };

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
      </div>

      {isactive ? (
        <Button hidden={true} handlebutton={downloadIdentityCard} />
      ) : (
        <Button hidden={false} handlebutton={downloadIdentityCard} />
      )}
    </>
  );
});

export default MoriseCard;
