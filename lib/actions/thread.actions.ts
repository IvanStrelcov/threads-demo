"use server";

import prisma from "@/lib/database/db";
import type { Thread } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createThread({
  text,
  author,
  communityId,
  path,
}: {
  text: string;
  author: number;
  communityId: number | null;
  path: string;
}) {
  try {
    const createdThread = await prisma.thread.create({
      data: { content: text, authorId: author, communityId: communityId },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
}

export async function fetchPosts({
  limit = 20,
  page = 1,
}: {
  limit: number;
  page: number;
}) {
  try {
    const skip = limit * (page - 1);
    const posts = await prisma.thread.findMany({
      where: { parentId: null },
      include: {
        author: {
          select: {
            id: true,
            image: true,
            username: true,
            name: true,
          },
        },
        community: {
          select: {
            id: true,
            name: true,
            image: true,
          }
        },
        children: {
          include: {
            author: {
              select: {
                image: true,
              },
            },
          },
        },
      },
      take: limit,
      skip,
      orderBy: {
        createdAt: "desc",
      },
    });
    const totalPostsCount = await prisma.thread.count({
      where: { parentId: null },
    });
    const isNext = totalPostsCount > skip + posts.length;
    return { posts, isNext };
  } catch (error: any) {
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }
}

export async function fetchThreadById(id: number) {
  try {
    const thread = await prisma.thread.findUnique({
      where: { id },
      include: {
        author: true,
        children: {
          include: { author: true, children: { include: { author: true } } },
        },
      },
    });
    return thread;
  } catch (error: any) {
    throw new Error(`Failed to fetch thread by id: ${error.message}`);
  }
}

export async function addCommentToThread({
  threadId,
  commentText,
  userId,
  path,
}: {
  threadId: number;
  commentText: string;
  userId: number;
  path: string;
  communityId?: number | null;
}) {
  try {
    const thread = await prisma.thread.findUniqueOrThrow({ where: { id: threadId }});

    const result = await prisma.thread.create({
      data: {
        parentId: threadId,
        content: commentText,
        authorId: userId,
      }
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to add comment to thread: ${error.message}`);
  }
}
