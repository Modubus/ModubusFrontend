import { ReactNode } from "react";

export default function ImageWrapper({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
