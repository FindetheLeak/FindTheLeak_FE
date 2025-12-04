"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface TabNavigationProps {
  activeTab: string;
}

const tabs = [
  { id: "detail", label: "상세정보" },
  { id: "announcements", label: "공지사항" },
  { id: "scope", label: "취약점 제보 대상" },
  { id: "restrictions", label: "제약사항" },
  { id: "hall-of-fame", label: "명예의 전당" },
  { id: "qna", label: "Q&A" },
];

export default function TabNavigation({ activeTab }: TabNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="flex border-b border-[#E8EAED]">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={`${pathname}?tab=${tab.id}`}
          className={`flex flex-1 items-center justify-center py-4 text-center text-sm leading-5 ${
            activeTab === tab.id
              ? "border-b-2 border-[#3B82F6] bg-[#F8F9FA] text-[#3B82F6]"
              : "text-[#5F6368]"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
