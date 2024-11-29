import React, { createContext, useEffect, useState } from "react";
import { getTestimonials } from "../services/api/TestimonialsApiManager";

export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const response = await getTestimonials();
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <TestimonialContext.Provider value={{ testimonials, isLoading }}>
      {children}
    </TestimonialContext.Provider>
  );
};
