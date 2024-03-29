import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCard from "@/components/cards/CommunityCard";
import SearchBar from "@/components/shared/SearchBar";
import Pagination from "@/components/shared/Pagination";

export default async function Communities({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const session = await getServerSession(options);

  if (!session?.user) return null;

  const result: any = await fetchCommunities({
    searchString: searchParams.q,
    pageSize: 25,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    sortBy: "desc",
  });

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-2 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="head-text">Communities</h1>
        <Link
          href="/communities/create"
          className="h-auto rounded-lg bg-primary-500 px-5 py-3 text-small-regular text-light-1"
        >
          Create Community
        </Link>
      </div>
      <div className="mt-5">
        <SearchBar routeType="communities" />
      </div>
      <section className="mt-9 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </section>

      <Pagination
        path="communities"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </>
  );
}
