import { ReactNode } from "react";
import ImageWrapper from "../basic/ImageWrapper";

export default function HomeButton({
  onClick,
  value,
  children,
}: {
  onClick: () => void;
  value: string;
  children: ReactNode;
}) {
  return (
    <button
      className="border  flex items-center gap-[1.62rem] w-full py-[1.12rem] px-[1.44rem] border-lightGreen rounded-[0.625rem]"
      onClick={onClick}
    >
      <ImageWrapper>{children}</ImageWrapper>
      <span className="text-Bold16 iPhone12Pro:text-Bold21 iPhone14ProMax:text-Bold28">
        {value}
      </span>
    </button>
  );
}
