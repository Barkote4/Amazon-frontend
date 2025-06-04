import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://amazon-backend-ut59.onrender.com",
});
export { axiosInstance };
