import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/home" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" height={28} width={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <div className="flex cursor-pointer">
            <Image src="/assets/logout.svg" alt="logout button" width={24} height={24} />
          </div>
        </div>

        {/* TODO: organization switcher */}
      </div>
    </nav>
  );
}
