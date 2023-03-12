import { z } from "zod";
const fileTypeUnion = z.union([
  z.literal("image/png"),
  z.literal("image/jpg"),
  z.literal("image/jpeg"),
  z.literal("application/pdf"),
]);

export type AvatarImageType = z.infer<typeof fileTypeUnion>;
const excludePdf = fileTypeUnion
  .array()
  .refine((val) => !val.includes("application/pdf"));
