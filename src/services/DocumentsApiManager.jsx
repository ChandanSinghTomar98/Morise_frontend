import axios from "axios";
import { getBaseURL } from "./BaseUrl";

const DocumentsApiManager = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-type": "multipart/form-data",
  },
});

export const submitDocuments = (data) => {
  return DocumentsApiManager.post("/upload-documents", data, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
};
