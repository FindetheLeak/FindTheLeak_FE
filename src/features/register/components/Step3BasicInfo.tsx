"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";

interface Step3BasicInfoProps {
  accountType: "hacker" | "company" | null;
  formData: {
    nickname: string;
    year: string;
    month: string;
    day: string;
    country: string;
    email: string;
    githubId: string;
  };
  onNext: (data: Step3BasicInfoProps["formData"]) => void;
  onCancel: () => void;
}

export default function Step3BasicInfo({
  accountType,
  formData: initialFormData,
  onNext,
  onCancel,
}: Step3BasicInfoProps) {
  const [nickname, setNickname] = useState(initialFormData.nickname);
  const [year, setYear] = useState(initialFormData.year);
  const [month, setMonth] = useState(initialFormData.month);
  const [day, setDay] = useState(initialFormData.day);
  const [country, setCountry] = useState(initialFormData.country);
  const [email, setEmail] = useState(initialFormData.email);
  const [githubId, setGithubId] = useState(initialFormData.githubId);

  const isNextEnabled =
    accountType === "hacker"
      ? nickname.trim() !== "" && year && month && day
      : nickname.trim() !== "";

  const handleNext = () => {
    if (isNextEnabled) {
      onNext({
        nickname,
        year,
        month,
        day,
        country,
        email,
        githubId,
      });
    }
  };

  // 드롭다운 옵션
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const countries = ["South Korea", "United States", "Japan", "China", "Other"];

  // 계정 타입에 따른 텍스트
  const nicknameLabel = accountType === "hacker" ? "닉네임" : "기업명";
  const nicknamePlaceholder =
    accountType === "hacker"
      ? "영문, 한글 최대 16글자"
      : "기업명을 입력해주세요";

  const nicknameDescription =
    accountType === "hacker"
      ? "보고서, 랭킹 등 외부 표기에 사용되며 닉네임 으로 url이 설정 됩니다."
      : "기업 프로필 및 외부 표기에 사용되며 기업명 으로 url이 설정 됩니다.";

  const emailDescription =
    accountType === "hacker"
      ? "취약점 제보 후 검토 결과 및 포상 안내를 위한 연락처 입니다.\n인증 목적이 아니므로 선택적으로 입력하셔도 좋습니다."
      : "버그 바운티 프로그램 운영 및 해커와의 소통을 위한 연락처입니다.\n인증 목적이 아니므로 선택적으로 입력하셔도 좋습니다.";

  const githubDescription =
    accountType === "hacker"
      ? "GitHub 프로필의 보안 활동 이력을 바탕으로 신뢰도를 평가합니다. 입력하지 않으셔도 제보는 가능합니다."
      : "기업의 공식 GitHub 계정을 입력해주세요. 입력하지 않으셔도 프로그램 운영은 가능합니다.";

  return (
    <div className="flex w-[400px] flex-col items-start gap-20">
      <div className="flex flex-col items-start gap-10 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex items-start gap-1 self-stretch">
              <span className="text-sm leading-[160%] text-[#80868B]">
                {nicknameLabel}
              </span>
              <span className="text-sm leading-[160%] text-[#3B82F6]">*</span>
            </div>
            <Input
              placeholder={nicknamePlaceholder}
              value={nickname}
              onChange={setNickname}
            />
          </div>
          <p className="self-stretch text-sm leading-[160%] text-[#80868B]">
            {nicknameDescription}
          </p>
        </div>

        {accountType === "hacker" && (
          <>
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="flex items-start gap-1 self-stretch">
                  <span className="text-sm leading-[160%] text-[#80868B]">
                    생년월일
                  </span>
                  <span className="text-sm leading-[160%] text-[#3B82F6]">
                    *
                  </span>
                </div>
                <div className="flex items-start gap-2 self-stretch">
                  <Dropdown
                    placeholder="년"
                    value={year}
                    onChange={setYear}
                    options={years}
                    className="flex-1"
                  />
                  <Dropdown
                    placeholder="월"
                    value={month}
                    onChange={setMonth}
                    options={months}
                    className="flex-1"
                  />
                  <Dropdown
                    placeholder="일"
                    value={day}
                    onChange={setDay}
                    options={days}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 self-stretch">
              <span className="self-stretch text-sm leading-[160%] text-[#80868B]">
                국가
              </span>
              <Dropdown
                placeholder="국가 선택"
                value={country}
                onChange={setCountry}
                options={countries}
              />
            </div>
          </>
        )}

        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <span className="self-stretch text-sm leading-[160%] text-[#80868B]">
              이메일
            </span>
            <Input
              placeholder="example@gmail.com"
              value={email}
              onChange={setEmail}
            />
          </div>
          <p className="self-stretch text-sm leading-[160%] whitespace-pre-line text-[#80868B]">
            {emailDescription}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <span className="self-stretch text-sm leading-[160%] text-[#80868B]">
              Github ID
            </span>
            <Input
              prefix="github.com/"
              placeholder="example"
              value={githubId}
              onChange={setGithubId}
            />
          </div>
          <p className="self-stretch text-sm leading-[160%] text-[#80868B]">
            {githubDescription}
          </p>
        </div>
      </div>

      <div className="flex h-14 items-start justify-between self-stretch">
        <Button variant="secondary" onClick={onCancel}>
          취소
        </Button>
        <Button
          variant={isNextEnabled ? "primary" : "disabled"}
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
