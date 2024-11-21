import axios from "axios";
import { getBaseURL } from "./BaseUrl";
// const getBaseURL = () => {
//   return "http://localhost:3001/api/v1";
// };

const AuthApiManager = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-type": "application/json",
  },
});

export const createUser = (data) => {
  return AuthApiManager.post("/register-user", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const loginUser = (data) => {
  return AuthApiManager.post("/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
