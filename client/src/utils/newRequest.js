import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://gigworker.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
