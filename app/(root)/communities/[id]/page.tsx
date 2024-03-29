import { getServerSession } from "next-auth";
import Image from "next/image";
import { Status } from "@prisma/client";

import { options } from "@/app/api/auth/[...nextauth]/options";

import {
  fetchCommunity,
  fetchRequest,
  fetchInvitation,
  fetchCommunityRequests,
} from "@/lib/actions/community.actions";
import { communityTabs } from "@/lib/constants";

import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from "@/components/cards/UserCard";
import AddCommunityMember from "@/components/forms/AddCommunityMember";
import RequestButtonAction from "@/components/shared/RequestButtonAction";

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

  const request = await fetchRequest({
    userId: session.user.id,
    communityId: community.id,
  });
  const invitation = await fetchInvitation({
    userId: session.user.id,
    communityId: community.id,
  });
  const communityRequests = await fetchCommunityRequests({
    communityId: community.id,
    status: Status.PENDING,
  });

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

      {session.user.id !== community.creatorId ? (
        <div className="text-light-2 mt-4">
          <RequestButtonAction
            currentUserId={session.user.id}
            currentCommunityId={community.id}
            request={request?.status || null}
            invitation={invitation?.status || null}
          />
        </div>
      ) : null}

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
                    className="rounded-full object-cover w-6 h-6"
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
                  status={member.requests?.[0]?.status}
                  isAdmin={
                    community.creatorId === session?.user.id &&
                    session?.user.id !== member.id // this is simple solution for the admin can not remove himself
                  }
                  communityId={community.id}
                />
              ))}
            </section>
          </TabsContent>
          <TabsContent value="requests" className="w-full text-light-1">
            <section className="mt-9 flex flex-col gap-10">
              {communityRequests.length ? (
                communityRequests?.map((request: any) => (
                  <UserCard
                    key={request.user.id}
                    id={request.user.id}
                    name={request.user.name}
                    username={request.user.username}
                    image={request.user.image}
                    personType="User"
                    status={request.status}
                    isAdmin={
                      community.creatorId === session?.user.id &&
                      session?.user.id !== request.user.id // this is simple solution for the admin can not remove himself
                    }
                    communityId={community.id}
                  />
                ))
              ) : (
                <p className="no-result">No requests</p>
              )}
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
