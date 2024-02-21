"use server";

import prisma from "@/lib/database/db";
import { revalidatePath } from "next/cache";

export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path,
}: {
  userId: number;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}): Promise<void> {
  try {
    const response = await prisma.user.update({
      where: { id: userId },
      data: { name, username: username.toLowerCase(), bio, image, onboarded: true },
    });

    console.log('response', response);

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
