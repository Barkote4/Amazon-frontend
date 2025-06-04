import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazon-backend-ut59.onrender.com",
});
export { axiosInstance };
