import React from 'react'
import { FaClock, FaDollarSign, FaSyncAlt } from 'react-icons/fa'; // Import icons from react-icons
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import images from '../constants'
import Container from '../components/Container';
function About() {
  return (
  <Container>
        <div
    className="min-h-screen bg-cover bg-center relative"
    style={{
      backgroundImage: `url(${images.BGimage})`,  
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay outside the container but over the background */}
    <div className="absolute inset-0 bg-secondary opacity-50"></div>

    {/* <Container className="min-h-screen p-8 relative"> */}
      {/* Overlay for better readability */}
      <div className="min-h-screen bg-opacity-60 p-8">
        {/* Centered About Us Title */}
        <div className="text-center mb-8 items-start">
          <h2 className="text-5xl font-bold text-black">About Us</h2>
          <hr className="inline-block w-36 mt-2 border-0 h-1 bg-secondary" />
          
        </div>

        {/* Container for About Us Section */}
        <div className="container mx-auto px-4 mb-8">
          {/* About Us Section with Background Image and Right Side Image */}
          <div
            className="relative flex flex-col md:flex-row items-center p-6 bg-cover bg-center text-black rounded-lg shadow-lg"
            style={{ backgroundImage: 'url(/about.avif)' }}
          >
            {/* Overlay for Better Readability */}
            <div className="absolute inset-0 bg-secondary opacity-60 rounded-lg"></div>

            {/* Text Content within "About Us" */}
            <div className="relative z-10 md:w-2/3 p-6">
              <h3 className="text-3xl font-semibold mb-4">Who We Are</h3>
              <p className="text-lg mb-4">
                IJH is a comprehensive inbound and outbound tour operator in Dhaka, Bangladesh. Also, IJH Recruitment is a boutique recruitment firm that specializes in matching the right talent to the right job opportunities across the world. IJH Recruitment is registered as a Human Resources Firm. We work on exclusive assignments as we are a preferred Recruitment Business Partner for our clients.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="relative z-10 md:w-1/3 flex justify-center items-center p-6">
              <img src={images.MoriseLogo} alt="IJH Logo" className="h-48 rounded-lg shadow-md   bg-black" />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="text-center p-8 my-8">
            <h2 className="text-5xl font-bold text-black">Why Choose Us</h2>
            <hr className="inline-block  w-52 mt-2 border-0 h-1 bg-secondary"></hr>
          </div>
          <div className="mb-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-lg shadow-lg"
            >
              <SwiperSlide className="p-14 bg-secondary text-center rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                <p className="text-lg">"Having the right people for the right job" — we go above and beyond to earn customer satisfaction.</p>
              </SwiperSlide>

              <SwiperSlide className="p-10 bg-secondary text-center rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                <p className="text-lg">
                  Our vision is to provide exceptional travel experience via exciting trips. To be a preferred employer and offer an inspirational working environment in which our employees can thrive.
                </p>
              </SwiperSlide>

              <SwiperSlide className="p-14 bg-secondary text-center rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                <p className="text-lg">Adaptable, committed, straightforward, connections.</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Global Network Section */}
        <div
          className="text-center mb-8 relative "
          style={{
            backgroundImage: 'url(/global-network-bg.jpg)', // Add the path to your global network background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '60px ', // Adjust padding as necessary
          }}
        >
          <h2 className="text-5xl font-bold text-black">Global Network</h2>
          <h3 className="p-3 text-xl font-semibold mb-2 text-gray-900">Few reasons to choose IJH International</h3>
          <hr className="inline-block w-60 mt-2 border-0 h-1 bg-secondary"></hr>
        </div>

        {/* Service Cards Section with Background Image */}
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SPEED Card */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaClock className="text-secondary text-4xl mb-4" />
              <h6 className="text-2xl font-bold text-gray-800">SPEED</h6>
              <p className="text-gray-600 text-center mt-2">
                Your time is valuable. We ensure a response within 24 hours.
              </p>
            </div>

            {/* COST EFFECTIVENESS Card */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaDollarSign className="text-secondary text-4xl mb-4" />
              <h6 className="text-2xl  font-bold text-gray-800 ">COST EFFECTIVENESS</h6>
              <p className="text-gray-600 text-center mt-2">
                We offer the best solutions on costing without compromising quality.
              </p>
            </div>

            {/* FRESH Card */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaSyncAlt className="text-secondary text-4xl mb-4" />
              <h6 className="text-2xl font-bold text-gray-800">FRESH</h6>
              <p className="text-gray-600 text-center mt-2">
                Our young, dynamic team brings fresh perspectives to each project.
              </p>
            </div>
          </div>         
      </div>
    {/* </Container> */}
  </div>
  </Container>

  )
}

export default About