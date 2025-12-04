export default function DashboardHeader() {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl leading-[150%] text-[#0A0A0A]">
          기업 대시보드
        </h1>
        <p className="text-base leading-[150%] text-[#5F6368]">
          내 프로그램의 보안 제보, 보상, 팀 활동 현황을 한눈에 확인합니다.
        </p>
      </div>
      <button className="flex items-center gap-4 rounded-lg bg-[#3B82F6] px-3 py-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3.33301 8H12.6663"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3.33334V12.6667"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm leading-[142.857%] text-white">
          새 프로그램 등록
        </span>
      </button>
    </div>
  );
}
