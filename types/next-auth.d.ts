import NextAuth, { User, Session, DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/core/types" {
  interface User {
    id: number;
    name: string;
    username: string;
    bio: string | null;
    image: string | null;
    onboarded: boolean;
  };
  interface Session {
    user: {
      id: number;
      name: string;
      username: string;
      bio: string | null;
      image: string | null;
      onboarded: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth" {
  interface User {
    id: number;
    name: string;
    username: string;
    bio: string | null;
    image: string | null;
    onboarded: boolean;
  };
  interface Session {
    user: {
      id: number;
      name: string;
      username: string;
      bio: string | null;
      image: string | null;
      onboarded: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    data: {
      id: number;
      name: string;
      username: string;
      bio: string | null;
      image: string | null;
      onboarded: boolean;
    };
  }
}
