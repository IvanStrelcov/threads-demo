"use client";

import { ChangeEvent, useCallback, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from "@/lib/actions/thread.actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { findWordAtCaret, replaceWordAtCaret, wrapTagsWithSpan } from "@/lib/utils";
import { fetchUsersByUsername } from "@/lib/actions/user.actions";
import { createTags } from "@/lib/actions/tag.actions";

interface TaggedUser {
  id: number;
  name: string;
  username: string;
  image: string;
}

export default function Comment({
  threadId,
  currentUserImage,
  currentUserId,
}: {
  threadId: number;
  currentUserImage: string | null;
  currentUserId: number;
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<TaggedUser[]>([]);
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const cursorPositionRef = useRef<number>(0);
  const textAreaRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    const text = values.thread;
    const usernames = text.match(/(@\w+)/g)?.map((el) => el.replace("@", ""));
    const comment = await addCommentToThread({
      commentText: values.thread,
      userId: currentUserId,
      communityId: null,
      threadId: threadId,
      path: pathname,
    });
    if (usernames && usernames.length && comment) {
      await createTags({ usernames, threadId: comment.id, path: pathname });
    }

    form.reset();
  };

  const findUsers = useCallback(
    async (username: string) => {
      // Next function fetchUsersByUsername returns array of users by username and name;
      const result = await fetchUsersByUsername({ username, currentUserId });
      if (result && result.length) {
        setSuggestions(result as TaggedUser[]);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
        setSuggestions([]);
      }
    },
    [showSuggestions, suggestions]
  );

  const handleUserSelect = (user: any) => {
    const text = form.getValues("thread");

    const { modifiedText, endIndex } = replaceWordAtCaret(
      text,
      cursorPositionRef.current,
      user.username
    );

    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.selectionEnd = endIndex;
      textAreaRef.current.focus();
    }

    form.setValue("thread", modifiedText);

    setShowSuggestions(false);
  };

  const handleTextAreaOnChange = (
    e?: ChangeEvent<HTMLInputElement> | null,
    manualText?: string
  ) => {
    let cursorPosition = 0;
    let text = "";
    if (e) {
      cursorPosition = e.target.selectionStart || 0;
      text = e.target.value;
    }
    if (manualText) {
      text = manualText;
    }
    form.setValue("thread", text);
    cursorPositionRef.current = cursorPosition;
    const { word } = findWordAtCaret(text, cursorPosition);
    if (!word.match(/@/g)) {
      setShowSuggestions(false);
    } else {
      findUsers(word.replace("@", ""));
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        {/* Name */}
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-3 relative">
              <FormLabel>
                <Image
                  src={currentUserImage ?? ""}
                  alt="Profile image"
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12"
                />
              </FormLabel>
              <div className="backdrop_input" ref={backdropRef}>
                <div className="backdrop-suggestions">
                  {showSuggestions && (
                    <div className="suggestions">
                      {suggestions.map((user) => (
                        <div
                          key={user.id}
                          className="suggestions_item"
                          onClick={() => handleUserSelect(user)}
                        >
                          {user.username}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <FormControl className="border-none bg-transparent caret-white z-40">
                <Input
                  type="text"
                  placeholder="Comment..."
                  className="no-focus text-light-1 outline-none"
                  {...field}
                  onChange={handleTextAreaOnChange}
                  ref={textAreaRef}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="comment-form_btn">
          Reply
        </Button>
      </form>
    </Form>
  );
}
