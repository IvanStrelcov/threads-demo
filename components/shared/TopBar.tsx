import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Combobox from "@/components/ui/combobox";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUserCommunities } from "@/lib/actions/community.actions";

export default async function TopBar() {
  const session = await getServerSession(options);
  if (!session?.user) {
    return null;
  }
  const userCommunities = await getUserCommunities(session.user.id);
  const initial = [
    { value: "-1", label: "Personal", image: session.user.image },
  ];
  const communities = initial.concat(userCommunities.map((el) => ({
    value: String(el.id),
    label: el.name || '',
    image: el.image || '/assets/profile.svg',
  })));
  let active = { value: "-1", label: "Personal", image: session.user.image };
  if (session.user.activeCommunity) {
    active.value = String(session.user.activeCommunity);
    active.label =
      userCommunities.find((el) => el.id === session.user.activeCommunity)
        ?.name || "";
    active.image =
      userCommunities.find((el) => el.id === session.user.activeCommunity)
        ?.image || "";
  }

  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" height={28} width={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <div className="flex cursor-pointer">
            <Image
              src="/assets/logout.svg"
              alt="logout button"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* TODO: organization switcher */}
        <Combobox mappable={communities} pickable="community" active={active} userId={session.user.id} />
      </div>
    </nav>
  );
}
