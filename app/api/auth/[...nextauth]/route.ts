import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const adminUser = process.env.ADMINUSER
const adminPass = process.env.ADMINPASS

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { },
        password: { }
      },
      async authorize(credentials, req) {
        if (credentials && credentials.username === adminUser && credentials?.password === adminPass) {          
          return { username : credentials?.username, password : credentials?.password } 
        } else {
          return null
        }
      }
  })]
})  

export {handler as GET, handler as POST}