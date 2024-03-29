import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchReplies, fetchUser } from "@/lib/actions/user.actions";
import { profileTabs } from "@/lib/constants";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ThreadsTab from "@/components/shared/ThreadsTab";

export default async function Profile({ params }: { params: { id: string } }) {
  if (!params.id || isNaN(params.id as any)) return null;

  const session = await getServerSession(options);

  if (!session?.user) return null;

  const user: any = await fetchUser(Number(params.id));
  if (!user) return null;

  const replies = await fetchReplies({ userId: Number(params.id) });

  return (
    <section className="relative">
      <ProfileHeader
        accountId={user.id}
        authUserId={session.user.id}
        name={user.name}
        username={user.username}
        image={user.image}
        bio={user.bio}
      />

      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {profileTabs.map((tab) => {
              return (
                <TabsTrigger key={tab.label} value={tab.value} className="tab">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />
                  <p className="max-sm:hidden">{tab.label}</p>

                  {tab.label === "Threads" && (
                    <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                      {user.threads.length}
                    </p>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <TabsContent
            key="content-threads"
            value="threads"
            className="w-full text-light-1"
          >
            <ThreadsTab
              currentUserId={session.user.id}
              accountId={user.id}
              accountType="User"
            />
          </TabsContent>

          <TabsContent
            key="content-replies"
            value="replies"
            className="w-full text-light-1"
          >
            <section className="mt-10 flex flex-col gap-5">
              {replies.length > 0 ? (
                <>
                  {replies.map((reply) => {
                    return (
                      <Link key={reply.id} href={`/thread/${reply.parentId}`}>
                        <article className="activity-card">
                          <Image
                            src={reply.author.image ?? "/assets/profile.svg"}
                            alt="author logo"
                            width={20}
                            height={20}
                            className="rounded-full object-cover w-5 h-5"
                          />
                          <p className="!text-small-regular text-light-1">
                            <span className="mr-1 text-primary-500">
                              {reply.author.name}
                            </span>{" "}
                            replied to your thread
                          </p>
                        </article>
                      </Link>
                    );
                  })}
                </>
              ) : (
                <p className="!text-base-regular text-light-3">
                  No activity yet
                </p>
              )}
            </section>
          </TabsContent>

          <TabsContent
            key="content-tagged"
            value="tagged"
            className="w-full text-light-1"
          >
            <ThreadsTab
              currentUserId={session.user.id}
              accountId={user.id}
              accountType="User"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
