"use client";

import { useEffect, useState } from "react";
import { Status } from "@prisma/client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserWithReqInv } from "@/lib/definitions";
import {
  fetchUsersForCommunity,
  addUserToCommunity,
} from "@/lib/actions/user.actions";
import {
  changeInvitationStatus,
  changeRequestStatus,
} from "@/lib/actions/community.actions";

export default function AddCommunityMember({
  currentUserId,
  currentCommunityId,
}: {
  currentUserId: number;
  currentCommunityId: number;
}) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<UserWithReqInv[]>([]);

  const getUsersForCommunity = async (value: string) => {
    const users = await fetchUsersForCommunity({
      searchString: value,
      currentUserId,
      currentCommunityId,
    });
    setUsers(users);
  };

  const onChangeRequest = async ({
    userId,
    status,
  }: {
    userId: number;
    status: Status;
  }) => {
    await changeRequestStatus({
      userId,
      communityId: currentCommunityId,
      status,
      path: pathname,
    });
    getUsersForCommunity(search);
  };

  const onChangeInvitation = async ({
    userId,
    status,
    applyToRequest,
  }: {
    userId: number;
    status: Status;
    applyToRequest: boolean;
  }) => {
    await changeInvitationStatus({
      userId,
      communityId: currentCommunityId,
      status,
      applyToRequest,
      path: pathname,
    });
    getUsersForCommunity(search);
  };

  const onAcceptRequest = async (userId: number) => {
    await addUserToCommunity({
      userId,
      communityId: currentCommunityId,
      path: pathname,
    });
    await changeInvitationStatus({
      userId,
      communityId: currentCommunityId,
      status: Status.ACCEPTED,
      applyToRequest: true,
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
        <Button className="action_btn bg-primary-500">Add member</Button>
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
          <div className="flex flex-col w-full mt-2 gap-2 max-h-24 overflow-y-auto">
            {users.length
              ? users.map((user: UserWithReqInv) => {
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
                      {user.requests[0] &&
                      user.requests[0].status === Status.PENDING ? (
                        <div className="flex gap-2">
                          <Button
                            className="action_btn transparent_btn"
                            onClick={() =>
                              onChangeRequest({
                                userId: user.id,
                                status: Status.CANCELED,
                              })
                            }
                          >
                            Cancel Request
                          </Button>
                          <Button
                            className="action_btn bg-primary-500"
                            onClick={() => onAcceptRequest(user.id)}
                          >
                            Accept Request
                          </Button>
                        </div>
                      ) : user.invites[0] &&
                        user.invites[0].status === Status.PENDING ? (
                        <Button
                          className="action_btn bg-remove"
                          onClick={() =>
                            onChangeInvitation({
                              userId: user.id,
                              status: Status.CANCELED,
                              applyToRequest: true,
                            })
                          }
                        >
                          Revoke Invitation
                        </Button>
                      ) : (
                        <Button
                          className="action_btn bg-primary-500"
                          onClick={() =>
                            onChangeInvitation({
                              userId: user.id,
                              status: Status.PENDING,
                              applyToRequest: false,
                            })
                          }
                        >
                          Send invitation
                        </Button>
                      )}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
