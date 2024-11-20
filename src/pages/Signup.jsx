import React from 'react'
import { useState } from 'react';
import Images from '../constants';
import { Link } from 'react-router-dom';
function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        referenceCode: '',
      });
    
      const [errors, setErrors] = useState({});
    
      // Validate inputs
      const validate = () => {
        const newErrors = {};
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required.';
        } else if (/[\d]/.test(formData.name)) {
          newErrors.name = 'Name should not contain numbers.';
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email format is invalid.';
        }
    
        if (!formData.password.trim()) {
          newErrors.password = 'Password is required.';
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters.';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
          newErrors.password = 'Password must contain uppercase, lowercase letters, and a number.';
        }
         
    
        if (!formData.referenceCode.trim()) {
          newErrors.referenceCode = 'Reference code is required.';
        } else if (!/^[A-Z0-9]{6}$/i.test(formData.referenceCode)) {
          newErrors.referenceCode = 'Reference code must be 6 alphanumeric characters.';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      // Handle form submit
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          alert('Form submitted successfully!');
          // Add further submission logic here
        }
      };
    
      // Handle input change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error for the specific field
      };
    
  return (
    <div
      className="min-h- bg-cover bg-center bg-gray-600"
      style={{
        backgroundImage: `url(${Images.BackgroundImage})`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className=" max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen py-8">
        {/* Welcome Container */}
        {/* <div className="w-full lg:w-1/2 max-w-2xl "> */}
          {/* <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 backdrop-blur-md bg-opacity-70"> */}
            {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 ">
              Welcome to Ijh International
            </h1> */}
            {/* <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed">
              We are a community, together helping thousands of people out there who are struggling.IJH is a comprehensive inbound and outbound tour operator in Dhaka, Bangladesh. Also, IJH Recruitment is a boutique recruitment firm that specializes in matching the right talent to the right job opportunities across the world. IJH Recruitment is registered as a Human Resources Firm. We work on exclusive assignments as we are a preferred Recruitment Business Partner for our clients.
            </p>
             */}
          {/* </div> */}
        {/* </div> */}

        {/* Sign Up Container */}
        
        <div className="w-full lg:w-full max-w-2xl ">
          <div className=''>
          {/* <h3 className=" text-3xl text-center md:text-3xl w-full lg:text-4xl lg:text-center font-bold text-black-800 mb-6 ">
              
            </h3> */}
            <img
      src={Images.MoriseLogo}
      alt="IJH International"
      className="w-96 h-36 rounded-xl mb-4"
    />
          </div>
        
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 backdrop-blur-md bg-opacity-35 mx-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Get Started
            </h2>
            <p className="text-base md:text-lg text-black mb-8">
              Already have an account?{' '}
              <a href="#" className="text-red-500 font-semibold hover:text-red-700" >
              <Link to={'/Signin'}   >Sign in</Link>
               
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block text-black text-base md:text-lg mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-black text-base md:text-lg mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-black text-base md:text-lg mb-2 font-medium">
                  Reference Code
                </label>
                <input
                  type="text"
                  name="referenceCode"
                  value={formData.referenceCode}
                  onChange={handleInputChange}
                  placeholder="Fill the Code"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-base md:text-lg"
                />
                {errors.referenceCode && <p className="text-red-500 text-sm">{errors.referenceCode}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-colors text-base md:text-lg"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-12 pb-8">
              <div className="flex items-center">
                <hr className="flex-grow border-t border-secondary" />
                <p className="text-center text-black text-base font-bold md:text-lg mx-4">
                  Or sign up with
                </p>
                <hr className="flex-grow border-t border-secondary" />
              
                </div>
                </div>
              <div className="grid grid-cols-3 gap-6">
                {/* Google Sign Up */}
                <a
               href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dchrome-profile-chooser%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S822709388%3A1731911686884120&ddm=1"
               target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 border-2 bg-gray-200 rounded-xl hover:bg-white transition-colors group"
                >
  <svg className="w-8 h-8" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
</a>

                {/* Apple Sign Up */}
                <a
                  href="#"
                  onClick={() => window.open('https://appleid.apple.com/sign-up')}
                  className="flex items-center justify-center p-4 border-2 bg-gray-200 rounded-xl hover:bg-white transition-colors group"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M17.05 20.28c-.98.95-2.05.88-3.08.38-1.07-.52-2.04-.53-3.16 0-1.39.68-2.12.53-3.01-.38C3.83 16.23 3.12 11.77 6.27 9.14c1.43-1.2 3.11-1.04 4.27.06.86.82 1.97.84 2.9.02 1.13-.99 2.81-1.23 4.25-.13 1.51 1.16 2.11 2.8 1.92 4.89-1.78.14-2.83 1.51-2.56 3.37.24 1.57 1.34 2.54 2.83 2.54-.75 1.23-1.51 2.16-2.83 2.39zM12.9 3.72c.14 2.06-1.89 3.72-3.92 3.51-.17-1.87 1.92-3.57 3.92-3.51z"
                    />
                  </svg>
                </a>

                {/* Facebook Sign Up */}
                <a
                  href="#"
                  onClick={() => window.open('https://www.facebook.com/signup')}
                  className="flex items-center justify-center p-4 border-2 bg-gray-200 rounded-xl hover:bg-white transition-colors group"
                >
                  <svg className="w-8 h-8" viewBox="0 0 48 48">
                    <path
                      fill="#1877F2"
                      d="M48,24C48,10.745,37.255,0,24,0S0,10.745,0,24c0,11.979,8.776,21.908,20.25,23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014,3.583-9.337,9.065-9.337c2.625,0,5.372,0.469,5.372,0.469v5.906h-3.026c-2.981,0-3.911,1.85-3.911,3.75V24h6.656l-1.064,6.938H27.75v16.77C39.224,45.908,48,35.979,48,24"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M33.342,30.938L34.406,24H27.75v-4.5c0-1.9,0.93-3.75,3.911-3.75h3.026V9.844c0,0-2.747-0.469-5.372-0.469c-5.482,0-9.065,3.323-9.065,9.337V24h-6.094v6.938h6.094v16.77c1.221,0.192,2.475,0.292,3.75,0.292s2.529-0.1,3.75-0.292v-16.77h5.592z"
                    />
                  </svg>
                </a>
              </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Signup