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
    const result = await prisma.community.create({
      data: { name, username, bio, image, creatorId },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create community: ${error.message}`);
  }
};

export const getUserCommunities = async (userId: number) => {
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
};

export const fetchCommunity = async ({
  communityId,
}: {
  communityId: number;
}) => {
  try {
    const result = await prisma.community.findUnique({
      where: { id: communityId },
      include: {
        threads: true,
        members: true,
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch community: ${error.message}`);
  }
};

export const fetchCommunityPosts = async ({
  communityId,
}: {
  communityId: number;
}) => {
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
              }
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
};

export const fetchCommunities = async ({
  searchString = "",
  pageNumber = 1,
  pageSize = 20,
  sortBy = "desc",
}: {
  searchString: string;
  pageNumber: number;
  pageSize: number;
  sortBy: Prisma.SortOrder;
}) => {
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
    const totalCommunitiesCount = await prisma.community.count(
      query as Prisma.CommunityCountArgs
    );
    const isNext = totalCommunitiesCount > skip + communities.length;
    console.log("fetchCommunities result >>>", communities);
    return { communities, isNext };
  } catch (error: any) {
    throw new Error(`Failed to fetch communities: ${error.message}`);
  }
};
