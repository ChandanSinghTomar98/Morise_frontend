import api from "./BaseUrl";


export const createUser = (data) => {
  console.log("date1",data)
  return api.post("/register-user", data);
};

export const loginUser = (data) => {
  return api.post("/login", data);
};
