import type { User, Request, Invite } from "@prisma/client";

export type UserForAuth = {
  id: number;
  email: string;
  name: string | null;
  username: string | null;
  onboarded: boolean;
  bio: string | null;
  image: string | null;
  password?: string;
  activeCommunity: number | null;
};

type UserWithoutPassword = Omit<User, "password">;

export type UserWithReqInv = {
  requests: Request[];
  invites: Invite[];
} & UserWithoutPassword;

export type UserModel = {
  id: number;
  uuid: string;
  name: string;
  username: string;
  email: string;
  password: string;
  image: string | null;
  bio: string | null;
  onboarded: boolean;
  createdAt: Date;
  updatedAt: Date;
  threads: ThreadModel[];
};

export type ThreadModel = {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  authorId: number;
  author: UserModel;
  parentId: number | null;
  parent: ThreadModel | null;
  children: ThreadModel[];
};
