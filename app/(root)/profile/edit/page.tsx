import AccountProfile from "@/components/forms/AccountProfile";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function ProfileEdit() {
  const session = await getServerSession(options);

  if (!session?.user) return null;

  const userData = {
    id: session?.user.id,
    username: session?.user.username || "",
    name: session?.user.name || "",
    bio: session?.user.bio || "",
    image: session?.user.image || "",
  };

  return (
    <>
      <h1 className="head-text">Edit Profile</h1>
      <p className="mt-3 text-base-regular text-light-2">Make any changes</p>

      <section className="mt-12">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </>
  );
}
