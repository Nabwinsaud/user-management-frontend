import { z } from "zod";
import { phoneNumberRegex, specialCharacter } from "../utils/regex";

 // /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g // found this regex crucial
// export const productSearchSchema = z.object({
//   page: z.number().catch(1),
//   filter: z.string().catch(""),
//   sort: z.enum(["newest", "oldest", "price"]).catch("newest"),
// });

export const signupSchema = z
  .object({
    username: z
      .string()
      .min(16, "username must cannot be  more than 16 characters"),
    email: z.string().email(),
    // password: z.string().min(8, "password must be at least 8 characters"),
    password: z
      .string()
      .min(8)
      .regex(specialCharacter, "password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8)
      .regex(specialCharacter, "confirm password is required"),
    phone: z
      .number()
      .refine((val) => val && phoneNumberRegex.test(val.toString()), {
        message: "phone number must be 10 digit ",
      }),
    avatar: z.string().optional(),
    isVerified: z.boolean().default(false),
    //   role: z.string().default('user'),
    role: z.enum(["USER", "ADMIN"]).default("USER").catch("USER"),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "password and confirm password must match",
  });

// login validation

export const loginSchema = z.object({
  email: z.string().email("email is required"),
  password: z
    .string()
    .min(8, "password is required")
    .regex(
      specialCharacter,
      "password must be at least 8 characters(upperCase,specialCharacter,number )"
    ),
});
