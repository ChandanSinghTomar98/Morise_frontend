import React, { useState, useEffect } from "react";
import Images from "../constants";
const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: Images.carousel1,
      title: "Slide 1",
    },

    {
      id: 2,
      image: Images.carousel2,
      title: "Slide 2",
    },
    {
      id: 3,
      image: Images.carousel3,
      title: "Slide 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container  my-5 mx-auto relative w-full h-[60vh] overflow-hidden">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full h-[60vh] flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 text-center text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              <h2 className="text-xl font-bold">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        ▶
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index
                ? "bg-[#DBB000]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
