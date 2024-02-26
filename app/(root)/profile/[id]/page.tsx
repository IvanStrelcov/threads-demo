import { getServerSession } from "next-auth";
import Image from "next/image";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchUser } from "@/lib/actions/user.actions";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/lib/constants";
import { UserModel } from "@/lib/definitions";
import ThreadsTab from "@/components/shared/ThreadsTab";

export default async function Profile({ params }: { params: { id: string } }) {
  if (!params.id || isNaN(params.id as any)) return null;

  const session = await getServerSession(options);

  if (!session?.user) return null;

  const user: any = await fetchUser(Number(params.id));
  if (!user) return null;

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
                    className="object-contain"
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
          {profileTabs.map((tab) => {
            return (
              <TabsContent
                key={`content-${tab.label}`}
                value={tab.value}
                className="w-full text-light-1"
              >
                <ThreadsTab
                  currentUserId={session.user.id}
                  accountId={user.id}
                  accountType="User"
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
