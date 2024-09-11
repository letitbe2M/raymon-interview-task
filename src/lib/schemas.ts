import { z } from "zod";

export const contactMeSchema = z.object({
  name: z.string().trim().min(1, {
    message: "please insert your name",
  }),
  email: z.string().email({ message: "invalid email" }),

  message: z.string().trim().min(8, {
    message: "insert your message",
  }),
});
