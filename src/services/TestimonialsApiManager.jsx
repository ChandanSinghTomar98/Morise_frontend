import api from "./BaseUrl";

export const getTestimonials = async (data) => {
  try {
    const response = await api.get("/get-all-testimonials?page=0", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};
