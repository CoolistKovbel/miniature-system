"use server";
import { RegisterSchema } from "@/schemas";
// Just like a api route but from nextauth 14

import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalud field" };
  }

  return { success: "email sent!" };
};
