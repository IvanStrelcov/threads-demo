import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchUsers } from "@/lib/actions/user.actions";
import UserCard from "@/components/cards/UserCard";
import SearchBar from "@/components/shared/SearchBar";
import Pagination from "@/components/shared/Pagination";

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const session = await getServerSession(options);

  if (!session?.user) return null;

  const result: any = await fetchUsers({
    userId: Number(session.user.id),
    searchString: searchParams.q || "",
    limit: 20,
    page: searchParams?.page ? +searchParams.page : 1,
    sortBy: "asc",
  });

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>

      <SearchBar routeType="search" />

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="no-result">No users</p>
        ) : (
          <>
            {result.users.map((person: any) => {
              return (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  image={person.image}
                  personType={"User"}
                />
              );
            })}
          </>
        )}
      </div>

      <Pagination
        path="search"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </section>
  );
}
