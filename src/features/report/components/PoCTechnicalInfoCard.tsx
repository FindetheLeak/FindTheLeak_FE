interface PoCTechnicalInfoCardProps {
  pocCode: string;
  setPocCode: (value: string) => void;
  reproSteps: string;
  setReproSteps: (value: string) => void;
}

export default function PoCTechnicalInfoCard({
  pocCode,
  setPocCode,
  reproSteps,
  setReproSteps,
}: PoCTechnicalInfoCardProps) {
  return (
    <div className="flex h-[630px] w-full flex-col items-start gap-6 rounded-2xl border border-[#DADCE0] bg-white p-[25px] pb-[1px] shadow-sm md:p-4">
      <h3 className="text-base leading-6 text-[#0A0A0A]">
        PoC &amp; 기술 정보
      </h3>
      <div className="flex w-full flex-col items-start gap-6">
        {/* PoC Code */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            PoC 코드 및 재현 정보
          </label>
          <div className="relative w-full">
            <textarea
              value={pocCode}
              onChange={(e) => setPocCode(e.target.value)}
              className="h-[280px] w-full rounded-lg border border-[#BDC1C6] bg-[#E8EAED] p-3 font-mono text-sm leading-5 text-[#0A0A0A]"
            />
            <span className="absolute top-3 right-3 text-xs leading-4 text-[#80868B]">
              Python
            </span>
          </div>
        </div>

        {/* Reproduction Steps */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            재현 절차 (Reproduction Steps)
          </label>
          <textarea
            value={reproSteps}
            onChange={(e) => setReproSteps(e.target.value)}
            className="h-[160px] w-full rounded-lg border border-[#DADCE0] bg-[#F3F3F5] p-3 text-sm leading-5 text-[#0A0A0A]"
          />
          <p className="text-xs leading-4 text-[#80868B]">
            챗봇이 생성한 내용을 검토하고 실제 재현 가능한 단계만 남겨주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
