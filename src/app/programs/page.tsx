import Header from "@/components/ui/Header";
import ScreenProgram from "@/features/programs/components/ScreenProgram";

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FA]">
      <Header />
      <ScreenProgram />
    </div>
  );
}
