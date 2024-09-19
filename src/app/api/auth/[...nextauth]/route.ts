import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { User } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === 'google') {
        const dbUser = await prisma.admin.findUnique({
          where: { email: user.email! },
        })
        if (!!dbUser) {
          const dcUser = await prisma.user.findFirst({
            where: { email: user.email },
          })
          if (dcUser?.role === 'USER') {
            await prisma.user.update({
              where: { email: user.email! },
              data: { role: 'ADMIN' },
            })
          }
        }
        return true
      }
      return true
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      if (token.role && session.user) {
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token
      const existingUser = await prisma.user.findFirst({
        where: { id: token.sub },
      })
      if (!existingUser) return token
      token.role = existingUser.role
      return token
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
