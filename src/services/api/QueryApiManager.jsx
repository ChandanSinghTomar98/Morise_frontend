import api from "./BaseUrl";

export const submitQuery = (data) => {
  return api.post("/create-query", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
