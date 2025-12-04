import Dropdown from "@/components/ui/Dropdown";

interface BasicInfoCardProps {
  reportTitle: string;
  setReportTitle: (value: string) => void;
  scope: string;
  setScope: (value: string) => void;
  cweType: string;
  setCweType: (value: string) => void;
  severity: string;
  setSeverity: (value: string) => void;
}

const SCOPE_OPTIONS = [
  "Genian NAC 제품",
  "Genian GPI",
  "Genian Insights E",
  "Genian ZTNA",
  "웹 서비스",
  "기타",
];

const CWE_OPTIONS = [
  "CWE-89: SQL Injection",
  "CWE-79: Cross-site Scripting (XSS)",
  "CWE-20: Improper Input Validation",
  "CWE-200: Information Exposure",
  "CWE-287: Improper Authentication",
  "CWE-352: Cross-Site Request Forgery (CSRF)",
  "CWE-78: OS Command Injection",
  "CWE-22: Path Traversal",
  "기타",
];

export default function BasicInfoCard({
  reportTitle,
  setReportTitle,
  scope,
  setScope,
  cweType,
  setCweType,
  severity,
  setSeverity,
}: BasicInfoCardProps) {
  const getSeverityStyles = (level: string, currentSeverity: string) => {
    const isSelected = level === currentSeverity;

    if (!isSelected) {
      return "border-[#DADCE0] bg-white text-[#5F6368]";
    }

    switch (level) {
      case "Critical":
        return "border-[#D93025] bg-[#FCE8E6] text-[#D93025]";
      case "High":
        return "border-[#FF6900] bg-[#FFF7ED] text-[#F54900]";
      case "Medium":
        return "border-[#FBBC04] bg-[#FEF7E0] text-[#B06000]";
      case "Low":
        return "border-[#34A853] bg-[#E6F4EA] text-[#1E8E3E]";
      default:
        return "border-[#DADCE0] bg-white text-[#5F6368]";
    }
  };

  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-2xl border border-[#DADCE0] bg-white p-[25px] pb-[1px] shadow-sm md:p-4">
      <h3 className="text-base leading-6 text-[#0A0A0A]">기본 정보</h3>
      <div className="flex w-full flex-col items-start gap-6">
        {/* Report Title */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            보고서 제목
          </label>
          <input
            type="text"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            className="flex h-9 w-full items-center rounded-lg border border-[#DADCE0] bg-[#F3F3F5] px-3 py-1 text-sm leading-5 text-[#0A0A0A]"
          />
        </div>

        {/* Vulnerability Scope */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            취약점 범위
          </label>
          <Dropdown
            value={scope}
            onChange={setScope}
            options={SCOPE_OPTIONS}
            className="w-full"
          />
        </div>

        {/* CWE Type */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="text-sm leading-[14px] text-[#0A0A0A]">
            취약점 유형 (CWE)
          </label>
          <Dropdown
            value={cweType}
            onChange={setCweType}
            options={CWE_OPTIONS}
            className="w-full"
          />
        </div>

        {/* Severity */}
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm leading-[14px] text-[#0A0A0A]">
              심각도 (Severity)
            </label>
          </div>
          <div className="grid w-full grid-cols-4 gap-3 md:grid-cols-2 md:gap-2">
            {["Critical", "High", "Medium", "Low"].map((level) => (
              <button
                key={level}
                onClick={() => setSeverity(level)}
                className={`flex h-11 items-center justify-center rounded-[10px] border-2 ${getSeverityStyles(
                  level,
                  severity
                )}`}
              >
                <span className="text-center text-base leading-6">{level}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
