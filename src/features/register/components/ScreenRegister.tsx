"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProgressBar from "@/features/register/components/ProgressBar";
import Footer from "@/components/ui/Footer";
import Step1Terms from "@/features/register/components/Step1Terms";
import Step2AccountType from "@/features/register/components/Step2AccountType";
import Step3BasicInfo from "@/features/register/components/Step3BasicInfo";
import Step4Complete from "@/features/register/components/Step4Complete";

export default function ScreenRegister() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 모든 폼 데이터 중앙 관리
  const [accountType, setAccountType] = useState<"hacker" | "company" | null>(
    null
  );
  const [formData, setFormData] = useState({
    nickname: "",
    year: "",
    month: "",
    day: "",
    country: "South Korea",
    email: "",
    githubId: "",
  });

  // URL 쿼리에서 step 가져오기 (기본값: 1)
  const currentStep = parseInt(searchParams.get("step") || "1", 10);

  // 유효하지 않은 step 값 처리
  useEffect(() => {
    if (currentStep < 1 || currentStep > 4) {
      router.replace("/register?step=1");
    }
  }, [currentStep, router]);

  const navigateToStep = (step: number) => {
    router.push(`/register?step=${step}`);
  };

  const handleCancel = () => {
    router.push("/");
  };

  const handleStep1Next = () => {
    navigateToStep(2);
  };

  const handleStep2Next = (type: "hacker" | "company") => {
    setAccountType(type);
    navigateToStep(3);
  };

  const handleStep3Next = (data: typeof formData) => {
    setFormData(data);
    navigateToStep(4);
  };

  const handleMyPage = () => {
    router.push(`/mypage?type=${accountType}`);
  };

  const progressLabels = ["약관동의", "계정 설정", "기본 정보"];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-[150px]">
      <div className="flex flex-col items-center gap-10">
        {currentStep !== 4 && (
          <>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-center text-[32px] leading-[160%] font-[700] text-black">
                파인더릭에 오신 것을 환영합니다!
              </h1>
              <h2 className="text-center text-xl leading-[160%] font-[400] text-[#3C4043]">
                회원가입
              </h2>
            </div>
            <ProgressBar currentStep={currentStep} labels={progressLabels} />
          </>
        )}

        <div className="flex flex-col items-center">
          {currentStep === 1 && (
            <Step1Terms onNext={handleStep1Next} onCancel={handleCancel} />
          )}
          {currentStep === 2 && <Step2AccountType onNext={handleStep2Next} />}
          {currentStep === 3 && (
            <Step3BasicInfo
              accountType={accountType}
              formData={formData}
              onNext={handleStep3Next}
              onCancel={handleCancel}
            />
          )}
          {currentStep === 4 && (
            <Step4Complete
              nickname={formData.nickname}
              onMyPage={handleMyPage}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
