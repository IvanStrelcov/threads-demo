"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { removeUserFromCommunity } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";

export default function UserCard({
  id,
  name,
  username,
  image = "",
  personType,
  isAdmin,
  communityId,
}: {
  id: number;
  name: string;
  username: string;
  image: string;
  personType: string;
  isAdmin?: boolean;
  communityId?: number;
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

      {isAdmin && (
        <Button
          className="user-card_btn remove-clr"
          onClick={() => onRemoveUser()}
        >
          Remove
        </Button>
      )}
    </article>
  );
}
