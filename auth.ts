// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { z } from "zod";
// import bcrypt from "bcrypt";
// import prisma from "@/lib/database/db";
// import { authConfig } from "./auth.config";
// import { User } from "./lib/definitions";

// async function getUser(email: string): Promise<User | null> {
//   try {
//     const user = await prisma.user.findUnique({ where: { email } });
//     console.log('user >>>', user);
//     return user;
//   } catch (error) {
//     throw new Error("Failed to fetch user.");
//   }
// }

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const parsedCredentials = z
//           .object({ email: z.string().email(), password: z.string().min(6) })
//           .safeParse(credentials);
//         if (!parsedCredentials.success) return null;
//         const { email, password } = parsedCredentials.data;
//         const user = await getUser(email);
//         if (!user) return null;
//         const passwordsMatch = await bcrypt.compare(password, user.password);
//         if (passwordsMatch) return user as any; // https://github.com/nextauthjs/next-auth/issues/2701 here must be user as any but I changed getUser return type to Promise<any>
//         return null;
//       },
//     }),
//   ],
// });
