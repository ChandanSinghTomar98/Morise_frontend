// TODO: fix the content type bug in the api file where the content type is not being set correctly for application json and form data

import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
