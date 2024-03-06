import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads-demo",
  description: "A Next.js 14 Meta Threads Application clone",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex justify-center items-center min-h-screen">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
