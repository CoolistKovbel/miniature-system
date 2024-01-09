import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "./lib/db"
import authConfig from "./auth.config"
import { findUserById } from "./data/user"



export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    // async signIn({user}) {
    //   const existingUser = await findUserById(user.id)

    //   if(!existingUser || !existingUser.emailVerified) {
    //     return false
    //   }

    //   return true

    // },
    // data transfers to session
    async session({token, session}) {
      

      if(token.sub && session.user) {
        session.user.id = token.sub
      }

      if(token.role && session.user) {
        session.user.role = token.role as "USER" | "ADMIN"
      }

      return session
    },
    // Add data in token first
    async jwt({token, user}) {
      console.log(user, "in the jwt")
      // Fetch user
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