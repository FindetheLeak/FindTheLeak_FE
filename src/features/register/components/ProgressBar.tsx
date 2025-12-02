interface ProgressBarProps {
  currentStep: number;
  labels: string[];
}

export default function ProgressBar({ currentStep, labels }: ProgressBarProps) {
  return (
    <div className="relative h-11 w-[271px]">
      <div className="absolute top-0 left-[14px] flex h-4 w-[242px] items-center gap-1">
        {[1, 2, 3].map((step, index) => (
          <>
            <div
              key={step}
              className={`flex h-4 w-4 shrink-0 flex-col items-center justify-center gap-[13.333px] rounded-lg px-1 py-[2.667px] ${
                currentStep >= step ? "bg-[#3B82F6]" : "bg-[#DADCE0]"
              }`}
            >
              <span
                className={`h-2 w-[5.333px] shrink-0 text-center text-[8px] leading-[100%] font-bold ${
                  currentStep >= step ? "text-white" : "text-[#9AA0A6]"
                }`}
                style={{ fontFamily: "Pretendard, sans-serif" }}
              >
                {step}
              </span>
            </div>
            {index < 2 && (
              <div
                className={`h-[2.667px] flex-1 rounded-[5.333px] ${
                  currentStep > step ? "bg-[#3B82F6]" : "bg-[#DADCE0]"
                }`}
              />
            )}
          </>
        ))}
      </div>
      {labels.map((label, index) => (
        <span
          key={index}
          className={`absolute top-8 h-3 text-center text-xs leading-[100%] whitespace-nowrap ${
            currentStep === index + 1 ? "text-black" : "text-[#BDC1C6]"
          }`}
          style={{
            left: index === 0 ? "0px" : index === 1 ? "111px" : "224px",
            width: index === 1 ? "47px" : "44px",
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
