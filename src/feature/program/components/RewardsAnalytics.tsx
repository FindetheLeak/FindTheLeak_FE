"use client";

import { useState } from "react";

export default function RewardsAnalytics() {
  const [activeTab, setActiveTab] = useState("month");

  const weeklyData = [
    { week: "1주차", amount: "₩ 450,000", percentage: 39 },
    { week: "2주차", amount: "₩ 680,000", percentage: 59 },
    { week: "3주차", amount: "₩ 920,000", percentage: 80 },
    { week: "4주차", amount: "₩ 1,150,000", percentage: 100 },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between">
        <h2 className="text-base leading-[150%] text-[#0A0A0A]">
          리워드 · 예산 사용량
        </h2>
        <div className="flex items-center gap-2 rounded-[10px] bg-[#F8F9FA] p-1">
          <button
            onClick={() => setActiveTab("month")}
            className={`rounded-lg px-3 py-1.5 text-sm leading-[142.857%] ${
              activeTab === "month"
                ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                : "text-[#5F6368]"
            }`}
          >
            이번 달
          </button>
          <button
            onClick={() => setActiveTab("3months")}
            className={`rounded-lg px-3 py-1.5 text-sm leading-[142.857%] ${
              activeTab === "3months"
                ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                : "text-[#5F6368]"
            }`}
          >
            최근 3개월
          </button>
          <button
            onClick={() => setActiveTab("year")}
            className={`rounded-lg px-3 py-1.5 text-sm leading-[142.857%] ${
              activeTab === "year"
                ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                : "text-[#5F6368]"
            }`}
          >
            올해
          </button>
          <button
            onClick={() => setActiveTab("custom")}
            className={`rounded-lg px-3 py-1.5 text-sm leading-[142.857%] ${
              activeTab === "custom"
                ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                : "text-[#5F6368]"
            }`}
          >
            직접 설정
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14"
                stroke="#9AA0A6"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11.3333V6"
                stroke="#9AA0A6"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.66699 11.3334V3.33337"
                stroke="#9AA0A6"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.33301 11.3334V9.33337"
                stroke="#9AA0A6"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm leading-[142.857%] text-[#9AA0A6]">
              주간 리워드 지급 추이
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {weeklyData.map((data, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm leading-[142.857%] text-[#5F6368]">
                    {data.week}
                  </span>
                  <span className="text-sm leading-[142.857%] text-[#3C4043]">
                    {data.amount}
                  </span>
                </div>
                <div className="h-8 overflow-hidden rounded-[10px] bg-[#F8F9FA]">
                  <div
                    className="h-full rounded-[10px] bg-gradient-to-b from-[#3B82F6] to-[#2563EB]"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-1 rounded-[10px] border border-[#E8EAED] p-4">
            <p className="text-sm leading-[142.857%] text-[#9AA0A6]">
              누적 지급 리워드 금액
            </p>
            <p className="text-base leading-[150%] text-[#3C4043]">
              ₩ 15,800,000
            </p>
            <p className="text-xs leading-[133.333%] text-[#9AA0A6]">
              올해 누적
            </p>
          </div>

          <div className="flex flex-col gap-1 rounded-[10px] border border-[#E8EAED] p-4">
            <p className="text-sm leading-[142.857%] text-[#9AA0A6]">
              이번 달 승인 건수 / 미지급 건수
            </p>
            <p className="text-base leading-[150%] text-[#3C4043]">
              12건 / 3건
            </p>
            <p className="text-xs leading-[133.333%] text-[#9AA0A6]">총 15건</p>
          </div>

          <div className="flex flex-col gap-1 rounded-[10px] border border-[#E8EAED] p-4">
            <p className="text-sm leading-[142.857%] text-[#9AA0A6]">
              예산 대비 사용률
            </p>
            <p className="text-base leading-[150%] text-[#3C4043]">68%</p>
            <p className="text-xs leading-[133.333%] text-[#9AA0A6]">
              연간 예산 ₩50,000,000
            </p>
          </div>

          <div className="flex flex-col gap-1 rounded-[10px] border border-[#E8EAED] p-4">
            <p className="text-sm leading-[142.857%] text-[#9AA0A6]">
              평균 리워드 금액 (1건당)
            </p>
            <p className="text-base leading-[150%] text-[#3C4043]">
              ₩ 266,667
            </p>
            <p className="text-xs leading-[133.333%] text-[#9AA0A6]">
              최근 3개월 기준
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E8EAED] pt-6">
        <button className="flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm leading-[142.857%] text-[#3B82F6]">
          리워드 · 정산 상세 보기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 2H14V6"
              stroke="#3B82F6"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66699 9.33333L14.0003 2"
              stroke="#3B82F6"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
              stroke="#3B82F6"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
