"use client";

import { useState } from "react";

const announcements = [
  {
    id: 1,
    title: "2024-12-01: 크리스마스 보너스 이벤트 진행",
    date: "2024-12-01",
    badge: "이벤트",
    badgeColor: "bg-[#DCFCE7] text-[#008236]",
    preview:
      "12월 한 달간 Critical 취약점 발견 시 보상금이 2배로 지급됩니다...",
  },
  {
    id: 2,
    title: "2024-11-20: 제보 대상 범위 확대 안내",
    date: "2024-11-20",
    badge: "정책 변경",
    badgeColor: "bg-[#FFEDD4] text-[#CA3500]",
    preview: "새로운 API 엔드포인트가 제보 대상에 추가되었습니다...",
  },
  {
    id: 3,
    title: "2024-11-10: 시스템 점검 안내",
    date: "2024-11-10",
    badge: "시스템 점검",
    badgeColor: "bg-[#DBEAFE] text-[#1447E6]",
    preview: "11월 15일 새벽 2시~4시 시스템 점검이 예정되어 있습니다...",
  },
];

export default function ProgramAnnouncements() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-base leading-6 text-[#0A0A0A]">
          프로그램 공지사항
        </h2>
        <p className="text-sm leading-5 text-[#5F6368]">
          기업이 연구자에게 전달하는 중요 안내사항입니다.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="flex flex-col gap-3 rounded-[10px] border border-[#E8EAED] p-5"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg leading-[27px] text-[#0A0A0A]">
                {announcement.title}
              </h3>
              <button
                onClick={() =>
                  setExpandedId(
                    expandedId === announcement.id ? null : announcement.id
                  )
                }
                className="flex h-5 w-5 items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#3B82F6"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5.33301 1.33325V3.99992"
                    stroke="#9AA0A6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.667 1.33325V3.99992"
                    stroke="#9AA0A6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z"
                    stroke="#9AA0A6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 6.66675H14"
                    stroke="#9AA0A6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm leading-5 text-[#9AA0A6]">
                  {announcement.date}
                </span>
              </div>
              <span
                className={`rounded-lg px-2 py-0.5 text-xs leading-4 ${announcement.badgeColor}`}
              >
                {announcement.badge}
              </span>
            </div>

            <p className="text-sm leading-[22.75px] text-[#5F6368]">
              {announcement.preview}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
