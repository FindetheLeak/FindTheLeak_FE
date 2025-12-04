"use client";

import { useState } from "react";

export default function ProgramOverview() {
  const [activeTab, setActiveTab] = useState("all");

  const programs = [
    {
      name: "ABC 메인 웹 서비스",
      type: "웹 서비스",
      status: "공개",
      statusColor: "#00C950",
      openReports: 5,
      monthlyReports: 12,
      severities: {
        critical: 1,
        high: 3,
        medium: 4,
        low: 2,
      },
    },
    {
      name: "ABC 모바일 앱 (iOS/Android)",
      type: "모바일 앱",
      status: "공개",
      statusColor: "#00C950",
      openReports: 3,
      monthlyReports: 8,
      severities: {
        critical: 0,
        high: 1,
        medium: 2,
        low: 5,
      },
    },
    {
      name: "내부 API 서버",
      type: "API",
      status: "비공개",
      statusColor: "#FF6900",
      openReports: 4,
      monthlyReports: 7,
      severities: {
        critical: 1,
        high: 0,
        medium: 2,
        low: 1,
      },
    },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between">
        <h2 className="text-base leading-[150%] text-[#0A0A0A]">
          내 프로그램 현황
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-[10px] bg-[#F8F9FA] p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-lg px-4 py-1.5 text-sm leading-[142.857%] ${
                activeTab === "all"
                  ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                  : "text-[#5F6368]"
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className={`rounded-lg px-4 py-1.5 text-sm leading-[142.857%] ${
                activeTab === "active"
                  ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                  : "text-[#5F6368]"
              }`}
            >
              진행 중
            </button>
            <button
              onClick={() => setActiveTab("preparing")}
              className={`rounded-lg px-4 py-1.5 text-sm leading-[142.857%] ${
                activeTab === "preparing"
                  ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                  : "text-[#5F6368]"
              }`}
            >
              준비 중
            </button>
            <button
              onClick={() => setActiveTab("ended")}
              className={`rounded-lg px-4 py-1.5 text-sm leading-[142.857%] ${
                activeTab === "ended"
                  ? "bg-white text-[#3B82F6] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                  : "text-[#5F6368]"
              }`}
            >
              종료됨
            </button>
          </div>
          <button className="flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm leading-[142.857%] text-[#3B82F6]">
            프로그램 관리로 이동
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

      <div className="flex flex-col gap-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex items-start justify-between rounded-[14px] border border-[#E8EAED] p-[21px]"
          >
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center gap-3">
                <h3 className="text-base leading-[150%] text-[#0A0A0A]">
                  {program.name}
                </h3>
                <div className="flex items-center gap-1 rounded-lg border border-[#E8EAED] px-2 py-0.5">
                  <span className="text-xs leading-[133.333%] text-[#0A0A0A]">
                    {program.type}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: program.statusColor }}
                  ></div>
                  <span className="text-sm leading-[142.857%] text-[#5F6368]">
                    {program.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 rounded-[10px] bg-[#F8F9FA] px-3 py-2.5">
                    <span className="text-sm leading-[142.857%] text-[#5F6368]">
                      열린 제보:
                    </span>
                    <span className="text-sm leading-[142.857%] text-[#3C4043]">
                      {program.openReports}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 rounded-[10px] bg-[#F8F9FA] px-3 py-2.5">
                    <span className="text-sm leading-[142.857%] text-[#5F6368]">
                      이번 달 접수:
                    </span>
                    <span className="text-sm leading-[142.857%] text-[#3C4043]">
                      {program.monthlyReports}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-0 rounded-[10px] bg-[#F8F9FA] px-3 py-1">
                  <span className="text-xs leading-[133.333%] text-[#E7000B]">
                    Critical: {program.severities.critical}
                  </span>
                  <span className="text-xs leading-[133.333%] text-[#0A0A0A]">
                    {" "}
                    /{" "}
                  </span>
                  <span className="text-xs leading-[133.333%] text-[#F54900]">
                    High: {program.severities.high}
                  </span>
                  <span className="text-xs leading-[133.333%] text-[#0A0A0A]">
                    {" "}
                    /{" "}
                  </span>
                  <span className="text-xs leading-[133.333%] text-[#D08700]">
                    Medium: {program.severities.medium}
                  </span>
                  <span className="text-xs leading-[133.333%] text-[#0A0A0A]">
                    {" "}
                    /{" "}
                  </span>
                  <span className="text-xs leading-[133.333%] text-[#155DFC]">
                    Low: {program.severities.low}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-3 rounded-lg border border-[#E8EAED] bg-white px-3 py-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_192_2550)">
                    <path
                      d="M14.6663 8H10.6663L9.33301 10H6.66634L5.33301 8H1.33301"
                      stroke="#0A0A0A"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.63301 3.40667L1.33301 8.00001V12C1.33301 12.3536 1.47348 12.6928 1.72353 12.9428C1.97358 13.1929 2.31272 13.3333 2.66634 13.3333H13.333C13.6866 13.3333 14.0258 13.1929 14.2758 12.9428C14.5259 12.6928 14.6663 12.3536 14.6663 12V8.00001L12.3663 3.40667C12.256 3.18453 12.0858 2.99759 11.875 2.86686C11.6642 2.73613 11.4211 2.6668 11.173 2.66667H4.82634C4.57828 2.6668 4.33518 2.73613 4.12437 2.86686C3.91356 2.99759 3.74339 3.18453 3.63301 3.40667Z"
                      stroke="#0A0A0A"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <span className="text-sm leading-[142.857%] text-[#0A0A0A]">
                  제보 인박스 열기
                </span>
              </button>
              <button className="flex items-center gap-3 rounded-lg border border-[#E8EAED] bg-white px-3 py-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6.44754 2.75735C6.48427 2.37091 6.66376 2.01205 6.95094 1.75087C7.23812 1.4897 7.61235 1.34497 8.00054 1.34497C8.38872 1.34497 8.76296 1.4897 9.05014 1.75087C9.33732 2.01205 9.5168 2.37091 9.55354 2.75735C9.57561 3.00699 9.65751 3.24763 9.79229 3.45891C9.92707 3.67019 10.1108 3.84589 10.3278 3.97114C10.5449 4.09638 10.789 4.16749 11.0393 4.17843C11.2897 4.18938 11.539 4.13984 11.7662 4.03402C12.1189 3.87387 12.5187 3.8507 12.8875 3.96901C13.2564 4.08732 13.5681 4.33865 13.7619 4.67409C13.9557 5.00953 14.0177 5.40507 13.936 5.78373C13.8542 6.1624 13.6345 6.4971 13.3195 6.72269C13.1145 6.86658 12.9471 7.05776 12.8315 7.28004C12.7159 7.50231 12.6556 7.74916 12.6556 7.99969C12.6556 8.25021 12.7159 8.49706 12.8315 8.71934C12.9471 8.94161 13.1145 9.13279 13.3195 9.27669C13.6345 9.50228 13.8542 9.83697 13.936 10.2156C14.0177 10.5943 13.9557 10.9898 13.7619 11.3253C13.5681 11.6607 13.2564 11.9121 12.8875 12.0304C12.5187 12.1487 12.1189 12.1255 11.7662 11.9654C11.539 11.8595 11.2897 11.81 11.0393 11.8209C10.789 11.8319 10.5449 11.903 10.3278 12.0282C10.1108 12.1535 9.92707 12.3292 9.79229 12.5405C9.65751 12.7517 9.57561 12.9924 9.55354 13.242C9.5168 13.6285 9.33732 13.9873 9.05014 14.2485C8.76296 14.5097 8.38872 14.6544 8.00054 14.6544C7.61235 14.6544 7.23812 14.5097 6.95094 14.2485C6.66376 13.9873 6.48427 13.6285 6.44754 13.242C6.4255 12.9923 6.3436 12.7516 6.20878 12.5402C6.07396 12.3288 5.89018 12.1531 5.67302 12.0278C5.45586 11.9026 5.21172 11.8315 4.96126 11.8206C4.7108 11.8097 4.4614 11.8594 4.2342 11.9654C3.88146 12.1255 3.48175 12.1487 3.11287 12.0304C2.74399 11.9121 2.43232 11.6607 2.23853 11.3253C2.04473 10.9898 1.98268 10.5943 2.06444 10.2156C2.14621 9.83697 2.36594 9.50228 2.68087 9.27669C2.88595 9.13279 3.05336 8.94161 3.16893 8.71934C3.2845 8.49706 3.34484 8.25021 3.34484 7.99969C3.34484 7.74916 3.2845 7.50231 3.16893 7.28004C3.05336 7.05776 2.88595 6.86658 2.68087 6.72269C2.36638 6.49698 2.14704 6.16242 2.06547 5.78401C1.9839 5.4056 2.04594 5.01038 2.23953 4.67516C2.43311 4.33994 2.74441 4.08867 3.11293 3.97018C3.48145 3.85169 3.88086 3.87444 4.23354 4.03402C4.46071 4.13984 4.71003 4.18938 4.9604 4.17843C5.21078 4.16749 5.45482 4.09638 5.67189 3.97114C5.88896 3.84589 6.07266 3.67019 6.20745 3.45891C6.34223 3.24763 6.42413 3.00699 6.4462 2.75735"
                    stroke="#0A0A0A"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                    stroke="#0A0A0A"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm leading-[142.857%] text-[#0A0A0A]">
                  설정 편집
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
