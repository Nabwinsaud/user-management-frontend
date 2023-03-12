import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import getDeviceInfo from "../utils/deviceInfot";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, RegisterType } from "../validations/form.validation";
import Button from "./Button";
import { getAuthServices } from "../services/authServices";
import { toast } from "react-hot-toast";
import { uploadFiles } from "@utils/upload";
import { MediaType } from "@constants/enum";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const { browser, device, os, time } = getDeviceInfo();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<RegisterType>({ resolver: zodResolver(signupSchema) });

  const { registerUser } = getAuthServices();
  const navigate = useNavigate();

  // console.log("device information is ", browser, device, os, time);

  const { mutate, isLoading } = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUser,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["registerUser"] });
        navigate("/verify-otp");
        reset();
      }
      if (!data.success) {
        toast.error(data?.message);
      }
    },
  });

  // console.log("Loading state  is", isLoading);

  // const onSubmit: SubmitHandler<IRegister> = async (data: IRegister) => {
  const avatar = getValues("avatar");
  // console.log("images are", images);

  // React.useEffect(() => {}, [images]);
  const onSubmit: SubmitHandler<RegisterType> = async (data: RegisterType) => {
    console.log("submitted Data is", data);
    // const profilePicture = await Promise.resolve(
    //   uploadFiles.single({
    //     file: data.avatar,
    //     type: MediaType.PROFILE,
    //   })
    // );
    if (avatar) {
      mutate({ deviceInfo: getDeviceInfo(), avatar, ...data });
    }
    //   // avatar: data.avatar[0],
  };
  return (
    <div>
      <div className="flex flex-col h-screen w-full items-center justify-center  px-2">
        <div className="flex flex-col w-full px-8 py-4 sm:w-full md:w-[50%] lg:w-[50%] shadow-lg md:py-6 md:px-6">
          <p className="text-lg capitalize">RegisterUser</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:gap-2 lg:space-x-3">
              <Input name="firstName" type="text" placeholder="john" />
              <Input name="middleName" type="text" placeholder="van" />
              <Input name="nepal" type="text" placeholder="doe" />
            </div> */}
            <Input
              {...register("username")}
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <span className="text-red-500">{errors.username?.message}</span>

            <Input {...register("avatar")} name="avatar" type="file" />
            <span className="text-red-500">
              {errors.avatar?.message as string}
            </span>

            <Input
              {...register("phone")}
              name="phone"
              type="text"
              placeholder="Enter your phone number"
            />
            <span className="text-red-500">{errors.phone?.message}</span>
            <Input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <Input
              {...register("password")}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <span className="text-red-500">{errors.password?.message}</span>
            <Input
              {...register("confirmPassword")}
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
            />
            <span className="text-red-500">
              {errors && errors.confirmPassword?.message}
            </span>
            <div>
              <Button type="submit" disabled={isLoading} variant="primary">
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default React.memo(Register);
