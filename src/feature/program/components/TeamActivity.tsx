export default function TeamActivity() {
  const activities = [
    {
      user: "KB",
      name: "김보안",
      action:
        "ABC 메인 웹 서비스의 제보 #VUL-2024-001을 Triage 상태로 변경",
      time: "10분 전",
    },
    {
      user: "KB",
      name: "김보안",
      action:
        "ABC 메인 웹 서비스의 제보 #VUL-2024-001을 Triage 상태로 변경",
      time: "10분 전",
    },
    {
      user: "KB",
      name: "김보안",
      action:
        "ABC 메인 웹 서비스의 제보 #VUL-2024-001을 Triage 상태로 변경",
      time: "10분 전",
    },
    {
      user: "KB",
      name: "김보안",
      action:
        "ABC 메인 웹 서비스의 제보 #VUL-2024-001을 Triage 상태로 변경",
      time: "10분 전",
    },
    {
      user: "KB",
      name: "김보안",
      action:
        "ABC 메인 웹 서비스의 제보 #VUL-2024-001을 Triage 상태로 변경",
      time: "10분 전",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 5V10L13.3333 11.6667"
            stroke="#5F6368"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z"
            stroke="#5F6368"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-base leading-[150%] text-[#0A0A0A]">
          팀 활동 로그
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]">
              <span className="text-sm leading-[142.857%] text-white">
                {activity.user}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-sm leading-[162.5%] text-[#3C4043]">
                {activity.name}
              </p>
              <p className="line-clamp-1 text-sm leading-[162.5%] text-[#5F6368]">
                {activity.action}
              </p>
              <p className="text-xs leading-[133.333%] text-[#9AA0A6]">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#E8EAED] pt-4">
        <button className="flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm leading-[142.857%] text-[#3B82F6]">
          활동 로그 전체 보기
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
