import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../constants";
import { loginUser } from "../services/AuthApiManager";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    setLoginError("");
  };
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await loginUser(formData);
      if (response.data.status === 200) {
        console.log("login response", response.data);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("userId", JSON.stringify(response.data.data.user));
        // navigate("/aboutus");
      } else {
        console.log("login error", response.data.message);
      }
      console.log("login response", response);
    } catch (error) {
      setLoginError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-gray-600"
      style={{
        backgroundImage: `url(${Images.BackgroundImage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen py-8">
        <div className="w-full lg:w-full max-w-2xl">
          <div className="p-10">
            <img
              src={Images.MoriseLogo}
              alt="IJH International"
              className="w-full h-auto rounded-xl mb-4"
            />
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 backdrop-blur-md bg-opacity-35 mx-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Sign In
            </h2>
            <p className="text-base md:text-lg text-black mb-8">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-500 font-semibold hover:text-red-700"
              >
                Sign Up
              </Link>
            </p>

            {loginError && (
              <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
                {loginError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-black text-base md:text-lg mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your Email"
                  className={`w-full p-4 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-black text-base md:text-lg mb-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="********"
                  className={`w-full p-4 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg`}
                />
                {errors.password && (
                  <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-secondary text-white py-4 rounded-xl font-semibold 
                  hover:bg-secondary transition-colors text-base md:text-lg
                  ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
                `}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link
                to="/forgot-password"
                className="text-secondary hover:text-secondary-dark"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
