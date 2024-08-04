import { textInputProps } from "@src/types/basic/textInput.type";

export default function TextInput(option: textInputProps) {
  const { placeholder, onChange, onClick, value, className, type, readOnly } =
    option;
  return (
    <input
      className={`
        bg-white w-full py-[0.625rem] px-[0.9375rem] text-[1.125rem] not-italic font-normal leading-normal text-busBlack
        ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type || "text"}
      readOnly={readOnly}
      onClick={onClick}
    />
  );
}
