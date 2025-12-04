"use client";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-4 py-2">
        <span className="text-center text-sm leading-[142.857%] text-[#0A0A0A]">
          이전
        </span>
      </button>
      <button className="flex items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2">
        <span className="text-center text-sm leading-[142.857%] text-white">
          1
        </span>
      </button>
      <button className="flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-4 py-2">
        <span className="text-center text-sm leading-[142.857%] text-[#0A0A0A]">
          2
        </span>
      </button>
      <button className="flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-4 py-2">
        <span className="text-center text-sm leading-[142.857%] text-[#0A0A0A]">
          3
        </span>
      </button>
      <button className="flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-4 py-2">
        <span className="text-center text-sm leading-[142.857%] text-[#0A0A0A]">
          4
        </span>
      </button>
      <button className="flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-4 py-2">
        <span className="text-center text-sm leading-[142.857%] text-[#0A0A0A]">
          5
        </span>
      </button>
      <button className="flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-4 py-2">
        <span className="text-center text-sm leading-[142.857%] text-[#0A0A0A]">
          다음
        </span>
      </button>
    </div>
  );
}
