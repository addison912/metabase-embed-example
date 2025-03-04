import Link from "next/link";
import Image from "next/image";
import { UserButton, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-[var(--header-height)] w-full items-center justify-center border-b-[6px] border-cyan-600 bg-linear-307 from-slate-900 to-cyan-900 px-16">
      <nav className="flex w-full max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <Link className="font-brand flex items-center" href="/">
          <Image
            src="/images/logo_abstract.png"
            alt="Vendor Analiytics Logo"
            width={48}
            height={48}
            className="h-full"
          />
          <span className="mt-1.5 ml-[2px] h-full tracking-[-0.08rem] text-orange-500">
            <span className="text-[2rem]">V</span>
            <span className="text-[1.6rem]">ENDOR </span>
            <span className="text-[2rem]">A</span>
            <span className="text-[1.6rem]">NALYTICS</span>
          </span>
        </Link>
        <div>
          <SignedOut>
            <Link href="/analytics">
              <button className="btn btn-blue px-4 py-2 text-lg">
                Get Started
              </button>
            </Link>
          </SignedOut>
          <UserButton userProfileUrl="/profile" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
