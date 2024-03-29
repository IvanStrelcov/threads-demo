"use server";

import { Prisma, Status } from "@prisma/client";
import prisma from "@/lib/database/db";
import { revalidatePath } from "next/cache";
import { prismaExclude } from "../database/utils";

export async function createCommunity({
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
}) {
  try {
    const result = await prisma.community.create({
      data: { name, username, bio, image, creatorId },
    });
    revalidatePath(path);
    return result;
  } catch (error: any) {
    throw new Error(`Failed to create community: ${error.message}`);
  }
}

export async function getUserCommunities(userId: number) {
  try {
    const result = await prisma.community.findMany({
      where: {
        OR: [{ creatorId: userId }, { members: { some: { id: userId } } }],
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch user communities: ${error.message}`);
  }
}

export async function fetchCommunity({ communityId }: { communityId: number }) {
  try {
    const result = await prisma.community.findUnique({
      where: { id: communityId },
      include: {
        threads: true,
        members: {
          include: {
            requests: true,
            invites: true,
          },
        },
      },
    });
    console.log(result);
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch community: ${error.message}`);
  }
}

export async function fetchCommunityPosts({
  communityId,
}: {
  communityId: number;
}) {
  try {
    const result = await prisma.community.findUnique({
      where: { id: communityId },
      include: {
        threads: {
          where: {
            parentId: null,
          },
          include: {
            author: true,
            children: {
              include: {
                author: true,
              },
            },
          },
        },
        members: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true,
            bio: true,
          },
        },
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch community posts: ${error.message}`);
  }
}

export async function fetchCommunities({
  searchString = "",
  pageNumber = 1,
  pageSize = 20,
  sortBy = "desc",
}: {
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: Prisma.SortOrder;
}) {
  try {
    const skip = pageSize * (pageNumber - 1);
    const query: Prisma.CommunityFindManyArgs = {
      include: {
        members: true,
      },
      orderBy: { createdAt: sortBy },
      skip,
      take: pageSize,
    };
    // query.where for ts error
    if (searchString.trim() !== "") {
      query.where = {};
      query.where["OR"] = [
        { username: { contains: searchString, mode: "insensitive" } },
        { name: { contains: searchString, mode: "insensitive" } },
      ];
    }
    const communities = await prisma.community.findMany(query);
    delete query.include;
    delete query.skip;
    delete query.take;
    const totalCommunitiesCount = await prisma.community.count(
      query as Prisma.CommunityCountArgs
    );
    const isNext = totalCommunitiesCount > skip + communities.length;
    return { communities, isNext };
  } catch (error: any) {
    throw new Error(`Failed to fetch communities: ${error.message}`);
  }
}

export async function fetchRequest({
  userId,
  communityId,
}: {
  userId: number;
  communityId: number;
}) {
  try {
    const request = await prisma.request.findUnique({
      where: { communityId_userId: { userId, communityId } },
    });
    return request;
  } catch (error: any) {
    throw new Error(`Failed to fetch requests: ${error.message}`);
  }
}

export async function fetchInvitation({
  userId,
  communityId,
}: {
  userId: number;
  communityId: number;
}) {
  try {
    const invitation = await prisma.invite.findUnique({
      where: { communityId_userId: { userId, communityId } },
    });
    return invitation;
  } catch (error: any) {
    throw new Error(`Failed to fetch requests: ${error.message}`);
  }
}

export async function changeRequestStatus({
  userId,
  communityId,
  status,
  applyToInvitation,
  path,
}: {
  userId: number;
  communityId: number;
  status: Status;
  applyToInvitation?: boolean;
  path: string;
}) {
  try {
    const request = await prisma.request.upsert({
      where: { communityId_userId: { userId, communityId } },
      update: { status },
      create: { userId, communityId, status },
    });
    if (applyToInvitation) {
      const invite = await prisma.invite.upsert({
        where: { communityId_userId: { userId, communityId } },
        update: { status },
        create: { userId, communityId, status },
      });
    }
    if (status === Status.ACCEPTED) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (user) {
        const res = await prisma.community.update({
          where: { id: communityId },
          data: { members: { connect: user } },
        });
      }
    }
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to to change requests status: ${error.message}`);
  }
}

export async function sendInvitation({
  userId,
  communityId,
  path,
}: {
  userId: number;
  communityId: number;
  path: string;
}) {
  try {
    const request = await prisma.invite.upsert({
      where: { communityId_userId: { userId, communityId } },
      update: { status: Status.PENDING },
      create: { userId, communityId, status: Status.PENDING },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to sent invitation to user: ${error.message}`);
  }
}

export async function changeInvitationStatus({
  userId,
  communityId,
  status,
  applyToRequest = false,
  path,
}: {
  userId: number;
  communityId: number;
  status: Status;
  applyToRequest?: boolean;
  path: string;
}) {
  try {
    const invite = await prisma.invite.upsert({
      where: { communityId_userId: { userId, communityId } },
      update: { status },
      create: { userId, communityId, status },
    });
    if (applyToRequest) {
      const request = await prisma.request.upsert({
        where: { communityId_userId: { userId, communityId } },
        update: { status },
        create: { userId, communityId, status },
      });
    }
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to change invitation status: ${error.message}`);
  }
}

export async function fetchCommunityRequests({
  communityId,
  status,
}: {
  communityId: number;
  status: Status;
}) {
  try {
    let selectKeys: any = prismaExclude("User", ["password"]);
    const requests = await prisma.request.findMany({
      where: { communityId: communityId, status },
      include: {
        user: {
          select: selectKeys,
        },
      },
    });
    return requests;
  } catch (error: any) {
    throw new Error(`Failed to fetch requests: ${error.message}`);
  }
}
