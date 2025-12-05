import ProgramCard from "@/features/programs/components/ProgramCard";
import SearchFilters from "@/features/programs/components/SearchFilters";
import Pagination from "@/features/programs/components/Pagination";

const programs = [
  {
    id: 1,
    title: "ABC Corporation Bug Bounty Program",
    company: "ABC Corp",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/7ecf073653216015bb8524354f56895372926511?width=160",
    types: ["웹 서비스", "API", "모바일 앱"],
    visibility: "공개",
    badges: ["명예의 전당 운영", "신규"],
    maxReward: "₩3,000만",
    monthlyReports: "12건",
    avgProcessing: "5일",
    description:
      "이 프로그램은 ABC의 웹사이트, 모바일 앱, API를 대상으로 합니다. OWASP Top 10 취약점을 중점적으로 다루며, 특히 인증 및 권한 관련 취약점에 높은 보상을 제공합니다.",
  },
  {
    id: 2,
    title: "SecureBank Mobile Banking Security Program",
    company: "SecureBank",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/6618eedf9843cfceb29a81b98a04093e6a6d9bde?width=160",
    types: ["모바일 앱"],
    visibility: "공개",
    badges: ["명예의 전당 운영"],
    maxReward: "₩5,000만",
    monthlyReports: "25건",
    avgProcessing: "3일",
    description:
      "금융권 최고 수준의 보안 프로그램입니다. iOS와 Android 앱을 대상으로 하며, 금융 거래 관련 취약점에 특히 높은 보상을 제공합니다.",
  },
  {
    id: 3,
    title: "OpenSource Project Security Audit",
    company: "OpenSource Community",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/5f9c88c0cd4a7e2c63edc48dbd92837a7ca79374?width=160",
    types: ["오픈소스(Git)"],
    visibility: "공개",
    badges: [],
    maxReward: "₩1,000만",
    monthlyReports: "8건",
    avgProcessing: "7일",
    description:
      "인기 오픈소스 프로젝트의 보안 감사 프로그램입니다. GitHub 저장소를 대상으로 하며, 코드 레벨의 취약점 발견을 환영합니다.",
  },
  {
    id: 4,
    title: "E-Commerce Platform VDP",
    company: "ShopKorea",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/535a112d20568684c6640d883cc3eaaeb026c123?width=160",
    types: ["웹 서비스", "API"],
    visibility: "공개",
    badges: ["명예의 전당 운영", "마감 임박"],
    maxReward: "₩2,000만",
    monthlyReports: "18건",
    avgProcessing: "4일",
    description:
      "국내 최대 전자상거래 플랫폼의 취약점 제보 프로그램입니다. 결제 시스템과 개인정보 보호에 중점을 두고 있습니다.",
  },
  {
    id: 5,
    title: "Cloud Service Security Testing",
    company: "CloudTech",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/78eb8e2cdae1a10dc04f0d4977b94f2a02e56a09?width=160",
    types: ["API", "웹 서비스"],
    visibility: "비공개",
    badges: ["신규"],
    maxReward: "₩4,000만",
    monthlyReports: "15건",
    avgProcessing: "6일",
    description:
      "클라우드 인프라 및 서비스에 대한 보안 테스트 프로그램입니다. 초대된 연구자만 참여 가능합니다.",
  },
  {
    id: 6,
    title: "IoT Device Security Research",
    company: "SmartHome Inc",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/ce901fa23eb60c884a2b2a2d59e6d8ccbbef814c?width=160",
    types: ["IoT"],
    visibility: "공개",
    badges: ["명예의 전당 운영"],
    maxReward: "₩1,500만",
    monthlyReports: "6건",
    avgProcessing: "8일",
    description:
      "스마트홈 IoT 기기의 보안 연구 프로그램입니다. 펌웨어 분석 및 하드웨어 보안 테스트를 환영합니다.",
  },
];

export default function ScreenProgram() {
  return (
    <main className="flex flex-1 flex-col items-center px-8 py-[26px]">
      <div className="w-full max-w-[1298px]">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl leading-[150%] font-[700] text-[#0A0A0A]">
              버그바운티 프로그램
            </h1>
            <p className="text-base leading-[150%] text-[#5F6368]">
              기업 및 오픈소스 프로젝트의 보안 취약점을 찾고 보상을 받으세요.
            </p>
          </div>
          <div className="flex items-center rounded-[10px] bg-[#E8F0FE] px-4 pt-3 pb-3">
            <span className="text-sm leading-[142.857%] text-[#3B82F6]">
              현재 진행 중인 프로그램 총 6개
            </span>
          </div>
        </div>

        <SearchFilters />

        <div className="mt-8 mb-6 grid grid-cols-2 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>

        <Pagination />
      </div>
    </main>
  );
}
