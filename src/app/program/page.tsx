import Header from "@/components/ui/Header";
import CompanySidebar from "@/feature/program/components/CompanySidebar";
import DashboardHeader from "@/feature/program/components/DashboardHeader";
import KPISummary from "@/feature/program/components/KPISummary";
import ProgramOverview from "@/feature/program/components/ProgramOverview";
import VulnerabilityInbox from "@/feature/program/components/VulnerabilityInbox";
import RewardsAnalytics from "@/feature/program/components/RewardsAnalytics";
import TeamActivity from "@/feature/program/components/TeamActivity";
import OperatorTodo from "@/feature/program/components/OperatorTodo";
import InfoRail from "@/feature/program/components/InfoRail";

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

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
    </div>
  );
}
