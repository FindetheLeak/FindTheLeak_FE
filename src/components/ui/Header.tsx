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
          <Link href="/">
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
              href="/mypage?type=company"
              className={`text-base leading-[100%] ${
                pathname.includes("type=company")
                  ? "text-[#3B82F6]"
                  : "text-[#5F6368]"
              }`}
            >
              프로그램
            </Link>
            <Link
              href="/leaderboard"
              className={`text-base leading-[100%] ${
                isActive("/leaderboard") ? "text-[#3B82F6]" : "text-[#5F6368]"
              }`}
            >
              리더보드
            </Link>
            <Link
              href="/notices"
              className={`text-base leading-[100%] ${
                isActive("/notices") ? "text-[#3B82F6]" : "text-[#5F6368]"
              }`}
            >
              공지사항
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end gap-6">
          <button className="flex items-center gap-2 rounded-[99px] border border-[#BDC1C6] bg-white px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5007 14C10.5007 14.1326 10.4481 14.2598 10.3543 14.3536C10.2605 14.4473 10.1333 14.5 10.0007 14.5H5.99997C5.86734 14.5 5.74014 14.4473 5.64635 14.3536C5.55257 14.2598 5.49988 14.1326 5.49988 14C5.49988 13.8674 5.55257 13.7402 5.64635 13.6464C5.74014 13.5527 5.86734 13.5 5.99997 13.5H10.0007C10.1333 13.5 10.2605 13.5527 10.3543 13.6464C10.4481 13.7402 10.5007 13.8674 10.5007 14ZM13.8645 10.9963C13.5169 10.3988 13.0012 8.70813 13.0012 6.5C13.0012 5.17392 12.4743 3.90215 11.5365 2.96447C10.5986 2.02678 9.32662 1.5 8.00031 1.5C6.674 1.5 5.40201 2.02678 4.46417 2.96447C3.52632 3.90215 2.99945 5.17392 2.99945 6.5C2.99945 8.70875 2.48311 10.3988 2.13617 10.9963C2.04758 11.1482 2.00061 11.3207 2.00001 11.4966C1.9994 11.6724 2.04518 11.8453 2.13274 11.9978C2.22029 12.1503 2.34651 12.277 2.49868 12.3652C2.65084 12.4534 2.82358 12.4999 2.99945 12.5H13.0012C13.177 12.4998 13.3496 12.4532 13.5017 12.365C13.6538 12.2768 13.7799 12.15 13.8674 11.9975C13.9549 11.845 14.0006 11.6722 14 11.4964C13.9994 11.3206 13.9524 11.1481 13.8638 10.9963H13.8645Z"
                fill="#9AA0A6"
              />
            </svg>
            <div className="flex items-center gap-1">
              <span className="text-xs leading-[140%] text-[#9AA0A6]">
                알림
              </span>
              <span className="text-xs leading-[140%] text-[#80868B]">0</span>
            </div>
          </button>
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
