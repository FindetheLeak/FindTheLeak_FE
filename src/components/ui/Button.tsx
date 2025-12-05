interface ButtonProps {
  variant: "primary" | "secondary" | "disabled";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  variant,
  children,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "box-sizing:border-box flex h-14 w-[100px] flex-col items-center justify-center gap-2.5 rounded-2xl py-4";

  const variantStyles = {
    primary: "border border-white/30 bg-[#3B82F6] text-white",
    secondary: "border border-[#DADCE0] bg-white text-[#80868B]",
    disabled: "border border-[#BDC1C6] bg-[#BDC1C6] text-[#9AA0A6]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={variant === "disabled"}
    >
      <div className="flex items-center gap-5">
        <span className="text-center text-lg leading-[140%]">{children}</span>
      </div>
    </button>
  );
}
