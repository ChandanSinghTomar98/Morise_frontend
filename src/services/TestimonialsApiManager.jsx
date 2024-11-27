import axios from "axios";
import { getBaseURL } from "./BaseUrl";

const TestimonialsApiManager = axios.create({
    baseURL: getBaseURL(),
    headers: {
      "Content-type": "multipart/form-data",
    },
  });


  export const getTestimonials = (data) => {
    return TestimonialsApiManager.get("/get-all-testimonials", data, {
        headers: {
            authorization: `Bearer ${data.token}`,
            userid: data.id,
          },
    });
  };

 
  