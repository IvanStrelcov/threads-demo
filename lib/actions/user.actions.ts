"use server";

import { Prisma } from "@prisma/client";
import type { Thread, User } from "@prisma/client";
import prisma from "@/lib/database/db";
import { revalidatePath } from "next/cache";
import { prismaExclude } from "../database/utils";

type ThreadWithAuthor = {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  authorId: number | null;
  parentId: number | null;
  author: User;
};

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
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch users posts: ${error.message}`);
  }
}

export async function fetchUsers({
  userId,
  searchString = "",
  limit = 20,
  page = 1,
  sortBy = "desc",
}: {
  userId: number;
  searchString?: string;
  limit?: number;
  page?: number;
  sortBy?: Prisma.SortOrder;
}) {
  try {
    const skip = limit * (page - 1);

    const query: Prisma.UserFindManyArgs = {
      where: { AND: [{ id: { not: userId }, onboarded: true }] },
      orderBy: { createdAt: sortBy },
      skip,
      take: limit,
    };
    // query.where for ts error
    if (searchString.trim() !== "" && query.where) {
      query.where["OR"] = [
        { username: { contains: searchString, mode: "insensitive" } },
        { name: { contains: searchString, mode: "insensitive" } },
      ];
    }
    const users = await prisma.user.findMany(query);
    delete query.skip;
    delete query.take;
    const totalUsersCount = await prisma.user.count(query as Prisma.UserCountArgs);
    const isNext = totalUsersCount > skip + users.length;
    return { users, isNext };
  } catch (error: any) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
}

export async function fetchActivities({ userId }: { userId: number }) {
  try {
    const userThreads = await prisma.thread.findMany({
      where: { authorId: userId },
      include: {
        children: {
          where: { authorId: { not: userId } },
          include: { author: { select: prismaExclude("User", ["password"]) } },
        },
      },
    });

    const childThreads = userThreads.reduce((acc, current) => {
      return acc.concat(current?.children);
    }, [] as Thread[]);

    return childThreads as unknown as ThreadWithAuthor[];
  } catch (error: any) {
    throw new Error(`Failed to fetch user activities: ${error.message}`);
  }
}

export async function changeActiveCommunity({
  userId,
  activeCommunityId,
  path,
}: {
  userId: number;
  activeCommunityId: number | null;
  path: string;
}) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { activeCommunity: activeCommunityId },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to change user active community: ${error.message}`);
  }
}

export async function fetchUsersForCommunity({
  searchString,
  currentCommunityId,
  currentUserId,
}: {
  searchString: string;
  currentUserId: number;
  currentCommunityId: number;
}) {
  try {
    let query: Prisma.UserFindManyArgs = {
      where: {
        AND: [
          {
            communityMember: {
              none: {
                OR: [
                  {
                    id: currentCommunityId,
                  },
                ],
              },
            },
          },
        ],
      },
    };
    if (searchString.trim() !== "" && query.where && query.where["AND"]) {
      (query.where["AND"] as Prisma.UserWhereInput[]).push({
        OR: [
          { username: { contains: searchString, mode: "insensitive" } },
          { name: { contains: searchString, mode: "insensitive" } },
        ],
      });
    }
    const users = await prisma.user.findMany(query);
    return users;
  } catch (error: any) {
    throw new Error(`Failed to change user active community: ${error.message}`);
  }
}

export async function addUserToCommunity({
  userId,
  communityId,
  path,
}: {
  userId: number;
  communityId: number;
  path: string;
}) {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user) {
      const res = await prisma.community.update({
        where: { id: communityId },
        data: { members: { connect: user } },
      });
      console.log("res", res);
    }
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to add user to community: ${error.message}`);
  }
}

export async function removeUserFromCommunity({
  userId,
  communityId,
  path,
}: {
  userId: number;
  communityId: number;
  path: string;
}) {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user) {
      const res = await prisma.community.update({
        where: { id: communityId },
        data: { members: { disconnect: user } },
      });
    }
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to change user active community: ${error.message}`);
  }
}
