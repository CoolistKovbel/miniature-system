"use server";
import { RegisterSchema } from "@/schemas";
// Just like a api route but from nextauth 14

import * as z from "zod";
import { hash } from "bcryptjs";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalud field" };
  }


  const {email, password, username} = validatedFields.data

  const hashPassword = await hash(password, 10)


  const existingUser = await db.user.findUnique({where: {email}})


  if(existingUser) {
    return {error: "Sorry this exists"}
  }

  await db.user.create({
    data: {
      email,
      password: hashPassword,
      username
    }
  })

  // Send email

  return { success: "email sent!" };
};
