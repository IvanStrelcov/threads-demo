import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import AccountProfile from "@/components/forms/account-profile";

export default async function Onboarding() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }

  if (session?.user.onboarded) {
    redirect("/");
  }

  const userData = {
    id: session.user.id,
    username: session.user.username,
    name: session.user.name,
    bio: session.user.bio || "",
    image: session.user.image || "",
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-center px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle={"Continue"} />
      </section>
    </main>
  );
}
