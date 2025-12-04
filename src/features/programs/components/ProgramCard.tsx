interface ProgramCardProps {
  title: string;
  company: string;
  logo: string;
  types: string[];
  visibility: string;
  badges: string[];
  maxReward: string;
  monthlyReports: string;
  avgProcessing: string;
  description: string;
}

export default function ProgramCard({
  title,
  company,
  logo,
  types,
  visibility,
  badges,
  maxReward,
  monthlyReports,
  avgProcessing,
  description,
}: ProgramCardProps) {
  const isPrivate = visibility === "비공개";
  const hasHallOfFame = badges.includes("명예의 전당 운영");
  const isNew = badges.includes("신규");
  const isClosing = badges.includes("마감 임박");

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#E8EAED] bg-white px-[25px] pb-1 pt-[25px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
      <div className="flex gap-4">
        <img
          src={logo}
          alt={company}
          className="h-20 w-20 rounded-[10px] border border-[#E8EAED] object-cover"
        />
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-base leading-[150%] text-[#0A0A0A]">{title}</h3>
          <p className="text-sm leading-[142.857%] text-[#9AA0A6]">
            {company}
          </p>
          <div className="flex gap-2">
            {types.map((type) => (
              <span
                key={type}
                className="flex items-center gap-1 rounded-lg border border-[#E8EAED] px-2 py-0.5 text-xs leading-[133.333%] text-[#0A0A0A]"
              >
                {type}
              </span>
            ))}
            <span
              className={`flex items-center gap-1 rounded-lg border px-2 py-0.5 text-xs leading-[133.333%] ${
                isPrivate
                  ? "border-[#E5E7EB] bg-[#F9FAFB] text-[#364153]"
                  : "border-[#B9F8CF] bg-[#F0FDF4] text-[#008236]"
              }`}
            >
              {isPrivate && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5Z"
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 5.5V3.5C3.5 2.83696 3.76339 2.20107 4.23223 1.73223C4.70107 1.26339 5.33696 1 6 1C6.66304 1 7.29893 1.26339 7.76777 1.73223C8.23661 2.20107 8.5 2.83696 8.5 3.5V5.5"
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {visibility}
            </span>
          </div>
        </div>
      </div>

      {(hasHallOfFame || isNew || isClosing) && (
        <div className="flex gap-2">
          {hasHallOfFame && (
            <div className="flex items-center gap-1 rounded bg-[#FEFCE8] px-2 py-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_193_3337)">
                  <path
                    d="M5 7.32999V8.14299C4.99811 8.3143 4.95224 8.48225 4.86679 8.63074C4.78134 8.77923 4.65917 8.90328 4.512 8.99099C4.19957 9.22239 3.94542 9.52348 3.76974 9.87032C3.59407 10.2172 3.5017 10.6002 3.5 10.989"
                    stroke="#A65F00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7.32999V8.14299C7.00189 8.3143 7.04776 8.48225 7.13321 8.63074C7.21866 8.77923 7.34083 8.90328 7.488 8.99099C7.80043 9.22239 8.05458 9.52348 8.23026 9.87032C8.40593 10.2172 8.4983 10.6002 8.5 10.989"
                    stroke="#A65F00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 4.5H9.75C10.0815 4.5 10.3995 4.3683 10.6339 4.13388C10.8683 3.89946 11 3.58152 11 3.25C11 2.91848 10.8683 2.60054 10.6339 2.36612C10.3995 2.1317 10.0815 2 9.75 2H9"
                    stroke="#A65F00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 11H10"
                    stroke="#A65F00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5V1.5C9 1.36739 8.94732 1.24021 8.85355 1.14645C8.75979 1.05268 8.63261 1 8.5 1H3.5C3.36739 1 3.24021 1.05268 3.14645 1.14645C3.05268 1.24021 3 1.36739 3 1.5V4.5Z"
                    stroke="#A65F00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 4.5H2.25C1.91848 4.5 1.60054 4.3683 1.36612 4.13388C1.1317 3.89946 1 3.58152 1 3.25C1 2.91848 1.1317 2.60054 1.36612 2.36612C1.60054 2.1317 1.91848 2 2.25 2H3"
                    stroke="#A65F00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_193_3337">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-xs leading-[133.333%] text-[#A65F00]">
                명예의 전당 운영
              </span>
            </div>
          )}
          {isNew && (
            <div className="flex items-center gap-1 rounded bg-[#F0FDF4] px-2 py-1">
              <span className="text-xs leading-[133.333%] text-[#008236]">
                🆕
              </span>
              <span className="text-xs leading-[133.333%] text-[#008236]">
                신규
              </span>
            </div>
          )}
          {isClosing && (
            <div className="flex items-center gap-1 rounded bg-[#FFF7ED] px-2 py-1">
              <span className="text-xs leading-[133.333%] text-[#CA3500]">
                ⚠️
              </span>
              <span className="text-xs leading-[133.333%] text-[#CA3500]">
                마감 임박
              </span>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 border-y border-[#E8EAED] py-[17px]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1V11"
                stroke="#9AA0A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 2.5H4.75C4.28587 2.5 3.84075 2.68437 3.51256 3.01256C3.18437 3.34075 3 3.78587 3 4.25C3 4.71413 3.18437 5.15925 3.51256 5.48744C3.84075 5.81563 4.28587 6 4.75 6H7.25C7.71413 6 8.15925 6.18437 8.48744 6.51256C8.81563 6.84075 9 7.28587 9 7.75C9 8.21413 8.81563 8.65925 8.48744 8.98744C8.15925 9.31563 7.71413 9.5 7.25 9.5H3"
                stroke="#9AA0A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs leading-[133.333%] text-[#9AA0A6]">
              최대 보상금
            </span>
          </div>
          <span className="text-sm leading-[142.857%] text-[#3C4043]">
            {maxReward}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 11C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10V2C2 1.73479 2.10536 1.48043 2.29289 1.29289C2.48043 1.10536 2.73478 1 3 1H7C7.15828 0.999745 7.31504 1.0308 7.46127 1.09139C7.60749 1.15197 7.74028 1.24088 7.852 1.353L9.646 3.147C9.75842 3.25875 9.84759 3.39167 9.90835 3.53808C9.96911 3.68449 10.0003 3.84149 10 4V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11H3Z"
                stroke="#9AA0A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 1V3.5C7 3.63261 7.05268 3.75979 7.14645 3.85355C7.24021 3.94732 7.36739 4 7.5 4H10"
                stroke="#9AA0A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 4.5H4"
                stroke="#9AA0A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6.5H4"
                stroke="#9AA0A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8.5H4"
                stroke="#9AA0A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs leading-[133.333%] text-[#9AA0A6]">
              이번 달 제보
            </span>
          </div>
          <span className="text-sm leading-[142.857%] text-[#3C4043]">
            {monthlyReports}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_193_3375)">
                <path
                  d="M6 3V6L8 7"
                  stroke="#9AA0A6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                  stroke="#9AA0A6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_193_3375">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs leading-[133.333%] text-[#9AA0A6]">
              평균 처리
            </span>
          </div>
          <span className="text-sm leading-[142.857%] text-[#3C4043]">
            {avgProcessing}
          </span>
        </div>
      </div>

      <p className="text-sm leading-[162.5%] text-[#5F6368]">{description}</p>

      <button className="flex items-center justify-center rounded-lg bg-[#3B82F6] py-2">
        <span className="text-sm leading-[142.857%] text-white">
          상세 보기
        </span>
      </button>
    </div>
  );
}
