import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchActivities } from "@/lib/actions/user.actions";

export default async function Activity() {
  const session = await getServerSession(options);

  if (!session?.user) return null;

  const activities = await fetchActivities({ userId: session.user.id });

  return (
    <section className="">
      <h1 className="head-text mb-10">Activity</h1>

      <section className="mt-10 flex flex-col gap-5">
        {activities.length > 0 ? (
          <>
            {activities.map((activity) => {
              return (
                <Link key={activity.id} href={`/thread/${activity.parentId}`}>
                  <article className="activity-card">
                    <Image
                      src={activity.author.image ?? "/assets/profile.svg"}
                      alt="author logo"
                      width={20}
                      height={20}
                      className="rounded-full object-contain w-5 h-5"
                    />
                    <p className="!text-small-regular text-light-1">
                      <span className="mr-1 text-primary-500">{activity.author.name}</span> replied to your thread
                    </p>
                  </article>
                </Link>
              );
            })}
          </>
        ) : (
          <p className="!text-base-regular text-light-3">No activity yet</p>
        )}
      </section>
    </section>
  );
}
