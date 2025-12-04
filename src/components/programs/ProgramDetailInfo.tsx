export default function ProgramDetailInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* 프로그램 소개 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base leading-6 text-[#0A0A0A]">프로그램 소개</h2>
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[26px] text-[#5F6368]">
            ABC는 글로벌 전자상거래 플랫폼으로, 사용자 데이터 보호를 최우선으로
            합니다. 이 프로그램은 웹사이트, 모바일 앱, API 서버를 대상으로 OWASP
            Top 10 및 비즈니스 로직 취약점을 찾는 것을 목표로 합니다.
          </p>
          <p className="text-base leading-[26px] text-[#5F6368]">
            우리는 전 세계의 보안 연구자들과 협력하여 플랫폼의 보안을 지속적으로
            개선하고 있습니다. 발견된 취약점은 신속하게 검토되며, 유효한
            취약점에 대해서는 심각도에 따라 적절한 보상이 제공됩니다.
          </p>
          <p className="text-base leading-[26px] text-[#5F6368]">
            모든 제보는 기밀로 처리되며, 조율된 공개 정책(Coordinated
            Disclosure)을 따릅니다. 연구자의 기여는 명예의 전당을 통해 인정받게
            됩니다.
          </p>
        </div>
      </section>

      {/* 포상금 정보 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base leading-6 text-[#0A0A0A]">포상금 정보</h2>

        {/* Rewards Table */}
        <div className="overflow-hidden rounded-lg border border-[#E8EAED]">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#E8EAED]">
                <th className="px-4 py-3 text-left text-base leading-6 text-[#5F6368]">
                  심각도
                </th>
                <th className="px-4 py-3 text-left text-base leading-6 text-[#5F6368]">
                  점수 범위
                </th>
                <th className="px-4 py-3 text-left text-base leading-6 text-[#5F6368]">
                  최소 보상금
                </th>
                <th className="px-4 py-3 text-left text-base leading-6 text-[#5F6368]">
                  최대 보상금
                </th>
                <th className="px-4 py-3 text-left text-base leading-6 text-[#5F6368]">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC9C9] bg-[#FEF2F2]">
                <td className="px-4 py-4 text-base leading-6 text-[#0A0A0A]">
                  Critical
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#5F6368]">
                  90~100
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩5,000,000
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩30,000,000
                </td>
                <td className="px-4 py-4 text-sm leading-5 text-[#5F6368]">
                  RCE, 인증 우회, 대규모 데이터 유출 등
                </td>
              </tr>
              <tr className="border-b border-[#FFD6A7] bg-[#FFF7ED]">
                <td className="px-4 py-4 text-base leading-6 text-[#0A0A0A]">
                  High
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#5F6368]">
                  70~89
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩2,000,000
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩10,000,000
                </td>
                <td className="px-4 py-4 text-sm leading-5 text-[#5F6368]">
                  SQL Injection, Stored XSS, IDOR 등
                </td>
              </tr>
              <tr className="border-b border-[#FFF085] bg-[#FEFCE8]">
                <td className="px-4 py-4 text-base leading-6 text-[#0A0A0A]">
                  Medium
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#5F6368]">
                  40~69
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩500,000
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩2,000,000
                </td>
                <td className="px-4 py-4 text-sm leading-5 text-[#5F6368]">
                  CSRF, 정보 노출, Open Redirect 등
                </td>
              </tr>
              <tr className="border-b border-[#BEDBFF] bg-[#EFF6FF]">
                <td className="px-4 py-4 text-base leading-6 text-[#0A0A0A]">
                  Low
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#5F6368]">
                  20~39
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩100,000
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩500,000
                </td>
                <td className="px-4 py-4 text-sm leading-5 text-[#5F6368]">
                  Self XSS, 경미한 설정 오류 등
                </td>
              </tr>
              <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                <td className="px-4 py-4 text-base leading-6 text-[#0A0A0A]">
                  Info
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#5F6368]">
                  0~19
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩0
                </td>
                <td className="px-4 py-4 text-base leading-6 text-[#3C4043]">
                  ₩100,000
                </td>
                <td className="px-4 py-4 text-sm leading-5 text-[#5F6368]">
                  권장사항, 개선 제안 (재량 지급)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 추가 보너스 정책 */}
        <div className="rounded-[10px] bg-[#E8F0FE] p-4">
          <h3 className="mb-3 text-sm leading-5 text-[#0A0A0A]">
            추가 보너스 정책
          </h3>
          <ul className="mb-5 flex flex-col gap-1">
            <li className="text-sm leading-5 text-[#5F6368]">
              • 첫 Critical 발견 시 +50% 보너스
            </li>
            <li className="text-sm leading-5 text-[#5F6368]">
              • 연속 제보 시 누적 포인트 제공
            </li>
            <li className="text-sm leading-5 text-[#5F6368]">
              • 월간 최우수 연구자에게 특별 보상
            </li>
          </ul>
          <h3 className="mb-2 text-sm leading-5 text-[#0A0A0A]">
            보상 지급 방식
          </h3>
          <p className="text-sm leading-5 text-[#5F6368]">
            계좌 이체 / 포인트 적립 / Kudos 명예 점수
          </p>
        </div>
      </section>

      {/* 심각도 평가 기준 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base leading-6 text-[#0A0A0A]">심각도 평가 기준</h2>
        <div className="flex flex-col gap-3">
          {[
            {
              level: "Critical",
              desc: "RCE, 인증 우회, 관리자 권한 탈취, 대규모 개인정보 유출",
            },
            {
              level: "High",
              desc: "SQL Injection, Stored XSS, IDOR, 민감 데이터 접근",
            },
            {
              level: "Medium",
              desc: "CSRF, Reflected XSS, 정보 노출, Open Redirect",
            },
            {
              level: "Low",
              desc: "Self XSS, 부적절한 에러 메시지, 경미한 설정 오류",
            },
            { level: "Info", desc: "보안 권장사항, 개선 제안" },
          ].map((item) => (
            <div
              key={item.level}
              className="flex flex-col gap-2 rounded-[10px] border border-[#E8EAED] p-4"
            >
              <h4 className="text-base leading-6 text-[#0A0A0A]">
                {item.level}
              </h4>
              <p className="text-sm leading-5 text-[#5F6368]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
