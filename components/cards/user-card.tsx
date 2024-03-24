"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Status } from "@prisma/client";
import { removeUserFromCommunity } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
  changeInvitationStatus,
  changeRequestStatus,
} from "@/lib/actions/community.actions";

export default function UserCard({
  id,
  name,
  username,
  image = "",
  personType,
  isAdmin,
  communityId,
  status,
}: {
  id: number;
  name: string;
  username: string;
  image: string;
  personType: string;
  isAdmin?: boolean;
  communityId?: number;
  status?: Status;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isCommunity = personType === "Community";

  const onRemoveUser = async () => {
    if (communityId) {
      await removeUserFromCommunity({
        userId: id,
        communityId,
        path: pathname,
      });
      await changeInvitationStatus({
        userId: id,
        communityId,
        status: Status.CANCELED,
        applyToRequest: true,
        path: pathname,
      });
    }
  };

  const onHandleRequest = async (status: Status) => {
    if (communityId) {
      await changeRequestStatus({
        userId: id,
        communityId,
        status,
        applyToInvitation: true,
        path: pathname,
      });
    }
  };

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image
          src={image ?? "/assets/profile.svg"}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12"
        />

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>

      {isAdmin && status && status === Status.ACCEPTED && (
        <Button
          className="user-card_btn bg-remove"
          onClick={() => onRemoveUser()}
        >
          Remove
        </Button>
      )}

      {isAdmin && status && status === Status.PENDING && (
        <div className="flex gap-2">
          <Button
            className="user-card_btn transparent_btn"
            onClick={() => onHandleRequest(Status.DECLINED)}
          >
            Decline Request
          </Button>
          <Button
            className="user-card_btn"
            onClick={() => onHandleRequest(Status.ACCEPTED)}
          >
            Apply Request
          </Button>
        </div>
      )}

      <Button
        className="user-card_btn"
        onClick={() => {
          if (isCommunity) {
            router.push(`/communities/${id}`);
          } else {
            router.push(`/profile/${id}`);
          }
        }}
      >
        View
      </Button>
    </article>
  );
}
