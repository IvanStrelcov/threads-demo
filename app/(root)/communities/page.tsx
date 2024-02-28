import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Communities() {
  return (
    <section className="">
      <h1 className="head-text mb-10">Communities</h1>

      <section>
        <Link
          href="/communities/create"
          className="rounded-lg bg-primary-500 px-5 py-3 text-small-regular text-light-1"
        >
          Create Community
        </Link>
      </section>
    </section>
  )
}