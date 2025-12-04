"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <header className="flex h-[100px] w-full items-center justify-center gap-2.5 border-b border-[#BDC1C6] bg-[#F8F9FA] px-10 py-6">
      <div className="flex w-full max-w-[1360px] shrink-0 items-center justify-between">
        <div className="flex items-center gap-20">
          <Link href="/mypage">
            <Image
              src="/logo.svg"
              alt="FindtheLeaks"
              width={174}
              height={24}
              priority
            />
          </Link>
          <nav className="flex items-center gap-[57px]">
            <Link
              href="/mypage"
              className={`text-base leading-[100%] ${
                isActive("/mypage") && !pathname.includes("type=company")
                  ? "text-[#3B82F6]"
                  : "text-[#5F6368]"
              }`}
            >
              대시보드
            </Link>
            <Link
              href="/programs"
              className={`text-base leading-[100%] ${
                pathname.includes("programs")
                  ? "text-[#3B82F6]"
                  : "text-[#5F6368]"
              }`}
            >
              프로그램
            </Link>
            {/* <Link
              href="/leaderboard"
              className={`text-base leading-[100%] ${
                isActive("/leaderboard") ? "text-[#3B82F6]" : "text-[#5F6368]"
              }`}
            >
              리더보드
            </Link> */}
            {/* <Link
              href="/notices"
              className={`text-base leading-[100%] ${
                isActive("/notices") ? "text-[#3B82F6]" : "text-[#5F6368]"
              }`}
            >
              공지사항
            </Link> */}
          </nav>
        </div>
        <div className="flex items-center justify-end gap-6">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-[#DADCE0]">
            <Image
              src="/logo.svg"
              alt="Profile"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
