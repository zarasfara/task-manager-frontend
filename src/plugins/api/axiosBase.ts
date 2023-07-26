import axios from "axios";

const baseInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    post: {
      "Content-Type": "application/json",
    },
  },
});

export default baseInstance;
