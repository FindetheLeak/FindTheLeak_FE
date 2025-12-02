import Image from "next/image";
import Link from "next/link";

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
          <Link
            key={provider.id}
            href="/onboarding"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
