"use client";

import { usePathname } from "next/navigation";
import { Status } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  changeRequestStatus,
  changeInvitationStatus,
} from "@/lib/actions/community.actions";
import { addUserToCommunity, removeUserFromCommunity } from "@/lib/actions/user.actions";

export default function RequestButtonAction({
  currentUserId,
  currentCommunityId,
  request,
  invitation,
}: {
  currentUserId: number;
  currentCommunityId: number;
  request: Status | null;
  invitation: Status | null;
}) {
  const pathname = usePathname();

  const onHandleAction = async ({
    status,
    forceUpdate,
    isRequest,
    removeFromCommunity,
  }: {
    status: Status;
    forceUpdate: boolean;
    isRequest?: boolean;
    removeFromCommunity?: boolean;
  }) => {
    if (isRequest) {
      changeRequestStatus({
        userId: currentUserId,
        communityId: currentCommunityId,
        status,
        path: pathname,
      });
    } else {
      await changeInvitationStatus({
        userId: currentUserId,
        communityId: currentCommunityId,
        status,
        applyToRequest: forceUpdate,
        path: pathname,
      });
      if (status === Status.ACCEPTED) {
        await addUserToCommunity({
          userId: currentUserId,
          communityId: currentCommunityId,
          path: pathname,
        });
      }
      if (removeFromCommunity) {
        await removeUserFromCommunity({
          userId: currentUserId,
          communityId: currentCommunityId,
          path: pathname,
        });
      }
    }
  };

  return (
    <>
      {invitation === Status.PENDING ? (
        <div className="flex gap-4">
          <Button
            className="action_btn bg-primary-500"
            onClick={() =>
              onHandleAction({ status: Status.ACCEPTED, forceUpdate: true })
            }
          >
            Accept Invitation
          </Button>
          <Button
            className="action_btn transparent_btn"
            onClick={() =>
              onHandleAction({ status: Status.CANCELED, forceUpdate: true })
            }
          >
            Cancel Invitation
          </Button>
        </div>
      ) : request === Status.PENDING ? (
        <Button
          className="action_btn bg-remove"
          onClick={() =>
            onHandleAction({ status: Status.CANCELED, forceUpdate: true })
          }
        >
          Cancel Request
        </Button>
      ) : request === Status.ACCEPTED ? (
        <Button
          className="action_btn bg-remove"
          onClick={() =>
            onHandleAction({ status: Status.CANCELED, forceUpdate: true, removeFromCommunity: true })
          }
        >
          Live Community
        </Button>
      ) : (
        <Button
          className="action_btn bg-primary-500"
          onClick={() =>
            onHandleAction({
              status: Status.PENDING,
              forceUpdate: false,
              isRequest: true,
            })
          }
        >
          Send Request
        </Button>
      )}
    </>
  );
}
