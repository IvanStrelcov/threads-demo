import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCard from "@/components/cards/community-card";

export default async function Communities() {
  const session = await getServerSession(options);

  if (!session?.user) return null;

  const result: any = await fetchCommunities({
    searchString: "",
    pageSize: 20,
    pageNumber: 1,
    sortBy: "desc",
  });

  return (
    <section className="">
      <div className="flex justify-between items-center">
        <h1 className="head-text">Communities</h1>
        <Link
          href="/communities/create"
          className="h-auto rounded-lg bg-primary-500 px-5 py-3 text-small-regular text-light-1"
        >
          Create Community
        </Link>
      </div>

      <div className="mt-14 flex flex-col gap-9">
        {result.communities.length === 0 ? (
          <p className="no-result">No communities</p>
        ) : (
          <>
            {result.communities.map((community: any) => {
              return (
                <CommunityCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  image={community.image}
                  bio={community.bio}
                  members={community.members}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
