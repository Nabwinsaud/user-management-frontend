import axios from "axios";

export const url = import.meta.env.VITE_API_URL;
export const axiosInstance = axios.create({
  baseURL: url,
});
