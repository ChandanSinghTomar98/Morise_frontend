import React, { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router-dom";
import images from "../constants";
import Container from "../components/Container";
import { getUserById } from "../services/UserProfileApiManager";

function Home() {
  const userId = localStorage.getItem("userId");
  console.log("userId", userId);

  const getUser = async (id, token) => {
    return getUserById({
      id: id,
      token: token,
    });
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (id && token) {
      getUser(id, token)
        .then((res) => {
          console.log("get user by id", res);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, []); 
  const Navigate = useNavigate();

  const handleNavigation = () => {
    Navigate("/document");
  };
  const handleProfileNavigate = () => {
    Navigate("/profile");
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <Container>
      <div className="container bg-[#E9EDC9] p-16 rounded-md shadow-lg  mx-auto sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center sm:w-2/3 lg:w-1/2">
          <div className="h-16 w-16 rounded-full bg-[#DBB000] flex items-center justify-center text-[#000000] font-bold text-lg">
            profile
          </div>
          <div className="ml-4">
            <p className="text-[#000000] font-bold text-xl">Hi, user</p>
            <p className="text-[#000000] text-sm lg:text-base">
              +91 99999-99999
            </p>
            <p className="text-[#000000] text-sm lg:text-base">
              email@email.com
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-0 sm:w-1/3 lg:w-1/2 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={handleNavigation}
            className="bg-[#DBB000] text-[#000000] font-medium px-6 py-3 rounded-md hover:bg-[#000000] hover:text-[#DBB000] transition"
          >
            Upload Document
          </button>
          <button
            onClick={handleProfileNavigate}
            className="bg-[#000000] text-[#DBB000] font-medium px-6 py-3 rounded-md hover:bg-[#DBB000] hover:text-[#000000] transition"
          >
            My Profile
          </button>
        </div>
      </div>

      {/* single line text */}
      <div className="my-7 block p-6 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <h5 className="mb-2 text-3xl font-bold text-center text-[#DBB000] hover:text-[#000000] transition-colors duration-300">
          "Learn while running awareness. Become a social worker and win
          existing awards."
        </h5>
      </div>

      {/* card section */}
      <div className=" mx-auto bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative">
          <img
            src={images.CardBg}
            alt="cardimg"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 bg-[#E9EDC9] flex flex-col justify-between">
          <h3 className="text-3xl text-center font-bold text-[#DBB000]">
            A chance to Become get your photo at our portal. Become a social
            worker
          </h3>

          {/* Buttons */}
          <div className="mt-6 flex flex-row justify-between items-center space-y-4 md:space-y-0">
            <button
              onClick={() =>
                Toast.fire({
                  title: "Refer link has been copied to clipboard",
                  position: "bottom-end",
                  color: "white",
                  background: "black",
                  icon: "success",
                  iconColor: "green",
                })
              }
              className="text-white rounded-lg bg-[#DBB000] hover:bg-[#000] hover:text-[#DBB000] py-2 px-4 rounded-lgfocus:outline-none"
            >
              Invite Now
            </button>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  "Check out this awesome article: Shift the overall look and feel by adding these wonderful touches to furniture in your home"
                );
                window.open(`https://wa.me/?text=${message}`, "_blank");
              }}
              className="text-white py-2 px-4 rounded-lg bg-[#DBB000] hover:bg-[#000] hover:text-[#DBB000] focus:outline-none"
            >
              Share
            </button>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className=""></div>
    </Container>
  );
}

export default Home;
