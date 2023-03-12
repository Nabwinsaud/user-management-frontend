import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { otpSchema, otpInput } from "../validations/otp.validation";
import { zodResolver } from "@hookform/resolvers/zod";
export default function VerifyOtp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<otpInput>({ resolver: zodResolver(otpSchema) });

  const onSubmit = async (data: otpInput) => {
    // const data =
  };

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className="md:w-[35vw] w-full px-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("otp")}
            name="otp"
            type="text"
            placeholder="please enter the 6 digit otp"
          />
          <span className="text-red-600">{errors.otp?.message}</span>
          <div>
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
