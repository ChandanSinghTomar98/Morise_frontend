import React, { createContext, useEffect, useState } from "react";
import { getTestimonials } from "../services/TestimonialsApiManager";

export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTestimonials = async () => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    console.log("id", id, "token", token);
    if (id && token) {
      try {
        const response = await getTestimonials({
          id: id,
          token: token,
        });
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <TestimonialContext.Provider
      value={{ testimonials, isLoading }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};
