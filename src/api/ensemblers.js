import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://back-end-4pab.onrender.com",
  headers: {
    Accept: "application/json",
    // Authorization: `Bearer ${ACCESS_TOKEN_SECRET}`,
  },
});
