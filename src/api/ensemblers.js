import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://back-end-4pab.onrender.com",
  header: "Accept: application/json",
  header: `Authorization: Bearer ${ACCESS_TOKEN_SECRET}`,
});
