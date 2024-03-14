"use client";

import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  fetchUsersForCommunity,
  addUserToCommunity,
} from "@/lib/actions/user.actions";

export default function AddCommunityMember({
  currentUserId,
  currentCommunityId,
}: {
  currentUserId: number;
  currentCommunityId: number;
}) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const getUsersForCommunity = async (value: string) => {
    const users = await fetchUsersForCommunity({
      searchString: value,
      currentUserId,
      currentCommunityId,
    });
    setUsers(users);
  };

  const onAddMember = async (userId: number) => {
    await addUserToCommunity({
      userId,
      communityId: currentCommunityId,
      path: pathname,
    });
    getUsersForCommunity(search);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        getUsersForCommunity(search);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-500">Add member</Button>
      </DialogTrigger>
      <DialogContent className="bg-dark-3 border-none text-light-1">
        <DialogHeader>
          <DialogTitle>Find new members for your community</DialogTitle>
          <DialogDescription className="text-light-3">
            Start typing name or username
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 items-start">
          <Input
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="no-focus bg-dark-4"
          />
          <div className="flex flex-col w-full mt-2 gap-2 max-h-24">
            {users.length
              ? users.map((user: User) => {
                  return (
                    <div
                      key={user.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex gap-2 items-center">
                        <Image
                          src={user.image || "/assets/profile.svg"}
                          alt={`user-${user.id}-logo`}
                          width={24}
                          height={24}
                          className="rounded-full object-cover w-6 h-6"
                        />
                        <p>{user.name}</p>
                      </div>
                      <Button
                        className="bg-primary-500"
                        onClick={() => onAddMember(user.id)}
                      >
                        Add
                      </Button>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <DialogFooter className="mt-9 sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="bg-light-3 text-light-1 hover:bg-opacity-80 hover:text-light-1 hover:bg-light-3"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
