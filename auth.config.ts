// import type { NextAuthConfig } from "next-auth";

// const whitelist = ["/sign-in", "/sign-up"];

// export const authConfig = {
//   pages: {
//     signIn: "/sign-in",
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnHome = nextUrl.pathname.startsWith("/");
//       if (isOnHome) {
//         if (isLoggedIn && whitelist.includes(nextUrl.pathname)) {
//           // if (auth.user.)
//           return Response.redirect(new URL("/home", nextUrl));
//         }
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL("/home", nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// } satisfies NextAuthConfig;
