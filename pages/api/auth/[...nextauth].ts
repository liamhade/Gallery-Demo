import NextAuth, { Account, Profile, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import base64 from "base-64";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;
        console.log(`Hello, this is the api base url: ${process.env.NEXT_PUBLIC_API_BASE_URL}`)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/login/`,
          {
            method: "POST",
            headers: new Headers({
              Authorization:
                "Basic " + base64.encode(username + ":" + password),
              "Content-Type": "application/json",
            }),
          }
        );
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({
      token,
      user,
      account,
      profile,
      trigger,
      session,
    }: {
      token: JWT;
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
      trigger?: "signIn" | "signUp" | "update" | undefined;
      isNewUser?: boolean | undefined;
      session?: any;
    }) {
      if (user) {
        token.user = user;
        token.id;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = token.user as any;
      session.accessToken = token.user.token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
