import { axiosInstance } from "@api/index";
import { MediaType } from "@constants/enum";

interface SingleUpload {
  type: MediaType;
  file: File;
}

interface MultipleUpload {
  type: MediaType;
  files: File[];
}

const single = async ({ file, type }: SingleUpload) => {
  const formData = new FormData();
  formData.append("media", file);
  formData.append("type", type);
  console.log("formData is ", formData);
  //   return await axiosInstance.post("/media/upload/single", formData);
};

const multiple = ({ files, type }: MultipleUpload) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("media", file);
  });
  formData.append("type", type);
  return axiosInstance.post("/media/upload/multiple", formData);
};

export const uploadFiles = { single, multiple };
