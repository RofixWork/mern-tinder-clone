import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://mern-tinder-clone-2022.herokuapp.com/api/v1",
});
export default axiosInstance;
