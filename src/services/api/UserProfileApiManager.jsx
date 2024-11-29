import api from "./BaseUrl";

export const getUserById = (data) => {
  
  return api.get(`/get-user-by-id/${data.id}`, {
    headers: {
      authorization: `Bearer ${data.token}`,
      userid: data.id,
    },
  });
};
