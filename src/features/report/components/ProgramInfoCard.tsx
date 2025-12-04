import Image from "next/image";

export default function ProgramInfoCard() {
  return (
    <div className="flex h-[190px] w-full flex-col items-start gap-4 rounded-2xl border border-[#DADCE0] bg-white p-[25px] pb-[1px] shadow-sm md:p-4">
      <div className="flex h-[82px] w-full items-start gap-4">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/955646c14b58cfe7436a21b46e2902e39027cc95?width=128"
          alt="Program Logo"
          width={64}
          height={64}
          className="h-16 w-16 rounded-[10px] border border-[#E8EAED]"
        />
        <div className="flex flex-1 flex-col items-start gap-1">
          <h2 className="text-base leading-6 text-[#0A0A0A]">
            ABC Corporation Bug Bounty Program
          </h2>
          <p className="text-sm leading-5 text-[#5F6368]">
            제니안스의 NAC 제품군 및 웹 서비스에 대한 보안 취약점을
            제보해주세요.
          </p>
          <div className="flex items-start gap-2">
            <span className="flex h-[22px] items-center justify-center gap-1 rounded-lg border border-[#BDC1C6] bg-[#E8EAED] px-2 py-0.5 text-xs leading-4 text-[#0A0A0A]">
              웹 서비스
            </span>
            <span className="flex h-[22px] items-center justify-center gap-1 rounded-lg border border-[#BDC1C6] bg-[#E8EAED] px-2 py-0.5 text-xs leading-4 text-[#0A0A0A]">
              API
            </span>
            <span className="flex h-[22px] items-center justify-center gap-1 rounded-lg border border-[#BDC1C6] bg-[#E8EAED] px-2 py-0.5 text-xs leading-4 text-[#0A0A0A]">
              온프레미스 제품
            </span>
          </div>
        </div>
      </div>
      <div className="flex h-[42px] w-full flex-col items-start rounded-[10px] border border-[#BEDBFF] bg-[#EFF6FF] p-[13px] pb-[1px]">
        <p className="text-xs leading-4 text-[#1447E6]">
          이 페이지는 챗봇과의 대화가 끝난 후 자동 생성된 리포트 초안을
          검토·수정하는 화면입니다.
        </p>
      </div>
    </div>
  );
}
