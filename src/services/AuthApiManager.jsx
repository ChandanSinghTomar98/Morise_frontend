import api from "./BaseUrl";
export const createUser = (data) => {
  return api.post("/register-user", data);
};

export const loginUser = (data) => {
  return api.post("/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
