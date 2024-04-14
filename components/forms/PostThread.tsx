"use client";

import { useState, useRef, useCallback, ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createThread } from "@/lib/actions/thread.actions";
import { fetchUsersByUsername } from "@/lib/actions/user.actions";
import { ThreadValidation } from "@/lib/validations/thread";
import { createTags } from "@/lib/actions/tag.actions";
import {
  findWordAtCaret,
  replaceWordAtCaret,
  wrapTagsWithSpan,
} from "@/lib/utils";

interface TaggedUser {
  id: number;
  name: string;
  username: string;
  image: string;
}
interface Props {
  userId: number;
  organizationId: number | null;
}

export default function PostThread({ userId, organizationId }: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<TaggedUser[]>([]); // here i want to save users who I can tag
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const cursorPositionRef = useRef<number>(0);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    const text = values.thread;
    const usernames = text.match(/(@\w+)/g)?.map((el) => el.replace("@", ""));
    const thread = await createThread({
      text: values.thread,
      author: userId,
      communityId: organizationId,
      path: pathname,
    });
    if (usernames && usernames.length && thread) {
      await createTags({ usernames, threadId: thread.id, path: pathname });
    }

    router.push("/");
  };

  const findUsers = useCallback(
    async (username: string) => {
      // Next function fetchUsersByUsername returns array of users by username and name;
      const result = await fetchUsersByUsername({
        username,
        currentUserId: userId,
      });
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

    if (backdropRef.current && backdropRef.current.firstElementChild) {
      backdropRef.current.firstElementChild.innerHTML = wrapTagsWithSpan(
        modifiedText,
        "tag"
      );
    }

    setShowSuggestions(false);
  };

  const handleTextAreaOnChange = (
    e?: ChangeEvent<HTMLTextAreaElement> | null,
    manualText?: string
  ) => {
    let cursorPosition = 0;
    let text = "";
    if (e) {
      cursorPosition = e.target.selectionStart;
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

    if (backdropRef.current && backdropRef.current.firstElementChild) {
      backdropRef.current.firstElementChild.innerHTML = wrapTagsWithSpan(
        text,
        "tag"
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 mt-10"
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="relative flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Content
              </FormLabel>
              <div className="backdrop" ref={backdropRef}>
                <div className="backdrop_content"></div>
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
              <FormControl className="no-focus border border-dark-4 bg-transparent text-transparent caret-white z-40">
                <Textarea
                  rows={15}
                  {...field}
                  onChange={handleTextAreaOnChange}
                  ref={textAreaRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          Post Thread
        </Button>
      </form>
    </Form>
  );
}
