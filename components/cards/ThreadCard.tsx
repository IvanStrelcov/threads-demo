import Image from "next/image";
import Link from "next/link";
import { formatDateString } from "@/lib/utils";
import DeleteThread from "@/components/forms/DeleteThread";

interface Thread {
  id: number;
  currentUserId: number;
  parentId: number | null;
  content: string;
  author: {
    id: number;
    name: string | null;
    image: string | null;
  } | null;
  community?: {
    id: number;
    name: string | null;
    image: string | null;
  } | null;
  createdAt: Date;
  comments: {
    author: {
      image: string | null;
    } | null;
  }[];
  isComment?: boolean;
  tags: {
    userId: number;
    threadId: number;
    uuid: string;
    user: {
      id: number;
      username: string | null;
    };
  }[];
}

export default function ThreadCard({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
  tags,
}: Thread) {
  const renderContent = () => {
    const newContent = content.split(" ").map((word: string, index: number) => {
      const tag = tags.find((tag) => word.includes(tag?.user?.username || ""));
      if (
        tag &&
        tag.user &&
        tag.user.username &&
        word.includes(tag.user.username)
      ) {
        const wordAndSymbols = word.split(/(?=[\@])|(?<=[\W])|(?=\W)/g);
        wordAndSymbols[1] = tag.user.username;
        let newTag = wordAndSymbols.join('');
        return (
          <Link key={index} href={`/profile/${tag.user.id}`} className="tag">
            {newTag}&nbsp;
          </Link>
        );
      } else {
        return <span key={index}>{word}&nbsp;</span>;
      }
    });
    return newContent;
  };
  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link
              href={`/profile/${author?.id}`}
              className="relative h-11 w-11"
            >
              <Image
                src={author?.image ?? "/assets/profile.svg"}
                alt="Profile image"
                fill
                className="cursor-pointer rounded-full object-cover"
              />
            </Link>

            <div className="thread-card_bar"></div>
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author?.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author?.name}
              </h4>
            </Link>

            <p className="mt-2 text-small-regular text-light-2">
              {tags?.length ? renderContent() : content}
            </p>

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-3.5">
                <Image
                  src="/assets/heart-gray.svg"
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-cover"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="reply"
                    width={24}
                    height={24}
                    className="cursor-pointer object-cover"
                  />
                </Link>
                <Image
                  src="/assets/repost.svg"
                  alt="repost"
                  width={24}
                  height={24}
                  className="cursor-pointer object-cover"
                />
                <Image
                  src="/assets/share.svg"
                  alt="share"
                  width={24}
                  height={24}
                  className="cursor-pointer object-cover"
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        {author && (
          <DeleteThread
            threadId={id}
            currentUserId={currentUserId}
            authorId={author.id}
            parentId={parentId}
            isComment={isComment}
          />
        )}
      </div>

      {!isComment && comments?.length > 0 && (
        <div className="ml-2.5 mt-3 flex items-center gap-2">
          {comments.slice(0, 2).map((comment, index) => (
            <Image
              key={index}
              src={comment?.author?.image || "/assets/profile.svg"}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${
                index !== 0 && "-ml-5"
              } rounded-full object-cover w-6 h-6`}
            />
          ))}

          <Link href={`/thread/${id}`}>
            <p className="mt-1 text-subtle-medium text-gray-1">
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </p>
          </Link>
        </div>
      )}

      {!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className="mt-5 flex items-center"
        >
          <p className="text-subtle-medium text-gray-1">
            {formatDateString(createdAt.toString())} - {community.name}{" "}
            Community
          </p>
          <Image
            src={community.image || "/assets/profile.svg"}
            alt={community.name || "community-logo"}
            width={14}
            height={14}
            className="ml-1 rounded-full object-cover"
          />
        </Link>
      )}
    </article>
  );
}
