"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

export default function UserCard({
  id,
  name,
  username,
  image = "",
  personType,
}: {
  id: number;
  name: string;
  username: string;
  image: string;
  personType: string;
}) {
  const router = useRouter();
  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image
          src={image ?? ""}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full object-contain w-12 h-12"
        />

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>

      <Button
        className="user-card_btn"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </article>
  );
}
