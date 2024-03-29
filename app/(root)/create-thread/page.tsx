import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import PostThread from "@/components/forms/PostThread";

export default async function CreateThread() {
  const session = await getServerSession(options);
  if (!session?.user) return null;

  return (
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={session.user.id} organizationId={session.user.activeCommunity}/>
    </>
  );
}
