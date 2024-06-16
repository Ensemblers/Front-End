import axios from "axios";

export default axios.create({
  baseURL: `${secrets.SERVER_ADDRESS}`,
});
