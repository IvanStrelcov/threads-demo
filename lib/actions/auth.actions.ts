"use server";
import { isRedirectError } from "next/dist/client/components/redirect";
import { z } from "zod";
import bcrypt from "bcrypt";
import { signIn, signOut } from "next-auth/react";
import prisma from "@/lib/database/db";
import { SALT_ROUNDS } from "../constants";

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const existedUser = await prisma.user.findUnique({ where: { email } });
    if (existedUser) return "User with this is email is olready exist";
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await prisma.user.create({
      data: { email, password: hash, name: "", username: "" },
    });
    return { email };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw error;
  }
}

// export async function logout() {
//   try {
//     await signOut();
//   } catch (error) {
//     console.log('logout error >>> ', error);
//     throw error;
//   }
// }
