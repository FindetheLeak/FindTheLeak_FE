"use client";

import { useState } from "react";

export default function SearchFilters() {
  const [search, setSearch] = useState("");
  const [programType, setProgramType] = useState("");
  const [visibility, setVisibility] = useState("");
  const [rewardType, setRewardType] = useState("");
  const [maxReward, setMaxReward] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#E8EAED] bg-white px-[25px] py-[25px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
      <div className="relative">
        <input
          type="text"
          placeholder="프로그램명, 기업명, 자산 URL 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-9 w-full rounded-lg border border-[#E8EAED] bg-[#F3F3F5] py-1 pr-3 pl-10 text-sm text-[#717182] outline-none placeholder:text-[#717182]"
        />
        <svg
          className="absolute top-2 left-3 h-5 w-5"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5005 17.5L13.8838 13.8833"
            stroke="#9AA0A6"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="#9AA0A6"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm leading-[142.857%] text-[#5F6368]">
            프로그램 유형
          </label>
          <div className="relative">
            <select
              value={programType}
              onChange={(e) => setProgramType(e.target.value)}
              className="h-9 w-full appearance-none rounded-[10px] border border-[#E8EAED] bg-white px-3 text-sm text-[#0A0A0A] outline-none"
            >
              <option value="">전체</option>
              <option value="web">웹 서비스</option>
              <option value="mobile">모바일 앱</option>
              <option value="api">API</option>
              <option value="git">오픈소스(Git)</option>
              <option value="iot">IoT</option>
              <option value="other">기타</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm leading-[142.857%] text-[#5F6368]">
            공개 여부
          </label>
          <div className="relative">
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="h-9 w-full appearance-none rounded-[10px] border border-[#E8EAED] bg-white px-3 text-sm text-[#0A0A0A] outline-none"
            >
              <option value="">전체</option>
              <option value="public">공개</option>
              <option value="private">비공개(초대 전용)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm leading-[142.857%] text-[#5F6368]">
            보상 유형
          </label>
          <div className="relative">
            <select
              value={rewardType}
              onChange={(e) => setRewardType(e.target.value)}
              className="h-9 w-full appearance-none rounded-[10px] border border-[#E8EAED] bg-white px-3 text-sm text-[#0A0A0A] outline-none"
            >
              <option value="">전체</option>
              <option value="money">금전 보상</option>
              <option value="points">포인트/명예만</option>
              <option value="mixed">혼합</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm leading-[142.857%] text-[#5F6368]">
            최대 보상금
          </label>
          <div className="relative">
            <select
              value={maxReward}
              onChange={(e) => setMaxReward(e.target.value)}
              className="h-9 w-full appearance-none rounded-[10px] border border-[#E8EAED] bg-white px-3 text-sm text-[#0A0A0A] outline-none"
            >
              <option value="">전체</option>
              <option value="500k">₩500,000 이상</option>
              <option value="5m">₩5,000,000 이상</option>
              <option value="10m">₩10,000,000 이상</option>
              <option value="30m">₩30,000,000 이상</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm leading-[142.857%] text-[#5F6368]">
            정렬
          </label>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-9 w-full appearance-none rounded-[10px] border border-[#E8EAED] bg-white px-3 text-sm text-[#0A0A0A] outline-none"
            >
              <option value="">최신 등록순</option>
              <option value="reward">보상금 높은순</option>
              <option value="reports">제보 많은순</option>
              <option value="deadline">마감 임박순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
