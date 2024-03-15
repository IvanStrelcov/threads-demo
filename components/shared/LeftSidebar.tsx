import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LeftSidebarLinks from "./LeftSidebarLinks";
import LeftSidebarLogoutButton from "./LeftSidebarLogoutButton";

export default async function LeftSideBar() {
  const session = await getServerSession(options);
  if (!session?.user) return null;

  return (
    <section className="custom-scrollbar leftsidebar">
      <LeftSidebarLinks />

      <div className="mt-10 px-6">
        <LeftSidebarLogoutButton />
      </div>
    </section>
  );
}
