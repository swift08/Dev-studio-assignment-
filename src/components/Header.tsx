import Link from "next/link";
import { inriaBold } from "@/lib/fonts";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className={`${inriaBold.className} text-[28px] font-bold leading-[1] text-black`}>
          AAVORide
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="#login" className={`${inriaBold.className} text-[18px] font-bold leading-[1] text-black hover:opacity-80`}>
            Login
          </Link>
          <Link
            href="#signup"
            className="rounded-lg bg-[var(--aavoride-orange)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--aavoride-orange-hover)] sm:px-5 sm:py-2.5 sm:text-base"
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}
