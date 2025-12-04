"use client";

import Button from "@/components/ui/Button";

interface Step4CompleteProps {
  nickname: string;
  onMyPage: () => void;
}

export default function Step4Complete({
  nickname,
  onMyPage,
}: Step4CompleteProps) {
  return (
    <div className="flex w-[444px] flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4 self-stretch">
        <div className="flex flex-col items-center gap-10 self-stretch">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center text-[32px] leading-[160%] text-black">
              파인더릭에 오신 것을 환영합니다!
            </h1>
            <h2 className="text-center text-xl leading-[160%] text-[#3C4043]">
              가입 완료
            </h2>
          </div>

          <div className="flex w-[241.5px] flex-col items-start gap-2">
            <div className="relative h-10 self-stretch">
              <div className="absolute top-0 left-[101px] flex aspect-square h-10 w-10 flex-col items-center justify-center gap-[13.333px] rounded-full bg-[#3B82F6]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square h-6 w-6 shrink-0"
                >
                  <path
                    d="M21.7959 7.54597L9.7959 19.546C9.69138 19.6509 9.56719 19.7341 9.43044 19.7909C9.2937 19.8476 9.14709 19.8769 8.99902 19.8769C8.85096 19.8769 8.70435 19.8476 8.5676 19.7909C8.43085 19.7341 8.30666 19.6509 8.20215 19.546L2.95215 14.296C2.8475 14.1913 2.76449 14.0671 2.70785 13.9304C2.65122 13.7936 2.62207 13.6471 2.62207 13.4991C2.62207 13.3511 2.65122 13.2046 2.70785 13.0678C2.76449 12.9311 2.8475 12.8069 2.95215 12.7022C3.05679 12.5976 3.18103 12.5146 3.31776 12.4579C3.45448 12.4013 3.60103 12.3721 3.74902 12.3721C3.89702 12.3721 4.04356 12.4013 4.18029 12.4579C4.31702 12.5146 4.44125 12.5976 4.5459 12.7022L8.99996 17.1563L20.204 5.9541C20.4154 5.74276 20.702 5.62402 21.0009 5.62402C21.2998 5.62402 21.5864 5.74276 21.7978 5.9541C22.0091 6.16544 22.1278 6.45209 22.1278 6.75098C22.1278 7.04986 22.0091 7.33651 21.7978 7.54785L21.7959 7.54597Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-center text-xl leading-[160%] text-[#3C4043]">
            <span className="text-[#3B82F6]">{nickname}</span> 님 환영합니다!
          </p>
          <p className="text-center text-sm leading-[160%] text-[#3C4043]">
            모든 설정이 완료되었어요.
            <br />
            파인더릭과 함께 보안전문가로 성장하세요!
          </p>
        </div>
      </div>

      <Button variant="primary" onClick={onMyPage} className="w-[400px]">
        마이페이지로 가기
      </Button>
    </div>
  );
}
