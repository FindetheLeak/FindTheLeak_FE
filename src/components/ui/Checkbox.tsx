interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({ checked = false, onChange }: CheckboxProps) {
  return (
    <div
      className="aspect-square h-6 w-6 cursor-pointer rounded border border-[#DADCE0] bg-white"
      onClick={() => onChange?.(!checked)}
    >
      {checked && (
        <div className="flex h-full w-full items-center justify-center text-[#3B82F6]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 4L6 11.3333L2.66667 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
