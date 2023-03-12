import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string().min(6, "otp must be 6 character"),
});

export type otpInput = z.infer<typeof otpSchema>;
