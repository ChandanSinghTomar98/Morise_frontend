import React, { useRef, useState, useEffect, useContext } from "react";
import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import MoriseCard from "../components/MoriseCard";
import { AuthContext } from "../context/AuthContext";
import { getUserById } from "../services/api/UserProfileApiManager";

const Account = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const { logout } = useContext(AuthContext);

  // State to store user data
  const [user, setUser] = useState({
    name: "",
    profileStatus: "",
    initial: "",
  });

  useEffect(() => {
    // Fetch user data when the component loads
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        try {
          const response = await getUserById({ id: userId, token });
          console.log("User Data:", response.data); // Debugging
          setUser({
            name: response?.data?.data?.name,
            profileStatus: response?.data?.data?.status,
            initial: response?.data?.data?.initial,
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
          // Redirect to login if unauthorized
          if (error.response && error.response.status === 401) {
            handleLogout();
          }
        }
      }
    };

    fetchUser();
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/signin");
  };

  const downloadCard = () => {
    navigate("/MoriseCard");
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "MoriseCard.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    <Container>
      <div className="mx-auto max-w-[65rem] bg-white p-4 md:p-6">
        <div className="grid gap-4">
          {/* Left Column */}
          <div className=" md:mb-0">
            {/* Header Section */}
            <div className="space-y-4 mb-8">
              <h1 className="text-2xl font-bold">
                Hi  ,{user?.initial} {user?.name}
              </h1>
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
              <span
                className={`font-medium ${
                  user?.profileStatus ? "text-green-500" : "text-red-600" 
                }`}
              >
                {user?.profileStatus ? "Active" : "Inactive"}
              </span>
            </div>

            {/* First Set of Navigation Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-primary hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
                GO PREMIUM / PREMIUM PROFILE
              </button>

              <Link
                to="/referals"
                className="block text-center w-full bg-primary hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors"
              >
                MY REFERALS
              </Link>

              <Link
                to="/rewards"
                className="text-center block w-full bg-primary hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors"
              >
                REWARDS
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* <div className="hidden md:block h-32"></div>{" "} */}
            {/* Spacer for desktop alignment */}
            <Link to="/queryForm" className="block text-center w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
              RAISE A TICKET
            </Link>
            {/* <button className="w-full bg-blue-700 hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors">
              OUR CERTIFICATIONS
            </button> */}

            <button
              onClick={downloadCard}
              className="w-full bg-primary hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors"
            >
              Download Morise Card
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-primary hover:bg-blue-800 text-yellow-300 font-bold py-4 px-4 rounded-lg transition-colors"
            >
              Logout
            </button>

            {/* Back Button - Only visible on desktop for right column */}
            <div className="hidden md:flex justify-center mt-8">
              <button
                onClick={handleGoBack}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
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

          {/* Back Button - Only visible on mobile at the bottom */}
          <div className="md:hidden flex justify-center mt-8">
            <button
              onClick={handleGoBack}
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
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
    </Container>
  );
};

export default Account;
