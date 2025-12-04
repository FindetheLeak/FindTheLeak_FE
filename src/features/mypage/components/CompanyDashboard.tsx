import Footer from "@/components/ui/Footer";
import CompanySidebar from "@/features/mypage/company/components/CompanySidebar";
import DashboardHeader from "@/features/mypage/company/components/DashboardHeader";
import KPISummary from "@/features/mypage/company/components/KPISummary";
import ProgramOverview from "@/features/mypage/company/components/ProgramOverview";
import VulnerabilityInbox from "@/features/mypage/company/components/VulnerabilityInbox";
import RewardsAnalytics from "@/features/mypage/company/components/RewardsAnalytics";
import TeamActivity from "@/features/mypage/company/components/TeamActivity";
import OperatorTodo from "@/features/mypage/company/components/OperatorTodo";
import InfoRail from "@/features/mypage/company/components/InfoRail";

export default function CompanyDashboard() {
  return (
    <>
      <div className="flex flex-1">
        <CompanySidebar />

        <main className="flex-1 bg-[#F8F9FA] px-[78px] py-8">
          <div className="mx-auto flex max-w-[716px] flex-col gap-8">
            <DashboardHeader />
            <KPISummary />
            <ProgramOverview />
            <VulnerabilityInbox />
            <RewardsAnalytics />

            <div className="flex gap-6">
              <TeamActivity />
              <OperatorTodo />
            </div>
          </div>
        </main>

        <InfoRail />
      </div>
      <Footer />
    </>
  );
}
