import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import MobileNav from "@/components/shared/MobileNav";

const Navbar = () => {
  return (
    <nav className="border border-border flex-between fixed z-50 w-full bg-background px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <p className="text-[26px] font-extrabold">Fuse</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
