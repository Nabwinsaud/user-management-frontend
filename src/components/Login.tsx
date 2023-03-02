import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ILogin } from "../interfaces/auth.interface";
import { getAuthServices } from "../services/authServices";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import Input from "./Input";
import Button from "./Button";
import { loginSchema } from "../validations/form.validation";
export default function Login() {
  const { login } = getAuthServices();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILogin>({ resolver: zodResolver(loginSchema) });

  const { mutate, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["login"] });
        reset();
      }
      if (!data.success) {
        toast.error(data?.message);
      }
    },
  });

  //   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {};
  const onSubmit: SubmitHandler<ILogin> = async (data: ILogin) => {
    mutate(data);
  };
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center  px-2">
      <div className="flex flex-col w-full px-8 py-8  md:w-[40%] shadow-lg md:py-6 md:px-6">
        <p className="text-lg capitalize">Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <span className="text-red-500">{errors.email?.message}</span>
          <Input
            {...register("password")}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <span className="text-red-500">{errors.password?.message}</span>
          <Button disabled={isLoading} variant="primary">
            {isLoading ? "Logging..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
