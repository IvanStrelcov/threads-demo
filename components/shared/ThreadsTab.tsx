import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import ThreadCard from "../cards/thread-card";
import { fetchCommunityPosts } from "@/lib/actions/community.actions";

export default async function ThreadsTab({
  currentUserId,
  accountId,
  accountType,
}: {
  currentUserId: number;
  accountId: number;
  accountType: string;
}) {
  let result: any;
  if (accountType === "Community") {
    result = await fetchCommunityPosts({ communityId: accountId });
  } else {
    result = await fetchUserPosts(accountId);
  }

  if (!result) redirect("/");

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((post: any) => {
        return (
          <ThreadCard
            key={post.id}
            id={post.id}
            currentUserId={currentUserId}
            parentId={post.parentId}
            content={post.content}
            author={
              accountType === "User"
                ? { name: result.name, image: result.image, id: result.id }
                : {
                    name: post?.author?.name || "",
                    image: post?.author?.image || "",
                    id: post?.author?.id || 0,
                  }
            }
            community={post.community}
            createdAt={post.createdAt}
            comments={post.children}
          />
        );
      })}
    </section>
  );
}
