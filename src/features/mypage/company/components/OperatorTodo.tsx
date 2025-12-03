export default function OperatorTodo() {
  const todos = [
    {
      label: "승인 대기 제보 3건 검토",
      count: "(3)",
      countColor: "#E7000B",
      checked: false,
    },
    {
      label: "예산 상향이 필요한 프로그램 1개",
      count: "(1)",
      countColor: "#F54900",
      checked: false,
    },
    {
      label: "7일 이상 미응답 제보 2건",
      count: "(2)",
      countColor: "#E7000B",
      checked: false,
    },
    {
      label: "이번 주 팀 미팅 준비",
      count: null,
      countColor: null,
      checked: false,
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M17.5 8.88V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H14.4533"
            stroke="#5F6368"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 9.16659L10 11.6666L18.3333 3.33325"
            stroke="#5F6368"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-base leading-[150%] text-[#0A0A0A]">
          운영자 To-Do
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-[10px] px-3 py-3"
          >
            <div className="h-4 w-4 rounded border border-[rgba(0,0,0,0.1)] bg-[#F3F3F5] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"></div>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm leading-[142.857%] text-[#5F6368]">
                  {todo.label}
                </span>
                {todo.count && (
                  <span
                    className="text-xs leading-[133.333%]"
                    style={{ color: todo.countColor || "#5F6368" }}
                  >
                    {todo.count}
                  </span>
                )}
              </div>
              <button className="text-sm leading-[142.857%] text-[#3B82F6]">
                바로가기
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#E8EAED] pt-4">
        <p className="text-xs leading-[133.333%] text-[#9AA0A6]">
          완료된 항목은 자동으로 목록에서 제거됩니다.
        </p>
      </div>
    </div>
  );
}
