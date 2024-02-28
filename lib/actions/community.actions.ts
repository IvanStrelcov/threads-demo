"use server";

import { Prisma } from "@prisma/client";
import type { User, Thread, Community } from "@prisma/client";
import prisma from "@/lib/database/db";
import { revalidatePath } from "next/cache";
import { prismaExclude } from "../database/utils";

export const createCommunity = async ({
  creatorId,
  name,
  username,
  bio,
  image,
  path,
}: {
  creatorId: number;
  name: string;
  username: string;
  bio: string;
  image: string;
  path: string;
}) => {
  try {
    const result = await prisma.community.create({ data: { name, username, bio, image, creatorId } });
    console.log(result);
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create community: ${error.message}`);
  }
};
