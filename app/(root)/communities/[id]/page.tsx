import { getServerSession } from "next-auth";
import Image from "next/image";

import { options } from "@/app/api/auth/[...nextauth]/options";

import { fetchCommunity } from "@/lib/actions/community.actions";
import { communityTabs } from "@/lib/constants";

import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from "@/components/cards/user-card";
import AddCommunityMember from "@/components/forms/AddCommunityMember";

export default async function CommunityDetail({
  params,
}: {
  params: { id: string };
}) {
  if (!params.id || isNaN(params.id as any)) return null;

  const session = await getServerSession(options);

  if (!session?.user) return null;

  const community: any = await fetchCommunity({
    communityId: Number(params.id),
  });
  if (!community) return null;

  return (
    <section className="relative">
      <ProfileHeader
        accountId={community.id}
        authUserId={session.user.id}
        name={community.name}
        username={community.username}
        image={community.image}
        bio={community.bio}
        type="Community"
      />

      {session.user.id === community.creatorId && (
        <div className="text-light-2 mt-4">
          <AddCommunityMember
            currentUserId={session.user.id}
            currentCommunityId={community.id}
          />
        </div>
      )}

      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {communityTabs.map((tab) => {
              return (
                <TabsTrigger key={tab.label} value={tab.value} className="tab">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={24}
                    height={24}
                    className="object-contain w-6 h-6"
                  />
                  <p className="max-sm:hidden">{tab.label}</p>

                  {tab.label === "Threads" && (
                    <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                      {community.threads.length}
                    </p>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="threads" className="w-full text-light-1">
            <ThreadsTab
              currentUserId={session.user.id}
              accountId={community.id}
              accountType="Community"
            />
          </TabsContent>

          <TabsContent value="members" className="w-full text-light-1">
            <section className="mt-9 flex flex-col gap-10">
              {community?.members?.map((member: any) => (
                <UserCard
                  key={member.id}
                  id={member.id}
                  name={member.name}
                  username={member.username}
                  image={member.image}
                  personType="User"
                  isAdmin={
                    community.creatorId === session?.user.id &&
                    session?.user.id !== member.id // this is simple solution for the admin can not remove himself
                  }
                  communityId={community.id}
                />
              ))}
            </section>
          </TabsContent>
          {/* <TabsContent value="requests" className="w-full text-light-1">
            <ThreadsTab
              currentUserId={session.user.id}
              accountId={community.id}
              accountType="Community"
            />
          </TabsContent> */}
        </Tabs>
      </div>
    </section>
  );
}
