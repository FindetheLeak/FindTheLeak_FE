"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProfileCard from "@/features/mypage/components/ProfileCard";
import StatsCard from "@/features/mypage/components/StatsCard";
import ReadmeSection from "@/features/mypage/components/ReadmeSection";

export default function MyPage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingReadme, setIsEditingReadme] = useState(false);

  const handleEditProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleEditReadme = () => {
    setIsEditingReadme(!isEditingReadme);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-start gap-4 px-10 py-10">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-4">
          <div className="flex items-center justify-between self-stretch">
            <ProfileCard
              isEditing={isEditingProfile}
              onEdit={handleEditProfile}
            />
            <StatsCard />
          </div>
          <ReadmeSection
            isEditing={isEditingReadme}
            onEdit={handleEditReadme}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
