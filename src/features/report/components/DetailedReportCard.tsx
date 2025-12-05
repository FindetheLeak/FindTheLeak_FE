interface DetailedReportCardProps {
  detailDescription: string;
  setDetailDescription: (value: string) => void;
  securityImpact: string;
  setSecurityImpact: (value: string) => void;
  solution: string;
  setSolution: (value: string) => void;
  references: string;
  setReferences: (value: string) => void;
}

export default function DetailedReportCard({
  detailDescription,
  setDetailDescription,
  securityImpact,
  setSecurityImpact,
  solution,
  setSolution,
  references,
  setReferences,
}: DetailedReportCardProps) {
  return (
    <div className="flex h-[836px] w-full flex-col items-start gap-6 rounded-2xl border border-[#DADCE0] bg-white p-[25px] pb-[1px] shadow-sm md:p-4">
      <h3 className="text-base leading-6 text-[#0A0A0A]">상세 보고서</h3>
      <div className="flex w-full flex-col items-start gap-6">
        {/* Detailed Description */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            취약점 상세 설명
          </label>
          <textarea
            value={detailDescription}
            onChange={(e) => setDetailDescription(e.target.value)}
            placeholder="발견한 취약점에 대한 상세한 설명을 작성해주세요..."
            className="h-[258px] w-full rounded-lg border border-[#DADCE0] bg-[#F3F3F5] p-3 text-sm leading-5 text-[#0A0A0A] placeholder:text-[#717182]"
          />
        </div>

        {/* Security Impact */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            보안 영향 분석
          </label>
          <textarea
            value={securityImpact}
            onChange={(e) => setSecurityImpact(e.target.value)}
            placeholder="취약점의 보안 영향을 분석해주세요..."
            className="h-[120px] w-full rounded-lg border border-[#DADCE0] bg-[#F3F3F5] p-3 text-sm leading-5 text-[#0A0A0A] placeholder:text-[#717182]"
          />
        </div>

        {/* Solution */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            권장 해결 방법
          </label>
          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="취약점 해결 방법을 제안해주세요..."
            className="h-[120px] w-full rounded-lg border border-[#DADCE0] bg-[#F3F3F5] p-3 text-sm leading-5 text-[#0A0A0A] placeholder:text-[#717182]"
          />
        </div>

        {/* References */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            참고 자료 (선택사항)
          </label>
          <textarea
            value={references}
            onChange={(e) => setReferences(e.target.value)}
            placeholder="관련 CVE, CWE, 참고 문서 링크 등을 입력해주세요..."
            className="h-[80px] w-full rounded-lg border border-[#DADCE0] bg-[#F3F3F5] p-3 text-sm leading-5 text-[#0A0A0A] placeholder:text-[#717182]"
          />
        </div>
      </div>
    </div>
  );
}
