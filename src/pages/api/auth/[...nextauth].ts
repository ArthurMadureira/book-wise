import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
        }
      }
    }),
  ],

  callbacks: {
    async signIn({ account }) {
      if (!account?.scope?.includes('https://www.googleapis.com/auth/userinfo.email')) {
        return '/login?erro=permissions'
      }

      return '/'
    }
  },

}
export default NextAuth(authOptions)