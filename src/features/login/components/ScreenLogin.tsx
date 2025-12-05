"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LOGIN_PROVIDERS = [
  {
    id: "google",
    name: "구글로 시작하기",
    icon: "/google.svg",
    bgColor: "#FFFFFF",
    textColor: "#797479",
  },
  {
    id: "github",
    name: "깃허브로 시작하기",
    icon: "/github.svg",
    bgColor: "#2B3137",
    textColor: "#FFFFFF",
  },
] as const;

export default function ScreenLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (providerId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/register");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E8EAED] border-t-[#3B82F6]"></div>
          <span className="text-[16px] text-[#5F6368]">로그인 중...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <span className="text-[32px] font-[400] text-[#5F6368]">
        누구나 하는 버그 바운티
      </span>
      <Image width={323} height={45} src="/logo.svg" alt="FindtheLeaks" />
      <span className="mt-20 mb-8 text-[24px] font-[400] text-[#5F6368]">
        간편 로그인으로 빠르게 시작하세요
      </span>
      <div className="flex flex-col gap-5">
        {LOGIN_PROVIDERS.map((provider) => (
          <button
            key={provider.id}
<<<<<<< Updated upstream
            href="/onboarding"
=======
            onClick={() => handleLogin(provider.id)}
>>>>>>> Stashed changes
            className="flex h-[56px] w-[400px] items-center justify-center gap-5 rounded-[16px] border border-[#DADCE0]"
            style={{
              backgroundColor: provider.bgColor,
              color: provider.textColor,
            }}
          >
            <Image
              width={20}
              height={20}
              src={provider.icon}
              alt={provider.id}
            />
            {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
}
