import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/database/db";
import { UserForAuth } from "@/lib/definitions";
import { z } from "zod";

async function getUser(email: string): Promise<UserForAuth | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        onboarded: true,
        bio: true,
        image: true,
        activeCommunity: true,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

export const options: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  // https://github.com/nextauthjs/next-auth/issues/9836
  callbacks: {
    async jwt({ token }) {
      const user = await getUser(token.email || "");
      if (!user) {
        throw Error('User not exist');
      }
      token.data = user;
      return token;
    },
    async session({ session, token, user }) {
      session.user.onboarded = token.data.onboarded;
      session.user.id = token.data.id;
      session.user.username = token.data.username;
      session.user.name = token.data.name;
      session.user.image = token.data.image;
      session.user.bio = token.data.bio;
      session.user.activeCommunity = token.data.activeCommunity;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          text: "text",
          placeholder: "your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (!parsedCredentials.success) return null;
        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (!user) return null;
        return user;
      },
    }),
  ],
};
