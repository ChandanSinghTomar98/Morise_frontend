import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import InfoModal from "./InfoModel";
const ProtectedRoute = ({ component: Component, auth,path }) => {

  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(true)
  const handleClose=()=>{
     setIsOpen(false)
       setTimeout(() => {
         setIsOpen(true); // Reset the state to true after a short delay
       }, 1000);
     navigate("/");
  }

  const isAuthenticated = localStorage.getItem("token");
       if (auth && !isAuthenticated && path === "/account") {
         return (
           <>
             <InfoModal
               isOpen={isOpen}
               onClose={handleClose}
               message="You need to log in or sign up to visit this page."
               title="Access Restricted"
             />
           </>
         );
       }

       if (auth && !isAuthenticated) {
         // Clear authentication-related data
         localStorage.setItem("authlocal", false);
         localStorage.removeItem("token");
         localStorage.removeItem("userId");
         console.log("component", auth);
         // Redirect to login
         return <Navigate to="/signin" />;
       }

  // Render the protected component
  return <Component />;
};

export default ProtectedRoute;
