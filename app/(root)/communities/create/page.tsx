import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
import CommunityProfile from "@/components/forms/community-profile";

export default async function CommunitiesCreate() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }

  if (!session?.user.onboarded) {
    redirect("/onboarding");
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
      <h1 className="head-text">Create community</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Build Your Community, Enhance Your Experience
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <CommunityProfile user={userData} community={null} btnTitle={"Create"} />
      </section>
    </main>
  )
}