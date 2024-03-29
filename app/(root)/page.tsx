import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchPosts } from "@/lib/actions/thread.actions";
import ThreadCard from "@/components/cards/thread-card";
import Pagination from "@/components/shared/Pagination";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const session = await getServerSession(options);

  const result = await fetchPosts({
    limit: 30,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => {
              return (
                <ThreadCard
                  key={post.id}
                  id={post.id}
                  currentUserId={session?.user.id}
                  parentId={post.parentId}
                  content={post.content}
                  author={post.author}
                  community={post.community}
                  createdAt={post.createdAt}
                  comments={post.children}
                />
              );
            })}
          </>
        )}
      </section>
      <Pagination
        path="/"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </>
  );
}
