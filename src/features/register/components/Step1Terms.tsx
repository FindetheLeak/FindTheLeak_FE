"use client";

import { useState } from "react";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";

interface Step1TermsProps {
  onNext: () => void;
  onCancel: () => void;
}

const TERMS_LIST = [
  {
    id: "terms",
    label: "파인더릭 이용약관",
    required: true,
  },
  {
    id: "privacy",
    label: "개인정보 수집 및 이용",
    required: true,
  },
] as const;

export default function Step1Terms({ onNext, onCancel }: Step1TermsProps) {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState<Record<string, boolean>>({
    terms: false,
    privacy: false,
  });

  const handleAllAgree = (checked: boolean) => {
    setAllAgreed(checked);
    setAgreements({
      terms: checked,
      privacy: checked,
    });
  };

  const handleIndividualChange = (id: string, checked: boolean) => {
    const newAgreements = { ...agreements, [id]: checked };
    setAgreements(newAgreements);

    const allChecked = Object.values(newAgreements).every((value) => value);
    setAllAgreed(allChecked);
  };

  const isNextEnabled = agreements.terms && agreements.privacy;

  return (
    <div className="flex w-[400px] flex-col items-start gap-6 pb-10">
      <div className="flex flex-col items-start gap-[33px] self-stretch py-8">
        <div className="flex flex-col items-start gap-[42px] self-stretch">
          <div className="flex items-end gap-6">
            <Checkbox checked={allAgreed} onChange={handleAllAgree} />
            <span className="text-base leading-[140%] text-black">
              이용약관, 개인정보 취급방침에 모두 동의합니다.
            </span>
          </div>

          {TERMS_LIST.map((term) => (
            <div key={term.id} className="flex items-end gap-6">
              <Checkbox
                checked={agreements[term.id]}
                onChange={(checked) => handleIndividualChange(term.id, checked)}
              />
              <div className="flex items-center gap-2">
                <span className="text-base leading-[140%] text-black font-[400]">
                  <span className="underline">{term.label}</span> 동의
                </span>
                {term.required && (
                  <span className="text-xs leading-[140%] text-[#FE5D9F]">
                    필수
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between self-stretch">
        <Button variant="secondary" onClick={onCancel}>
          취소
        </Button>
        <Button
          variant={isNextEnabled ? "primary" : "disabled"}
          onClick={isNextEnabled ? onNext : undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
