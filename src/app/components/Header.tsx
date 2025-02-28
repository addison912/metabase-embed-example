import Link from "next/link";
import Image from "next/image";
// import { UserButton, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-linear-307 fixed left-0 top-0 z-50 flex h-[var(--header-height)] w-full items-center justify-center border-b-[6px] border-cyan-600 from-slate-900 to-cyan-900 px-16">
      <nav className="flex w-full max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <Link className="font-brand flex items-center" href="/">
          <Image
            src="/images/logo_abstract.png"
            alt="Vendor Portal Logo"
            width={48}
            height={48}
            className="h-full"
          />
          <span className="ml-[2px] mt-1.5 h-full tracking-[-0.08rem] text-orange-500">
            <span className="text-[2rem]">V</span>
            <span className="text-[1.6rem]">ENDOR </span>
            <span className="text-[2rem]">P</span>
            <span className="text-[1.6rem]">ORTAL</span>
          </span>
        </Link>
        <div>
          {/* <SignedOut>
            <Link href="/get-started">
              <button className="btn btn-blue px-4 py-2 text-lg">
                Get Started
              </button>
            </Link>
          </SignedOut>
          <UserButton userProfileUrl="/profile" /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
