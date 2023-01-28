import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
