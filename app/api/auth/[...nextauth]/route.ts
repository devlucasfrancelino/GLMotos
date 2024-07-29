import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { },
        password: { }
      },
      async authorize(credentials, req) {
        if (credentials?.username == "Daniel" && credentials.password == "365204") {
          return { username : credentials.username, password : credentials.password } 
        } else {
          return null
        }
      }
  })]
})  

export {handler as GET, handler as POST}