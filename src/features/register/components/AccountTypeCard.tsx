interface AccountTypeCardProps {
  type: "hacker" | "company";
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function AccountTypeCard({
  type,
  title,
  description,
  isSelected,
  onClick,
}: AccountTypeCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[180px] w-[260px] flex-col items-center justify-center gap-2.5 rounded-2xl border px-[26px] py-[52px] transition-all ${
        isSelected
          ? "border-[#3B82F6] bg-[#3B82F6]/5"
          : "border-[#DADCE0] bg-white hover:border-[#3B82F6]/50"
      }`}
    >
      <div className="flex w-[207px] flex-col items-center gap-4">
        <span className="self-stretch text-center text-xl leading-normal font-[400] text-[#3B82F6] font-[400]">
          {title}
        </span>
        <p className="self-stretch text-center text-xs leading-[160%] whitespace-pre-line text-[#80868B] font-[400]">
          {description}
        </p>
      </div>
    </button>
  );
}
