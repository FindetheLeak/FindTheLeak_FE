interface DropdownProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  options?: string[];
}

export default function Dropdown({
  value,
  placeholder,
  onChange,
  className = "",
  options = [],
}: DropdownProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className={`h-[49px] w-full appearance-none rounded-lg border border-[#BDC1C6] bg-[#E1E3E7] px-4 py-3 pr-10 text-sm leading-[160%] text-black ${
          !value ? "text-gray-400" : ""
        }`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute top-1/2 right-4 h-3 w-3 -translate-y-1/2 fill-black"
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.19629 9L0.000137329 0H10.3924L5.19629 9Z" fill="black" />
      </svg>
    </div>
  );
}
