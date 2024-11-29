import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // console.log(token);

    // const userId = localStorage.getItem("userId");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "multipart/form-data";
      return config;
    } else {
      config.headers["Content-Type"] = "application/json";
      return config;
    }
  },
  (error) => Promise.reject(error)
);

export default api;
