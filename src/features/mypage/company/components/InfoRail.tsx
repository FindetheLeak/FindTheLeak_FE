export default function InfoRail() {
  const announcements = [
    {
      title: "FindtheLeak 플랫폼 v2.5 업데이트",
      category: "플랫폼 업데이트",
      categoryColor: "#1447E6",
      categoryBg: "#DBEAFE",
      date: "2024-12-01",
      isNew: true,
    },
    {
      title: "연말 리워드 정산 일정 안내",
      category: "정책 변경",
      categoryColor: "#CA3500",
      categoryBg: "#FFEDD4",
      date: "2024-11-28",
      isNew: true,
    },
    {
      title: "새로운 보안 취약점 분류 기준 적용",
      category: "플랫폼 업데이트",
      categoryColor: "#1447E6",
      categoryBg: "#DBEAFE",
      date: "2024-11-25",
      isNew: false,
    },
    {
      title: "연구자 커뮤니케이션 가이드라인 업데이트",
      category: "가이드",
      categoryColor: "#008236",
      categoryBg: "#DCFCE7",
      date: "2024-11-20",
      isNew: false,
    },
  ];

  const guides = [
    {
      title: "프로그램 정책 템플릿 열기",
      description: "효과적인 보안 정책 작성",
    },
    {
      title: "취약점 Triage 체크리스트",
      description: "제보 검토 프로세스 가이드",
    },
    {
      title: "연구자와의 커뮤니케이션 모범 사례",
      description: "효과적인 협업 방법",
    },
  ];

  return (
    <aside className="flex w-[320px] flex-col border-l border-[#DADCE0] bg-white px-6 py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8.55664 17.5C8.70293 17.7533 8.91332 17.9637 9.16668 18.11C9.42003 18.2563 9.70743 18.3333 9.99997 18.3333C10.2925 18.3333 10.5799 18.2563 10.8333 18.11C11.0866 17.9637 11.297 17.7533 11.4433 17.5"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.7187 12.7717C2.60984 12.891 2.538 13.0394 2.51191 13.1988C2.48583 13.3582 2.50663 13.5217 2.57179 13.6695C2.63695 13.8173 2.74365 13.943 2.87891 14.0312C3.01418 14.1195 3.17218 14.1665 3.3337 14.1667H16.667C16.8285 14.1667 16.9866 14.1198 17.1219 14.0317C17.2573 13.9436 17.3641 13.8181 17.4294 13.6704C17.4948 13.5227 17.5158 13.3592 17.4899 13.1998C17.464 13.0404 17.3924 12.8919 17.2837 12.7725C16.1754 11.63 15.0004 10.4158 15.0004 6.66666C15.0004 5.34057 14.4736 4.0688 13.5359 3.13112C12.5982 2.19344 11.3265 1.66666 10.0004 1.66666C8.67429 1.66666 7.40252 2.19344 6.46483 3.13112C5.52715 4.0688 5.00037 5.34057 5.00037 6.66666C5.00037 10.4158 3.82453 11.63 2.7187 12.7717Z"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-base leading-[150%] text-[#0A0A0A]">
              FindtheLeak 공지사항
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 rounded-[10px] border border-[#E8EAED] p-4"
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-sm leading-[125%] text-[#3C4043]">
                    {announcement.title}
                  </h4>
                  {announcement.isNew && (
                    <div className="flex items-center rounded-full bg-[#FB2C36] px-2 py-0.5">
                      <span className="text-xs leading-[133.333%] text-white">
                        New
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div
                    className="rounded px-2 py-0.5"
                    style={{ backgroundColor: announcement.categoryBg }}
                  >
                    <span
                      className="text-xs leading-[133.333%]"
                      style={{ color: announcement.categoryColor }}
                    >
                      {announcement.category}
                    </span>
                  </div>
                  <span className="text-xs leading-[133.333%] text-[#9AA0A6]">
                    {announcement.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm leading-[142.857%] text-[#3B82F6]">
            공지사항 전체 보기
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

        <div className="h-px bg-[#E8EAED]"></div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 5.83334V17.5"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.50033 15C2.27931 15 2.06735 14.9122 1.91107 14.7559C1.75479 14.5996 1.66699 14.3877 1.66699 14.1667V3.33333C1.66699 3.11232 1.75479 2.90036 1.91107 2.74408C2.06735 2.5878 2.27931 2.5 2.50033 2.5H6.66699C7.55105 2.5 8.39889 2.85119 9.02401 3.47631C9.64914 4.10143 10.0003 4.94928 10.0003 5.83333C10.0003 4.94928 10.3515 4.10143 10.9766 3.47631C11.6018 2.85119 12.4496 2.5 13.3337 2.5H17.5003C17.7213 2.5 17.9333 2.5878 18.0896 2.74408C18.2459 2.90036 18.3337 3.11232 18.3337 3.33333V14.1667C18.3337 14.3877 18.2459 14.5996 18.0896 14.7559C17.9333 14.9122 17.7213 15 17.5003 15H12.5003C11.8373 15 11.2014 15.2634 10.7326 15.7322C10.2637 16.2011 10.0003 16.837 10.0003 17.5C10.0003 16.837 9.73693 16.2011 9.26809 15.7322C8.79925 15.2634 8.16337 15 7.50033 15H2.50033Z"
                stroke="#5F6368"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-base leading-[150%] text-[#0A0A0A]">
              운영 가이드 & 템플릿
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {guides.map((guide, index) => (
              <button
                key={index}
                className="flex gap-3 rounded-[10px] border border-[#E8EAED] p-4 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#E8F0FE]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4.99967 18.3333C4.55765 18.3333 4.13372 18.1577 3.82116 17.8452C3.5086 17.5326 3.33301 17.1087 3.33301 16.6667V3.33333C3.33301 2.8913 3.5086 2.46738 3.82116 2.15481C4.13372 1.84225 4.55765 1.66666 4.99967 1.66666H11.6663C11.9301 1.66623 12.1914 1.71799 12.4351 1.81897C12.6788 1.91994 12.9001 2.06813 13.0863 2.25499L16.0763 5.24499C16.2637 5.43125 16.4123 5.65278 16.5136 5.89679C16.6149 6.14081 16.6668 6.40247 16.6663 6.66666V16.6667C16.6663 17.1087 16.4907 17.5326 16.1782 17.8452C15.8656 18.1577 15.4417 18.3333 14.9997 18.3333H4.99967Z"
                      stroke="#3B82F6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.667 1.66666V5.83332C11.667 6.05434 11.7548 6.2663 11.9111 6.42258C12.0674 6.57886 12.2793 6.66666 12.5003 6.66666H16.667"
                      stroke="#3B82F6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33366 7.5H6.66699"
                      stroke="#3B82F6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3337 10.8333H6.66699"
                      stroke="#3B82F6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3337 14.1667H6.66699"
                      stroke="#3B82F6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm leading-[142.857%] text-[#3C4043]">
                    {guide.title}
                  </p>
                  <p className="text-xs leading-[133.333%] text-[#9AA0A6]">
                    {guide.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#E8EAED]"></div>

        <div className="flex flex-col gap-2 rounded-[10px] bg-[#F8F9FA] p-4">
          <h4 className="text-sm leading-[142.857%] text-[#0A0A0A]">
            도움이 필요하신가요?
          </h4>
          <p className="text-xs leading-[133.333%] text-[#5F6368]">
            운영 중 문의사항이 있으시면 언제든지 지원팀에 문의해주세요.
          </p>
          <button className="rounded-lg border border-[#E8EAED] bg-white px-3 py-1.5 text-sm leading-[142.857%] text-[#0A0A0A]">
            지원팀 연락하기
          </button>
        </div>
      </div>
    </aside>
  );
}
