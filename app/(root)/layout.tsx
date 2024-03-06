import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';
import TopBar from "@/components/shared/TopBar";
import LeftSideBar from "@/components/shared/LeftSidebar";
import RightSideBar from "@/components/shared/RightSideBar";
import BottomBar from "@/components/shared/BottomBar";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads Demo",
  description: "Threads demo app",
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  if (!session?.user.onboarded) {
    redirect('/onboarding');
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TopBar />
          <main className="flex flex-row">
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
