import api from "./BaseUrl";

export const submitDocuments = (data) => {
  for (let [key, value] of data.entries()) {
    console.log(`${key}: ${value}`);
  }

  return api.post("/upload-documents", data, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
};
