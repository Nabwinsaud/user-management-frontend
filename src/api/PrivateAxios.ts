import { url } from "./index";
import axios from "axios";

export const privateAxiosInstance = axios.create({
  baseURL: url,
});

privateAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
