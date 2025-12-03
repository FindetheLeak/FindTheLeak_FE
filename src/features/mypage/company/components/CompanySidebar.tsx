"use client";

import { useState } from "react";

export default function CompanySidebar() {
  const [expandedSections, setExpandedSections] = useState({
    programs: false,
    inbox: false,
  });

  const toggleSection = (section: "programs" | "inbox") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="flex w-[280px] flex-col border-r border-[#DADCE0] bg-white">
      <div className="flex flex-col gap-6 px-6 py-6">
        <div className="flex flex-col gap-1 border-b border-[#E8EAED] pb-6">
          <h2 className="text-base leading-[150%] text-[#0A0A0A]">
            ABC Corp Security Team
          </h2>
          <p className="text-sm leading-[142.857%] text-[#9AA0A6]">기업회원</p>
        </div>

        <nav className="flex flex-col gap-1">
          <button className="flex h-10 items-center gap-3 rounded-[10px] bg-[#E8F0FE] px-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z"
                stroke="#3B82F6"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.667 2.5H12.5003C12.0401 2.5 11.667 2.8731 11.667 3.33333V5.83333C11.667 6.29357 12.0401 6.66667 12.5003 6.66667H16.667C17.1272 6.66667 17.5003 6.29357 17.5003 5.83333V3.33333C17.5003 2.8731 17.1272 2.5 16.667 2.5Z"
                stroke="#3B82F6"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.667 10H12.5003C12.0401 10 11.667 10.3731 11.667 10.8333V16.6667C11.667 17.1269 12.0401 17.5 12.5003 17.5H16.667C17.1272 17.5 17.5003 17.1269 17.5003 16.6667V10.8333C17.5003 10.3731 17.1272 10 16.667 10Z"
                stroke="#3B82F6"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 13.3333H3.33333C2.8731 13.3333 2.5 13.7064 2.5 14.1667V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H7.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V14.1667C8.33333 13.7064 7.96024 13.3333 7.5 13.3333Z"
                stroke="#3B82F6"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base leading-[150%] text-[#3B82F6]">
              개요 대시보드
            </span>
          </button>

          <div className="flex flex-col gap-1">
            <button
              onClick={() => toggleSection("programs")}
              className="flex h-10 items-center justify-between rounded-[10px] px-3"
            >
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3.33366 16.6667H16.667C17.109 16.6667 17.5329 16.4911 17.8455 16.1785C18.1581 15.866 18.3337 15.442 18.3337 15V6.66667C18.3337 6.22464 18.1581 5.80072 17.8455 5.48816C17.5329 5.17559 17.109 5 16.667 5H10.0587C9.78415 4.99858 9.51424 4.92937 9.27291 4.79853C9.03158 4.66769 8.82631 4.47927 8.67533 4.25L7.99199 3.25C7.84101 3.02073 7.63574 2.83231 7.39441 2.70147C7.15308 2.57063 6.88317 2.50142 6.60866 2.5H3.33366C2.89163 2.5 2.46771 2.67559 2.15515 2.98816C1.84259 3.30072 1.66699 3.72464 1.66699 4.16667V15C1.66699 15.9167 2.41699 16.6667 3.33366 16.6667Z"
                    stroke="#5F6368"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66699 8.33333V11.6667"
                    stroke="#5F6368"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 8.33333V9.99999"
                    stroke="#5F6368"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.333 8.33333V13.3333"
                    stroke="#5F6368"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base leading-[150%] text-[#5F6368]">
                  프로그램 관리
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-transform ${expandedSections.programs ? "rotate-180" : ""}`}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#5F6368"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {expandedSections.programs && (
              <div className="ml-8 flex flex-col gap-1">
                <button className="flex h-9 items-center rounded-[10px] px-3 text-sm leading-[142.857%] text-[#5F6368]">
                  내 프로그램 목록
                </button>
                <button className="flex h-9 items-center rounded-[10px] px-3 text-sm leading-[142.857%] text-[#5F6368]">
                  새 프로그램 등록
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <button
              onClick={() => toggleSection("inbox")}
              className="flex h-10 items-center justify-between rounded-[10px] px-3"
            >
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18.3337 10H13.3337L11.667 12.5H8.33366L6.66699 10H1.66699"
                    stroke="#5F6368"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.54199 4.25833L1.66699 10V15C1.66699 15.442 1.84259 15.8659 2.15515 16.1785C2.46771 16.4911 2.89163 16.6667 3.33366 16.6667H16.667C17.109 16.6667 17.5329 16.4911 17.8455 16.1785C18.1581 15.8659 18.3337 15.442 18.3337 15V10L15.4587 4.25833C15.3207 3.98065 15.108 3.74697 14.8445 3.58357C14.5809 3.42016 14.2771 3.3335 13.967 3.33333H6.03366C5.72359 3.3335 5.41971 3.42016 5.1562 3.58357C4.89268 3.74697 4.67997 3.98065 4.54199 4.25833Z"
                    stroke="#5F6368"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base leading-[150%] text-[#5F6368]">
                  취약점 인박스
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-transform ${expandedSections.inbox ? "rotate-180" : ""}`}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#5F6368"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {expandedSections.inbox && (
              <div className="ml-8 flex flex-col gap-1">
                <button className="flex h-9 items-center rounded-[10px] px-3 text-sm leading-[142.857%] text-[#5F6368]">
                  전체 제보
                </button>
                <button className="flex h-9 items-center rounded-[10px] px-3 text-sm leading-[142.857%] text-[#5F6368]">
                  내가 담당인 제보
                </button>
              </div>
            )}
          </div>

          <button className="flex h-10 items-center gap-3 rounded-[10px] px-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15.8333 5.83333V3.33333C15.8333 3.11232 15.7455 2.90036 15.5893 2.74408C15.433 2.5878 15.221 2.5 15 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667C2.5 4.60869 2.67559 5.03262 2.98816 5.34518C3.30072 5.65774 3.72464 5.83333 4.16667 5.83333H16.6667C16.8877 5.83333 17.0996 5.92113 17.2559 6.07741C17.4122 6.23369 17.5 6.44565 17.5 6.66667V10M17.5 10H15C14.558 10 14.134 10.1756 13.8215 10.4882C13.5089 10.8007 13.3333 11.2246 13.3333 11.6667C13.3333 12.1087 13.5089 12.5326 13.8215 12.8452C14.134 13.1577 14.558 13.3333 15 13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2455 12.933 18.3333 12.721 18.3333 12.5V10.8333C18.3333 10.6123 18.2455 10.4004 18.0893 10.2441C17.933 10.0878 17.721 10 17.5 10Z"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 4.16666V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H16.6667C16.8877 17.5 17.0996 17.4122 17.2559 17.2559C17.4122 17.0996 17.5 16.8877 17.5 16.6667V13.3333"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base leading-[150%] text-[#5F6368]">
              리워드 · 정산
            </span>
          </button>

          <button className="flex h-10 items-center gap-3 rounded-[10px] px-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M13.3337 17.5V15.8333C13.3337 14.9493 12.9825 14.1014 12.3573 13.4763C11.7322 12.8512 10.8844 12.5 10.0003 12.5H5.00033C4.11627 12.5 3.26842 12.8512 2.6433 13.4763C2.01818 14.1014 1.66699 14.9493 1.66699 15.8333V17.5"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.333 2.60666C14.0478 2.79197 14.6808 3.20938 15.1327 3.79338C15.5846 4.37738 15.8298 5.0949 15.8298 5.83333C15.8298 6.57175 15.5846 7.28927 15.1327 7.87327C14.6808 8.45727 14.0478 8.87468 13.333 9.05999"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.333 17.5V15.8333C18.3325 15.0948 18.0866 14.3773 17.6341 13.7936C17.1817 13.2099 16.5481 12.793 15.833 12.6083"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.50033 9.16667C9.34127 9.16667 10.8337 7.67428 10.8337 5.83333C10.8337 3.99238 9.34127 2.5 7.50033 2.5C5.65938 2.5 4.16699 3.99238 4.16699 5.83333C4.16699 7.67428 5.65938 9.16667 7.50033 9.16667Z"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base leading-[150%] text-[#5F6368]">
              조직 · 권한
            </span>
          </button>

          <button className="flex h-10 items-center gap-3 rounded-[10px] px-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8.05893 3.44669C8.10485 2.96364 8.32921 2.51506 8.68818 2.18859C9.04716 1.86212 9.51495 1.68121 10.0002 1.68121C10.4854 1.68121 10.9532 1.86212 11.3122 2.18859C11.6712 2.51506 11.8955 2.96364 11.9414 3.44669C11.969 3.75874 12.0714 4.05954 12.2399 4.32364C12.4084 4.58774 12.638 4.80737 12.9093 4.96392C13.1807 5.12048 13.4857 5.20936 13.7987 5.22304C14.1116 5.23672 14.4233 5.1748 14.7073 5.04252C15.1482 4.84234 15.6478 4.81337 16.1089 4.96126C16.57 5.10915 16.9596 5.42332 17.2019 5.84261C17.4441 6.26191 17.5217 6.75633 17.4195 7.22967C17.3173 7.703 17.0426 8.12137 16.6489 8.40336C16.3926 8.58323 16.1833 8.8222 16.0389 9.10005C15.8944 9.37789 15.819 9.68645 15.819 9.99961C15.819 10.3128 15.8944 10.6213 16.0389 10.8992C16.1833 11.177 16.3926 11.416 16.6489 11.5959C17.0426 11.8778 17.3173 12.2962 17.4195 12.7695C17.5217 13.2429 17.4441 13.7373 17.2019 14.1566C16.9596 14.5759 16.57 14.8901 16.1089 15.038C15.6478 15.1858 15.1482 15.1569 14.7073 14.9567C14.4233 14.8244 14.1116 14.7625 13.7987 14.7762C13.4857 14.7899 13.1807 14.8787 12.9093 15.0353C12.638 15.1918 12.4084 15.4115 12.2399 15.6756C12.0714 15.9397 11.969 16.2405 11.9414 16.5525C11.8955 17.0356 11.6712 17.4842 11.3122 17.8106C10.9532 18.1371 10.4854 18.318 10.0002 18.318C9.51495 18.318 9.04716 18.1371 8.68818 17.8106C8.32921 17.4842 8.10485 17.0356 8.05893 16.5525C8.03138 16.2404 7.92901 15.9394 7.76049 15.6753C7.59196 15.4111 7.36224 15.1914 7.09079 15.0348C6.81934 14.8782 6.51416 14.7894 6.20108 14.7758C5.88801 14.7622 5.57627 14.8242 5.29227 14.9567C4.85134 15.1569 4.3517 15.1858 3.8906 15.038C3.42949 14.8901 3.03991 14.5759 2.79767 14.1566C2.55543 13.7373 2.47786 13.2429 2.58007 12.7695C2.68227 12.2962 2.95693 11.8778 3.3506 11.5959C3.60695 11.416 3.81621 11.177 3.96067 10.8992C4.10514 10.6213 4.18056 10.3128 4.18056 9.99961C4.18056 9.68645 4.10514 9.37789 3.96067 9.10005C3.81621 8.8222 3.60695 8.58323 3.3506 8.40336C2.95749 8.12123 2.68331 7.70302 2.58135 7.23001C2.47939 6.757 2.55694 6.26297 2.79892 5.84395C3.0409 5.42493 3.43003 5.11084 3.89067 4.96272C4.35132 4.81461 4.85059 4.84305 5.29143 5.04252C5.5754 5.1748 5.88705 5.23672 6.20002 5.22304C6.51298 5.20936 6.81804 5.12048 7.08938 4.96392C7.36072 4.80737 7.59034 4.58774 7.75882 4.32364C7.9273 4.05954 8.02967 3.75874 8.05727 3.44669"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base leading-[150%] text-[#5F6368]">
              설정
            </span>
          </button>
        </nav>
      </div>

      <div className="mt-auto border-t border-[#E8EAED] px-6 py-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm leading-[142.857%] text-[#9AA0A6]">
            도움이 필요하신가요?
          </p>
          <button className="flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-3 py-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_192_3085)">
                <path
                  d="M1.99511 10.8947C2.09314 11.1419 2.11496 11.4129 2.05778 11.6727L1.34778 13.866C1.3249 13.9772 1.33082 14.0925 1.36496 14.2008C1.39911 14.3091 1.46035 14.4068 1.54289 14.4848C1.62543 14.5628 1.72652 14.6185 1.83658 14.6464C1.94664 14.6744 2.06202 14.6738 2.17178 14.6447L4.44711 13.9793C4.69226 13.9307 4.94613 13.952 5.17978 14.0407C6.60337 14.7055 8.21602 14.8461 9.73321 14.4378C11.2504 14.0295 12.5746 13.0984 13.4722 11.8089C14.3699 10.5194 14.7832 8.95426 14.6393 7.38969C14.4954 5.82512 13.8036 4.36163 12.6858 3.25745C11.5681 2.15327 10.0962 1.47935 8.53003 1.35459C6.96382 1.22983 5.40387 1.66224 4.12541 2.57555C2.84694 3.48885 1.93213 4.82435 1.54237 6.34641C1.15262 7.86848 1.31296 9.47929 1.99511 10.8947Z"
                  stroke="#0A0A0A"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <span className="text-sm leading-[142.857%] text-[#0A0A0A]">
              지원팀 문의하기
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
