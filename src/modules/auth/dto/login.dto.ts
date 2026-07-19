import { z } from "zod";

export const LoginDto = z.object({
  email: z.string().trim().email(),
  password: z.string().min(6),
});

export type LoginInput = z.infer<typeof LoginDto>;