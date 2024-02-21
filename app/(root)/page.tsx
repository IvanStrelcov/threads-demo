"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();
  console.log('session ><><> ', session);
  console.log('status', status);
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <main>
      <header>
        <Button onClick={handleLogout}>Log out</Button>
      </header>
      <h1 className="">Home</h1>
    </main>
  );
}
