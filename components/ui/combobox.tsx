"use client";

import { useState, useEffect, useMemo } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { changeActiveCommunity } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";

export default function Combobox({
  mappable,
  pickable,
  active,
  userId,
}: {
  mappable: { value: string; label: string; image: string | null }[];
  pickable: string;
  active: { value: string; label: string; image: string | null };
  userId: number;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(active.value);

  useEffect(() => {
    setValue(active.value);
  }, [active]);

  const changeCommunity = async (activeCommunityId: number | null) => {
    await changeActiveCommunity({ userId, activeCommunityId, path: pathname });
  };

  useEffect(() => {
    const activeCommunity = value === "-1" ? null : Number(value);
    changeCommunity(activeCommunity);
  }, [value]);

  const renderCurrent = useMemo(() => {
    const el = mappable.find((item) => item.value === value);
    if (el) {
      return (
        <div className="flex items-center gap-4">
          <Image
            src={el.image || "/assets/profile.svg"}
            alt="community-selector-logo"
            width={24}
            height={24}
            className="rounded-full object-cover w-6 h-6"
          />
          <p>{el.label}</p>
        </div>
      );
    }
    return null;
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] sm:w-[250px] justify-between"
        >
          {value ? (
            renderCurrent
          ) : (
            <div className="flex items-center gap-2">
              <Image
                src="/assets/profile.svg"
                alt="logo"
                width={20}
                height={20}
                className="rounded-full object-cover w-5 h-5"
              />
              <p className="">Select {pickable}...</p>
            </div>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] sm:w-[250px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${pickable}...`} />
          <CommandEmpty>No {pickable} found.</CommandEmpty>
          <CommandGroup>
            {mappable.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <div className="flex gap-2 items-center">
                  <Image
                    src={item.image || "/assets/profile.svg"}
                    alt="community-logo"
                    width={20}
                    height={20}
                    className="rounded-full object-cover w-5 h-5"
                  ></Image>
                  <p className="">{item.label}</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
