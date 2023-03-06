// localhost:4000/api/register
// update-profile
// localhost:4000/api/login
import { axiosInstance } from "../api";
import { ILogin, IRegister } from "../interfaces/auth.interface";
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
    } catch (error: any) {
      return {
        success: false,
        message: error.response.data.message,
        data: null,
      };
    }
  };

  const registerUser = async (data: IRegister) => {
    try {
      const { confirmPassword, deviceInfo, ...rest } = data;
      const response = await axiosInstance.post("/register", {
        ...rest,
        deviceInfo: [deviceInfo],
      });
      console.log("response is ", response);
      return {
        success: true,
        message: "register successfully",
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response.data.message,
        data: null,
      };
    }
  };

  return { login, registerUser };
};
