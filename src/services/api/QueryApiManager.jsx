import api from "./BaseUrl";

export const submitQuery = (data) => {
  console.log("data", data);

  return api.post("/create-query", data);
};
