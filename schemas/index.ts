import * as z from "zod"

// you know what to do  
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {message: "min is 6...",}),
  username: z.string()
})