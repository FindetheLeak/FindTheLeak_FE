"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/components/ui/Header";
import HackerDashboard from "@/features/mypage/components/HackerDashboard";
import CompanyDashboard from "@/features/mypage/components/CompanyDashboard";

export default function MyPage() {
  const searchParams = useSearchParams();
  const userType = searchParams.get("type") || "hacker";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {userType === "company" ? <CompanyDashboard /> : <HackerDashboard />}
    </div>
  );
}
