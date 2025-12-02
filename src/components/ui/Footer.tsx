export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-5 py-10">
      <div className="flex items-center">
        <span className="text-sm leading-[140%] text-[#5F6368]">Terms</span>
        <div className="flex h-4 w-[33px] items-start px-4">
          <div className="h-4 w-px shrink-0 bg-[#BDC1C6]"></div>
        </div>
        <span className="text-sm leading-[140%] text-[#5F6368]">
          Privacy Policy
        </span>
      </div>
      <p className="w-full text-center text-[10px] leading-[140%] text-[#9AA0A6]">
        Copyright FindtheLeaks, CUK. All rights reserved.
      </p>
    </footer>
  );
}
