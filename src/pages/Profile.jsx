import React from 'react'
import { useState } from 'react';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import 'sweetalert2/src/sweetalert2.scss';
import Container from '../components/Container';
import Images from '../constants';
function Profile() {

    const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState('test');
  const [email, setEmail] = useState('abc@gmail.com');
  const [phone, setPhone] = useState('9888756546');
  const [password, setPassword] = useState('test@123');
  const [referenceId, setReferenceId] = useState('1234');
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = 'Full name is required.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email.';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phone || !phonePattern.test(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    if (!referenceId) {
      newErrors.referenceId = 'Reference ID is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: "bottom-end",
  //   showConfirmButton: false,
  //   timer: 2000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.onmouseenter = Swal.stopTimer;
  //     toast.onmouseleave = Swal.resumeTimer;
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      if (validateForm()) {
        setIsEditing(false)
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Profile updated successfully!',
        //   showConfirmButton: false,
        //   timer: 2000,
        // });
      }
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Container>
    <div className="h-screen bg-[#E9EDC9] flex items-center justify-center">
     <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-24">
          <img
            src={profileImage || Images.Avatar}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-[#DBB000]"
          />
        </div>
      </div>

      <form className="space-y-4 min-w-96" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#000000] font-semibold">Full Name</label>
          <input
            type="text"
            value={fullName}
            disabled={!isEditing}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full p-2 text-[#000000] border rounded-lg focus:outline-none
               ${isEditing ? 'focus:border-[#DBB000]' : 'bg-[#F1F1F1]'}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-[#000000] font-semibold">Email</label>
          <input
            type="email"
            value={email}
            disabled={!isEditing}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 text-[#000000] border rounded-lg focus:outline-none ${isEditing ? 'focus:border-[#DBB000]' : 'bg-[#F1F1F1]'}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-[#000000] font-semibold">Phone Number</label>
          <input
            type="tel"
            value={phone}
            disabled={!isEditing}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full p-2 text-[#000000] border rounded-lg focus:outline-none ${isEditing ? 'focus:border-[#DBB000]' : 'bg-[#F1F1F1]'}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-[#000000] font-semibold">Password</label>
          <input
            type="password"
            value={password}
            disabled={!isEditing}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 text-[#000000] border rounded-lg focus:outline-none ${isEditing ? 'focus:border-[#DBB000]' : 'bg-[#F1F1F1]'}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-[#000000] font-semibold">Reference ID</label>
          <input
            type="text"
            value={referenceId}
            disabled={!isEditing}
            onChange={(e) => setReferenceId(e.target.value)}
            className={`w-full p-2 text-[#000000] border rounded-lg focus:outline-none ${isEditing ? 'focus:border-[#DBB000]' : 'bg-[#F1F1F1]'}`}
          />
          {errors.referenceId && <p className="text-red-500 text-sm">{errors.referenceId}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white font-bold bg-[#DBB000] rounded-lg hover:bg-[#000000] hover:text-[#DBB000] transition duration-200"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </form>
    </div>
    
  </div>
  </Container>
  )
}

export default Profile