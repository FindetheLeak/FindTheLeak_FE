import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProgramHeader from "@/components/programs/ProgramHeader";
import TabNavigation from "@/components/programs/TabNavigation";
import ProgramDetailInfo from "@/components/programs/ProgramDetailInfo";
import ProgramAnnouncements from "@/components/programs/ProgramAnnouncements";
import ProgramScope from "@/components/programs/ProgramScope";
import SidebarCards from "@/components/programs/SidebarCards";

interface ProgramPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    tab?: string;
  }>;
}

export default async function ProgramPage({
  params,
  searchParams,
}: ProgramPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const activeTab = resolvedSearchParams.tab || "detail";

  // Mock data - replace with actual data fetching
  const programData = {
    id: resolvedParams.id,
    name: "ABC Corporation Bug Bounty Program",
    company: "ABC Corp",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/96228d13782ece905d5364b99245072b9b6d56ea?width=240",
    categories: ["웹 서비스", "API", "모바일 앱"],
    status: "공개",
    maxReward: "₩30,000,000",
    avgReward: "₩2,500,000",
    totalReports: "142건",
    avgResponseTime: "5.3일",
    startDate: "2024-03-15",
    duration: "2024-03-15 ~ 진행 중",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center gap-8 bg-[#F8F9FA] px-28 pt-[105px] pb-20">
        <div className="flex w-full max-w-[1136px] flex-col gap-8">
          <ProgramHeader id={programData.id} data={programData} />

          <div className="flex flex-col gap-8 rounded-2xl border border-[#E8EAED] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
            <TabNavigation activeTab={activeTab} />

            <div className="flex flex-col gap-8 px-8 pb-8">
              {activeTab === "detail" && <ProgramDetailInfo />}
              {activeTab === "announcements" && <ProgramAnnouncements />}
              {activeTab === "scope" && <ProgramScope />}
            </div>
          </div>

          <SidebarCards />
        </div>
      </main>
      <Footer />
    </div>
  );
}
