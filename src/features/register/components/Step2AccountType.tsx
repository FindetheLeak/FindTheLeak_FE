"use client";

import { useState } from "react";
import AccountTypeCard from "@/features/register/components/AccountTypeCard";

interface Step2AccountTypeProps {
  onNext: (type: "hacker" | "company") => void;
}

const ACCOUNT_TYPES = [
  {
    type: "hacker" as const,
    title: "화이트 해커",
    description: "내 보안 기술로 더 안전한\n인터넷을 만들고 싶어요",
  },
  {
    type: "company" as const,
    title: "기업",
    description:
      "취약점을 발견한 해커에게 보상하여\n우리 회사의 보안을 지키고 싶어요",
  },
] as const;

export default function Step2AccountType({ onNext }: Step2AccountTypeProps) {
  const [selectedType, setSelectedType] = useState<"hacker" | "company" | null>(
    null
  );

  const handleSelect = (type: "hacker" | "company") => {
    setSelectedType(type);
    setTimeout(() => {
      onNext(type);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center gap-[64px]">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-center text-xl leading-[160%] text-[#3C4043]">
          어떤 목적으로 찾아오셨나요?
        </h2>
      </div>

      <div className="flex items-start gap-8">
        {ACCOUNT_TYPES.map((accountType) => (
          <AccountTypeCard
            key={accountType.type}
            type={accountType.type}
            title={accountType.title}
            description={accountType.description}
            isSelected={selectedType === accountType.type}
            onClick={() => handleSelect(accountType.type)}
          />
        ))}
      </div>
    </div>
  );
}
