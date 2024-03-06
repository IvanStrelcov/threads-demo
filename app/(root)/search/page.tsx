import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchUsers } from "@/lib/actions/user.actions";
import UserCard from "@/components/cards/user-card";
import Searchbar from "@/components/shared/SearchBar";

export default async function Search() {
  const session = await getServerSession(options);

  if (!session?.user) return null;

  const result: any = await fetchUsers({
    userId: Number(session.user.id),
    searchString: "",
    limit: 20,
    page: 1,
    sortBy: "desc",
  });

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>

      <Searchbar routeType='search' />

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
    </section>
  );
}
