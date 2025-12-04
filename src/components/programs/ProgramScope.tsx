"use client";

import { useState } from "react";

export default function ProgramScope() {
  const [outOfScopeExpanded, setOutOfScopeExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-base leading-6 text-[#0A0A0A]">취약점 제보 대상 (In-Scope)</h2>
        <p className="text-sm leading-5 text-[#5F6368]">아래 자산에서 발견된 취약점만 보상 대상입니다.</p>
      </div>

      {/* 웹 서비스 */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0)">
              <path
                d="M10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332Z"
                stroke="#3B82F6"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.0003 1.6665C7.86052 3.9133 6.66699 6.89712 6.66699 9.99984C6.66699 13.1026 7.86052 16.0864 10.0003 18.3332C12.1401 16.0864 13.3337 13.1026 13.3337 9.99984C13.3337 6.89712 12.1401 3.9133 10.0003 1.6665Z"
                stroke="#3B82F6"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.66699 10H18.3337"
                stroke="#3B82F6"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <h3 className="text-base leading-6 text-[#0A0A0A]">웹 서비스 (Web)</h3>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { url: "https://www.abc.com", type: "웹사이트", desc: "메인 웹사이트" },
            { url: "https://api.abc.com", type: "API", desc: "REST API 엔드포인트" },
            { url: "https://admin.abc.com", type: "관리자 페이지", desc: "로그인 필요, 테스트 계정 제공" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-2 rounded-[10px] border border-[#E8EAED] p-4">
              <div className="flex items-center gap-2">
                <a href={item.url} className="font-mono text-base leading-6 text-[#3B82F6]">
                  {item.url}
                </a>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 2H14V6"
                    stroke="#9AA0A6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66699 9.33333L14.0003 2"
                    stroke="#9AA0A6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                    stroke="#9AA0A6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-[#E8EAED] px-2 py-0.5 text-xs leading-4 text-[#0A0A0A]">
                  {item.type}
                </span>
                <span className="text-sm leading-5 text-[#9AA0A6]">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 모바일 앱 */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M14.167 1.6665H5.83366C4.91318 1.6665 4.16699 2.4127 4.16699 3.33317V16.6665C4.16699 17.587 4.91318 18.3332 5.83366 18.3332H14.167C15.0875 18.3332 15.8337 17.587 15.8337 16.6665V3.33317C15.8337 2.4127 15.0875 1.6665 14.167 1.6665Z"
              stroke="#3B82F6"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15H10.0083"
              stroke="#3B82F6"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-base leading-6 text-[#0A0A0A]">모바일 앱 (Mobile App)</h3>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { name: "ABC Shopping (Android)", packageId: "com.abc.shopping", version: "v3.0+" },
            { name: "ABC Shopping (iOS)", packageId: "App Store", version: "v3.0+" },
          ].map((app, index) => (
            <div key={index} className="flex flex-col gap-2 rounded-[10px] border border-[#E8EAED] p-4">
              <h4 className="text-base leading-6 text-[#0A0A0A]">{app.name}</h4>
              <div className="flex flex-col gap-1">
                <p className="text-sm leading-5">
                  <span className="text-[#9AA0A6]">Package/Bundle ID: </span>
                  <span className="font-mono text-[#5F6368]">{app.packageId}</span>
                </p>
                <p className="text-sm leading-5">
                  <span className="text-[#9AA0A6]">Version: </span>
                  <span className="text-[#5F6368]">{app.version}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 오픈소스 */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M13.333 15L18.333 10L13.333 5"
              stroke="#3B82F6"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66699 5L1.66699 10L6.66699 15"
              stroke="#3B82F6"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-base leading-6 text-[#0A0A0A]">오픈소스 (Open Source / Git)</h3>
        </div>

        <div className="flex flex-col gap-2 rounded-[10px] border border-[#E8EAED] p-4">
          <div className="flex items-center gap-2">
            <a href="#" className="text-base leading-6 text-[#3B82F6]">
              ABC Main Repository
            </a>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 2H14V6"
                stroke="#9AA0A6"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66699 9.33333L14.0003 2"
                stroke="#9AA0A6"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                stroke="#9AA0A6"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm leading-5">
              <span className="text-[#9AA0A6]">Branch: </span>
              <span className="text-[#5F6368]">main, develop</span>
            </p>
            <p className="text-sm leading-5">
              <span className="text-[#9AA0A6]">Scope: </span>
              <span className="text-[#5F6368]">/src/* 디렉토리만 해당, /tests/* 제외</span>
            </p>
          </div>
        </div>
      </section>

      {/* 제외 범위 */}
      <section className="flex flex-col gap-6 border-t border-[#E8EAED] pt-6">
        <button
          onClick={() => setOutOfScopeExpanded(!outOfScopeExpanded)}
          className="flex items-center justify-between"
        >
          <h3 className="text-base leading-6 text-[#E7000B]">제외 범위 (Out-of-Scope)</h3>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#9AA0A6"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
    </div>
  );
}
