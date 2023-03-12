import { z, TypeOf } from "zod";
import { phoneNumberRegex, specialCharacter } from "../utils/regex";

// /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g // found this regex crucial
// export const productSearchSchema = z.object({
//   page: z.number().catch(1),
//   filter: z.string().catch(""),
//   sort: z.enum(["newest", "oldest", "price"]).catch("newest"),
// });

const MAX_FILES_SIZE = 2 * 1024 * 1024; // 2MB
const fileTypeUnion = z.union([
  z.literal("image/png"),
  z.literal("image/jpg"),
  z.literal("image/jpeg"),
]);
const supportedImageTypes = ["image/png", "image/jpg", "image/jpeg"];

export type imageType = z.infer<typeof fileTypeUnion>;

const avatarFileSchema = z
  .any()
  .refine(
    (files) => files?.[0]?.size <= MAX_FILES_SIZE,
    "max avatar size is 2MB"
  )
  .refine(
    (files) => files?.[0] && supportedImageTypes.includes(files[0].type),
    "only png,jpg and jpeg are allowed"
  )
  .refine((files) => files !== undefined && files?.length > 0, {
    message: "avatar is required",
    path: ["avatar"],
  });

const dobSchema = z
  .object({ age: z.number(), date: z.date() })
  .superRefine((dob) => {
    const { age, date } = dob;
    if (new Date(date) > new Date()) {
      return "Date cannot be future date";
    }
    if (age < 14) {
      return "age must be greater than 14";
    }
    if (age > 120) {
      return "age must be less than 120";
    }
    return true;
  });

const deviceInfoSchema = z.object({
  device: z.string(),
  os: z.string(),
  browser: z.string(),
  time: z.date(),
});

// this approach is not working need to fix this
const imageSchema = z.instanceof(File).superRefine((file, ctx) => {
  if (file.size > MAX_FILES_SIZE) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "max image size is 2MB",
    });
    return "max image size is 2MB";
  }
  if (!supportedImageTypes.includes(file.type)) {
    return "only png,jpg and jpeg are allowed";
  }
  return true;
});

//
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
    phone: z
      .string()
      .min(1, "phone number is required")
      .max(10, "phoneNumber should not be more the 10 digits")
      .refine((val) => val && phoneNumberRegex.test(val.toString()), {
        message: "phone number is not valid ",
        path: ["phone"],
      }),
    avatar: avatarFileSchema,
    // isVerified: z.boolean().default(false).optional(),
    //   role: z.string().default('user'),
    // role: z.enum(["USER", "ADMIN"]).default("USER").catch("USER"),
    deviceInfo: deviceInfoSchema.optional(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    path: ["confirmPassword"],
    message: "password and confirm password must match",
  });

// export type RegisterType = TypeOf<typeof signupSchema>;
export type RegisterType = z.infer<typeof signupSchema>;

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
