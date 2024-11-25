import axios from "axios";
import { getBaseURL } from "./BaseUrl";

const UserProfileApiManager = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-type": "multipart/form-data",
  },
});

const token=localStorage.getItem("token")
const id=localStorage.getItem("userId")
console.log("token",token)
export const getUserById = () => {
 
  return UserProfileApiManager.get(`/get-user-by-id/${id}`, {
    headers: {
      authorization: `Bearear ${token}`,
      userid: id,
    },
  });
};
