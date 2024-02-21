// import NextAuth from "next-auth";
export { default } from "next-auth/middleware";
// import { authConfig } from "./auth.config";

// export default NextAuth(authConfig).auth;

// export const config = {
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// matcher: ['/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)'],
// Chat GPT example. .svg icons now works but favicon.ico - not
// matcher: ['/((?!api|_next\/static|_next\/image|favicon.ico|.*\.(?:png|svg)$).*)/'],
// From video Clerk example
// matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// matcher: ["/", "/((?!_next/static)(?!api)(?!favicon.ico).*)"],
// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// export default function auth() {}
export const config = {
  matcher: [
    "/",
    "/onboarding",
    // "/((?!api|_next/static|_next/image|favicon.ico|.*.(?:png|svg)$).*)/",
    // "/^((?!sign-in).)*$/",
    // "/^((?!sign-up).)*$/",
  ],
};
