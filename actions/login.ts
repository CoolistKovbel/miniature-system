"use server"
import { LoginSchema } from "@/schemas"
// Just like a api route but from nextauth 14

import * as z from "zod"


export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)


  if(!validatedFields.success) {
    return {error: "invalud field"}
  }


  return {success: "email sent!"}

}