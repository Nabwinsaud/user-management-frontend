import { z } from "zod";
import { phoneNumberRegex, specialCharacter } from "../utils/regex";

// export const productSearchSchema = z.object({
//   page: z.number().catch(1),
//   filter: z.string().catch(""),
//   sort: z.enum(["newest", "oldest", "price"]).catch("newest"),
// });

const deviceInfoSchema = z.object({
  device: z.string(),
  os: z.string(),
  browser: z.string(),
  time: z.date(),
});
export const signupSchema = z
  .object({
    username: z
      .string()
      .min(1, "username is required")
      .max(16, "username must cannot be  more than 16 characters"),
    // email: z.string().min(1, "email is required").email(),
    email: z
      .string({
        required_error: "email is required",
        invalid_type_error: "must be a valid email",
      })
      .email("email is required "),
    password: z
      .string()
      .min(1, "password is required")
      .regex(specialCharacter, "password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "confirm password is required"),
    // .regex(specialCharacter, "confirm password is required"),
    phone: z
      .string({
        required_error: "phone number is required",
        invalid_type_error: "phone number must be string",
      })
      .refine((val) => val && phoneNumberRegex.test(val.toString()), {
        message: "phone number must be 10 digit ",
      }),
    avatar: z.string().optional(),
    // isVerified: z.boolean().default(false).optional(),
    //   role: z.string().default('user'),
    // role: z.enum(["USER", "ADMIN"]).default("USER").catch("USER"),
    deviceInfo: deviceInfoSchema.array().optional(),
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
