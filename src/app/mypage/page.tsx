"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/ui/Header";
import HackerDashboard from "@/features/mypage/components/HackerDashboard";
import CompanyDashboard from "@/features/mypage/components/CompanyDashboard";

function DashboardContent() {
  const searchParams = useSearchParams();
  const userType = searchParams.get("type") || "hacker";

  return userType === "company" ? <CompanyDashboard /> : <HackerDashboard />;
}

export default function MyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Suspense fallback={<div className="flex-1" />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
