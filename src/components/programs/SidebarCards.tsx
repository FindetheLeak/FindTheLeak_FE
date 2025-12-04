export default function SidebarCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* 프로그램 운영자 정보 */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
        <h3 className="text-base leading-6 text-[#0A0A0A]">프로그램 운영자 정보</h3>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm leading-5 text-[#9AA0A6]">담당자</p>
            <p className="text-sm leading-5 text-[#3C4043]">ABC Security Team</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm leading-5 text-[#9AA0A6]">연락처 이메일</p>
            <p className="text-sm leading-5 text-[#3C4043]">security@abc.com</p>
          </div>
          <button className="rounded-lg border border-[#E8EAED] bg-white py-2 text-center text-sm leading-5 text-[#0A0A0A]">
            문의하기
          </button>
        </div>
      </div>

      {/* 관련 프로그램 */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
        <h3 className="text-base leading-6 text-[#0A0A0A]">관련 프로그램</h3>
        <div className="flex flex-col gap-3">
          <div className="rounded-[10px] border border-[#E8EAED] p-3">
            <p className="text-sm leading-5 text-[#3C4043]">ABC Mobile App Security</p>
          </div>
          <div className="rounded-[10px] border border-[#E8EAED] p-3">
            <p className="text-sm leading-5 text-[#3C4043]">ABC API Security Program</p>
          </div>
        </div>
      </div>

      {/* 제보 전 체크리스트 */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#E8EAED] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
        <h3 className="text-base leading-6 text-[#0A0A0A]">제보 전 체크리스트</h3>
        <div className="flex flex-col gap-2">
          <button className="rounded-[10px] border border-[#E8EAED] px-3 py-3 text-left text-sm leading-5 text-[#5F6368]">
            제보 가이드 읽기
          </button>
          <button className="rounded-[10px] border border-[#E8EAED] px-3 py-3 text-left text-sm leading-5 text-[#5F6368]">
            PoC 작성 템플릿
          </button>
          <button className="rounded-[10px] border border-[#E8EAED] px-3 py-3 text-left text-sm leading-5 text-[#5F6368]">
            자주 묻는 질문 (FAQ)
          </button>
        </div>
      </div>
    </div>
  );
}
