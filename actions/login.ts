"use server"
import { signIn } from "@/auth"
import { findUserByEmail } from "@/data/user"
import { generateVerificationToken } from "@/lib/tokens"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"

// Just like a api route but from nextauth 14

import * as z from "zod"


export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)


  if(!validatedFields.success) {
    return {error: "invalud field"}
  }

  // do you know what is up....
  const {email, password} = validatedFields.data


  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if(error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {error: "invalid sign in"}
        default: 
        return {error: "something is broken hope its not your heart"}
      }
    }

    throw error
  }

  return {success: "noiceee"}

}