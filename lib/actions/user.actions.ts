"use server";

import prisma from "@/lib/database/db";
import { revalidatePath } from "next/cache";
import { prismaExclude } from "../database/utils";
import { UserModel } from "../definitions";

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
      data: {
        name,
        username: username.toLowerCase(),
        bio,
        image,
        onboarded: true,
      },
    });

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUser(id: number) {
  let selectKeys: any = prismaExclude("User", ["password"]);
  selectKeys.threads = { where: { parentId: null } };
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: selectKeys,
    });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function fetchUserPosts(userId: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        threads: {
          where: {
            parentId: null,
          },
          include: {
            children: {
              include: {
                author: {
                  select: {
                    id: true,
                    name: true,
                    image: true,
                  },
                },
              },
            },
            author: true,
          },
        },
      },
    });
    console.log(user);
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch users posts: ${error.message}`);
  }
}
