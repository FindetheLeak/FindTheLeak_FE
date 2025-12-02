interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  prefix?: string;
  size?: "default" | "small";
}

export default function Input({
  placeholder,
  value,
  onChange,
  prefix,
  size = "default",
}: InputProps) {
  const heightClass = size === "small" ? "h-[24px]" : "h-[49px]";

  return (
    <div
      className={`flex ${heightClass} w-full items-center gap-2 rounded-lg border border-[#BDC1C6] bg-[#E1E3E7] px-4 py-3`}
    >
      {prefix && (
        <span className="text-sm leading-[160%] text-black">{prefix}</span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent text-sm leading-[160%] text-black outline-none placeholder:text-[#80868B]"
      />
    </div>
  );
}
