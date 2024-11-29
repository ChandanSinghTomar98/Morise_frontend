import React, { useEffect, useState, useContext } from "react";
import { Star } from "lucide-react";
import { TestimonialContext } from "../context/TestimonialContext";
const Testimonials = () => {
  const { testimonials } = useContext(TestimonialContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials?.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className=" relative">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video bg-gray-900">
                  <video
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                  >
                    <source
                      src={`http://localhost:3001/video/${testimonial?.video}`}
                      type="video/mp4"
                    />
                    {console.log(
                      `http://localhost:3001/video/${testimonial?.video}`
                    )}
                    Your browser does not support the video tag.
                    {console.log("hgfh", testimonial?.video)}
                  </video>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => {
                      console.log(i);
                      return (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      );
                    })}
                  </div>

                  <blockquote className="text-xl text-gray-600 italic mb-6">
                    "{testimonial?.description}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {testimonial?.name}
                    </h3>
                    <p className="text-gray-600">{testimonial?.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {testimonials?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
