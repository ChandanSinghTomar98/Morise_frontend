import axios from "axios";
import { getBaseURL } from "./BaseUrl";

const UserProfileApiManager = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-type": "multipart/form-data",
  },
});

export const getUserById = (data) => {
  console.log("id hfhf", data);
  return UserProfileApiManager.get(`/get-user-by-id/${data.id}`, {
    headers: {
      authorization: `Bearer ${data.token}`,
      userid: data.id,
    },
  });
};