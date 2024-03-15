"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

export default function LeftSidebarLogoutButton() {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="flex cursor-pointer gap-4 p-4" onClick={handleLogout}>
      <Image
        src="/assets/logout.svg"
        alt="logout button"
        width={24}
        height={24}
      />
      <p className="text-light-2 max-lg:hidden">Logout</p>
    </div>
  );
}
