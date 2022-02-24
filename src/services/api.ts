import axios from "axios";

const api = axios.create({
  baseURL: "https://gotech.tech",
});

export default api;
