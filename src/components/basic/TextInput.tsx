import { forwardRef } from "react";
import { textInputProps } from "@src/types/basic/textInput.type";

const TextInput = forwardRef<HTMLInputElement, textInputProps>(
  (option, ref) => {
    const {
      placeholder,
      onChange,
      onClick,
      value,
      className,
      type,
      readOnly,
      onKeyDown,
    } = option;

    return (
      <input
        ref={ref}
        className={`
          bg-white w-full py-[0.625rem] px-[0.9375rem] text-[1.125rem] not-italic font-normal leading-normal text-busBlack
          ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type || "text"}
        readOnly={readOnly}
        onClick={onClick}
      />
    );
  }
);

export default TextInput;
