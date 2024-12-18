import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../constants";
import { loginUser } from "../services/AuthApiManager";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
function Login() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
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
        Cookies.set("authToken", response.data.data.token, { expires: 1 });
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("userId", response.data.data.userId);
        login(response.data.data.token);
        navigate("/");
      } else {
        console.log("login error", response.data.message);
      }
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
      className=" py-10 bg-cover bg-center "
      // style={{
      //   // backgroundImage: `url(${Images.BackgroundImage})`,
      //   backgroundBlendMode: "overlay",
      // }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="w-full lg:w-full max-w-2xl">
          <div className="">
            <img
              src={Images.MoriseLogo}
              alt="IJH International"
              className="w-80 mx-auto h-auto rounded-xl mb-4"
            />
          </div>

          <div
            className="bg-white rounded-xl p-4 md:p-8
           backdrop-blur-md bg-opacity-35 mx-3"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
              Login Now
            </h2>
            <p className="text-base md:text-lg text-black text-center  mb-8">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-500 font-semibold  hover:text-red-700"
              >
                Register Now
              </Link>
            </p>

            {loginError && (
              <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
                {loginError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#8f8e8e] uppercase text-base text-center md:text-xl mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="make@dreams.com"
                  className={`w-full p-4 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary bg-[#ececec] text-base md:text-lg placeholder:text-center`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="********"
                  className={`w-full p-4 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 bg-[#ececec] focus:ring-secondary text-base placeholder:text-center md:text-lg`}
                />
                {errors.password && (
                  <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
                )}
                <label className="block text-[#8f8e8e] uppercase text-center text-base md:text-xl mt-1 mb-2 font-medium">
                  Password
                </label>
                {/* login with otp */}
                <Link
                  to="/login-otp"
                  className="text-secondary hover:text-secondary-dark text-center  block text-base md:text-lg mt-3"
                >
                  Login with OTP
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-secondary text-primary py-4 rounded-xl font-semibold 
                  hover:bg-secondary transition-colors text-base md:text-lg
                  ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
                `}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* <div className="mt-4 text-center">
              <Link
                to="/forgot-password"
                className="text-secondary hover:text-secondary-dark"
              >
                Forgot Password?
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
