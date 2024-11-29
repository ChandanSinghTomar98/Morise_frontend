import api from "./BaseUrl";

export const submitDocuments = (data) => {
  return api.post("/upload-documents", data, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
};
