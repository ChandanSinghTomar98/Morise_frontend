import React, { useState } from "react";
import Images from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../services/api/AuthApiManager";
import { Camera } from "lucide-react";
import { Toast } from "../components/Toast";

function Signup() {
   const [initial, setInitial] = useState("");
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");
   const [dob, setDob] = useState("");
   const [occupation, setOccupation] = useState("");
   const [referenceCode, setReferenceCode] = useState("");
   const [image, setImage] = useState(null);
   console.log("image",image)
   const [preview, setPreview] = useState(null);
   const [errors, setErrors] = useState({});

   const navigate = useNavigate();

   // Validate inputs
   const validate = () => {
     const newErrors = {};

     // Validate initial
     if (!initial) {
       newErrors.initial = "Initial is required.";
     }

     // Validate fullName
     if (!fullName.trim()) {
       newErrors.fullName = "Full name is required.";
     } else if (/[\d]/.test(fullName)) {
       newErrors.fullName = "Name should not contain numbers.";
     } else if (fullName.trim().length < 2) {
       newErrors.fullName = "Name must be at least 2 characters long.";
     } else if (fullName.trim().length > 50) {
       newErrors.fullName = "Name cannot exceed 50 characters.";
     } else if (!/^[a-zA-Z\s'-]+$/.test(fullName)) {
       newErrors.fullName =
         "Name can only contain letters, spaces, hyphens, and apostrophes.";
     }

     // Validate email
     if (!email.trim()) {
       newErrors.email = "Email is required.";
     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
       newErrors.email = "Please enter a valid email address.";
     } else if (email.length > 254) {
       newErrors.email = "Email address is too long.";
     }

     // Validate phone
     if (phone) {
       const phoneRegex =
         /^(\+?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
       if (!phoneRegex.test(phone.trim())) {
         newErrors.phone = "Please enter a valid phone number.";
       }
     }

     // Validate date of birth
     if (dob) {
       const dobDate = new Date(dob);
       const today = new Date();
       const minDate = new Date();
       minDate.setFullYear(today.getFullYear() - 120);
       const maxDate = new Date();
       maxDate.setFullYear(today.getFullYear() - 18);

       if (isNaN(dobDate.getTime())) {
         newErrors.dob = "Please enter a valid date.";
       } else if (dobDate > today) {
         newErrors.dob = "Date of birth cannot be in the future.";
       } else if (dobDate < minDate) {
         newErrors.dob = "Please enter a valid date of birth.";
       } else if (dobDate > maxDate) {
         newErrors.dob = "You must be at least 18 years old to register.";
       }
     }

     // Validate password
     if (!password.trim()) {
       newErrors.password = "Password is required.";
     } else {
       const passwordChecks = {
         length: password.length >= 8,
         uppercase: /[A-Z]/.test(password),
         lowercase: /[a-z]/.test(password),
         number: /\d/.test(password),
         special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
       };

       if (!passwordChecks.length) {
         newErrors.password = "Password must be at least 8 characters long.";
       } else if (password.length > 128) {
         newErrors.password = "Password cannot exceed 128 characters.";
       } else if (
         !(
           passwordChecks.uppercase &&
           passwordChecks.lowercase &&
           passwordChecks.number &&
           passwordChecks.special
         )
       ) {
         newErrors.password =
           "Password must contain uppercase, lowercase, number, and special character.";
       }
     }

     // Validate image
     if (image) {
       const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
       const maxSize = 5 * 1024 * 1024; // 5MB

       if (!allowedTypes.includes(image.type)) {
         newErrors.image =
           "Please upload a valid image file (JPEG, PNG, or GIF).";
       } else if (image.size > maxSize) {
         newErrors.image = "Image size should not exceed 5MB.";
       }
     }

     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };

   // Create user function
   const createUserFunction = async (data) => {
    console.log("data",data)
     try {
       const response = await createUser(data);
       console.log("response", response);
       if (response.status === 200) {
         Toast.fire({
           icon: "success",
           title: "Account created successfully. Please proceed to Login",
         });
         setTimeout(() => {
           navigate("/signin");
         }, 1000);
       }
     } catch (error) {
      console.log("error",error)
       if (
         error.response.status === 400 &&
         error.response.data.message === "User already Exists"
       ) {
         Toast.fire({
           icon: "error",
           title: "User already exists. Please try with another email.",
         });
       }
       console.error(error);
     }
   };

   // Handle form submit
  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    if (validate()) {
  //      createUserFunction({
  //        initial,
  //        fullName,
  //        email,
  //        password,
  //        phone,
  //        dob,
  //        occupation,
  //        referenceCode,
  //        image,
  //      });
  //    }
  //  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (validate()) {
      // Create a new FormData object
      const formData = new FormData();

      // Append all the form fields to FormData
      formData.append("initial", initial);
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("dob", dob);
      formData.append("occupation", occupation);
      formData.append("referenceCode", referenceCode);

      // Append the image to FormData if there is an image
      if (image) {
        formData.append("image", image);
      }

      // Pass formData to the createUserFunction
      createUserFunction(formData);
    }
  };

   // Handle input change for text fields
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     switch (name) {
       case "initial":
         setInitial(value);
         break;
       case "fullName":
         setFullName(value);
         break;
       case "email":
         setEmail(value);
         break;
       case "phone":
         setPhone(value);
         break;
       case "dob":
         setDob(value);
         break;
       case "occupation":
         setOccupation(value);
         break;
       case "referenceCode":
         setReferenceCode(value);
         break;
       case "password":
         setPassword(value);
         break;
       default:
         break;
     }
     setErrors((prevErrors) => ({
       ...prevErrors,
       [name]: "",
     }));
   };

   // Handle image change
   const handleImageChange = (e) => {
     const { files } = e.target;
     if (files && files.length > 0) {
       const selectedImage = files[0];
       setImage(selectedImage);
       setPreview(URL.createObjectURL(selectedImage));
     }
   };
  return (
    // <div className="min-h-screen bg-cover bg-center">
    //   <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen py-8">
    //     <div className="w-full lg:w-full max-w-2xl">
    //       <div>
    //         <img
    //           src={Images.MoriseLogo}
    //           alt="IJH International"
    //           className="w-80 h-auto mx-auto rounded-xl mb-4"
    //         />
    //       </div>

    //       <div className="bg-white rounded-xl p-4 md:p-8 backdrop-blur-md bg-opacity-35 mx-3">
    //         <h2 className="text-2xl md:text-3xl text-center font-bold text-primary mb-4">
    //           Create new account
    //         </h2>
    //         <p className="text-base md:text-lg text-center text-black mb-2">
    //           Already Registered? &nbsp;
    //           <Link
    //             className="text-red-500 font-semibold hover:text-red-700"
    //             to={"/Signin"}
    //           >
    //             Login Here
    //           </Link>
    //         </p>

    //         <form className="max-w-6xl mx-auto p-4">
    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             {/* Left Column - Personal Details */}
    //             <div className="space-y-4">
    //               <h2 className="text-xl font-bold mb-4 text-primary text-center">
    //                 Personal Details
    //               </h2>

    //               <div className="flex space-x-4">
    //                 <div className="w-1/4">
    //                   <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
    //                     Initials
    //                   </label>
    //                   <select
    //                     name="initial"
    //                     value={formData.initial}
    //                     onChange={handleInputChange}
    //                     className="w-full py-5 border border-gray-300 bg-[#ececec] text-[#8f8e8e] rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-sm"
    //                   >
    //                     <option value="" className="text-[#8f8e8e]">
    //                       Select Initial
    //                     </option>
    //                     <option value="Mr" className="text-[#8f8e8e]">
    //                       Mr
    //                     </option>
    //                     <option value="Ms" className="text-[#8f8e8e]">
    //                       Ms
    //                     </option>
    //                     <option value="Mrs" className="text-[#8f8e8e]">
    //                       Mrs
    //                     </option>
    //                   </select>
    //                 </div>
    //                 <div className="w-3/4">
    //                   <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
    //                     Full Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="fullName"
    //                     value={formData.fullName}
    //                     onChange={handleInputChange}
    //                     placeholder="Enter Your Name"
    //                     className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //                   />
    //                   {errors.fullName && (
    //                     <p className="text-red-500 text-sm">
    //                       {errors.fullName}
    //                     </p>
    //                   )}
    //                 </div>
    //               </div>

    //               <div>
    //                 <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
    //                   Email
    //                 </label>
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   value={formData.email}
    //                   onChange={handleInputChange}
    //                   placeholder="Enter Your Email"
    //                   className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //                 />
    //                 {errors.email && (
    //                   <p className="text-red-500 text-sm">{errors.email}</p>
    //                 )}
    //               </div>

    //               <div>
    //                 <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
    //                   Phone Number
    //                 </label>
    //                 <input
    //                   type="tel"
    //                   name="phone"
    //                   value={formData.phone}
    //                   onChange={handleInputChange}
    //                   placeholder="Enter Your Phone Number"
    //                   className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //                 />
    //                 {errors.phone && (
    //                   <p className="text-red-500 text-sm">{errors.phone}</p>
    //                 )}
    //               </div>
    //               <div>
    //                 <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
    //                   Occupation
    //                 </label>
    //                 <input
    //                   type="text"
    //                   name="occupation"
    //                   value={formData.occupation}
    //                   onChange={handleInputChange}
    //                   placeholder="Enter Your Occupation"
    //                   className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //                 />
    //               </div>

    //               <div>
    //                 <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
    //                   Date of Birth
    //                 </label>
    //                 <input
    //                   type="date"
    //                   name="dob"
    //                   value={formData.dob}
    //                   onChange={handleInputChange}
    //                   className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //                 />
    //                 {errors.dob && (
    //                   <p className="text-red-500 text-sm">{errors.dob}</p>
    //                 )}
    //               </div>
    //             </div>

    //             {/* Right Column - Account Details & Image */}
    //             <div className="space-y-4">
    //               <h2 className="text-xl font-bold text-primary text-center mb-4">
    //                 Account Details
    //               </h2>

    //               <div>
    //                 <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
    //                   Password
    //                 </label>
    //                 <input
    //                   type="password"
    //                   name="password"
    //                   value={formData.password}
    //                   onChange={handleInputChange}
    //                   placeholder="********"
    //                   className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //                 />
    //                 {errors.password && (
    //                   <p className="text-red-500 text-sm">{errors.password}</p>
    //                 )}
    //               </div>

    //               <div>
    //                 <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
    //                   Reference Code
    //                 </label>
    //                 <input
    //                   type="text"
    //                   name="referenceCode"
    //                   value={formData.referenceCode}
    //                   onChange={handleInputChange}
    //                   placeholder="Fill the Code"
    //                   className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //                 />
    //                 {errors.referenceCode && (
    //                   <p className="text-red-500 text-sm">
    //                     {errors.referenceCode}
    //                   </p>
    //                 )}
    //               </div>

    //               <div>
    //                 <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
    //                   Profile Picture
    //                 </label>
    //                 <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-xl">
    //                   {preview ? (
    //                     <div className="relative w-32 h-32 mb-4">
    //                       <img
    //                         src={preview}
    //                         alt="Preview"
    //                         className="w-full h-full object-cover rounded-full"
    //                       />
    //                     </div>
    //                   ) : (
    //                     <div className="w-32 h-32 mb-4 bg-gray-200 rounded-full flex justify-center items-center">
    //                       <Camera className="text-gray-500 text-3xl" />
    //                     </div>
    //                   )}
    //                   <input
    //                     type="file"
    //                     accept="image/*"
    //                     name="image"
    //                     onChange={handleImageChange}
    //                     className="hidden"
    //                     id="profileImage"
    //                   />
    //                   <label
    //                     htmlFor="profileImage"
    //                     className="cursor-pointer text-sm text-primary hover:underline"
    //                   >
    //                     Upload a profile picture
    //                   </label>
    //                   {errors.image && (
    //                     <p className="text-red-500 text-sm">{errors.image}</p>
    //                   )}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="flex justify-center mt-6">
    //             <button
    //               type="submit"
    //               onClick={handleSubmit}
    //               className="w-full bg-primary py-4 text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
    //             >
    //               Sign Up
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-cover bg-center">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen py-8">
        <div className="w-full lg:w-full max-w-2xl">
          <div>
            <img
              src={Images.MoriseLogo}
              alt="IJH International"
              className="w-80 h-auto mx-auto rounded-xl mb-4"
            />
          </div>

          <div className="bg-white rounded-xl p-4 md:p-8 backdrop-blur-md bg-opacity-35 mx-3">
            <h2 className="text-2xl md:text-3xl text-center font-bold text-primary mb-4">
              Create new account
            </h2>
            <p className="text-base md:text-lg text-center text-black mb-2">
              Already Registered? &nbsp;
              <Link
                className="text-red-500 font-semibold hover:text-red-700"
                to={"/Signin"}
              >
                Login Here
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Personal Details */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold mb-4 text-primary text-center">
                    Personal Details
                  </h2>

                  <div className="flex space-x-4">
                    <div className="w-1/4">
                      <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
                        Initials
                      </label>
                      <select
                        name="initial"
                        value={initial}
                        onChange={handleInputChange}
                        className="w-full py-5 border border-gray-300 bg-[#ececec] text-[#8f8e8e] rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-sm"
                      >
                        <option value="" className="text-[#8f8e8e]">
                          Select Initial
                        </option>
                        <option value="Mr" className="text-[#8f8e8e]">
                          Mr
                        </option>
                        <option value="Ms" className="text-[#8f8e8e]">
                          Ms
                        </option>
                        <option value="Mrs" className="text-[#8f8e8e]">
                          Mrs
                        </option>
                      </select>
                    </div>
                    <div className="w-3/4">
                      <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={handleInputChange}
                        placeholder="Enter Your Name"
                        className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email"
                      className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      placeholder="Enter Your Phone Number"
                      className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
                      Occupation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={occupation}
                      onChange={handleInputChange}
                      placeholder="Enter Your Occupation"
                      className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8f8e8e] text-center text-base md:text-lg mb-2 font-medium">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={dob}
                      onChange={handleInputChange}
                      className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                    />
                    {errors.dob && (
                      <p className="text-red-500 text-sm">{errors.dob}</p>
                    )}
                  </div>
                </div>

                {/* Right Column - Account Details & Image */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-primary text-center mb-4">
                    Account Details
                  </h2>

                  <div>
                    <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      placeholder="********"
                      className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
                      Reference Code
                    </label>
                    <input
                      type="text"
                      name="referenceCode"
                      value={referenceCode}
                      onChange={handleInputChange}
                      placeholder="Enter your reference code"
                      className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
                      Profile Image
                    </label>
                    <div className="flex justify-center items-center">
                      <label htmlFor="imageUpload">
                        <div className="w-40 h-40 rounded-full flex justify-center items-center bg-[#ececec] cursor-pointer">
                          {preview ? (
                            <img
                              src={preview}
                              alt="Profile"
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <Camera className="text-secondary" />
                          )}
                        </div>
                      </label>
                      <input
                        type="file"
                        id="imageUpload"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </div>
                    {errors.image && (
                      <p className="text-red-500 text-sm">{errors.image}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full space-y-4 flex justify-center mt-6">
                <button
                onClick={handleSubmit}
                  className="bg-primary text-white py-3 px-12 rounded-lg font-semibold w-full"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
