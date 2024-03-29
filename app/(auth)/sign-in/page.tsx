import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignInForm from "@/components/forms/SignIn";
import Image from "next/image";

export default async function SignIn() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/");
  }
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[900px] flex-col space-y-2.5 px-9 pb-9 rounded-lg md:-mt-32 bg-gray-950">
        <div className="flex h-20 w-full justify-center mb-4 items-end rounded-lg py-3 md:h-36">
          <div className="flex flex-col items-center gap-4 w-32 text-white md:w-36">
            <Image src="/assets/logo.svg" alt="logo" width={48} height={48} />
            <h1 className="">Threads</h1>
          </div>
        </div>
        <SignInForm />
      </div>
    </main>
  );
}
