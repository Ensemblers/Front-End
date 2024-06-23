import axios from "axios";

export default axios.create({
  // baseURL: `${secrets.SERVER_ADDRESS}`,
  baseURL: "https://back-end-4pab.onrender.com",
});
