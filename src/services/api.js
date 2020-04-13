import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.2.157:2323",
});

export default api;
