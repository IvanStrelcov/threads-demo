"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/lib/constants";
import { useSession } from "next-auth/react";

export default function LeftSidebarLinks() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex w-full flex-1 flex-col gap-6 px-6">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        if (link.route === "/profile")
          link.route = `${link.route}/${session?.user.id}`;
        return (
          <Link
            href={link.route}
            key={link.label}
            className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
              unoptimized
            />
            <p className="text-light-1 max-lg:hidden">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
}