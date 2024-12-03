import React, { useState } from "react";
import Images from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../services/api/AuthApiManager";
import { Camera } from "lucide-react";
import { Toast } from "../components/Toast";
function Signup() {
  const [formData, setFormData] = useState({
    initial: "",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    occupation: "",
    referenceCode: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.initial) {
      newErrors.initial = "Initial is required.";
    }
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (/[\d]/.test(formData.name)) {
      newErrors.name = "Name should not contain numbers.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name cannot exceed 50 characters.";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name =
        "Name can only contain letters, spaces, hyphens and apostrophes.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (formData.email.length > 254) {
      newErrors.email = "Email address is too long.";
    }

    // Phone validation
    if (formData.phone) {
      // Allow formats: +1234567890, 123-456-7890, (123) 456-7890, etc.
      const phoneRegex =
        /^(\+?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    // Date of Birth validation
    if (formData.dob) {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 120); // Maximum age 120 years
      const maxDate = new Date();
      maxDate.setFullYear(today.getFullYear() - 18); // Minimum age 18 years

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

    // Password validation (enhanced)
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else {
      const passwordChecks = {
        length: formData.password.length >= 8,
        uppercase: /[A-Z]/.test(formData.password),
        lowercase: /[a-z]/.test(formData.password),
        number: /\d/.test(formData.password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
      };

      if (!passwordChecks.length) {
        newErrors.password = "Password must be at least 8 characters long.";
      } else if (formData.password.length > 128) {
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

    // Image validation
    if (formData.image) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(formData.image.type)) {
        newErrors.image =
          "Please upload a valid image file (JPEG, PNG, or GIF).";
      } else if (formData.image.size > maxSize) {
        newErrors.image = "Image size should not exceed 5MB.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createUserFunction = async (data) => {
    const response = await createUser(data);
    if (response.status === 200)
      Toast.fire({
        icon: "success",
        title: "Account created successfully. Please procced to Login",
      });
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log(formData);
      // createUser(formData)
      //   .then((response) => {
      //     if (response.status === 200)
      //       Toast.fire({
      //         icon: "success",
      //         title: "Account created successfully. Please procced to Login",
      //       });
      //   })
      //   .then(() => {
      //     navigate("/signin");
      //   })
      //   .catch((error) => {
      //     if (
      //       error.response.status === 400 &&
      //       error.response.data.message === "User already Exist"
      //     ) {
      //       Toast.fire({
      //         icon: "error",
      //         title: "User already exists. Please try with another email.",
      //       });
      //     }
      //     console.log(error);
      //   });
      createUserFunction(formData);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="min-h- bg-cover bg-cente">
      <div className=" max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen py-8">
        <div className="w-full lg:w-full max-w-2xl ">
          <div className="">
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
                className="text-red-500  font-semibold hover:text-red-700"
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
                        value={formData.initial}
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
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Your Name"
                        className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
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
                      value={formData.email}
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
                      value={formData.phone}
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
                      value={formData.occupation}
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
                      value={formData.dob}
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
                    <label className="block text-[#8f8e8e]  text-base md:text-lg text-center mb-2 font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
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
                      value={formData.referenceCode}
                      onChange={handleInputChange}
                      placeholder="Fill the Code"
                      className="w-full p-4 border bg-[#ececec] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                    />
                    {errors.referenceCode && (
                      <p className="text-red-500 text-sm">
                        {errors.referenceCode}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[#8f8e8e] text-base text-center md:text-lg mb-2 font-medium">
                      Profile Picture
                    </label>
                    <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-xl">
                      {preview ? (
                        <div className="relative w-32 h-32 mb-4">
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ) : (
                        <Camera className="w-12 h-12 text-gray-400 mb-2" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Choose Image
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-secondary text-primary py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-colors text-base md:text-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
