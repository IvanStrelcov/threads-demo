"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/database/db";

export async function createTag({
  username,
  threadId,
  path,
}: {
  username: string;
  threadId: number;
  path: string;
}) {
  try {
    const user = await prisma.user.findFirst({ where: { username } });
    if (user) {
      const createdTag = await prisma.tag.create({
        data: { userId: user.id, threadId: threadId },
      });
    }
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create tag: ${error.message}`);
  }
}

export async function createTags({
  usernames,
  threadId,
  path,
}: {
  usernames: string[];
  threadId: number;
  path: string;
}) {
  try {
    const users = await prisma.user.findMany({
      where: { username: { in: usernames } },
    });
    if (users && users.length) {
      const data = users.map((user) => ({ userId: user.id, threadId }));
      const createdTag = await prisma.tag.createMany({
        data,
        skipDuplicates: true,
      });
    }
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create tags: ${error.message}`);
  }
}

export async function findUserTags({ userId }: { userId: number }) {
  try {
    const tags = await prisma.tag.findMany({
      where: { userId },
      include: {
        thread: {
          include: {
            author: {
              select: { id: true, name: true, username: true, image: true },
            },
          },
        },
      },
    });
    return tags;
  } catch (error: any) {
    throw new Error(`Failed to find user tags: ${error.message}`);
  }
}

export async function findThreadTags(threadId: number) {
  try {
    const tags = await prisma.tag.findMany({
      where: { threadId },
      include: { user: { select: { username: true, id: true } } },
    });
    return tags;
  } catch (error: any) {
    throw new Error(`Failed to find thread tags: ${error.message}`);
  }
}
