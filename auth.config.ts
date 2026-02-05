import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAuthenticatedPage = nextUrl.pathname.startsWith("/dashboard");

      if (isOnAuthenticatedPage) {
        if (isLoggedIn) return true;
        if (!isLoggedIn) {
          // falseを返すと，Signinページにリダイレクトされる
          return false;
        }
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
  },
  providers: [Credentials({})],
} satisfies NextAuthConfig;
