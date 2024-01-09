import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { UserRole } from "@prisma/client"

import { db } from "./lib/db"
import authConfig from "./auth.config"
import { findUserById } from "./data/user"



export const {
  handlers: { GET, POST },
  auth,
  signIn, //Can only be used in server actions or server components
  signOut
} = NextAuth({
  callbacks: {
    // data transfers to session
    async session({token, session}) {
      

      if(token.sub && session.user) {
        session.user.id = token.sub
      }

      if(token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      return session
    },
    // Add data in token first
    async jwt({token, user}) {

      if(!token.sub) return token

      // Get user from jwt...
      const existingUser = await findUserById(token.sub)

      if(!existingUser) return token

      token.role = existingUser.role

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session:{strategy: "jwt"},
  ...authConfig,
})