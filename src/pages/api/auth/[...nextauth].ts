import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email
        const password = credentials?.password

        console.log(`EMAIL: ${email}`)
        console.log(`PASSWORD: ${password}`)

        if (email === 'programou@programou.com' && password === 'programou') {
          return { id: '0', name: 'programou', email, password }
        }

        return null
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
}

export default NextAuth(authOptions)
