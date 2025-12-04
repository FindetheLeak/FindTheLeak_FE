"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProgramHeaderProps {
  id: string;
  data: {
    name: string;
    company: string;
    logo: string;
    categories: string[];
    status: string;
    maxReward: string;
    avgReward: string;
    totalReports: string;
    avgResponseTime: string;
    startDate: string;
    duration: string;
  };
}

export default function ProgramHeader({ id, data }: ProgramHeaderProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#E8EAED] bg-white p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
      {/* Top Section: Logo, Title, Buttons */}
      <div className="flex items-start justify-between">
        <div className="flex gap-6">
          <Image
            src={data.logo}
            alt={data.name}
            width={120}
            height={120}
            className="rounded-[14px] border border-[#E8EAED]"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-base leading-6 text-[#0A0A0A]">{data.name}</h1>
            <p className="text-base leading-6 text-[#9AA0A6]">{data.company}</p>
            <div className="flex gap-2">
              {data.categories.map((category, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-[#E8EAED] px-2 py-0.5 text-xs leading-4 text-[#0A0A0A]"
                >
                  {category}
                </span>
              ))}
              <span className="rounded-lg border border-[#B9F8CF] bg-[#F0FDF4] px-2 py-0.5 text-xs leading-4 text-[#008236]">
                {data.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href={`/programs/${id}/report`}
            className="flex items-center gap-4 rounded-lg bg-[#3B82F6] px-5 py-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 5.33334V8.00001"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10.6667H8.00667"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm leading-5 text-white">
              취약점 제보하기
            </span>
          </Link>
          <button
            onClick={toggleFavorite}
            className="flex items-center gap-4 rounded-lg border border-[#E8EAED] bg-white px-3 py-2 transition-colors hover:bg-gray-50"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M7.68323 1.53C7.71245 1.47097 7.75758 1.42129 7.81353 1.38655C7.86949 1.35181 7.93404 1.3334 7.9999 1.3334C8.06576 1.3334 8.13031 1.35181 8.18626 1.38655C8.24222 1.42129 8.28735 1.47097 8.31656 1.53L9.85656 4.64933C9.95802 4.85465 10.1078 5.03227 10.293 5.16697C10.4782 5.30167 10.6933 5.38941 10.9199 5.42267L14.3639 5.92667C14.4292 5.93612 14.4905 5.96365 14.5409 6.00613C14.5913 6.04862 14.6288 6.10437 14.6492 6.16707C14.6696 6.22978 14.6721 6.29694 14.6563 6.36096C14.6405 6.42498 14.6071 6.4833 14.5599 6.52933L12.0692 8.95467C11.905 9.11473 11.7821 9.31232 11.7111 9.53042C11.6402 9.74852 11.6233 9.98059 11.6619 10.2067L12.2499 13.6333C12.2614 13.6986 12.2544 13.7657 12.2296 13.8271C12.2048 13.8885 12.1632 13.9417 12.1096 13.9807C12.056 14.0196 11.9925 14.0427 11.9265 14.0473C11.8604 14.0519 11.7944 14.0378 11.7359 14.0067L8.65723 12.388C8.45438 12.2815 8.22868 12.2258 7.99956 12.2258C7.77044 12.2258 7.54475 12.2815 7.3419 12.388L4.2639 14.0067C4.20545 14.0376 4.1395 14.0515 4.07353 14.0468C4.00757 14.0421 3.94424 14.019 3.89076 13.9801C3.83728 13.9413 3.79579 13.8881 3.771 13.8268C3.74622 13.7655 3.73914 13.6985 3.75056 13.6333L4.3379 10.2073C4.37669 9.98116 4.35989 9.74893 4.28892 9.5307C4.21796 9.31246 4.09497 9.11477 3.93056 8.95467L1.4399 6.53C1.39229 6.48402 1.35856 6.4256 1.34254 6.36138C1.32652 6.29717 1.32886 6.22975 1.34928 6.16679C1.36971 6.10384 1.40741 6.04789 1.45808 6.00532C1.50876 5.96275 1.57037 5.93527 1.6359 5.926L5.07923 5.42267C5.30607 5.38967 5.52149 5.30204 5.70695 5.16733C5.89242 5.03261 6.04237 4.85485 6.1439 4.64933L7.68323 1.53Z"
                fill={isFavorite ? "#FCD34D" : "none"}
                stroke={isFavorite ? "#FCD34D" : "#0A0A0A"}
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm leading-5 text-[#0A0A0A]">
              프로그램 즐겨찾기
            </span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-start gap-6 border-y border-[#E8EAED] py-6">
        <div className="flex w-[195px] flex-col gap-1">
          <p className="text-sm leading-5 text-[#9AA0A6]">최대 보상금</p>
          <div className="flex items-center gap-1">
            <span className="text-base leading-6 text-[#3C4043]">
              {data.maxReward}
            </span>
            <span className="text-sm leading-5 text-[#9AA0A6]">(Critical)</span>
          </div>
        </div>
        <div className="flex w-[195px] flex-col gap-1">
          <p className="text-sm leading-5 text-[#9AA0A6]">평균 보상금</p>
          <span className="text-base leading-6 text-[#3C4043]">
            {data.avgReward}
          </span>
        </div>
        <div className="flex w-[195px] flex-col gap-1">
          <p className="text-sm leading-5 text-[#9AA0A6]">총 제보 수</p>
          <span className="text-base leading-6 text-[#3C4043]">
            {data.totalReports}
          </span>
        </div>
        <div className="flex w-[195px] flex-col gap-1">
          <p className="text-sm leading-5 text-[#9AA0A6]">평균 처리 시간</p>
          <span className="text-base leading-6 text-[#3C4043]">
            {data.avgResponseTime}
          </span>
        </div>
        <div className="flex w-[195px] flex-col gap-1">
          <p className="text-sm leading-5 text-[#9AA0A6]">프로그램 시작일</p>
          <span className="text-base leading-6 text-[#3C4043]">
            {data.startDate}
          </span>
        </div>
      </div>

      {/* Duration */}
      <p className="text-sm leading-5 text-[#5F6368]">
        프로그램 기간: {data.duration}
      </p>
    </div>
  );
}
