import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchThreadById } from "@/lib/actions/thread.actions";
import ThreadCard from "@/components/cards/thread-card";
import Comment from "@/components/forms/comment";

export default async function Thread({ params }: { params: { id: string } }) {
  if (!params.id || isNaN(params.id as any)) return null;

  const session = await getServerSession(options);

  if (!session?.user) return null;

  const thread = await fetchThreadById(Number(params.id));
  if (!thread) return null;

  return (
    <section className="relative">
      <div>
        <ThreadCard
          key={thread.id}
          id={thread.id}
          currentUserId={session?.user.id}
          parentId={thread.parentId}
          content={thread.content}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      </div>

      <div className="mt-7">
        <Comment
          threadId={thread.id}
          currentUserImage={session.user.image}
          currentUserId={session.user.id}
        />
      </div>

      <div className="mt-10">
        {thread.children.map((comment) => {
          return (
            <ThreadCard
              key={comment.id}
              id={comment.id}
              content={comment.content}
              currentUserId={session.user.id}
              parentId={thread.id}
              createdAt={comment.createdAt}
              comments={comment.children}
              author={{
                id: comment.author?.id || 0,
                name: comment.author?.name || "",
                image: comment.author?.image || null,
              }}
              isComment
            />
          );
        })}
      </div>
    </section>
  );
}
