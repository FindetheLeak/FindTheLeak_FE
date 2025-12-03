export default function KPISummary() {
  const kpis = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 7H22V13"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 7L13.5 15.5L8.5 10.5L2 17"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[rgba(59,130,246,0.08)]",
      label: "진행 중 프로그램",
      value: "3",
      description: "초안 / 비공개 / 공개 상태 구분은 프로그램 관리에서 확인 가능",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.7304 18L13.7304 4C13.556 3.6922 13.303 3.43618 12.9973 3.25806C12.6917 3.07995 12.3442 2.9861 11.9904 2.9861C11.6366 2.9861 11.2892 3.07995 10.9835 3.25806C10.6778 3.43618 10.4249 3.6922 10.2504 4L2.25042 18C2.0741 18.3054 1.98165 18.6519 1.98243 19.0045C1.98321 19.3571 2.0772 19.7032 2.25486 20.0078C2.43253 20.3124 2.68757 20.5646 2.99411 20.7388C3.30066 20.9131 3.64783 21.0032 4.00042 21H20.0004C20.3513 20.9996 20.6959 20.907 20.9997 20.7313C21.3035 20.5556 21.5556 20.3031 21.7309 19.9991C21.9062 19.6951 21.9985 19.3504 21.9984 18.9995C21.9983 18.6486 21.9059 18.3039 21.7304 18Z"
            stroke="#FE5D9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9V13"
            stroke="#FE5D9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17H12.01"
            stroke="#FE5D9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[rgba(254,93,159,0.08)]",
      label: "열린 제보(미처리)",
      value: "12",
      description: "Critical 2건, High 4건",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z"
            stroke="#FFB366"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16"
            stroke="#FFB366"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[rgba(255,179,102,0.08)]",
      label: "이번 달 지급 예정 리워드",
      value: "₩ 3,200,000",
      description: "승인 완료이지만 미지급 상태 제보 기준",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6V12L16 14"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[rgba(59,130,246,0.08)]",
      label: "평균 처리 소요 시간",
      value: "5.3일",
      description: "최근 90일 기준, 제보 접수 → 상태 '해결 완료'까지",
    },
  ];

  return (
    <div className="flex gap-6">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col gap-4 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${kpi.bgColor}`}
          >
            {kpi.icon}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm leading-[142.857%] text-[#5F6368]">
              {kpi.label}
            </p>
            <p className="text-base leading-[150%] text-[#3C4043]">
              {kpi.value}
            </p>
            <p className="text-xs leading-[162.5%] text-[#9AA0A6]">
              {kpi.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
