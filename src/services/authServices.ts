// localhost:4000/api/register
// update-profile
// localhost:4000/api/login
import { axiosInstance } from "../api";
import { ILogin } from "../interfaces/auth.interface";
import { Response } from "../interfaces/response.interface";

export const getAuthServices = () => {
  // login
  //   const login = async (data: any): Promise<Response<>> => {
  const login = async (data: ILogin) => {
    try {
      const response = await axiosInstance.post("/login", data);
      return {
        success: true,
        message: "Login successfully",
        data: response.data,
      };
      console.log("response is", response);
    } catch (error: any) {
      return {
        success: false,
        message: error.response.data.message,
        data: null,
      };
    }
  };

  return { login };
};
