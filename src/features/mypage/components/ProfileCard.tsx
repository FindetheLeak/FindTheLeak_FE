"use client";

import { useState } from "react";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface ProfileCardProps {
  isEditing: boolean;
  onEdit: () => void;
}

export default function ProfileCard({ isEditing, onEdit }: ProfileCardProps) {
  const [bio, setBio] = useState("자기소개를 입력해주세요.");
  const [email, setEmail] = useState("goodtony12@naver.com");
  const [github, setGithub] = useState("dasosann");
  const [accountNumber, setAccountNumber] = useState("계좌번호를 입력해주세요");
  const [bankName, setBankName] = useState("**은행");

  const handleSave = () => {
    console.log("Saving:", { bio, email, github, accountNumber, bankName });
    onEdit();
  };

  const handleCancel = () => {
    setBio(
      "자기 소개를 수정해주세요."
    );
    setEmail("example@gmail.com");
    setGithub("example");
    setAccountNumber("**********0369");
    setBankName("국민은행");
    onEdit();
  };

  return (
    <div className="flex h-[288px] w-[671px] flex-col items-center justify-center gap-2.5 rounded-2xl bg-white p-6 pl-10">
      <div className="flex flex-1 items-start justify-between self-stretch">
        <div className="flex items-stretch gap-10 self-stretch">
          <div className="h-52 w-52 overflow-hidden rounded-full bg-[#DADCE0]">
            <Image
              src="/logo.svg"
              alt="User Avatar"
              width={208}
              height={208}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-[194px] w-60 flex-col items-start justify-center gap-6">
            <div className="flex flex-col items-start justify-center gap-6 self-stretch">
              <div className="flex w-28 flex-col items-start gap-2">
                <span className="self-stretch text-base leading-[100%] text-[#9AA0A6]">
                  윤리적 해커
                </span>
                <div className="flex items-center gap-[5px] self-stretch">
                  <span className="text-2xl leading-[100%] font-[700] text-black">
                    다소산
                  </span>
                  <span className="text-2xl leading-[100%] font-[700] text-black">
                    님
                  </span>
                </div>
              </div>
              {isEditing ? (
                <Input
                  size="small"
                  placeholder="자기소개를 입력하세요"
                  value={bio}
                  onChange={setBio}
                />
              ) : (
                <p className="h-[34px] self-stretch overflow-hidden text-xs leading-[140%] text-ellipsis whitespace-nowrap text-[#3C4043]">
                  {bio}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start justify-end gap-2 self-stretch">
              <div className="flex w-full items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z"
                    fill="#5F6368"
                  />
                </svg>
                {isEditing ? (
                  <div className="flex-1">
                    <Input
                      size="small"
                      placeholder="이메일"
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                ) : (
                  <span className="text-xs leading-[100%] text-[#5F6368]">
                    {email}
                  </span>
                )}
              </div>
              <div className="flex w-full items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.33857 1.33334C4.83351 1.33334 2 4.2361 2 7.82722C2 10.6978 3.81552 13.1277 6.33414 13.9877C6.64903 14.0523 6.76438 13.8479 6.76438 13.676C6.76438 13.5255 6.754 13.0094 6.754 12.4718C4.99076 12.8589 4.62358 11.6977 4.62358 11.6977C4.34021 10.9451 3.92036 10.7516 3.92036 10.7516C3.34325 10.3538 3.9624 10.3538 3.9624 10.3538C4.60256 10.3968 4.93847 11.0204 4.93847 11.0204C5.50507 12.0094 6.41809 11.73 6.78539 11.5579C6.83781 11.1386 7.00583 10.8483 7.18423 10.6871C5.77792 10.5366 4.29831 9.97751 4.29831 7.48311C4.29831 6.77351 4.55001 6.19296 4.94885 5.74145C4.88592 5.58021 4.66549 4.9135 5.01191 4.02117C5.01191 4.02117 5.54711 3.84911 6.75387 4.68775C7.27052 4.5456 7.80334 4.47329 8.33857 4.47268C8.87377 4.47268 9.41935 4.54802 9.92315 4.68775C11.13 3.84911 11.6652 4.02117 11.6652 4.02117C12.0117 4.9135 11.7911 5.58021 11.7282 5.74145C12.1375 6.19296 12.3788 6.77351 12.3788 7.48311C12.3788 9.97751 10.8992 10.5257 9.48241 10.6871C9.71335 10.8914 9.91264 11.2783 9.91264 11.8912C9.91264 12.7621 9.90226 13.461 9.90226 13.6759C9.90226 13.8479 10.0177 14.0523 10.3325 13.9878C12.8511 13.1275 14.6666 10.6978 14.6666 7.82722C14.677 4.2361 11.8331 1.33334 8.33857 1.33334Z"
                    fill="#5F6368"
                  />
                </svg>
                {isEditing ? (
                  <div className="flex-1">
                    <Input
                      size="small"
                      prefix="github.com/"
                      placeholder="username"
                      value={github}
                      onChange={setGithub}
                    />
                  </div>
                ) : (
                  <span className="text-xs leading-[100%] text-[#5F6368]">
                    github.com/{github}
                  </span>
                )}
              </div>
              <div className="flex w-full items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M15.265 3.75C15.193 3.70507 15.1108 3.67921 15.026 3.67483C14.9413 3.67046 14.8569 3.68772 14.7806 3.725C12.0975 5.0375 10.1813 4.4225 8.15563 3.77375C6.025 3.09562 3.825 2.3925 0.780625 3.87875C0.696548 3.9198 0.625676 3.98362 0.576067 4.06295C0.526458 4.14228 0.500104 4.23394 0.5 4.3275V11.8231C0.499988 11.908 0.521562 11.9914 0.56269 12.0656C0.603819 12.1398 0.66315 12.2023 0.7351 12.2473C0.80705 12.2922 0.889253 12.3181 0.973972 12.3225C1.05869 12.3269 1.14314 12.3097 1.21938 12.2725C3.9025 10.96 5.81875 11.575 7.8475 12.2237C9.05 12.6081 10.275 13 11.66 13C12.7281 13 13.8931 12.7675 15.2169 12.1212C15.301 12.0802 15.3718 12.0164 15.4214 11.937C15.471 11.8577 15.4974 11.7661 15.4975 11.6725V4.17687C15.4983 4.09182 15.4773 4.00798 15.4366 3.93328C15.3959 3.85859 15.3369 3.7955 15.265 3.75ZM3 9.5C3 9.63261 2.94732 9.75979 2.85355 9.85355C2.75979 9.94732 2.63261 10 2.5 10C2.36739 10 2.24021 9.94732 2.14645 9.85355C2.05268 9.75979 2 9.63261 2 9.5V5.5C2 5.36739 2.05268 5.24021 2.14645 5.14645C2.24021 5.05268 2.36739 5 2.5 5C2.63261 5 2.75979 5.05268 2.85355 5.14645C2.94732 5.24021 3 5.36739 3 5.5V9.5ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00087 8.39991 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39991 6.00086 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10ZM14 10.5C14 10.6326 13.9473 10.7598 13.8536 10.8536C13.7598 10.9473 13.6326 11 13.5 11C13.3674 11 13.2402 10.9473 13.1464 10.8536C13.0527 10.7598 13 10.6326 13 10.5V6.5C13 6.36739 13.0527 6.24021 13.1464 6.14645C13.2402 6.05268 13.3674 6 13.5 6C13.6326 6 13.7598 6.05268 13.8536 6.14645C13.9473 6.24021 14 6.36739 14 6.5V10.5Z"
                    fill="#5F6368"
                  />
                </svg>
                {isEditing ? (
                  <div className="flex flex-1 gap-2">
                    <Input
                      size="small"
                      placeholder="계좌번호"
                      value={accountNumber}
                      onChange={setAccountNumber}
                    />
                    <Input
                      size="small"
                      placeholder="은행명"
                      value={bankName}
                      onChange={setBankName}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xs leading-[100%] text-[#5F6368]">
                      {accountNumber}
                    </span>
                    <span className="text-xs leading-[100%] text-[#5F6368]">
                      {bankName}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={isEditing ? handleSave : onEdit}
          className="flex h-9 items-center justify-center gap-2 rounded-2xl border border-[#DADCE0] bg-white px-4"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5863 3.85765L10.1423 1.41421C9.93724 1.20917 9.65909 1.09398 9.36907 1.09398C9.07904 1.09398 8.80089 1.20917 8.59578 1.41421L1.85172 8.15773C1.74981 8.25902 1.66901 8.37952 1.614 8.51226C1.55899 8.64499 1.53086 8.78733 1.53125 8.93101V11.375C1.53125 11.6651 1.64649 11.9433 1.85161 12.1484C2.05672 12.3535 2.33492 12.4687 2.625 12.4687H11.8125C11.9866 12.4687 12.1535 12.3996 12.2765 12.2765C12.3996 12.1535 12.4688 11.9865 12.4688 11.8125C12.4688 11.6384 12.3996 11.4715 12.2765 11.3485C12.1535 11.2254 11.9866 11.1562 11.8125 11.1562H6.83594L12.5863 5.40476C12.6879 5.30319 12.7685 5.1826 12.8235 5.04987C12.8785 4.91714 12.9068 4.77488 12.9068 4.63121C12.9068 4.48754 12.8785 4.34527 12.8235 4.21254C12.7685 4.07981 12.6879 3.95922 12.5863 3.85765ZM4.97657 11.1562H2.84375V9.02343L7.4375 4.42968L9.57032 6.56249L4.97657 11.1562ZM10.5 5.63281L8.36719 3.49999L9.37016 2.49703L11.503 4.62984L10.5 5.63281Z"
              fill="#5F6368"
            />
          </svg>
          <div className="flex items-center gap-5">
            <span className="text-center text-sm leading-[140%] text-[#5F6368]">
              {isEditing ? "완료" : "편집"}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
