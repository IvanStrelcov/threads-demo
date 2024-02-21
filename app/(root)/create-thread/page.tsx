import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
import PostThread from "@/components/forms/post-thread";

export default async function CreateThread() {
  const session = await getServerSession(options);
  if (!session?.user) return null;

  return (
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={session.user.id}/>
    </>
  );
}