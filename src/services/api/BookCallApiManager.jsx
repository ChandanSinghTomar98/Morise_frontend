import api from "./BaseUrl";

export const submitCallRequest = (data) => {
  return api.post("/create-book-call", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
